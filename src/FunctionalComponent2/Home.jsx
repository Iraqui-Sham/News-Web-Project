import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsData from './NewsData'
import { useLocation } from 'react-router-dom';


export default function Home({language}) {            // destructure hua hai props ko language me because only laguage aa rha hai

  let [articles, setArticles] = useState([])
  let [totalResults, setTotalResults] = useState(0)
  let [page, setPage] = useState(1)
  let [q, setQ] = useState("")

  let search = useLocation().search

  async function getApiData(q) {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q ? q : "All"}&pageSize=24&sortBy=publishedAt&language=${language}&apiKey=3b9f455598c449f19fc79d480c7a3277`)
    response = await response.json()
    if (response.articles) {
      setArticles(response.articles.filter((x) => x.title !== "[Removed]"))
      setTotalResults(response.totalResults)
    }
  }

  async function fetchData() {
    setPage(page + 1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q ? q : "All"}&pageSize=24&page=${page}&sortBy=publishedAt&language=${language}&apiKey=3b9f455598c449f19fc79d480c7a3277`)
    response = await response.json()
    if (response.articles) {
      setArticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))
    }
  }

  useEffect(() => {
    let query = new URLSearchParams(search)
    getApiData(query.get("q"))          // getAPIData(q) me use ho rha hai
    setQ(query.get("q"))                // fetchData ke liye dono me state data use nhi kiye because getAPIData me parameter aur state udpadate dono ek sath ho raha hai.
  }, [language, search])       // ya to language change hp jaye ya fir search params old case- [props, search] aur (props) means props me language aa raha tha to distructure kar diya gya direct (language) me aur props ke language direct use ho gya readability ke liye.

  return (
    <>
      <div className="container-fluid my-1">
        <h6 className="bg-success text-center text-light p-2 my-1 text-capitalize">{q ? q : "All"} News Articles</h6>
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={<div className='my-5 text-center'>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>}
        >
          <div className="row">
            {
              articles.map((item, index) => {
                return <NewsData key={index}
                  source={item.source.name}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage}
                  publishedAt={item.publishedAt}
                />
              })
            }
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

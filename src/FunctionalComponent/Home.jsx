import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsData from './NewsData'


export default function Home(props) {

  let [articles, setArticles] = useState([])
  let [totalResults, setTotalResults] = useState(0)
  let [page, setPage] = useState(1)

  async function getApiData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&pageSize=24&sortBy=publishedAt&language=${props.language}&apiKey=3a03ccc2983642b3a1f099d646751ce1`)
    response = await response.json()
    if (response.articles) {
      setArticles(response.articles.filter((x) => x.title !== "[Removed]"))
      setTotalResults(response.totalResults)
    }
  }

  async function fetchData() {
    setPage(page + 1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&pageSize=24&page=${page}&sortBy=publishedAt&language=${props.language}&apiKey=3a03ccc2983642b3a1f099d646751ce1`)
    response = await response.json()
    if (response.articles) {
      setArticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))
    }
  }

  useEffect(() => {
    getApiData()
  }, [props])

  return (
    <>
      <div className="container-fluid my-1">
        <h6 className="bg-success text-center text-light p-2 my-1 text-capitalize">{props.search ? props.search : props.q} News Articles</h6>
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

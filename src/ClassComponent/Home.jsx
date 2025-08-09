import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsData from './NewsData'


export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      articles: [],
      totalRisults: 0,
      page: 1
    }
  }

  async getApiData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&pageSize=12&sortBy=publishedAt&language=${this.props.language}&apiKey=3a03ccc2983642b3a1f099d646751ce1`)
    response = await response.json()
    if (response.articles)
      this.setState({
        articles: response.articles.filter((x) => x.title !== "[Removed]"),
        totalRisults: response.totalResults
      })
  }

  fetchData = async () => {
    this.setState({ page: this.state.page + 1 })
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search ? this.props.search : this.props.q}&pageSize=12&page=${this.state.page}&sortBy=publishedAt&language=${this.props.language}&apiKey=3a03ccc2983642b3a1f099d646751ce1`)
    response = await response.json()
    if (response.articles)
      this.setState({ articles: this.state.articles.concat(response.articles.filter((x) => x.title !== "[Removed]")) })
  }


  componentDidMount() {
    this.getApiData()
  }

  componentDidUpdate(oldProps) {
    if (oldProps !== this.props)
      this.getApiData()
  }

  render() {
    return (
      <>
        <div className="container-fluid my-1">
          <h6 className="bg-success text-center text-light p-2 my-1 text-capitalize">{this.props.search ? this.props.search : this.props.q} News Articles</h6>
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length < this.state.totalRisults}
            loader={<div className='my-5 text-center'>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>}
          >
            <div className="row">
              {
                this.state.articles.map((item, index) => {
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
}

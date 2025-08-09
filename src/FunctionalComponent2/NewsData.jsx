import React from 'react'

export default function NewsData(props) {
    return (
        <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
            <div className="card">
                <img src={props.pic ? props.pic : "/Images/noimage.png"} height={200} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div className='source-date-container'>
                        <p>{props.source}</p>
                        <p>{new Date(props.publishedAt).toLocaleDateString()}</p>
                    </div>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} target='_blank' rel="noreferrer" className="btn btn-success w-100">Read Full Article</a>
                </div>
            </div>
        </div>
    )
}


import React from 'react'

export default function NewCard({news}) {
    return (
        <div className='card'>
            <div>
                <img src={news.urlToImage} alt="newspic" />
                <p>{news.title}</p>
                <a href={news.url} target="_blank" rel="noreferrer">To the article</a>
                <p>Source: {news.source.name}</p>
            </div>
        </div>
    )
}

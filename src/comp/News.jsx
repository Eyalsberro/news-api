import React from 'react'
import NewCard from './NewCard'



export default function News({ news }) {



    return (
        <div className='news'>
            

            {

                news.map((news) => <NewCard news={news} />)
            }

        </div>
    )
}

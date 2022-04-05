import React, { useEffect, useState } from 'react'
import Header from './comp/Header'
import News from './comp/News'
import HeaderNews from './comp/HeaderNews'

export default function App() {
  const [news, setNews] = useState([])
  const [country, setCountry] = useState("il")
  const [cat, setCat] = useState("")
  const [query, setQuery] = useState("")

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${cat}&q=${query}&apiKey=4b48b89fc5994d4797a24ef392851ecd`)
      const data = await res.json()
      console.log(data.articles);
      setNews(data.articles)

    })()

  }, [country,cat,query])

  

  return (
    <div>
      <h1>The News</h1>
      <Header country={country} setCountry={setCountry} setCat={setCat} cat={cat} query={query} setQuery={setQuery}  />
      
      <HeaderNews country={country} setCountry={setCountry}/>
      <News news={news} />


    </div>
  )
}



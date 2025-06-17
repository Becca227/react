import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const DynamicRoute = () => {
  const { blogId } = useParams()

  const [apiResponse, setApiResponse] = useState(null)
  const [search, setSearch] = useState("")

  let url= `https://dummyjson.com/products/${blogId}`
  function getBlogData() {
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((result) => {
            setSearch(result)
        })
        .catch((error) => { console.error('Error fetching data:', error);
  })
  }


  useEffect(() => {
     getBlogDetails();
    }, [search])

  return (
    <div>
      DynamicBlog
      <p>this is a dynamic blog with ID: {blogId}</p>
      <input 
      type="text"
      name='search'
      id='search'
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      />

      <h1>
        Title :
        {Array.isArray(apiResponse?.products)
         ? apiResponse.map((item) => item.title).join(', ') : apiResponse?.title}
      </h1>
    </div>
  )
}

export default DynamicRoute
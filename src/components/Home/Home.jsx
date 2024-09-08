import React, { useEffect, useState } from 'react'
import Blogcard from './Blogcard'
import Blogcard2 from './Blogcard2'

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [latestpost , setlatestpost] = useState(null)   //this is new one
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/blog/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setlatestpost(()=>data.sort((a,b)=>a.created_at - b.created_at)[0]) //set conditon to find new with date
        setBlogs(data);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); 

  return (
 
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 pb-24 pt-16 mx-auto">
          
   
  <div className="main-bl pb-10">
{latestpost && 
  <Blogcard latestpost={ latestpost} />   // here show the data if data is there then
}
  </div>

    
   
    <h1 className='text-3xl font-bold py-8'>Recent News</h1>
 <div className="blog flex justify-center space-x-5 flex-wrap">
 {blogs?.map((data)=>
  
  <Blogcard2  data={data}/>
   )}
 </div>
  </div>
</section>

  )
}

export default Home
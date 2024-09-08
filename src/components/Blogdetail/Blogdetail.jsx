import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Blogdetailheading from './Blogdetailheading'
import BlogdetailImage from './BlogdetailImage'
import Blogdetaildescription from './Blogdetaildescription'
import Blogdetailuser from './Blogdetailuser'
import Blogcard2 from '../Home/Blogcard2'
const Blogdetail = () => {
  const params = useParams()
console.log(params);

  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const id = params.blogid.split("_")



  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/blog/${id[1]}/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogs(data);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); 
  console.log(blogs)
  return (
   

    <main className="mt-10 px-10 pt-5 pb-10">

      <div className="mb-4 md:mb-0 w-full mx-auto relative ">
        {/* change param to title  */}
        <Blogdetailheading title = {blogs?.title} />

        <BlogdetailImage blogimage={blogs?.image} />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-16">

<Blogdetaildescription discriptions= {blogs?.content} />
  <div className="sidebox ">
  <Blogdetailuser />
  {/* <Blogcard2 />
  <Blogcard2 /> */}
  </div>

      </div>
    </main>

  )
}

export default Blogdetail
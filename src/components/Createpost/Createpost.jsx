import { useState } from "react";
import Createpostcontent from "./Createpostcontent"
import Createpostleftform from "./Createpostleftform"


const Createpost = () => {

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content:"",
    tags: "",
    image: null,
  });
  

 

  const handleSubmit = async (e) => {
    e.preventDefault();
console.log(formData)

const data = new FormData()
    
for (const [key, value] of Object.entries(formData)) {
  // Check if the value is a File or Blob (which represents file data)
  if (key === "image") {
      data.append(key, value);  // Handle file uploads
  } else {
      data.append(key, value);  // Handle normal form data
  }
}

    try {
      const response = await fetch("http://localhost:8000/api/blog/", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        console.log("Post created successfully!");
      } else {
        console.error("Error creating post.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="w-full mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Create a Blog Post</h2>
     <div className="createpost flex p-4 gap-8 justify-center items-center">
      <Createpostleftform setFormData={setFormData}  formData={formData} handleSubmit={handleSubmit}/>
      <Createpostcontent setFormData={setFormData}  formData={formData} name="content"/>
     </div>
    </div>

  )
}

export default Createpost

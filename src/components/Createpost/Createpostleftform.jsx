import Logininput from "../Login/Logininput"
import Loginbutton from "../Login/Loginbutton"

const Createpostleftform = ({handleSubmit, setFormData, formData}) => {
  return (
    <form onSubmit={handleSubmit}  className="w-[450px]">
        <Logininput type="text" name="title" label="Title" setFormData={setFormData} formData={formData}/>
        <Logininput type="text" name="author" label="Author" setFormData={setFormData} formData={formData}/>
        {/* <Logininput type="text" name="slug" label="slug"/> */}
        <Logininput type="text" name="tags" label="Tags" setFormData={setFormData} formData={formData}/>
        <Logininput type="file" name="image" label="Image URL" setFormData={setFormData} formData={formData}/>
        <Loginbutton text="Submit" 
         className="w-full bg-blue-500 text-white py-2 mt-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            
        </form>
  )
}

export default Createpostleftform
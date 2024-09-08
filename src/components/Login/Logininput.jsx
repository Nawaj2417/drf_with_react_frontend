import React from 'react';

const Logininput = ({ type, label, name, formData, setFormData, ...props }) => {
  const handleChange = (e) => {
    if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] }); // For single file
      // If you want to handle multiple files, use e.target.files (returns a FileList)
    } else {
      setFormData({ ...formData, [name]: e.target.value });
    }
  };

  return (
    <div className='my-2'>
      {label && <label className="block capitalize text-gray-700">{label}</label>}
      <input
        type={type}
        name={name}  
        value={type === 'file' ? undefined : formData[name]}  // Prevent file input from showing a value
        onChange={handleChange}
        {...props}
        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
      />  
    </div>
  );
};

export default Logininput;

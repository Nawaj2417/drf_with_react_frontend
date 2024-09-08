import React from 'react'

const Blogdetailuser = () => {
  return (
    <div className="w-[350px] m-auto mt-12 max-w-screen-sm">
    <div className="p-4 border-t border-b md:border md:rounded">
      <div className="flex py-2">
        <img src="https://randomuser.me/api/portraits/men/97.jpg"
          className="h-10 w-10 rounded-full mr-2 object-cover" />
        <div>
          <p className="font-semibold text-gray-700 text-sm"> Mike Sullivan </p>
          <p className="font-semibold text-gray-600 text-xs"> Editor </p>
        </div>
      </div>
      <p className="text-gray-700 py-3">
        Mike writes about technology
        Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
      </p>
      <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
        Follow 
        <i className='bx bx-user-plus ml-2' ></i>
      </button>
    </div>
  </div>
  )
}

export default Blogdetailuser

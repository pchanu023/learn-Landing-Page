import React from 'react'

function InfoOne() {
  return (
    <div className='container mx-auto flex item-center py-16'>
      <div className="w-1/2">
        <img src="https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""className='w-full h-auto rounded-lg' />
      </div>
      <div className="w-1/2 px-6">
        <h2 className='text-3xl font-semibold'>Welcome to Our Website</h2>
        <p className='text-gray-600 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod molestiae sint nihil molestias, voluptatibus fugiat illum eaque expedita est facilis quas voluptates enim distinctio temporibus cumque reiciendis mollitia velit et!</p>
      </div>
    </div>
  )
}

export default InfoOne

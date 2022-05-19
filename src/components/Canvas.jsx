import React from 'react'

const Canvas = () => {
  return (
    <div className='col-span-3 bg-light p-3 h-[90vh]'>
        <canvas className='w-[300] bg-dark' id="meme-canvas" title="Right click to save this meme"></canvas>
    </div>
  )
}

export default Canvas
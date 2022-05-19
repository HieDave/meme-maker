import React from 'react'

const Sidebar = ({ topText, bottomText, topTextSize, bottomTextSize, image, setImage, setTopText, setBottomText, setBottomTextSize, setTopTextSize, uploadImage }) => {
  // const uploadImage = (e) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0])
  //   reader.onload = () => {
  //     const img = new Image();
  //     img.src = reader.result;
  //     img.onload = () => {
  //       setImage(img)
  //     };
  //   };
  // }
  
  return (
    <div className='flex flex-col col-span-1 bg-mid p-3 h-[90vh]'>
      <textarea id="top-text" value={topText} onChange={(e)=>{setTopText(e.target.value)}}></textarea>
      Text size: <input type="range" value={topTextSize} onChange={(e)=>{setTopTextSize(e.target.value)}} min="0.05" max="0.25" step="0.01"></input>
      <textarea id="bottom-text" value={bottomText} onChange={(e)=>{setBottomText(e.target.value)}}></textarea>
      Text size: <input type="range" value={bottomTextSize} onChange={(e)=>{setBottomTextSize(e.target.value)}} min="0.05" max="0.25" step="0.01"></input>
      <input type="file" accept="image/*" onChange={uploadImage}></input>
      <button className='bg-brand text-white p-3 rounded-lg m-2'>Download!</button>
    </div>
  )
}

export default Sidebar
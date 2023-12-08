import React from 'react'
import Card from './Card'

const Foreground = () => {

  const ref = useRef(null);
  
  const data = [
    {
      desc: "This is a description of the card that is being displayed.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "This is a description of the card that is being displayed.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "This is a description of the card that is being displayed.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
    {data.map((item, index)=>(
      <Card data={item} reference={ref} />
    ))}  
    </div>
  )
}

export default Foreground

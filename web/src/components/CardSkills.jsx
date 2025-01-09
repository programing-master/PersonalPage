import React from 'react'

export default function CardSkills ({ props }) {
  return (
    <div className='flex img-animated items-center gap-2 w-[100%] '>
      <p className='w-[10%] md:w-[20%] hidden md:inline'> {props.name}</p>
      <img className='w-[8%] md:w-[5%]' src={props.img} alt={props.name} />
      <progress value={props.progress} className='w-full' max='100'>
        {props.progress}
      </progress>
      <span className=''>{props.progress}%</span>
    </div>
  )
}

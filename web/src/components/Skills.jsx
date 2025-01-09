import React from 'react'
import CardSkills from './CardSkills'
import { skills } from '../utils/skills'

export default function Skills () {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-[30vh]'>
      
      <h2 className=' text-start text-2xl img-animated '>
        Mis Habilidades<span className='text-green-600 text-5xl'>.</span>
      </h2>
      <p className='text-blue-400 text-lg md:text-xl img-animated '>Aptitudes y conocimientos que poseo</p>

      <div className='w-full flex flex-col items-center justify-center mt-[10vh]'>
        <ul className='w-[80%]  min-h-[30vh]  flex flex-col gap-4'>
          {skills.map((item, index) => (
            <CardSkills key={index} props={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}

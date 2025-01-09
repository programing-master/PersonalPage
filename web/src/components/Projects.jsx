import React from 'react'
import { projects } from '../utils/projects'
import CardProjects from './CardProjects'

export default function Projects () {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-[30vh]'>
      <h2 className=' text-start text-2xl img-animated '>Mis Proyectos<span className="text-green-600 text-5xl">.</span></h2>
      <p className='text-blue-400 text-lg md:text-xl img-animated '> Transformo ideas digitales en realidad</p>
      <ul className='w-[95%] md:w-[80%] mt-[10vh] min-h-[30vh] grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((item, index) => (
          <CardProjects key={index} props={item} />
        ))}
      </ul>
    </div>
  )
}

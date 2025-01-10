import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function CardProjects ({ props }) {
  return (
    <div className='border img-animated  rounded-md min-h-[50vh] p-2  shadow transition-all  ease-linear hover:shadow-lg hover:shadow-blue-400  hover:-translate-y-2'>
      <h4 className='px-4 py-2 font-bold text-xl'>{props.name}</h4>
      <div className='w-[100%] flex justify-center items-center h-[60%]'>
        <img
          className='w-[95%] min-h-[80%] object-fill'
          src={props.img}
          alt={props.name}
        />
      </div>
      <p className='px-4 py-2 mt-4 h-20 text-sm overflow-auto'>
        {props.description}
      </p>
      <span className='px-4 py-2 mt-4 text-blue-500'>Tecnologías</span>
      <ul className='flex items-center gap-2 px-4 py-2 relative bottom-0'>
        <section className='flex h-[20] items-center justify-between'>
          <div className='w-[50%] flex items-center gap-2 '>
            {props.tecnologies.map((item, index) => (
              <img
                key={index}
                className='w-[12%]  transition hover:translate-y-2 min-h-[80%] object-fill'
                src={item.url}
                alt={item.name}
              />
            ))}
          </div>
          <div className=' flex items-end gap-4 w-[50%]'>
            <a
              href={props.deploy}
              target='_blank'
              className='bg-blue-500 transition hover:bg-blue-600 p-1.5 rounded-md'
            >
              Producción
            </a>
            <a className='text-2xl' href={props.url} target='_blank'>
              <FaGithub />
            </a>
          </div>
        </section>
      </ul>
    </div>
  )
}

import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { motion } from 'motion/react'
import { easeInOut } from 'motion'

export default function About () {
  const handleDownload = () => {
    const pdfUrl = '/cv/CV (2).pdf'

    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.download = 'JavierCV.pdf'

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      })
  }

  return (
    <section className='w-[100%] flex flex-col gap-4 md:gap-2 md:flex-row justify-center space-x-1 mt-10 items-center '>
      <div className='w-[40%] md:w-[20%] h-[20%] rounded-full'>
        <img
        
          loading='lazy'
          className='rounded-full '
          src='/assets/me.png'
          alt='mi foto'
        />
      </div>
      <section className='w-[90%] md:w-[50%]  p-8 space-y-4'>
        <section>
          <motion.h1
            className='text-3xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Javier Valladares Alonso
          </motion.h1>
          <motion.h2 initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }} className='text-2xl font-bold text-blue-500'>
            Frontend Developer
          </motion.h2>
        </section>

        <article className='text-sm pb-2'>
          {' '}
          <motion.ul initial={{ right: "-10%" }}
        animate={{ right: "0%" }}
        transition={{ duration: 0.3 }} className='list-disc space-y-2 relative'>
            <li>
              {' '}
              Creo soluciones digitales efectivas para empresas,
              especializándome en programación web, desarrollo frontend y
              backend.
            </li>
            <li>
              {' '}
              Mi enfoque está en desarrollar aplicaciones web de alta calidad
              que mejoren la experiencia del usuario y la legibilidad del
              contenido{' '}
            </li>
          </motion.ul>
        </article>
        <div className='flex items-center gap-8'>
          <button
            onClick={handleDownload}
            className='bg-blue-500 p-2 rounded transition hover:bg-blue-600'
          >
            Descargar mi CV
          </button>
          <ul className='flex items-center gap-4 '>
            <a
              className='text-2xl '
              href={'https://github.com/programing-master'}
              target='_blank'
            >
              <FaGithub />
            </a>
            <a
              className='text-2xl '
              href={
                'https://www.linkedin.com/in/javier-ernesto-valladares-alonso'
              }
              target='_blank'
            >
              <FaLinkedin />
            </a>
          </ul>
        </div>
      </section>
    </section>
  )
}

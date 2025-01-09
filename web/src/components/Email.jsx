import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Email () {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_zac07bo',
        'template_20awuxt',
        form.current,
        '8cewxPSANK82i6q4t'
      )
      .then(result => {
        console.log(result)
        if (result.status == 200) {
          return toast.success('Tu correo ha sido enviado con éxito!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            draggable: true,
            progress: undefined
          })
        }
      })
      .catch(error => {
        console.log(error.text)
      })
  }

  return (
    <div className='w-full min-h-[40vh] p-4 flex justify-center mt-[20vh] md:mt-[30vh] py-10 items-center flex-col'>
      <div className='w-full flex items-center justify-center gap-20 md:fex-row '>
        <img className='w-[90%] md:w-[50%]' src='/assets/ilustracion4.svg' alt='svg' />
      </div>
      <ToastContainer />
      <h2 className=' text-start text-2xl'>
        Contáctame<span className='text-green-600 text-5xl img-animated '>.</span>
      </h2>
      <p className='text-blue-400 text-lg md:text-xl img-animated '>
        Pongámonos en contacto
      </p>

      <form
        className='flex py-4 justify-center items-center flex-col gap-2 border w-[100%] md:w-[50%] mt-[20vh]'
        ref={form}
        onSubmit={sendEmail}
      >
        <label className='text-start w-full px-4'>Name</label>
        <input
          placeholder='Tu nombre'
          className='border rounded-md p-2 w-[95%]'
          type='text'
          name='user_name'
          required
        />

        <label className='text-start w-full px-4'>Email</label>
        <input
          placeholder='Tu correo'
          className='border rounded-md p-2 w-[95%]'
          type='email'
          name='user_email'
          required
        />

        <label className='text-start w-full px-4'>Message</label>
        <textarea
          placeholder='Escribe algo'
          className='rounded-md p-2 border  w-[95%]'
          cols={6}
          rows={6}
          name='message'
          required
        />

        <button
          type='submit'
          className='bg-blue-500 w-[95%] p-2 mt-4 rounded-md transtion hover:bg-blue-600'
        >
          Enviar correo
        </button>
      </form>
    </div>
  )
}

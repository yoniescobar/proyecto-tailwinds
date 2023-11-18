import React from 'react'

export default function Formulario() {
    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className="font-black text-3xl text-center">Formulario</h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Agregar Estudiantes y {''}
                <span className='font-bold text-indigo-600'>Administrarlos</span>
            </p>

            <form className='bg-white shadow-md rounded-lg py-10 px-5'>
                <div className='mb-4'>
                    <label className='block text-gray-800 text-sm font-bold mb-2 uppercase' htmlFor='nombre'>Nombre</label>
                    <input
                        className='mt-2 border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none focus:border-primary w-full'
                        id='nombre'
                        type='text'
                        placeholder='Nombre Estudiante'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2 uppercase' htmlFor='apellido'>Apellido</label>
                    <input
                        className='mt-2 border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none focus:border-primary w-full'
                        id='apellido'
                        type='text'
                        placeholder='Apellido Estudiante'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2 uppercase' htmlFor='email'>Email</label>
                    <input
                        className='mt-2 border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none focus:border-primary w-full'
                        id='email'
                        type='email'
                        placeholder='Email Estudiante'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2 uppercase' htmlFor='telefono'>Telefono</label>
                    <input
                        className='mt-2 border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none focus:border-primary w-full'
                        id='telefono'
                        type='tel'
                        placeholder='Telefono Estudiante'
                    />
                </div>

                <input
                    className='bg-indigo-800 w-full mt-5 p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition duration rounded-lg focus:outline-none focus:shadow-outline hover:shadow-md hover:text-gray mb-10'
                    type='submit'
                    value='Agregar Estudiante'
                />
            </form>
        </div>
    )
}

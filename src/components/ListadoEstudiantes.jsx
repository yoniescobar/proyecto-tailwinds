import React from 'react'

export default function ListadoEstudiantes() {
    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            <h2 className="font-black text-3xl text-center">Listado de Estudiantes</h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Estudiantes del curso  {''}
                <span className='font-bold text-indigo-600'>React</span>
            </p>

            <table className='table-auto shadow-md mt-10 w-full w-lg '>
                <thead className='bg-gray-800'>
                    <tr className='text-white'>
                        <th className='w-1/5 py-2'>Nombre</th>
                        <th className='w-1/5 py-2'>Apellido</th>
                        <th className='w-1/5 py-2'>Email</th>
                        <th className='w-1/5 py-2'>Telefono</th>
                        <th className='w-1/5 py-2'>Acciones</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    <tr>
                        <td className='border px-4 py-2'>Juan</td>
                        <td className='border px-4 py-2'>Perez</td>
                        <td className='border px-4 py-2'>juan@gmail.com</td>
                        <td className='border px-4 py-2'>7845 4562</td>
                        <td className='border px-4 py-2'>
                            <div className="flex">
                                <div className='w-1/2 px-2'>
                                    <button
                                        type='button'
                                        className='flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold transition duration-500 ease-in-out hover:bg-red-600'
                                    >
                                        Eliminar
                                    </button>
                                </div>
                                <div className='w-1/2'>
                                    <button
                                        type='button'
                                        className='flex justify-center items-center bg-yellow-500 h- py-2 px-4 w-full text-white rounded text-xs uppercase font-bold transiton duration-500 ease-in-out hover:bg-yellow-600'
                                    >
                                        Editar
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

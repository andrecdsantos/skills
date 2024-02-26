'use client'
import { useState } from 'react'

const RegistrationTable = ( {shoes, onSelect}) => {
    const [query, setQuery] = useState('')
  return (
    <table className='bg-purple-200 w-full mx-4 sm:mx-0 md:text-lg shadow-2xl'>
        <thead className='h-16 bg-purple-700 text-teal-200'>
            <tr className='*:border-2 *:border-teal-500'>
                <th>#</th>
                <th>Produto</th>
                <th>descricao</th>
                <th>Selecionar</th>
            </tr>
        </thead>
        <tbody>
            {shoes.map((item, index)=> 
                <tr key={index} className=' *:border-2 *:border-teal-500'>
                    <td className=''>{index + 1}</td>
                    <td className=''>{item.title}</td>
                    <td className=''>{item.description}</td>
                    <td className='flex justify-center'>
                        <button className='py-4 px-14 text-xl rounded-xl border-2 border-purple-700 bg-teal-200 text-purple-700 hover:bg-green-200 transition-all duration-300 ease-in-out' onClick={()=>onSelect(index)}>Selecionar</button>
                    </td>
                </tr>
            )}
        </tbody>
    </table>
  )
}

export default RegistrationTable
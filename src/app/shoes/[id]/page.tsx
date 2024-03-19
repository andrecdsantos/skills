'use client'
import { useEffect } from 'react'
import { data } from '../../../data/data.js'

const shoesId = ( {params} : { params : { id : string }} ) => {
    const shoes = data.find(item=> item.id === params.id)  

  return (
    <div>
        {!shoes ? 
        <h1 className='text-center text-5xl'>Este Produto não existe</h1>
        :
        <div>
            <h1 className='text-center text-5xl'>{shoes?.name}</h1>
            <section className='flex items-center justify-center py-8'>
                <img src={shoes.image} alt={shoes?.name} className='shadow-2xl rounded-lg'/>
                <div className='ms-4 flex flex-col items-start gap-y-2'>
                    <div>
                        <b>De: </b>
                        <span className='line-through'>{shoes.oldPrice}</span>
                    </div>
                    <div>
                        <b>Por: </b>
                        <span>{shoes.price}</span>
                    </div>
                </div>
            </section>
        </div>
        }
    </div>
  )
}

export default shoesId
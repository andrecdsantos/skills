import Link from 'next/link.js'
import { data } from '../../../data/data.js'

const query = ( { params }) => {
    const decodedQuery = decodeURIComponent(params.query);//por params os espacos em branco sao representados por %20, este trecho esta convertendo os %20 em espacoes em branco novamente
    const keywords = decodedQuery.trim().toUpperCase().split(' ')
    const shoes = data.filter(item=> keywords.every(word=> item.name.toUpperCase().includes(word)))
  return (
    <div>
        <h1 className='text-center text-xl mb-8'>Resultados da busca por: <b>{params.query}</b></h1>
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-14'>
            {shoes.map(item=>
                <Link href={`/shoes/${item.id}`} key={item.id}>
                    <img src={item.image} className='shadow-2xl rounded-xl object-cover hover:translate-y-2 hover:border-2 hover:border-teal-200'></img>
                </Link>
                )}
        </div>
    </div>
  )
}

export default query
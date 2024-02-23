'use client'
import Languages from "@/components/Languages";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";


export default function Home() {
  const [repositories, setRepositories] = useState([])
  useEffect(()=> {
    const getRepositories = async () => {
      const response = await fetch('https://api.github.com/users/andrecdsantos/repos')
      const data = await response.json()
      setRepositories(data)
      //console.log(data)
    }
    getRepositories()
  },[])
  return (
    <main className="flex-grow w-full py-4 sm:px-12 xl:px-16 text-center lg:text-start bg-gray-100 text-black">
      <h1 className="text-center text-4xl text-purple-500">Projetos</h1>
      <div className="grid lg:grid-cols-2 flex-wrap break-words break-all p-3 w-full gap-x-4 gap-y-6">
        {Array.isArray(repositories) &&  repositories.map(item=> 
          <div key={item.id} className="bg-white p-3 shadow-xl">
            <div>
              <b>Projeto: </b>
              <span>{item.name}</span>
            </div>
            <div>
              <b>Descrição: </b>
              <span>{item.description}</span>
            </div>
            <Link href={item.html_url} target="_blank" className="hover:text-purple-500">
                <b>URL: </b>
                <span>{item.html_url}</span>
                <FaExternalLinkAlt />
            </Link>
            <Languages urlLanguage={item.languages_url}/>
          </div>
        )}
      </div>
    </main>
  );
}

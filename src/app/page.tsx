'use client'
import Languages from "@/components/Languages";
import ScrollTopButton from "@/components/ScrollTopButton";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Loading from "./loading";

export type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
  /* languages_url: {
    [key: string] : string;
  } */
}

export default function Home() {
  const [repositories, setRepositories] = useState<Repository[]>([])
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
    <>
      <ScrollTopButton/>
      <h1 className="text-center text-4xl text-purple-500">Projetos</h1>
      <Suspense fallback={<Loading/>} >
        <div className="grid lg:grid-cols-2 flex-wrap break-words break-all p-3 w-full gap-x-4 gap-y-6">
          {repositories.map(item=> 
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
                  <span className="me-2">{item.html_url}</span>
                  <FaExternalLinkAlt className="inline text-sm text-purple-500"/>
              </Link>
              <Languages urlLanguage={item.languages_url}/>
            </div>
          )}
        </div>
      </Suspense>
    </>
  );
}

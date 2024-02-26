'use client'
import RegistrationForm from "@/components/RegistrationForm"
import RegistrationTable from "@/components/RegistrationTable"
import { useState } from "react"

const register = () => {
  const [btnRegister, setBtnRegister] = useState(true)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [shoes, setShoes] = useState([])
  const [shoesIndex, setShoesIndex] = useState('')

  const validade = () => {

  }

  const cleanFields = () => {
    setTitle('')
    setDescription('')
  }

  const onSave = (e) => {
    e.preventDefault()
    setShoes(prevShoes=>[...prevShoes, {title, description}])
    cleanFields()
  }

  const onUpdate = (e) => {
    e.preventDefault()
    const copyShoes = [...shoes]
    copyShoes[shoesIndex] = {title, description}
    setShoes(copyShoes)
    cleanFields()
    setBtnRegister(true)
  }

  const onDelete = (e) => {
    e.preventDefault()
    const copyShoes = [...shoes]
    copyShoes.splice(shoesIndex, 1) 
    setShoes(copyShoes)
    cleanFields()
    setBtnRegister(true)
  }

   const onSelect = (index) => {
    setShoesIndex(index)//setando para poder depois usar em onDelete, update...
    setTitle(shoes[index].title)
    setDescription(shoes[index].description)
    setBtnRegister(false)
   }

   const onCancel = (e) => {
    e.preventDefault()
    setBtnRegister(true)
    cleanFields()
   }
  return (
    <div>
        <h1 className='text-center text-5xl'>Cadastros...</h1>
        <RegistrationForm btnRegister={btnRegister} title={title} setTitle={setTitle} description={description} setDescription={setDescription} onSave={onSave} onUpdate={onUpdate} onDelete={onDelete} onCancel={onCancel}/>
        <RegistrationTable shoes={shoes} onSelect={onSelect}/>
    </div>
  )
}

export default register


const RegistrationForm = ( {btnRegister, title, setTitle, description, setDescription, onSave, onUpdate, onDelete, onCancel } ) => {
  return (
    <form className="flex flex-col py-8 mx-4 sm:mx-0">
        <input 
            type="text" 
            value={title}
            onChange={e=> setTitle(e.target.value)}
            placeholder="Nome do produto" 
            className="h-12 text-xl outline-teal-200 bg-purple-200 text-purple-700 px-4 mb-4"
        />
        <input 
            type="text" 
            value={description}
            onChange={e=>setDescription(e.target.value)}
            placeholder="Descrição" 
            className="h-12 text-xl outline-teal-200 bg-purple-200 text-purple-700 px-4 mb-4"
        />
        <div className="flex flex-col lg:flex-row gap-3 w-full justify-center">
            {btnRegister ?
            <button className="py-4 px-14 text-xl rounded-xl border-2 border-purple-700 bg-teal-200 text-purple-700 hover:bg-purple-200 transition-all duration-300 ease-in-out" onClick={e=>onSave(e)}>Cadastrar</button>
            :
            <>
                <button className="py-4 px-14 text-xl rounded-xl border-2 border-purple-700 bg-teal-200 text-purple-700 hover:bg-purple-200 transition-all duration-300 ease-in-out" onClick={e=>onUpdate(e)}>Alterar</button>
                <button className="py-4 px-14 text-xl rounded-xl border-2 border-purple-700 bg-teal-200 text-purple-700 hover:bg-purple-200 transition-all duration-300 ease-in-out" onClick={e=>onDelete(e)}>Excluir</button>
                <button className="py-4 px-14 text-xl rounded-xl border-2 border-purple-700 bg-teal-200 text-purple-700 hover:bg-purple-200 transition-all duration-300 ease-in-out" onClick={(e)=>onCancel(e)}>Cancelar</button>
            </>
            }
        </div>
    </form>
  )
}

export default RegistrationForm
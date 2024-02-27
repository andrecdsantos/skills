

const RegistrationForm = ( {btnRegister, title, setTitle, description, setDescription, brand, setBrand, errors, submitted, onSave, onUpdate, onDelete, onCancel } ) => {
    const brands = [
        "NIKE",
        "ADIDAS",
        "MIZUNO",
        "NEW BALANCE",
        "OLYMPICUS",
        "PUMA",
    ]
  
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
        <select 
            value={brand}
            onChange={e=>setBrand(e.target.value)}
            className="h-12 text-xl outline-teal-200 bg-purple-200 text-purple-700 px-4 mb-4 cursor-pointer"
        >
            <option value="">Escolha uma marca</option>
            {brands.map(item=>
                <option value={item} key={item}>{item}</option>        
            )}
        </select>
        {submitted &&
            <div className={`${errors ? "bg-red-200" : "bg-green-200"} p-5 mb-4`}>{errors ? errors : "Cadastrado com Sucesso!"}</div>
        }
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
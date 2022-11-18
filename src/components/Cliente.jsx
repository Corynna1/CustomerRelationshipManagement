
import {useNavigate, Form, redirect} from 'react-router-dom'
import {eliminarCliente} from '../data/clientes'



export async function action({params}){
  await eliminarCliente(params.clienteId)
  return redirect ('/')
}


function Cliente({cliente}) {


  const navigate = useNavigate()

  const {nombre, empresa, email, telefono, id} = cliente

  return (
    <tr className="border-b space-y-2 text-center">
        <td className="p-6">
          <p className="text-2xl text-[#5aa278]">
            {nombre}
          </p>
          <p className='text-[#26352c]'>{empresa}</p>
        </td>

        <td className="p-6">
          <p className="text-[#5aa278]" > <span className="text-[#26352c] uppercase font-bold">Email: </span> {email}</p>
          <p className="text-[#5aa278]" > <span className="text-[#26352c]  uppercase font-bold">Telefono: </span> {telefono}</p>
        </td>

        <td className="p-6 flex gap-3">
          <button
          type="button"
          className=" text-black p-3 bg-emerald-500 hover:bg-yellow-400 uppercase font-bold rounded-lg text-xs"
          onClick={()=> navigate(`/clientes/${id}/editar`)}>
            Edit
          </button>

         <Form
         method='post'
         action={`/clientes/${id}/eliminar`}
         onSubmit={(e)=> {
          if(!confirm('Deseas eliminar este registro?')){
            e.preventDefault()
          }
         }}>
         <button
          type="submit"
          className=" text-black p-3 bg-cyan-600 hover:bg-red-500 rounded-lg uppercase font-bold text-xs">
            Remove
          </button>
         </Form>
        </td>
    </tr>
  )
}

export default Cliente

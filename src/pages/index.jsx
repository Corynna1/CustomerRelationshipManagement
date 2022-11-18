import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import {obtenerClientes} from '../data/clientes'

export function loader(){
   const clientes = obtenerClientes() 
   return clientes;
}

function Index() {

    const clientes = useLoaderData();



  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Customers</h1>
    <p className='mt-3 text-[#5aa278]'>Manage your Clients</p>

    {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-gradient-to-l from-[#002661] to-[#92FFC0]  text-white">
                <tr>
                    <th className="p-2">Cliente</th>
                    <th className="p-2">Contacto</th>
                    <th className="p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map(cliente => (
                   <Cliente
                   cliente={cliente}
                   key={cliente.id}/>
                ))}
            </tbody>
           

        </table>

    ):(
        <p className='text-center mt-10'> No clients yet</p>
    )
    }
    
    </>
  )
}

export default Index
import { useNavigate, Form, useActionData, redirect} from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error"
import {agregarClientes} from '../data/clientes'

export async function action({request}){

   const formData = await request.formData()
   const datos = Object.fromEntries(formData)
   const email = formData.get('email')

   //validacion

   const errores = []
   if(Object.values(datos).includes('')){
   errores.push('Todos los campos son obligatorios')
   }

   let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
   if(!regex.test(email)){
      errores.push('El email no es valido')
   }

   //Retornar datos si hay errores
   if(Object.keys(errores).length){
    return errores
   }

  await agregarClientes(datos)
  return redirect('/')
}


function NuevoCliente() {

  const errores = useActionData()
  const navigate = useNavigate()
  
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3 text-[#5aa278]">Fill all the fields for a new Client</p>

      <div className="flex justify-end">
        <button
          className="bg-[#92FFC0]  text-white hover:text-black px-3 py-1 font-bold uppercase rounded-md"
          onClick={() => navigate('/')}
        >
          Return
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

        {errores?.length && errores.map((error, i)=> <Error key={i}>{error}</Error>)}

        <Form
        method="post"
        noValidate
        >

          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-gradient-to-l from-[#002661] to-[#92FFC0] p-3 font-bold text-white text-lg rounded-md cursor-pointer hover:text-black"
            value="Register Clients"
          />

        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;

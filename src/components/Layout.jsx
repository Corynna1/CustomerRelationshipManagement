import {Outlet, Link, useLocation} from'react-router-dom'
import iconoInicio from '../img/icono.png'

//Layout es la parte que queda fija en todos las paginas y en Oulet es la parte que cambia

function Layout() {
const location = useLocation()

  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-gradient-to-t from-[#002661] to-[#92FFC0] px-5 py-5'>
        
           <div className='w-full inline-flex items-center'>
           <img className='h-16 w-20 object-contain'
             src={iconoInicio}/>
             <h1 className='font-bold text-lg text-black'>CoryNet®</h1>
           </div>
           
            <h2 className='text-3xl font-black text-white mt-5'>
               Customer Relationship Management
            </h2>
            <p className=' mt-3 text-base text-slate-700/50'>The customer management platform
for businesses of all sizes</p>
            <nav className='mt-10 block' >
                <Link className={`${location.pathname === '/' ? 'text-slate-700 ' : 'text-white'} text-2xl block mt-2 hover:text-cyan-500`} 
                to ='/'>Customers</Link>
                <Link className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-500 ' : 'text-white'} text-2xl block mt-2 hover:text-cyan-500`} 
                to ='/clientes/nuevo'>New Client</Link>
            </nav>

        </aside>
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet/>

        </main>
    </div>
  )
}

export default Layout
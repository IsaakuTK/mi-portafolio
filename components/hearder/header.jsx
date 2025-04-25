import Link from 'next/link';

export function Header() {
  return (
    <header>
      <div className="px-16 flex flex-col items-center py-4 w-full cell:flex-row cell:space-x-10">
        <div className="flex items-center cell:w-1/2">
          <Link href="/"> {/* 👈 href en lugar de to */}
            <img className="w-8/12 mr-4 ml-4" src="hola" alt="logo" /> {/* Asegúrate de que `src` tenga una ruta válida */}
          </Link>
        </div>

        <div className="flex justify-end flex-col cell:flex-row cell:space-x-12 items-center pt-2 cell:w-1/2">
          <div className='flex space-x-6 cell:space-x-16'>
            <Link href="/"> {/* 👈 href en lugar de to */}
              <p className='text-xl text-gray-400 font-bold'>Home</p>
            </Link>

            <Link href="/projects"> {/* 👈 href en lugar de to */}
              <p className='text-xl text-gray-400 font-bold'>Projects</p>
            </Link>
          </div>

          <div className='flex space-x-2'>
            <Link href="https://linkedin.com/in/tu-perfil" className='border rounded-full p-3 bg-gray-900'> {/* 👈 URL completa */}
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 26 26" viewBox="0 0 26 26" id="linkedin" className="border-white w-6 h-6 fill-white">
                <path d="M24,0H2C0.9,0,0,0.9,0,2v22c0,1.1,0.9,2,2,2h22c1.1,0,2-0.9,2-2V2C26,0.9,25.1,0,24,0z M7.816,22H4V9.725h3.816V22z M5.878,8.219c-1.349,0-2.25-0.956-2.222-2.138C3.628,4.844,4.529,3.915,5.906,3.915c1.379,0,2.251,0.929,2.279,2.166C8.186,7.263,7.286,8.219,5.878,8.219z M22,22h-3.815v-6.802c0-1.582-0.553-2.661-1.934-2.661c-1.053,0-1.681,0.728-1.932,1.431c-0.1,0.226-0.15,0.603-0.15,0.953V22h-3.816v-8.358c0-1.532-0.05-2.837-0.1-3.916h3.313l0.176,1.682h0.076c0.502-0.779,1.757-1.958,3.79-1.958c2.51,0,4.392,1.656,4.392,5.271V22z"></path>
              </svg>
            </Link>

            {/* Repite para otros enlaces... */}
          </div>

          <Link href="/contact" className='border p-5 px-8'> {/* 👈 Ruta válida */}
            <p className="text-xl font-bold text-white hover:text-gray-400">
              Let's Connect
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
}
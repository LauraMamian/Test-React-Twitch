import { useNavigate } from 'react-router'
import twitch from '../assets/twitch.svg'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className='w-11/12 min-h-screen flex justify-center items-center md:justify-start'>
      <div className='flex flex-col items-center justify-center md:items-start md:w-1/3'>
        <p className='animate__animated animate__fadeInDown text-lg'>
          ¡Bienvenido! Soy Laura Mamián y este proyecto usa
        </p>
        <h1 className='animate__animated animate__fadeInDown text-center text-xl md:text-4xl text-purple-400 mb-4'>
          TWITCH API
        </h1>

        <img
          className='animate__animated animate__fadeInDown w-3/5 md:w-4/12 md:absolute md:right-48 md:top-28 mb-4'
          src={twitch}
          alt='twitch'
        />
        <button
          onClick={() => navigate('/Games')}
          className='animate__animated animate__fadeInDown md:order-last bg-purple-500 mb-4 border-purple-500 border-2 rounded flex items-center justify-center px-6 py-2 hover:bg-purple-600 duration-200 hover:border-purple-600'
        >
          ¡Comencemos!
        </button>
        <p className='animate__animated animate__fadeInDown text-slate-500 md:mb-4 text-center md:text-left'>
          Para buscar los juegos más populares, haz click en el botón
        </p>
      </div>
    </div>
  )
}
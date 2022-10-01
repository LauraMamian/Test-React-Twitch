import { useNavigate } from 'react-router'
import twitch from '../assets/twitch.svg'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className='w-11/12 min-h-screen flex justify-center items-center md:justify-start'>
      <div className='flex flex-col items-center justify-center w-full md:w-full'>
        <img
          className='animate__animated animate__fadeInDown w-40 md:w-40 md:flex flex-col md:right-20 md:top-28 mb-4'
          src={twitch}
          alt='twitch'
        />
        <h1 className='animate__animated animate__fadeIn text-center text-xl md:text-4xl text-slate-50 mb-4'>
          TEST FRONTEND WEB DEVELOPER
        </h1>
        <button
          onClick={() => navigate('/Games')}
          className='animate__animated animate__flash md:order-last bg-slate-900 mb-4 border-slate-900 border-2 rounded flex items-center justify-center px-6 py-2 hover:bg-slate-50 duration-200 hover:border-slate-50 hover:text-slate-900'
        >
          Start
        </button>
      </div>
    </div>
  )
}
import React,{useContext} from 'react'
import Search from './components/Search'
import Favourites from './components/Favourites'
import Meals from './components/Meals'
import Modal from './components/Modal'
import { AppContext } from './store/context'

function App() {
  const {showModal} = useContext(AppContext)

  return (
    <>
     <div className='w-full min-h-screen h- fit pb-10 bg-[#010101] text-white transition-opacity duration-150'>
      <Search />
      <Favourites />
      <Meals />
      {showModal && <Modal />}
      </div> 
    </>
  )
}

export default App

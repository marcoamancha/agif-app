import {useState} from 'react';
import './App.css';
import { ImagesItem } from './components/ImagesItem';
import { SearchPlace } from './components/SearchPlace';

function App() {
  const [place, setPlace] = useState(['Ecuador']);

  return (
    <>
    <h1 className='ml-4 text-gray-400'>Realizado por: <span>&copy;</span> Marco Amancha</h1>
      <h1 className='text-2xl text-center text-white mt-4'>DESTINOS</h1>
      <SearchPlace setPlace={setPlace} />
     <section className='cards mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {
        place.map(category => {          
            return(    
              <ImagesItem
              key={category}
              category={category}
              />
            )
        })
      }
     </section>
    </>
  )
}

export default App

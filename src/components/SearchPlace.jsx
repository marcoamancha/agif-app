import { useState } from 'react';

export const SearchPlace = ({setPlace}) => {
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(newPlace => [input, ...newPlace]);
        setInput('');
    }

  return (
    <>

            <form className='flex justify-center my-8' onSubmit={handleSubmit}>
            <input 
                className='border-2 border-slate-50 rounded-full p-2 w-1/2'
                type="text" 
                placeholder='Lugar...'
                value={input}
                onChange={handleInput}
                />
                 <button 
                  onClick={handleSubmit}
                  className='text-white text-lg bg-blue-400 border-2 rounded-full p-2 mx-2 hover:bg-blue-500'>
                    Buscar
                 </button>
            </form>
        
    
    </>
  )
}

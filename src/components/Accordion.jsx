import React, { useState } from 'react';

const Accordion = ({question, answer}) => {
  
  const [open, setOpen] = useState(false);

  // function theButton(){
  //   setOpen(!open)
  // }
  
  return (

    <div className='accordionMain'>
        <div className='thequestion flex items-center justify-between bg-slate-300 rounded p-2 mt-3 mx-3 px-6 text-xl font-medium'> <p className='flex items-center'>{question}</p> <button onClick={() => setOpen(!open) } className='text-3xl text-black font-bold flex items-center duration-150'> { open ? <span>-</span> : <span>+</span> }</button></div>
        { open ? <div className='theanswer bg-slate-200 rounded mb-6 mx-3 p-3 px-6 duration-200'> <p>{answer}</p> </div> : <div className='theanswer rounded duration-300 ease-out transition-all'></div> }
        
    </div>
      
  )
}

export default Accordion
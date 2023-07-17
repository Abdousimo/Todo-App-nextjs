import React, { useState,useEffect } from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import {BiCheckboxChecked,BiCheckbox} from 'react-icons/bi'

const  Items = ({data,setter,courant,mode}) => {

 function handleComplited(id) {
    const newArray = [...data]
    newArray[id].isComplited = !(newArray[id].isComplited)
    setter(newArray)
  }

  function handleDelete(id){
    const newArray = [...data]
    newArray.splice(id,1)
    setter(newArray)
  }

    return (
        <section className={`h-[50vh] w-full max-w-[350px] sm:max-w-[600px] md:max-w-[800px] overflow-auto rounded-t-lg py-5 ${mode ? 'bg-[#2e2c2e]' : 'bg-white'}`}>
                {  data.map((item,index) => (
                    <div key={index} className='w-full h-10 px-4 py-8 flex items-center justify-between border-b-2'>
                        <div className='flex text-center gap-8'>
                            <button onClick={()=> handleComplited(index)} className={`${mode ? 'text-gray-300' : ''}`}>
                                {!item.isComplited ? <BiCheckbox size={35}/> : <BiCheckboxChecked size={35}/>}
                            </button>
                            <p className={`text-xl ${mode ? 'text-gray-300' : ''}`}>{item.name}</p>
                        </div>
                        <button className={mode ? 'text-gray-300' : ''} onClick={()=> handleDelete(index)}>
                           <AiOutlineClose size={25}/>
                        </button>
                    </div>
                ))}

                
        </section>
    );
}

export default Items;
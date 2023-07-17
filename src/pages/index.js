import Head from "next/head"
import React,{useState} from "react"
import {BsSun} from 'react-icons/bs'
import {MdOutlineModeNight} from 'react-icons/md' 
import Items from "@/components/Items"


export default function Home() {
 
  const [courant,setCourant] = useState(1)
  const [item,setItem] = useState('')
  const [items,setItems] = useState([])
  const [mode,setMode] = useState(false)


  const handleSubmit = (e)=>{
    e.preventDefault()
    const tab = [...items]
    tab.push({name:item,isComplited:false})
    setItems(tab)
    document.getElementById("input").value = ""
  }


  return (
    <section>
        <Head>
          <title>Todo-App</title> 
          <meta name="description" content="Generated by create next app"/>
          <link rel="icon" href="favicon.ico"/>
        </Head> 
        <section>
          <div className={mode ? "absolute top-0 left-0 right-0 bottom-0 z-10 w-full bg-[#292729]" : "absolute top-0 left-0 right-0 bottom-0 z-10 w-full"}>
              <img 
                src={'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'}
                alt="/"
                className="w-full max-h-[60vh] object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center z-100">
                    <div className="w-full max-w-[350px] sm:max-w-[600px] md:max-w-[800px] flex items-center justify-between px-3 py-18">
                       <h1 className="text-3xl text-white custom">TO DO</h1>
                       <div onClick={()=> setMode(!mode)} className="text-white text-2xl cursor-pointer">
                         {!mode ?  <MdOutlineModeNight size={30}/> : <BsSun size={30}/>}
                       </div>
                    </div>
                    <form onSubmit={handleSubmit} className='h-[6vh] w-full max-w-[350px] sm:max-w-[600px] md:max-w-[800px] flex items-center justify-center gap-4 rounded-lg my-8'>
                        <input id="input" onChange={(e)=> setItem(e.target.value)} type="text" required placeholder="Add a new todo and Press Enter" className={`h-full w-full pl-3 focus:outline-none bg-transparent text-gray-500 text-xl rounded-lg shadow-lg shadow-gray-300 ${mode ? 'bg-[#4d474d] focus:bg-[#4d474d]' : 'bg-white focus:bg-white'}`}/>
                    </form>
                    {/* Show items to user*/ }
                    <Items data={items} setter={setItems} courant={courant} mode={mode}/>
                    <div className={`w-full h-10 max-w-[350px] sm:max-w-[600px] md:max-w-[800px] px-4 py-8 flex items-center justify-between rounded-b-lg shadow-lg mb-8 border-t-2 border-gray-400 ${mode ? 'bg-[#2e2c2e] shadow-gray-500' : 'bg-white shadow-gray-300'}`}>
                        <h1 className="text-gray-500 texl-xl"><span className="p-2 text-2xl">{items.length}</span>items left</h1>
                        <button onClick={()=> setItems(items.filter((item) => item.isComplited === false ))} className={`text-gray-500 texl-2xl ${mode ? 'hover:text-white' : 'hover:text-black'}`}>Clear Complited</button>
                    </div>
                    <div className={mode ? "h-[6vh] w-full max-w-[350px] sm:max-w-[600px] md:max-w-[800px] flex items-center justify-between rounded-lg px-8 text-xl bg-[#2e2c2e] shadow-lg shadow-gray-500"
                                     :"h-[6vh] w-full max-w-[350px] sm:max-w-[600px] md:max-w-[800px] flex items-center justify-between rounded-lg px-8 text-xl bg-white shadow-lg shadow-gray-300"}>
                      <button onClick={()=> setCourant(1)} className={courant === 1 ? 'text-indigo-600 font-semibold' : 'text-gray-500 font-semibold'}>All</button>
                      <button onClick={()=> setCourant(2)} className={courant === 2 ? 'text-indigo-600 font-semibold' : 'text-gray-500 font-semibold'}>Complited</button>
                      <button onClick={()=> setCourant(3)} className={courant === 3 ? 'text-indigo-600 font-semibold' : 'text-gray-500 font-semibold'}>Active</button>
                    </div>
              </div>
            </div>
          </section>
    </section>
  )
}

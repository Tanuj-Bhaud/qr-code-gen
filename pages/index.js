import Head from 'next/head'
const axios = require('axios');
import { useState, useEffect } from 'react';


export default function Home() { 
const [text, setText] = useState("");



const onButtonClick = ()=>{
  
    axios.get('http://localhost:8080/api.qrserver.com/v1/create-qr-code' , {data: text, size:'100x100s'})
      .then((res)=>{
    
       setImage(res.data)
      })
    
}
let image = `https://api.qrserver.com/v1/create-qr-code/?data=${text}&amp;size=100x100`



 return (
      
     
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
     <Head>
        <title>QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-700">
    

      
  
      





      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
  <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
    QR Code generator
  </div>
  <div className="mt-8">
    <form action="#" autoComplete="off">
      <div className="flex flex-col mb-2">
        <div className="flex relative ">
          
         
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex relative ">
          
        <img src="https://api.qrserver.com/v1/create-qr-code/?data=&amp;size=100x100" alt="" title="" />
          
          <input
            
            className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="text" value={text} placeholder="enter the QR code name" onChange={(e) => setText(e.target.value)}  
          />
        </div>
        <img className="block mx-auto m-4 w-36 h-36" src="https://api.qrserver.com/v1/create-qr-code/?data=icecream&amp;size=100x100" alt="" />
      </div>
      <div className="flex items-center mb-6 -mt-4">
        <div className="flex ml-auto">
         
        </div>
      </div>
      <div className="flex w-full">
        <button onClick={onButtonClick}
          type="submit"
          className="py-2 px-4  bg-blue-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  <div className="flex items-center justify-center mt-6">
 
  </div>
</div>

    </div>
    </div>
  
  )
}
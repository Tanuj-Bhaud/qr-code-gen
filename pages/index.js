import Head from 'next/head'
const axios = require('axios');
import { useState, useEffect } from 'react';


export default function Home() { 
const [text, setText] = useState("");
const [image, setImage] = useState();


const onButtonClick = ()=>{
  
    axios.get('http://localhost:8080/api.qrserver.com/v1/create-qr-code' , {data: text, size:'100x100s'})
      .then((res)=>{
    
       setImage(res.data)
      })
    
}



 return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
     <Head>
        <title>QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>QR Code Generator</h1>
      
      <input type="text" value={text} placeholder="enter the QR code name" onChange={(e) => setText(e.target.value)}  />
      <button onClick={onButtonClick}>Submit</button>
      <p>here is the generated QR code <img src={image} alt="your qr code" title="" /></p>
    </div>
  )
}
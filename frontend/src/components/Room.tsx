import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Room = () => {

    const [searchParams,setSeachParams] = useSearchParams();

    const name = searchParams.get('name');

    useEffect(()=>{
        
    },[name]);

  return (
    <div>
      Hi {name} welcome to the room!
    </div>
  )
}

export default Room

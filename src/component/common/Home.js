import React, {useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { fetchaAsynchData } from '../../redux/rapidApiSlice';
import { getData } from '../../redux/rapidApiSlice'
import { options } from '../../common/otherApi/rapidApi';
import HomeBody from './HomeBody';
import { useState } from 'react';



var axios = require("axios").default;




export const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchaAsynchData())
    },[dispatch]); 
          
  return (
    <div>
      <HomeBody />
    </div>
  )
}

export default Home

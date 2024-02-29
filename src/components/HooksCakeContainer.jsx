import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/actions'

const HooksCakeContainer = () => {
    const [number,setNumber] = useState(1)
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch(number)
    return (
        <>
            <div>No. of cakes : {numOfCakes}</div>
            <input type="number" onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cake</button>
        </>
    )
}

export default HooksCakeContainer
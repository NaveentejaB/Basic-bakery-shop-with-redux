import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { buyIce } from '../redux/actions'

const HooksIceContainer = () => {
    const numOfIces = useSelector(state=>state.ice.numOfIces)
    const dispatch = useDispatch()
    return (
        <>
            <div>No. of Ices : {numOfIces}</div>
            <button onClick={()=>dispatch(buyIce())}>Buy Ice</button>
        </>
    )
}

export default HooksIceContainer
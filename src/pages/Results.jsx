import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Results = () => {
    const [avg , setAvg] = useState(0)
    const dispatch = useDispatch()
    const {results} = useSelector(state=>state.vocabularyReducer)
    useEffect(()=> {
        dispatch({type:'GET__LOCAL__STORAGE__RESULTS',payload:JSON.parse(localStorage.getItem('results')|| '[]')})
    },[])
    useEffect(()=> {
        setAvg(results.reduce((acc,sum)=>sum+acc,0)/results.length)
    },[results])
    console.log(results)
    if(!results.length) {
        return (
            <div className='center'>
                Поки немає результатів
            </div>
        )
    }
    return (
        <div className='center'>
            <h1>Результати</h1>
            <h1>Середній відсоток: {avg.toFixed(2)}%</h1>
            {results.map((item,i)=><p key={i}>{i+1} спроба : {item} %</p>)}
        </div>
    );
};

export default Results;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Results = () => {
    const dispatch = useDispatch()
    const {results} = useSelector(state=>state.vocabularyReducer)
    useEffect(()=> {
        dispatch({type:'GET__LOCAL__STORAGE__RESULTS',payload:JSON.parse(localStorage.getItem('results')|| '[]')})
    },[])
    console.log(results)
    if(!results[0] || !results) {
        return (
            <div className='center'>
                Поки немає результатів
            </div>
        )
    }
    return (
        <div className='center'>
            <h1>Результати</h1>
            {results.map((item,i)=><p>{i+1} спроба : {item} %</p>)}
        </div>
    );
};

export default Results;
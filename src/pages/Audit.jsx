import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "../components/Card";

const Audit = () => {
    const {words} = useSelector(state => state.vocabularyReducer)

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch({type:'GET__LOCAL__STORAGE',payload:JSON.parse(localStorage.getItem('words')|| '[]')})
    },[])

    useEffect(()=> {
        localStorage.setItem("words",JSON.stringify(words))
    },[words])

    console.log(words.length)

    if(words.length < 10) {
        return (
            <div className="center">
                Додайте будь ласка ще {10-words.length} слова(ів) для проходження перевірки
            </div>
        )
    }
    return (<Card />)
};

export default Audit;


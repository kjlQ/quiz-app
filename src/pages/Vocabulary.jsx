import React, {useEffect} from 'react';
import Words from "../components/Words";
import {useDispatch} from "react-redux";

const Vocabulary = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch({type:'GET__LOCAL__STORAGE',payload:JSON.parse(localStorage.getItem('words')|| '[]')})
    },[])
    return (
        <div className='vocabulary'>
            <Words showDelete={false} />
        </div>
    );
};

export default Vocabulary;
import React , {useRef,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Words from "../components/Words";

const AddNewWord = () => {
    const dispatch = useDispatch()
    const engRef = useRef(null)
    const uaRef = useRef(null)
    const {words} = useSelector(state => state.vocabularyReducer)


    useEffect(()=> {
        !words[0] && dispatch({type:'GET__LOCAL__STORAGE',payload:JSON.parse(localStorage.getItem('words'))})
    },[])

    useEffect(()=> {
        localStorage.setItem("words",JSON.stringify(words))
    },[words])


    const resetInputs = () => {
        engRef.current.value=''
        uaRef.current.value=''
    }

    const handleAddWord = () => {
        const item = {
            eng:engRef.current.value,
            ua:uaRef.current.value,
        }
        if (item.eng && item.ua) {
            dispatch({type:'ADD__WORD' , payload:item})
        }
        resetInputs()
    }





    return (
        <section className='addNewWord'>
            <div className="handleInput">
                <div className="language">
                    <span>Eng</span>
                    <span>Ua</span>
                </div>
                <input ref={engRef} type="text" placeholder={'Type new word...'}/>
                <input ref={uaRef} type="text" placeholder={'Введіть слово...'}/>
                <button onClick={()=>handleAddWord()}>Add</button>
            </div>
            <Words showDelete={true} />
        </section>
    );
};

export default AddNewWord;


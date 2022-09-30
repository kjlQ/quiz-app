import React , {useRef,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Words from "../components/Words";
import {preparedWords} from '../js/preparedWords'

const AddNewWord = () => {
    const dispatch = useDispatch()
    const engRef = useRef(null)
    const uaRef = useRef(null)
    const {words} = useSelector(state => state.vocabularyReducer)


    useEffect(()=> {
        !words[0] && dispatch({type:'GET__LOCAL__STORAGE',payload:JSON.parse(localStorage.getItem('words')|| '[]')})
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

    const setPreparedWords = () => {
        preparedWords.map(item=>dispatch({type:'ADD__WORD' , payload : item}))
    }
    return (
        <section className='addNewWord'>
            <button className="addPreparedWords" onClick={()=>setPreparedWords()}>Задати ще 10 заготовлених слів</button>
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


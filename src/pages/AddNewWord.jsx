import React , {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

const AddNewWord = () => {
    const dispatch = useDispatch()
    const {words} = useSelector(state => state.vocabularyReducer)
    const engRef = useRef(null)
    const uaRef = useRef(null)

    const resetInputs = () => {
        engRef.current.value=''
        uaRef.current.value=''
    }


    const deleteWord = (word) => {
        dispatch({type:"DELETE__WORD",payload:word})
        console.log(word)
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
                <input ref={engRef} type="text" placeholder={'Type new word...'}/>
                <input ref={uaRef} type="text" placeholder={'Введіть слово...'}/>
                <button onClick={()=>handleAddWord()}>Add</button>
            </div>
            <div className="words">
                {words &&
                    words.map(item=><Word deleteWord={deleteWord} {...item} />)
                }
            </div>
        </section>
    );
};

export default AddNewWord;

const Word = ({eng,ua,deleteWord}) => {
    return(
        <div className="word">
            <span id="taskname">
                {eng} - {ua}
            </span>
            <button onClick={()=>deleteWord({eng,ua})} className="delete">
                Delete
            </button>
        </div>
    )
}
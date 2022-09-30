import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Words = ({showDelete}) => {
    const dispatch = useDispatch()
    const {words} = useSelector(state => state.vocabularyReducer)
    const deleteWord = (word) => {
        dispatch({type:"DELETE__WORD",payload:word})
    }
    if(!words[0]) {
        return (<h1 className="empty__arr">Тут буде список слів</h1>)
    }

    return (
        <section className="words">
            <h1>Список слів ({words.length})</h1>
            <nav>
                <ul>
                    {words.map((item,i)=><Word key={i} showDelete={showDelete} deleteWord={deleteWord} {...item} />)}
                </ul>
            </nav>
        </section>
    );
};

export default Words;

const Word = ({eng,ua,deleteWord,showDelete}) => {
    return(
        <li>
            <div className="word">
            <span id="taskname">
                {eng} - {ua}
            </span>
                {showDelete &&
                    <button onClick={()=>deleteWord({eng,ua})} className="delete">
                        Delete
                    </button>
                }
            </div>
        </li>
    )
}
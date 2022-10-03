import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Card = () => {
    const [repeatWords , setRepeatWords] = useState(false)
    const [question , setQuestion] = useState(0)
    const [game , setGame] = useState([])
    const [answers , setAnswers] = useState([])
    const [rightQuest , setRightQuest] = useState(0)
    const [questRes , setQuestRes] = useState(0)
    const {words} = useSelector(state => state.vocabularyReducer)
    const {results} = useSelector(state => state.vocabularyReducer)

    const dispatch = useDispatch()


    const randomNumberArr = () => {
        let arr = [];
        while(arr.length < 10){
            let r = Math.floor(Math.random() * words.length);
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        return arr
    }
    const randomNumber = () => {
        return Math.floor(Math.random() * 10)
    }

    const checker = (answers,word) => {
        return answers.includes(word) ? checker(answers,words[randomNumber()]) : word
    }

    const shuffle = () => {
        let arr = []
        const numbers = randomNumberArr()
        for (let i = 0 ; i < 10 ; i++) {
            const ans =[]
            const ansWord = words[numbers[i]]
            ans.push(ansWord)
            setAnswers(prev=>[...prev , ansWord])
            for(let j = 0 ; j < 3 ; j++) {
                const word = words[randomNumber()]
                ans.push(checker(ans,word))
            }
            ans.sort(() => Math.random() - 0.5);
            arr.push(ans)
        }
        setGame(arr)
    }

    useEffect(()=> {
        shuffle()
    },[])

    useEffect(()=> {
        if(question>9) {
            setQuestRes(rightQuest*10)
            dispatch({type:"GET__LOCAL__STORAGE__RESULTS",payload:[...results,rightQuest*10]})
        }
    },[question])

    useEffect(()=> {
        dispatch({type:'GET__LOCAL__STORAGE__RESULTS',payload:JSON.parse(localStorage.getItem('results')||'[]')})
    },[questRes])

    useEffect(()=> {
        localStorage.setItem("results",JSON.stringify(results))
    },[results])

    const handleAnswer = (ans) => {
        if(ans === answers[question]) {
            setRightQuest(prev=>prev+1)
        }
        setQuestion(prev=>prev+1)
    }

    const handleRepeatWords = () => {
        setRightQuest(0)
        setQuestion(0)
        setRepeatWords(true)
    }

    if (!repeatWords || question>9) {
        return(
            <div className="audit">
                <p>Правильні відповіді : {rightQuest*10}%</p>
                <button onClick={()=>handleRepeatWords()}>Повторити слова</button>
            </div>
        )
    }
    return (
        <div className="audit">
            {game[0] && <CardContext handleAnswer={handleAnswer} answer={answers[question]} game={game[question]} /> }
        </div>
    );
};

export default Card;

const CardContext = ({game,answer,handleAnswer}) => {
    return(
        <>
            <div className="give-translate">
                <p>Перекладіть слово <b>{answer.eng}</b></p>
            </div>
            <div className="prepared-words">
                {game.map(item=><button onClick={()=>handleAnswer(item)}>{item.ua}</button>)}
            </div>
        </>
    )
}
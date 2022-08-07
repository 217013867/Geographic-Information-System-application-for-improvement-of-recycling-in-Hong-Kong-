import React, {useEffect, useState} from 'react';
import useSound from "use-sound";

import styles from './millionaire.module.css'

/**
 * For rendering frontend component - Trivia
 * @param {*} param0 
 * @returns {JSX.Element}
 */
export default function Trivia({data, setStop, questionNumber, setQuestionNumber}) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState(styles.answers);
    const [letplay] = useSound('/music/play.mp3')
    const [correctAnswer] = useSound('/music/correct.mp3')
    const [wrongAnswer] = useSound('/music/wrong.mp3')

    useEffect(() => {
        letplay();
    }, [letplay]);

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName(`${styles.answer} ${styles.active}`);
        delay(3000, () => {
            setClassName(a.correct ? `${styles.answer} ${styles.correct}` :
                `${styles.answer} ${styles.wrong}`);
        });
        delay(5000, () => {
                if (a.correct) {
                    correctAnswer();
                    delay(1000, () => {
                        setQuestionNumber(prev => prev + 1);
                        setSelectedAnswer(null);
                    });
                } else {
                    wrongAnswer();
                    delay(1000, () => {
                        setStop(true);
                    });
                }
            }
        );
    };

    return (
        <div className={styles.trivia}>
            <div className={styles.question}>{question?.question}</div>
            <div className={styles.answers}>
                {question?.answers.map((a, i) => (
                    <div key={i}
                         className={selectedAnswer === a ? className : styles.answer}
                         onClick={() => !selectedAnswer && handleClick(a)}
                    >
                        {a.text}
                    </div>
                ))}
            </div>
        </div>
    );
}


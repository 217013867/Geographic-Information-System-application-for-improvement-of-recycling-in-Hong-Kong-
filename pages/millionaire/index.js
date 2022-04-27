import {useEffect, useMemo, useState} from "react";
import Start from "./Start";
import Trivia from "./Trivia";
import Timer from "./Timer";
import styles from './millionaire.module.css'

const Index = () => {
    const [username, setUsername] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState("$ 0");

    const data = [
        {
            id: 1,
            question: "1. Which is the World Environment Day celebrated every year?",
            answers: [
                {
                    text: "June 5",
                    correct: true,
                },
                {
                    text: "October 5",
                    correct: false,
                },
                {
                    text: "June 15",
                    correct: false,
                },
                {
                    text: "January 1",
                    correct: false,
                },
            ],
        },
        {
            id: 2,
            question: "2. By reducing landfills, the benefits are?",
            answers: [
                {
                    text: "Recyclable items can be donated to charity",
                    correct: false,
                },
                {
                    text: "Divert waste from creating more landfills",
                    correct: false,
                },
                {
                    text: "Reducing landfill problems such as leaking of landfill leachate contaminating rivers",
                    correct: false,
                },
                {
                    text: "All of the above",
                    correct: true,
                },
            ],
        },
        {
            id: 3,
            question: "3. Global warming causes climatic anomalies that include concentrated rainfall. This phenomenon has the least impact on which of the following climate hazards?",
            answers: [
                {
                    text: "Torrential rain",
                    correct: false,
                },
                {
                    text: "Flood",
                    correct: false,
                },
                {
                    text: "Sea level rise",
                    correct: true,
                },
                {
                    text: "Landslide",
                    correct: false,
                },
            ],
        },
        {
            id: 4,
            question: "4. How many chasing arrows consist in the international recycling logo?",
            answers: [
                {
                    text: "Two",
                    correct: false,
                },
                {
                    text: "Three",
                    correct: true,
                },
                {
                    text: "Four",
                    correct: false,
                },
                {
                    text: "Five",
                    correct: false,
                },
            ],
        },
        {
            id: 5,
            question: "5. In which of the following recycling, maximum energy is saved?",
            answers: [
                {
                    text: "Steel",
                    correct: false,
                },
                {
                    text: "Cardboard",
                    correct: false,
                },
                {
                    text: "Paper",
                    correct: false,
                },
                {
                    text: "Aluminium cans",
                    correct: true,
                },
            ],
        },
        {
            id: 6,
            question: "6. Which of the following actions will increase the amount of garbage?",
            answers: [
                {
                    text: "Buy products with complex packaging",
                    correct: true,
                },
                {
                    text: "Bring your own utensils to eat out ",
                    correct: false,
                },
                {
                    text: "Bring your own shopping bags",
                    correct: false,
                },
                {
                    text: "Don’t use plastic bags.",
                    correct: false,
                },
            ],
        },
        {
            id: 7,
            question: "7. What is the main reason that batteries should be recycled instead of thrown away?",
            answers: [
                {
                    text: "Rechargeable for reuse",
                    correct: false,
                },
                {
                    text: "Contains plastic that is not easy to decompose, which is likely to cause environmental pollution",
                    correct: false,
                },
                {
                    text: "Contains heavy metals, which is likely to cause environmental pollution ",
                    correct: true,
                },
                {
                    text: "Possible Recycled materials",
                    correct: false,
                },
            ],
        },
        {
            id: 8,
            question: "8. According to Environmental Protection Department, what is the recommended air conditioner temperature?",
            answers: [
                {
                    text: "25.0",
                    correct: false,
                },
                {
                    text: "25.5",
                    correct: true,
                },
                {
                    text: "26.0",
                    correct: false,
                },
                {
                    text: "26.5",
                    correct: false,
                },
            ],
        },
        {
            id: 9,
            question: "9. Which of the following items cannot be recycled?",
            answers: [
                {
                    text: "Tissue",
                    correct: true,
                },
                {
                    text: "Waste paper",
                    correct: false,
                },
                {
                    text: "Glass",
                    correct: false,
                },
                {
                    text: "Plastics",
                    correct: false,
                },
            ],
        },
        {
            id: 10,
            question: "10.	Which of the following Waste Plastics items should be recycled?",
            answers: [
                {
                    text: "Beverage plastic bottles",
                    correct: true,
                },
                {
                    text: "Plastic products with metal",
                    correct: false,
                },
                {
                    text: "Play clay",
                    correct: false,
                },
                {
                    text: "Plastic tape",
                    correct: false,
                },
            ],
        },
        {
            id: 11,
            question: "11. Which of the following thing should not be done before recycling plastic bottles?",
            answers: [
                {
                    text: "Remove the plastic caps",
                    correct: false,
                },
                {
                    text: "Remove the labels",
                    correct: false,
                },
                {
                    text: "Remove the rinse",
                    correct: false,
                },
                {
                    text: "Throw directly",
                    correct: true,
                },
            ],
        },
        {
            id: 12,
            question: "12. Which of the following this should not be done before recycling paper?",
            answers: [
                {
                    text: "Tear off plastic tape",
                    correct: false,
                },
                {
                    text: "Remove non-paper materials",
                    correct: false,
                },
                {
                    text: "Keep dry",
                    correct: false,
                },
                {
                    text: "Throw directly",
                    correct: true,
                },
            ],
        },
        {
            id: 13,
            question: "13.	Which of the following thing should not be recycling as paper?",
            answers: [
                {
                    text: "Book",
                    correct: false,
                },
                {
                    text: "Office paper",
                    correct: false,
                },
                {
                    text: "Cardboard",
                    correct: false,
                },
                {
                    text: "Photographs",
                    correct: true,
                },
            ],
        },
        {
            id: 14,
            question: "14. What kind of used clothing items will not be accepted for donation under the Scheme?",
            answers: [
                {
                    text: "Footwear",
                    correct: false,
                },
                {
                    text: "Worn-out or broken clothing",
                    correct: true,
                },
                {
                    text: "Handbags",
                    correct: false,
                },
                {
                    text: "Dolls in good condition",
                    correct: false,
                },
            ],
        },
        {
            id: 15,
            question: "15. Which of the following items can be recycled?",
            answers: [
                {
                    text: "A. Disk",
                    correct: false,
                },
                {
                    text: "X-ray Film Sheet",
                    correct: false,
                },
                {
                    text: "Waste dry battery",
                    correct: false,
                },
                {
                    text: "All of the above",
                    correct: true,
                },
            ],
        },
    ];


    const moneyPyramid = useMemo(
        () =>
            [
                {id: 1, amount: "$ 100"},
                {id: 2, amount: "$ 200"},
                {id: 3, amount: "$ 300"},
                {id: 4, amount: "$ 500"},
                {id: 5, amount: "$ 1.000"},
                {id: 6, amount: "$ 2.000"},
                {id: 7, amount: "$ 4.000"},
                {id: 8, amount: "$ 8.000"},
                {id: 9, amount: "$ 16.000"},
                {id: 10, amount: "$ 32.000"},
                {id: 11, amount: "$ 64.000"},
                {id: 12, amount: "$ 125.000"},
                {id: 13, amount: "$ 250.000"},
                {id: 14, amount: "$ 500.000"},
                {id: 15, amount: "$ 1.000.000"},
            ].reverse(),
        []
    );

    useEffect(() => {
        questionNumber > 1 &&
        setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }, [questionNumber, moneyPyramid]);

    return (
        <div className={`page-container ${styles.app}`}>
            {username ? (
                <>
                    <div className={styles.main2}>
                        {stop ? (
                            <h1 className={styles.endText}>You earned: {earned}</h1>
                        ) : (
                            <>
                                <div className={styles.top}>
                                    <div className={styles.timer}>
                                        <Timer setStop={setStop} questionNumber={questionNumber}/>
                                    </div>
                                </div>
                                <div className={styles.bottom}>
                                    <Trivia
                                        data={data}
                                        questionNumber={questionNumber}
                                        setQuestionNumber={setQuestionNumber}
                                        setStop={setStop}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <div className={styles.pyramid}>
                        <ul className={styles.moneyList}>
                            {moneyPyramid.map((m) => (
                                <li key={m.id} className={questionNumber === m.id ? `${styles.moneyListItem} ${styles.active}` : styles.moneyListItem}>
                                    <span className={styles.moneyListItemNumber}>{m.id}</span>
                                    <span className={styles.moneyListItemAmount}>{m.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <Start setUsername={setUsername}/>
            )}
        </div>
    );
}

export default Index
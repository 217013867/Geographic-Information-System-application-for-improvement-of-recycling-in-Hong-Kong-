import { useRef } from "react";
import styles from './millionaire.module.css'

export default function Start({ setUsername }) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    };

    return (
        <div className={styles.start}>
            <input
                className={styles.startInput}
                placeholder="enter your name"
                ref={inputRef}
            />
            <button className={styles.startButton} onClick={handleClick}>
                Start
            </button>
        </div>
    );
}

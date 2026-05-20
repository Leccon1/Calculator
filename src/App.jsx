import { useState } from 'react'
import styles from './App.module.scss'

function App() {
	const currentValue = useState(0)
	return (
		<div className={styles.App}>
			<div className={styles.calculator}>
				<span>{currentValue}</span>
				<div className={styles.buttonsContainer}>
					<div className={`${styles.buttonHelpers} ${styles.container}`}>
						<button className={styles.button}>Ac</button>
						<button className={styles.button}>&#8592;</button>
						<button className={styles.button}>/</button>
						<button className={styles.button}>*</button>
					</div>
					<div className={`${styles.buttonNumbers} ${styles.container}`}>
						<button className={styles.button}>1</button>
						<button className={styles.button}>2</button>
						<button className={styles.button}>3</button>
						<button className={styles.button}>4</button>
						<button className={styles.button}>5</button>
						<button className={styles.button}>6</button>
						<button className={styles.button}>7</button>
						<button className={styles.button}>8</button>
						<button className={styles.button}>9</button>
						<button className={styles.button}>0</button>
						<button className={styles.button}>.</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

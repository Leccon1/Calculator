import { useState } from 'react'
import styles from './App.module.scss'

function App() {
	const currentValue = useState(0)
	return (
		<div className={styles.App}>
			<div className={styles.calculator}>
				<div className={styles.results}>
					<span className={styles.history}>0</span>
					<span className={styles.currentValue}>{currentValue}</span>
				</div>
				<div className={styles.buttonsContainer}>
					<div className={`${styles.buttonHelpers} ${styles.container}`}>
						<button className={styles.button}>Ac</button>
						<button className={styles.button}>&#8592;</button>
						<button className={`${styles.button} ${styles['button--accent']}`}>
							/
						</button>
						<button className={`${styles.button} ${styles['button--accent']}`}>
							&#215;
						</button>
					</div>
					<div className={styles.block}>
						<div className={`${styles.buttonNumbers} ${styles.container}`}>
							<button className={styles.button}>7</button>
							<button className={styles.button}>8</button>
							<button className={styles.button}>9</button>
							<button className={styles.button}>4</button>
							<button className={styles.button}>5</button>
							<button className={styles.button}>6</button>
							<button className={styles.button}>1</button>
							<button className={styles.button}>2</button>
							<button className={styles.button}>3</button>
							<button className={styles.button}>0</button>
							<button className={styles.button}>.</button>
						</div>
						<div className={`${styles.buttonHelpers} ${styles.container}`}>
							<button
								className={`${styles.button} ${styles['button--accent']}`}
							>
								-
							</button>
							<button
								className={`${styles.button} ${styles['button--accent']}`}
							>
								+
							</button>
							<button
								className={`${styles.button} ${styles['button--equals']} ${styles['button--accent']}`}
							>
								=
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

import { useState } from 'react'
import styles from './App.module.scss'

function App() {
	const [expression, setExpression] = useState('')
	const [resultValue, setResultValue] = useState(0)
	const [isCalculated, setIsCalculated] = useState(false)

	const handleNumber = value => {
		if (isCalculated === true) {
			setExpression('')
			setIsCalculated(false)
		}

		expression === '0'
			? setExpression(value)
			: setExpression(expression + value)
	}

	const handleOperator = operator => {
		if (isCalculated === true) {
			operator === '='
				? setExpression(expression)
				: setExpression(expression + operator)
		}

		expression === '' && operator === '-'
			? setExpression(operator)
			: setExpression(expression + operator)

		expression.length[-1] === operator ? expression.slice(0, -1) : expression
	}

	const handleClear = () => {
		setExpression('')
		setResultValue(0)
		setIsCalculated(false)
	}

	return (
		<div className={styles.App}>
			<div className={styles.calculator}>
				<div className={styles.results}>
					<span className={styles.history}>0</span>
					<span className={styles.currentValue}>{resultValue}</span>
				</div>
				<div className={styles.buttonsContainer}>
					<div className={`${styles.buttonHelpers} ${styles.container}`}>
						<button data-type='clear' className={styles.button}>
							Ac
						</button>
						<button data-type='delete' className={styles.button}>
							&#8592;
						</button>
						<button
							data-type='operator'
							data-value='÷'
							className={`${styles.button} ${styles['button--accent']}`}
						>
							/
						</button>
						<button
							data-type='operator'
							data-value='*'
							className={`${styles.button} ${styles['button--accent']}`}
						>
							&#215;
						</button>
					</div>
					<div className={styles.block}>
						<div className={`${styles.buttonNumbers} ${styles.container}`}>
							<button
								data-type='number'
								data-value='7'
								className={styles.button}
							>
								7
							</button>
							<button
								data-type='number'
								data-value='8'
								className={styles.button}
							>
								8
							</button>
							<button
								data-type='number'
								data-value='9'
								className={styles.button}
							>
								9
							</button>
							<button
								data-type='number'
								data-value='4'
								className={styles.button}
							>
								4
							</button>
							<button
								data-type='number'
								data-value='5'
								className={styles.button}
							>
								5
							</button>
							<button
								data-type='number'
								data-value='6'
								className={styles.button}
							>
								6
							</button>
							<button
								data-type='number'
								data-value='1'
								className={styles.button}
							>
								1
							</button>
							<button
								data-type='number'
								data-value='2'
								className={styles.button}
							>
								2
							</button>
							<button
								data-type='number'
								data-value='3'
								className={styles.button}
							>
								3
							</button>
							<button
								data-type='number'
								data-value='0'
								className={styles.button}
							>
								0
							</button>
							<button
								data-type='number'
								data-value='.'
								className={styles.button}
							>
								.
							</button>
						</div>
						<div className={`${styles.buttonHelpers} ${styles.container}`}>
							<button
								data-type='operator'
								data-value='-'
								className={`${styles.button} ${styles['button--accent']}`}
							>
								-
							</button>
							<button
								data-type='operator'
								data-value='+'
								className={`${styles.button} ${styles['button--accent']}`}
							>
								+
							</button>
							<button
								data-type='evaluate'
								data-value='='
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

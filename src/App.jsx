import { useState } from 'react'
import styles from './App.module.scss'

function App() {
	const [expression, setExpression] = useState('')
	const [resultValue, setResultValue] = useState(0)
	const [isCalculated, setIsCalculated] = useState(false)

	const handleNumber = value => {
		if (isCalculated === true) {
			setExpression(value)
			setIsCalculated(false)
			return
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

		expression.slice(-1) === operator
			? setExpression(expression.slice(0, -1))
			: expression
	}

	const handleClear = () => {
		setExpression('')
		setResultValue(0)
		setIsCalculated(false)
	}

	const handleDelete = () => {
		expression.length > 0
			? setExpression(expression.slice(0, -1))
			: setExpression(0)

		if (expression.length === 0) {
			setResultValue(0)
		}
	}

	const handleEvaluate = () => {
		if (expression.length === 0) {
			return
		}

		if (/[+\-*/]$/.test(expression)) {
			setExpression(expression.slice(0, -1))
		}

		let finalLine = expression.replaceALL('&#215;', '*')

		if (finalLine.includes('/0') && !finalLine.slice(-1) === '.') {
			setResultValue('Error')
			setIsCalculated(true)
			return
		}
	}

	const handleButtonClick = e => {
		const button = e.target.closest('button')
		if (!button) return
		const { type, value } = button.dataset

		switch (type) {
			case 'number':
				handleNumber(value)
				break
			case 'operator':
				handleOperator(value)
				break
			case 'clear':
				handleClear()
				break
			case 'delete':
				handleDelete()
				break
			case 'evaluate':
				handleEvaluate()
				break
		}
	}

	return (
		<div className={styles.App}>
			<div className={styles.calculator}>
				<div className={styles.results}>
					<span className={styles.history}>0</span>
					<span className={styles.currentValue}>{resultValue}</span>
				</div>
				<div className={styles.buttonsContainer} onClick={handleButtonClick}>
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

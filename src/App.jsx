import { useEffect, useState } from 'react'
import styles from './App.module.scss'

function App() {
	const [historyValue, setHistoryValue] = useState('0 =')
	const [resultValue, setResultValue] = useState('0')
	const [isCalculated, setIsCalculated] = useState(false)

	const handleNumber = value => {
		if (isCalculated === true) {
			setResultValue(value)
			setIsCalculated(false)
			return
		}

		resultValue === '0'
			? setResultValue(value)
			: setResultValue(resultValue + value)
	}

	const handleOperator = operator => {
		if (isCalculated === true) {
			operator === '='
				? setResultValue(resultValue)
				: setResultValue(resultValue + operator)
			return
		}

		if (resultValue === '0' && operator === '-') {
			setResultValue(operator)
		} else if (/[+\-*/]$/.test(resultValue)) {
			setResultValue(
				resultValue.length === 1 ? '0' : resultValue.slice(0, -1) + operator,
			)
		} else {
			setResultValue(resultValue + operator)
		}
	}

	const handleDot = () => {
		const tokens = resultValue.split(/([+\-*/])/)
		const lastToken = tokens[tokens.length - 1]

		if (!lastToken.includes('.')) {
			setResultValue(lastToken === '' ? resultValue + '0.' : resultValue + '.')
		}
	}

	const handleClear = () => {
		setResultValue('0')
		setIsCalculated(false)
		setHistoryValue('0 =')
	}

	const handleDelete = () => {
		resultValue.length > 1
			? setResultValue(resultValue.slice(0, -1))
			: setResultValue('0')

		if (resultValue.length === 0) {
			setResultValue('0')
		}
	}

	const handleEvaluate = () => {
		if (resultValue.length === 0) {
			return
		}

		if (/[+\-*/×÷]/.test(resultValue)) {
			setResultValue(resultValue.slice(0, -1))
		}

		setHistoryValue(resultValue + ' =')

		if (resultValue.includes('/0') && resultValue.slice(-1) !== '.') {
			setResultValue('Error')
			setIsCalculated(true)
			return
		}

		try {
			const result = new Function(`return ${resultValue}`)()
			setResultValue(String(result))
			setIsCalculated(true)
		} catch (error) {
			setResultValue('Error')
			setIsCalculated(true)
		}
	}

	const handleButtonClick = e => {
		const button = e.target.closest('button')
		if (!button) return
		const { type, value } = button.dataset

		if (resultValue === 'Error' && type !== 'clear') {
			return
		}

		switch (type) {
			case 'number':
				handleNumber(value)
				break
			case 'operator':
				handleOperator(value)
				break
			case 'dot':
				handleDot()
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

	useEffect(() => {
		const handleKeyDown = e => {
			const key = e.key

			if (/[0-9.]/.test(key)) handleNumber(key)
			else if (/[+\-*/]/.test(key)) handleOperator(key)
			else if (key === '.') handleDot()
			else if (key === 'Backspace') handleDelete()
			else if (key === 'Escape') handleClear()
			else if (key === 'Enter' || key === '=') handleEvaluate()
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [resultValue])

	return (
		<div className={styles.App}>
			<div className={styles.calculator}>
				<div className={styles.results}>
					<span className={styles.history}>{historyValue}</span>
					<span className={styles.currentValue}>
						{resultValue.replaceAll('*', '×').replaceAll('/', '÷')}
					</span>
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
							data-value='/'
							className={`${styles.button} ${styles['button--accent']}`}
						>
							&#247;
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
							<button data-type='dot' data-value='.' className={styles.button}>
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

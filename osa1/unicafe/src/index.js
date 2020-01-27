import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value, ending }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value} {ending}</td>
		</tr>
	)
}

const Statistics = ({good, neutral, bad}) => {
	const total = good + neutral + bad
	
	if (total === 0) {
		return (
			<div>
				<p>No feedback given</p>
			</div>
		)
	}
	
	const average = (good + -1 * bad) / total
	const positive = good * 100 / total
	
	return (
		<table>
			<tbody>
				<StatisticLine text="Good" value={good} />
				<StatisticLine text="Neutral" value={neutral} />
				<StatisticLine text="Bad" value={bad} />
				<StatisticLine text="All" value={total} />
				<StatisticLine text="Average" value={average} />
				<StatisticLine text="Positive" value={positive} ending="%" />
			</tbody>
		</table>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	
	const handleClickGood = () => {
		setGood(good + 1)
	}
	
	const handleClickNeutral = () => {
		setNeutral(neutral + 1)
	}
	
	const handleClickBad = () => {
		setBad(bad + 1)
	}
	
	return (
		<div>
			<Header title="Give feedback" />
			<Button handleClick={handleClickGood} text="Good" />
			<Button handleClick={handleClickNeutral} text="Neutral" />
			<Button handleClick={handleClickBad} text="Bad" />
			
			<Header title="Statistics" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

ReactDOM.render(<App />, 
	document.getElementById('root')
)
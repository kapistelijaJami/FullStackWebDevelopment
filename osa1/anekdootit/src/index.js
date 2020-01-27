import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = ({ anecdotes }) => {
	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
	
	const randomize = () => {
		let rand = 0;
		while (true) {
			rand = Math.floor(Math.random() * anecdotes.length)
			if (rand !== selected) {
				break;
			}
		}
		setSelected(rand)
	}
	
	const vote = () => {
		const copy = [...points]
		copy[selected] = points[selected] + 1
		setPoints(copy)
	}
	
	const mostVotes = () => {
		let largestIndex = 0
		let votes = 0
		let i
		for (i = 0; i < anecdotes.length; i++) {
			if (points[i] > votes) {
				largestIndex = i
				votes = points[i]
			}
		}
		
		return largestIndex
	}

	return (
		<div>
			<Header title="Anecdote of the day" />
			<p>{anecdotes[selected]}</p>
			<p>Has {points[selected]} votes</p>
			<Button handleClick={vote} text="Vote" />
			<Button handleClick={randomize} text="Next anecdote" />
			
			<Header title="Anecdote with most votes" />
			<p>{anecdotes[mostVotes()]}</p>
		</div>
	)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
	<App anecdotes={anecdotes} />,
	document.getElementById('root')
)
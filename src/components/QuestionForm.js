import { useState } from 'react'

function QuestionForm() {
	const [inputValue, setInputValue] = useState('Ask your question here')

	const isInputError = inputValue.includes('f')
	function checkValue(value) {
		if (!value.includes('f')) {
			setInputValue(value)
		}
	}
	return (
		<div>
			{isInputError && (
				<div>🔥 You are not allowed to use the letter 'f' here.</div>
			)}
			<textarea
				value={inputValue}
				onChange={(e) => checkValue(e.target.value)}
			/>

			<button onClick={() => alert(inputValue)}>Alert me 🚨</button>
		</div>
	)
}

export default QuestionForm

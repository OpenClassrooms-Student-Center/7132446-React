import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, there is no @, this is not a valid address 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
			For plant enthusiasts 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Subscribe to our newsletter :</div>
			<input
				placeholder='Enter your email'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer

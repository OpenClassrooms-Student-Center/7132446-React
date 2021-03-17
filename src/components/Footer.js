import { useState, useEffect } from 'react'
import '../styles/Footer.css'

function Footer({ cart }) {
	const [inputValue, setInputValue] = useState('')

	useEffect(() => {
		console.log(`1️⃣ This alert is displayed for each rendering`)
	})

	useEffect(() => {
		console.log(`2️⃣ This alert is displayed at first rendering`)
	}, [])

	useEffect(() => {
		console.log(
			`3️⃣ This alert appears the first time and when my basket is updated`
		)
	}, [cart])

	useEffect(() => {
		return () =>
			console.log(`4️⃣ This alert is displayed when Footer is removed from the DOM`)
	}, [cart])
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

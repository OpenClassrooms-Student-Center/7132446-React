import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
			For plant enthusiasts 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Leave us your email :</div>
		</footer>
	)
}

export default Footer

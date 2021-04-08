import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
// import QuestionForm from './QuestionForm'
import ShoppingList from './ShoppingList'

import '../styles/App.css'

function App() {
	const [cart, updateCart] = useState({})
	return (
		<div>
			<Banner>
				<img src={logo} alt='Jungle House' className='jh-logo' />
				<h1 className='jh-title'>Jungle House</h1>
			</Banner>
			{/* <QuestionForm /> */}
			<div className='jh-layout'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
		</div>
	)
}

export default App

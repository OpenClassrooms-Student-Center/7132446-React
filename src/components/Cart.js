import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const monsteraPrice = 8

	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			<h2>Cart</h2>
			<div>Monstera : {monsteraPrice}€</div>
			<h3>Total : {monsteraPrice * cart}€</h3>
			<button onClick={() => updateCart(0)}>Empty the cart</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open Cart
			</button>
		</div>
	)
}

export default Cart

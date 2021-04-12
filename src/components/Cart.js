import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.quantity * plantType.price,
		0
	)
	return isOpen ? (
		<div className='jh-cart'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			<h2>Cart</h2>
			{cart.map(({ name, price, quantity }, index) => (
				<div key={`${name}-${index}`}>
					{name} {price}€ x {quantity}
				</div>
			))}

			<h3>Total : {total}€</h3>
			<button onClick={() => updateCart([])}>Empty the cart</button>
		</div>
	) : (
		<div className='jh-cart-closed'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open Cart
			</button>
		</div>
	)
}

export default Cart

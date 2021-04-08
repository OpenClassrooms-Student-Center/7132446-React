import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const items = Object.keys(cart)
	const total = items.reduce(
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}€ in purchases`
	}, [total])

	return isOpen ? (
		<div className='jh-cart'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Cart</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Empty the cart</button>
				</div>
			) : (
				<div>Your cart is empty</div>
			)}
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

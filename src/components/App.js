import Banner from './Banner'
import logo from '../assets/logo.png'
// import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='Jungle House' className='jh-logo' />
				<h1 className='jh-title'>Jungle House</h1>
			</Banner>

			{/* <Cart /> */}
			<ShoppingList />
			<Footer />
		</div>
	)
}

export default App

import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='Jungle House' className='lmj-logo' />
				<h1 className='lmj-title'>Jungle House</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
			<Footer />
		</div>
	)
}

export default App

import Banner from './Banner'
import logo from '../assets/logo.png'
// import Cart from './Cart'
import QuestionForm from './QuestionForm'
import ShoppingList from './ShoppingList'

function App() {
	return (
		<div>
			<Banner>
			<img src={logo} alt='Jungle House' />
				<h1 className='lmj-title'>Jungle House</h1>
			</Banner>
			<QuestionForm />

			{/* <Cart /> */}
			<ShoppingList />
		</div>
	)
}

export default App

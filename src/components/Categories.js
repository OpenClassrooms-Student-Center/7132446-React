import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='jh-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='jh-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Reset</button>
		</div>
	)
}

export default Categories

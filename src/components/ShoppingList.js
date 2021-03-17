const plantList = [
	'monstera',
	'ficus lyrata',
	'silver pothos',
	'yucca',
	'palmier'
]

function ShoppingList() {
	return (
		<ul>
			{plantList.map((plant, index) => (
				<li key={`${plant}-${index}`}>{plant}</li>
			))}
		</ul>
	)
}

export default ShoppingList

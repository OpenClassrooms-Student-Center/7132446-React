import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Here, is a way of doing it.
// You could also have used a function that returns the desired element,
// or enter conditions directly
const quantityLabel = {
	1: 'little',
	2: 'moderate',
	3: 'much'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`This plant requires ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'light' : "watering"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale

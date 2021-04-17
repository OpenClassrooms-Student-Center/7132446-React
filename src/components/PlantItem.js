import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`You want to buy 1 ${plantName}? Great choice 🌱✨`)
}

function PlantItem({ cover, name, water, light }) {
	return (
		<li className='jh-plant-item' onClick={() => handleClick}>
			<img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem

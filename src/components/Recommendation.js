function Recommendation() {
  const currentMonth = new Date().getMonth()
	const isSpring = currentMonth >=2 && currentMonth <= 5

  if (isSpring) {
    return <div>It's spring, time to repot! 🌱</div>
  }
  return <div>It's not time to repot.</div>
}

export default Recommendation

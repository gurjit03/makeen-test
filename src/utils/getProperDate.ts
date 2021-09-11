const getProperDate = (date: string): string => {
	const currentDate = new Date(date)
	const day = currentDate.getDate()
	const month = currentDate.getMonth() + 1
	const year = currentDate.getFullYear().toString().substr(-2)
	return `${day}.${month}.${year}`
}

export default getProperDate

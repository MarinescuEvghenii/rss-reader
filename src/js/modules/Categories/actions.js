export const add = (category) => {
	return {
		type: 'category/add',
		category
	}
}

export const remove = (category) => {
	return {
		type: 'category/remove',
		category
	}
}

export const setCurrent = (category) => {
	return {
		type: 'category/current',
		category
	}
}

export const setDefault = (category) => {
	return {
		type: 'category/default',
		category
	}
}

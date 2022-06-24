function createPhoneNumber(n){
		let mask = `(xxx) xxx-xxxx`
		n.forEach(i=>mask=mask.replace('x',i))
		return mask
}
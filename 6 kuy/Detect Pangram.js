const isPangram = (str)=> {
		const alph = 'abcdefghijklmnopqrstuvwxyz'.split("")
		str = str.toLowerCase()
		return alph.every(l=>str.includes(l))
}
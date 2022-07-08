function vaporcode(string) {
		return string.replace(/\s/g, '').split('').map(l=>l.toUpperCase()).join('  ')
}
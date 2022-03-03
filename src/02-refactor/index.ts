// Do not use regex str.replace(/[aeiou]/gi, "");
// Expect "This website is for losers LOL!" to be "Ths wbst s fr lsrs LL!'"

export function removeVowels(string: string): string {
	const vowel = ['a', 'e', 'i', 'o', 'u'];
	const letters = string.split('');
	let result = '';

	for (let i = 0; i < letters.length; i++) {
		if (
			letters[i].toLowerCase() !== vowel[0] &&
			letters[i].toLowerCase() !== vowel[1] &&
			letters[i].toLowerCase() !== vowel[2] &&
			letters[i].toLowerCase() !== vowel[3] &&
			letters[i].toLowerCase() !== vowel[4]
		) {
			result += letters[i];
		}
	}

	return result;
}

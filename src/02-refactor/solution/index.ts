export function removeVowels(string: string): string {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const letters = string.split('');

	return letters.filter((letter) => !vowels.includes(letter.toLocaleLowerCase())).join('');
}

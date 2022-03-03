import { describe, it, expect } from '@jest/globals';
import { removeVowels } from '.';

describe('Refactor', () => {
	it('should remove vowels', () => {
		expect(removeVowels('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!');
	});
});

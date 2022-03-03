import { describe, it, expect } from '@jest/globals';
import ArrayList from '.';

describe('Array list', () => {
	it('should create array list', () => {
		const arrayList = new ArrayList();

		expect(arrayList).toBeInstanceOf(ArrayList);
	});

	it('should have 0 length', () => {
		const arrayList = new ArrayList();

		expect(arrayList.length).toBe(0);
	});

	it('should push to array list', () => {
		const arrayList = new ArrayList();

		arrayList.push('a').push('b').push('c');

		expect(arrayList.length).toBe(3);
	});

	it('should get item on index', () => {
		const arrayList = new ArrayList();

		arrayList.push('a').push('b').push('c');

		expect(arrayList.get(1)).toBe('b');
		expect(arrayList.get(4)).toBeUndefined();
	});

	it('should pop from array list', () => {
		const arrayList = new ArrayList();

		arrayList.push('a').push('b').push('c');

		expect(arrayList.pop()).toBe('c');
	});
});

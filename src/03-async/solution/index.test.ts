// toHaveLength

import { describe, it, expect, jest } from '@jest/globals';
import * as ApiService from '.';

describe('Async', () => {
	it('should resolve async call', async () => {
		const mock = jest.spyOn(ApiService, 'fetchYear');
		const year = await ApiService.fetchYear();

		expect(year).toBe(2022);
		expect(mock).toBeCalled();
	});

	it('should check current year', async () => {
		const fetchYearMock = jest.spyOn(ApiService, 'fetchYear');

		expect(await ApiService.isCurrentYear(2022)).toBeTruthy();
		expect(await ApiService.isCurrentYear(2021)).toBeFalsy();

		fetchYearMock.mockResolvedValue(2021);

		expect(await ApiService.isCurrentYear(2022)).toBeFalsy();
		expect(await ApiService.isCurrentYear(2021)).toBeTruthy();
	});

	it('should call error handler', async () => {
		const fetchYearMock = jest.spyOn(ApiService, 'fetchYear');
		const handleErrorMock = jest.spyOn(ApiService, 'handleError');

		fetchYearMock.mockRejectedValue('error');

		await ApiService.isCurrentYear(2022);

		expect(handleErrorMock).toBeCalledWith('error');
	});

	it('should return user data', async () => {
		const user = await ApiService.getUser(1);

		expect(user).toMatchObject({ id: 1 });
		expect(user).toMatchInlineSnapshot(`
Object {
  "age": 43,
  "id": 1,
  "name": "Foo Bar",
}
`);
	});
});

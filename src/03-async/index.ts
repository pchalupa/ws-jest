export const handleError = (error: string) => {
	const errors: string[] = [];

	errors.push(error);
};

const makePromise = <T extends unknown>(handler: (resolve: (value: T) => void) => void, timeout = 250): Promise<T> => {
	return new Promise((resolve) => {
		setTimeout(() => handler(resolve), timeout);
	});
};

export const fetchYear = async (): Promise<number> => {
	return makePromise<number>((resolve) => {
		const date = new Date();

		resolve(date.getFullYear());
	});
};

export const isCurrentYear = async (year: number) => {
	try {
		const currentYear = await fetchYear();

		return currentYear === year;
	} catch (error) {
		if (typeof error === 'string') handleError(error);
	}
};

export const getUser = async (_: number) => {
	return makePromise((resolve) => {
		const userFromBackend = { id: 1, name: 'Foo Bar', age: '43' };
		const user = { ...userFromBackend, age: parseInt(userFromBackend.age, 10) };

		resolve(user);
	});
};

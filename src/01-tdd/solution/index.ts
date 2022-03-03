export default class ArrayList {
	length = 0;
	private data: Record<number, unknown> = {};

	push(value: unknown) {
		this.data[this.length] = value;
		this.length++;

		return this;
	}

	pop() {
		const value = this.data[this.length - 1];

		this.length--;

		return value;
	}

	get(index: number) {
		return this.data[index];
	}
}

import {
	defineStore
} from 'pinia';

export const counterStore = defineStore({
	state: () => ({
		counter: 0,
	}),
	actions: {
		onAdd() {
			this.counter++;
		}
	}
})
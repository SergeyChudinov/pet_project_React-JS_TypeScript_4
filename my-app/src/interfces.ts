export interface ITodo {
	title: string
	id: number
	completed: boolean
}

export type TodoWithoutId = Omit<ITodo, 'id'>;
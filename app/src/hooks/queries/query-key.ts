export function getTodosKeys(user: string) {
	return ["todos", user];
}

export function getToDoKey(id: string) {
	return ["todo", id];
}

export function getUsersKey() {
	return ["users"];
}

export function getUserKey(id: string) {
	return ["users", id];
}

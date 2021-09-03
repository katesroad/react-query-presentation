export interface IUserData {
	age: number;
	email: string;
	name: string;
}

export interface IUser extends IUserData {
	_id: string;
}
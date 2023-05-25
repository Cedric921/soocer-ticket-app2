declare interface IUser {
	id: string;
	names: string;
	email: string;
	role: string;
	createdAt: Date;
	updatedAt: Date;
}

declare interface IAuthState {
	user: (IUser & { token: string }) | null;
	status: { isLoading: boolean; isSuccess: boolean; isError: boolean };
	message: string;
}

declare interface IUserState {
	users: IUser[] | null;
	status: { isLoading: boolean; isSuccess: boolean; isError: boolean };
	message: string;
}

declare interface ICompetition {
	title: string;
	createdAt: Date;
	updatedAt: Date;
}

declare interface ICopmetitionState {
	competitons: ICompetition[] | null;
	status: { isLoading: boolean; isSuccess: boolean; isError: boolean };
	message: string;
}

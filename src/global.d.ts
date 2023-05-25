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
	id: string;
	title: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
}

declare interface ICopmetitionState {
	competitons: ICompetition[] | null;
	status: { isLoading: boolean; isSuccess: boolean; isError: boolean };
	message: string;
}

declare interface ITeam {
	id: string;
	title: string;
	town: string;
	sigle: string;
	createdAt: Date;
	updatedAt: Date;
}

declare interface ITeamState {
	teams: ITeam[] | null;
	status: { isLoading: boolean; isSuccess: boolean; isError: boolean };
	message: string;
}

declare interface IGame {
	id: string;
	date: Date;
	createdAt: Date;
	updatedAt: Date;
	teamOneId: string;
	teamTwoId: string;
	competitionId: string;
	TeamOne: ITeam;
	TeamTwo: ITeam;
}

declare interface IGameState {
	games: IGame[] | null;
	status: { isLoading: boolean; isSuccess: boolean; isError: boolean };
	message: string;
}

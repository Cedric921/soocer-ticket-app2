export const checkAdminRoute = (route: string) => {
	return route.split('/').includes('admin') ?? false;
};

export const checkActiveRoute = (route: string, value: string) => {
	return route === value;
};

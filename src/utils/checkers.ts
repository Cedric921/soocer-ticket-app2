export const checkAdminRoute = (route: string) => {
	return route.split('/').includes('admin') ?? false;
};

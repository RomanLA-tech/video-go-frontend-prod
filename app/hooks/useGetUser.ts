import { IUser } from '@/types/user.interface';

import { useAuth } from '@/hooks/useAuth';

import { api } from '@/store/api/api';

interface IUserData {
	user: IUser;
	status: {
		isLoading: boolean;
		isSuccess: boolean;
		isError: boolean;
		error: any;
		refetch: () => void;
	};
	authData: {
		accessToken: string;
	};
}

const useGetUser = (): IUserData => {
	const { user, accessToken } = useAuth();
	const { data, isLoading, isSuccess, isError, error, refetch } =
		api.useGetProfileByIdQuery(user?.id!, {
			skip: !user
		});
	return {
		user: { ...data } as IUser,
		status: {
			isLoading,
			isSuccess,
			isError,
			refetch,
			error
		},
		authData: {
			accessToken
		}
	};
};

export default useGetUser;
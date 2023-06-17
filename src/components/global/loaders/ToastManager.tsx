import React from 'react';
import LoadingToast from './LoadingToast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { message } from 'antd';
import { NoticeType } from 'antd/es/message/interface';
import { resetStatus as authResetStatus } from '@/app/auth/auth.slice';
import { resetStatus as gameResetStatus } from '@/app/games/games.slice';
import { resetStatus as competitionStatus } from '@/app/compet/compets.slice';

const ToastManager = () => {
	const dispatch = useDispatch();
	const [toast, context] = message.useMessage();

	const { status, message: authMessage } = useSelector(
		(state: RootState) => state.auth
	);
	const { status: competStatus, message: competMessage } = useSelector(
		(state: RootState) => state.competitions
	);
	const { status: usersStatus, message: usersMessage } = useSelector(
		(state: RootState) => state.users
	);
	const { status: gamesStatus, message: gamesMessage } = useSelector(
		(state: RootState) => state.games
	);
	const { status: teamsStatus, message: teamsMessage } = useSelector(
		(state: RootState) => state.teams
	);

	const { status: resStatus, message: resMessage } = useSelector(
		(state: RootState) => state.reservations
	);

	const messageToast = (status: NoticeType, message: string) => {
		toast.open({
			type: status,
			content: message,
		});
	};

	React.useEffect(() => {
		if (status.isError && authMessage) messageToast('error', authMessage);
		if (status.isSuccess && authMessage) {
			messageToast('success', authMessage);
			dispatch(authResetStatus());
		}
	}, [status.isSuccess, status.isError]);

	React.useEffect(() => {
		if (usersStatus.isError && usersMessage)
			messageToast('error', usersMessage);
		if (usersStatus.isSuccess && usersMessage)
			messageToast('success', usersMessage);
	}, [usersStatus.isSuccess, usersStatus.isError]);

	React.useEffect(() => {
		if (competStatus.isError && competMessage)
			messageToast('error', competMessage);
		if (competStatus.isSuccess && competMessage) {
			messageToast('success', competMessage);
			dispatch(competitionStatus());
		}
	}, [competStatus.isSuccess, competStatus.isError]);

	React.useEffect(() => {
		if (gamesStatus.isError && gamesMessage)
			messageToast('error', gamesMessage);
		if (gamesStatus.isSuccess && gamesMessage) {
			messageToast('success', gamesMessage);
			dispatch(gameResetStatus());
		}
	}, [gamesStatus.isSuccess, gamesStatus.isError]);

	React.useEffect(() => {
		if (teamsStatus.isError && teamsMessage)
			messageToast('error', teamsMessage);
		if (teamsStatus.isSuccess && teamsMessage)
			messageToast('success', teamsMessage);
	}, [teamsStatus.isSuccess, teamsStatus.isError]);

	React.useEffect(() => {
		if (resStatus.isError && resMessage) messageToast('error', resMessage);
		if (resStatus.isSuccess && resMessage) messageToast('success', resMessage);
	}, [resStatus.isSuccess, resStatus.isError]);

	return (
		<>
			{context}
			<LoadingToast
				isShow={
					status.isLoading ||
					usersStatus.isLoading ||
					competStatus.isLoading ||
					gamesStatus.isLoading ||
					teamsStatus.isLoading ||
					resStatus.isLoading
				}
			/>
		</>
	);
};

export default ToastManager;

import React from 'react';
import LoadingToast from './LoadingToast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { message } from 'antd';
import { NoticeType } from 'antd/es/message/interface';
import { resetStatus } from '@/app/auth/auth.slice';

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

	const error = (status: NoticeType, message: string) => {
		toast.open({
			type: status,
			content: message,
		});
	};

	React.useEffect(() => {
		if (status.isError && authMessage) error('error', authMessage);
		if (status.isSuccess && authMessage) {
			error('success', authMessage);
			dispatch(resetStatus());
		}
	}, [status.isSuccess, status.isError]);

	React.useEffect(() => {
		if (usersStatus.isError && usersMessage) error('error', usersMessage);
		if (usersStatus.isSuccess && usersMessage) error('success', usersMessage);
	}, [usersStatus.isSuccess, usersStatus.isError]);

	React.useEffect(() => {
		if (competStatus.isError && competMessage) error('error', competMessage);
		if (competStatus.isSuccess && competMessage)
			error('success', competMessage);
	}, [competStatus.isSuccess, competStatus.isError]);

	React.useEffect(() => {
		if (gamesStatus.isError && gamesMessage) error('error', gamesMessage);
		if (gamesStatus.isSuccess && gamesMessage) error('success', gamesMessage);
	}, [gamesStatus.isSuccess, gamesStatus.isError]);

	React.useEffect(() => {
		if (teamsStatus.isError && teamsMessage) error('error', teamsMessage);
		if (teamsStatus.isSuccess && teamsMessage) error('success', teamsMessage);
	}, [teamsStatus.isSuccess, teamsStatus.isError]);

	return (
		<>
			{context}
			<LoadingToast
				isShow={
					status.isLoading ||
					usersStatus.isLoading ||
					competStatus.isLoading ||
					gamesStatus.isLoading ||
					teamsStatus.isLoading
				}
			/>
		</>
	);
};

export default ToastManager;

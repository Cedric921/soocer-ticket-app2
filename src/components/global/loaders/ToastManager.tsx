import React from 'react';
import LoadingToast from './LoadingToast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { message } from 'antd';
import { NoticeType } from 'antd/es/message/interface';
import { resetStatus } from '@/app/auth/auth.slice';

const ToastManager = () => {
	const dispatch = useDispatch();
	const { status, message: authMessage } = useSelector(
		(state: RootState) => state.auth
	);
	const { status: usersStatus, message: usersMessage } = useSelector(
		(state: RootState) => state.auth
	);
	const [toast, context] = message.useMessage();

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
	return (
		<>
			{context}
			<LoadingToast isShow={status.isLoading || usersStatus.isLoading} />
		</>
	);
};

export default ToastManager;

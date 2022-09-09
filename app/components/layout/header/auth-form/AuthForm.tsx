import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';

import { IAuthFields } from '@/components/layout/header/auth-form/auth-form.interface';
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/field/Field';

import { useActions } from '@/hooks/useActions';
import useGetUser from '@/hooks/useGetUser';
import { useOutside } from '@/hooks/useOutside';

import { ValidEmail } from '@/utils/email.validator';

import stylesIcon from '../icons-right/IconsRight.module.scss';

import styles from './AuthForm.module.scss';


const AuthForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false);

	const [type, setType] = useState<'login' | 'register'>('login');

	const { register: registerAction, login } = useActions();

	const { status } = useGetUser();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IAuthFields>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<IAuthFields> = async data => {
		if (type === 'login') login(data);
		else if (type === 'register') {
			registerAction(data);
		}
	};

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={stylesIcon.button} onClick={() => setIsShow(!isShow)}>
				<FaUserCircle fill='#A4A4A4' />
			</button>

			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'E-mail is required!',
							pattern: {
								value: ValidEmail,
								message: 'E-mail is incorrect'
							}
						})}
						placeholder='E-mail'
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Password is required!',
							minLength: {
								value: 6,
								message: 'Min. length - 6 symbols'
							}
						})}
						placeholder='Password'
						error={errors.password}
						type='password'
					/>
					<div className={styles.login}>
						<Button
							onClick={() => setType('login')}
							disabled={status.isLoading}
						>
							Sign in
						</Button>
					</div>
					<button
						disabled={status.isLoading}
						className={styles.register}
						onClick={() => setType('register')}
					>
						Sign up
					</button>
				</form>
			)}
		</div>
	);
};

export default AuthForm;
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

import stylesIcon from '@/components/layout/header/icons-right/IconsRight.module.scss';

import { useActions } from '@/hooks/useActions';
import useGetUser from '@/hooks/useGetUser';
import { useOutside } from '@/hooks/useOutside';

import styles from './ProfileMenu.module.scss';


const ProfileMenu: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false);

	const { status, user } = useGetUser();

	const { logout } = useActions();

	if (status.isLoading) return null;

	return (
		<div ref={ref} className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{user.avatar ? (
					<Image
						src={user.avatar.key || ''}
						alt={user.name}
						width={40}
						height={40}
					/>
				) : (
					<div className={stylesIcon.button}>
						<FaUserCircle fill='#A4A4A4' />
					</div>
				)}
				<span className={styles.name}>{user.name}</span>
				{isShow ? <GoChevronUp /> : <GoChevronDown />}
			</button>
			{isShow && (
				<div className={styles.profile_menu}>
					<ul>
						<li>
							<Link href={`/channel/edit/${user.id}`}>
								<a>Edit channel</a>
							</Link>
						</li>
						<li>
							<Link href={`/studio`}>
								<a>My studio</a>
							</Link>
						</li>
						<li>
							<button onClick={logout}>LogOut</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default ProfileMenu;
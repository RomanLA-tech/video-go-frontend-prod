import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import { IUser } from '@/types/user.interface';

import styles from './UserAvatar.module.scss';
import { DEFAULT_AVATAR_KEY } from '@/api/url.constants';


const UserAvatar: FC<{ user: IUser; isWhite?: boolean }> = ({
	isWhite,
	user
}) => {
	return (
		<Link href={`/c/${user.id}`}>
			<a>
				<span className={cn(styles.avatar, { [styles.white]: isWhite })}>
					<Image
						src={user.avatar?.key || DEFAULT_AVATAR_KEY}
						width={45}
						height={45}
						alt={user.name}
					/>
					{user.isVerified && (
						<span className={styles.isVerified}>
							<IoIosCheckmarkCircle />
						</span>
					)}
				</span>
			</a>
		</Link>
	);
};

export default UserAvatar;
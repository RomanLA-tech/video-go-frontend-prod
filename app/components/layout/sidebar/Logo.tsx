import Link from 'next/link';
import { FC } from 'react';

import styles from './Sidebar.module.scss';


const Logo: FC = () => {
	return (
		<Link href='/'>
			<a className={styles.logo}>Video GO</a>
		</Link>
	);
};

export default Logo;
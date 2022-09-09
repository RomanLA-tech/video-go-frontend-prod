import { FC, memo } from 'react';

import IconsRight from '@/components/layout/header/icons-right/IconsRight';
import Search from '@/components/layout/header/search/Search';

import styles from './Header.module.scss';


const Header: FC = memo(() => {
	return (
		<>
			<header className={styles.header}>
				<Search key={'search-input'} />
				<IconsRight key={'right-menu'} />
			</header>
		</>
	);
});

export default Header;
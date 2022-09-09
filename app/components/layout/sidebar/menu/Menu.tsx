import { FC, memo } from 'react';

import MenuItem from '@/components/layout/sidebar/menu/MenuItem';
import { IMenuItem } from '@/components/layout/sidebar/menu/menu.interface';
import Line from '@/components/ui/line/Line';

import styles from './Menu.module.scss';

interface IMenuProps {
	title: string;
	items: IMenuItem[];
}

const Menu: FC<IMenuProps> = memo(({ title, items }) => {
	return (
		<nav className={styles.menu_wrapper}>
			<h3>{title}</h3>
			<ul>
				{items.map(menuItem => (
					<MenuItem item={menuItem} key={menuItem.link} />
				))}
			</ul>
			<Line />
		</nav>
	);
});

export default Menu;
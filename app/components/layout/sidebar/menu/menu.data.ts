import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi';

import { IMenuItem } from '@/components/layout/sidebar/menu/menu.interface';


export const menu: IMenuItem[] = [
	{
		title: 'Home',
		icon: HiHome,
		link: '/'
	},
	{
		title: 'Trends',
		icon: HiChartBar,
		link: '/trends'
	},
	{
		title: 'My channel',
		icon: HiStar,
		link: '/studio'
	},
	{
		title: 'Subscriptions',
		icon: HiCollection,
		link: '/subscriptions'
	}
];
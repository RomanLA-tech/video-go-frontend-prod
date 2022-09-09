import Head from 'next/head';
import { FC, PropsWithChildren, memo } from 'react';

import Header from '@/components/layout/header/Header';
import Sidebar from '@/components/layout/sidebar/Sidebar';

import styles from './Layout.module.scss';


const Layout: FC<PropsWithChildren<{ title: string }>> = memo(
	({ title, children }) => {
		return (
			<>
				<Head>
					<title>{title}</title>
				</Head>
				<main className={styles.main}>
					<Sidebar key={'sidebar'} />
					<section className={styles.content}>
						<Header key={'header'} />
						<div className={styles.wrapper}>{children}</div>
					</section>
				</main>
			</>
		);
	}
);

export default Layout;
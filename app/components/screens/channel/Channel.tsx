import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { IChannel } from '@/components/screens/channel/channel.interface';
import Catalog from '@/components/ui/catalog/Catalog';
import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall';
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton';

import styles from './Channel.module.scss';


const Channel: FC<IChannel> = ({ channel }) => {
	return (
		<Layout title={channel.name}>
			<div className={styles.channel}>
				<div className={styles.content}>
					<ChannelInfoSmall channel={channel} />
					<SubscribeButton channelIdForSubscribe={channel.id} />
				</div>
				<article className={styles.description}>{channel.description}</article>
			</div>
			<Catalog newVideos={channel.videos || []} />
		</Layout>
	);
};

export default Channel;
import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/ui/catalog/Catalog';

import { IVideo } from '@/types/video.interface';


const Trends: FC<{ topVideos: IVideo[] }> = ({ topVideos }) => {
	return (
		<Layout title={'Trends'}>
			<Catalog newVideos={topVideos} />
		</Layout>
	);
};

export default Trends;
import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { IHome } from '@/components/screens/home/home.interface';
import Catalog from '@/components/ui/catalog/Catalog';
import Discover from '@/components/ui/discover/Discover';


const Home: FC<IHome> = ({ newVideos, topVideo, randomVideo }) => {
	return (
		<Layout title='Video GO | Video platform'>
			<Discover randomVideo={randomVideo} topVideo={topVideo} />
			<Catalog newVideos={newVideos} />
		</Layout>
	);
};

export default Home;
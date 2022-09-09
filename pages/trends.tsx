import { GetStaticProps, NextPage } from 'next';

import Trends from '@/components/screens/trends/Trends';

import { VideoService } from '@/services/video.service';

import { IVideo } from '@/types/video.interface';


const TrendsPage: NextPage<{ topVideos: IVideo[] }> = ({ topVideos = [] }) => {
	return (
		<>
			<Trends topVideos={topVideos} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: topVideos } = await VideoService.getMostPopularVideos();

		return {
			props: {
				topVideos
			},
			revalidate: 70
		};
	} catch (e) {
		return {
			props: {
				topVideos: []
			}
		};
	}
};

export default TrendsPage;
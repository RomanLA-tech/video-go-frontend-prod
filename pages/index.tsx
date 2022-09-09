import shuffle from 'lodash/shuffle';
import { GetServerSideProps, NextPage } from 'next';

import Home from '@/components/screens/home/Home';
import { IHome } from '@/components/screens/home/home.interface';

import { VideoService } from '@/services/video.service';

import { IVideo } from '@/types/video.interface';


const HomePage: NextPage<IHome> = props => {
	return (
		<>
			<Home {...props} />
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const { data: newVideos } = await VideoService.getAllVideos();
		const { data: topVideos } = await VideoService.getMostPopularVideos();

		return {
			props: {
				newVideos,
				topVideo: topVideos[0] || ({} as IVideo),
				randomVideo:
					shuffle(newVideos.filter(v => v.id !== topVideos[0].id))[0] ||
					({} as IVideo)
			} as IHome
		};
	} catch (e) {
		return {
			props: {
				newVideos: [],
				topVideo: {} as IVideo,
				randomVideo: {} as IVideo
			} as IHome
		};
	}
};
export default HomePage;
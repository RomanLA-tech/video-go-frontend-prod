import VideoEdit from '@/components/screens/video-edit/VideoEdit';

import { NextPageAuth } from '../../../app/provider/private-route.interface';


const VideoEditPage: NextPageAuth = () => {
	return <VideoEdit />;
};

VideoEditPage.isOnlyUser = true;

export default VideoEditPage;
import ChannelEdit from '@/components/screens/channel-edit/ChannelEdit';

import { NextPageAuth } from '../../../app/provider/private-route.interface';


const ChannelEditPage: NextPageAuth = () => {
	return <ChannelEdit />;
};

ChannelEditPage.isOnlyUser = true;

export default ChannelEditPage;
import Subscriptions from '@/components/screens/subscriptions/Subscriptions';

import { NextPageAuth } from '../app/provider/private-route.interface';


const MySubscriptionsPage: NextPageAuth = () => {
	return (
		<>
			<Subscriptions />
		</>
	);
};

MySubscriptionsPage.isOnlyUser = true;

export default MySubscriptionsPage;
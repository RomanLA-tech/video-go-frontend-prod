import React from 'react';

import Studio from '@/components/screens/studio/Studio';

import { NextPageAuth } from '../app/provider/private-route.interface';


const StudioPage: NextPageAuth = () => {
	return (
		<div>
			<Studio />
		</div>
	);
};

StudioPage.isOnlyUser = true;

export default StudioPage;
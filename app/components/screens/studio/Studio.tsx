import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Catalog from '@/components/ui/catalog/Catalog';
import Loader from '@/components/ui/loader/Loader';

import useGetUser from '@/hooks/useGetUser';

import { videoApi } from '@/store/api/videos.api';

import styles from './Studio.module.scss';


const Studio: FC = () => {
	const { user, status } = useGetUser();
	const [removeVideo] = videoApi.useDeleteVideoMutation();
	const [createVideo] = videoApi.useCreateVideoMutation();

	return (
		<Layout title={'My studio'}>
			<div>
				{status.isLoading ? (
					<Loader count={5} />
				) : user.videos?.length ? (
					<Catalog
						newVideos={user.videos}
						removeHandler={removeVideo}
						isUpdateLink
					/>
				) : (
					<div className={styles.main_title_container}>
						<span onClick={() => createVideo()}>
							No uploaded videos <b>Create first</b>
						</span>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default Studio;
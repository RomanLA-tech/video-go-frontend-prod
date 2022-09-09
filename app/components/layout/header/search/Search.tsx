import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';

import { useSearch } from '@/components/layout/header/search/useSearch';
import VideoItem from '@/components/ui/video-item/VideoItem';

import styles from './Search.module.scss';


const Search: FC = () => {
	const { isSuccess, searchTerm, handleSearch, data } = useSearch();

	return (
		<div className={styles.search_top}>
			<label>
				<>
					<input
						type='text'
						placeholder='Search video...'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<BsSearch className={styles.icon} />
				</>
			</label>
			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map(video => <VideoItem isSmall item={video} key={video.id} />)
					) : (
						<div className='text-white'>No results!</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Search;
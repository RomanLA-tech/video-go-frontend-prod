import { FC } from 'react';

import AddCommentForm from '@/components/screens/video/comments/AddCommentForm';
import CommentItem from '@/components/screens/video/comments/CommentItem';
import styles from '@/components/screens/video/comments/Comments.module.scss';

import { IComment } from '@/types/comment.interface';

import { useAuth } from '@/hooks/useAuth';


interface IComments {
	comments: IComment[];
	videoId: number;
}

const Comments: FC<IComments> = ({ comments, videoId }) => {
	const { user } = useAuth();

	return (
		<div className={styles.comments}>
			<h2>Comments</h2>
			<div className={styles.line} />
			{comments.length ? (
				<div className={styles.grid}>
					{comments.map(comment => (
						<CommentItem comment={comment} key={comment.id} />
					))}
				</div>
			) : (
				<p>No comments yet</p>
			)}
			<div className={styles.bottom_form}>
				{user && <AddCommentForm videoId={videoId} />}
			</div>
		</div>
	);
};

export default Comments;
import { FC } from 'react';

import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall';

import { IComment } from '@/types/comment.interface';

import styles from './Comments.module.scss';


interface ICommentItem {
	comment: IComment;
}

const CommentItem: FC<ICommentItem> = ({ comment }) => {
	return (
		<div className={styles.comment_item}>
			<ChannelInfoSmall channel={comment.user} message={comment.message} />
		</div>
	);
};

export default CommentItem;
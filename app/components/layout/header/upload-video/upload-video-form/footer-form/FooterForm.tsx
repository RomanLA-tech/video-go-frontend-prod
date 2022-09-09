import { FC, memo } from 'react';
import { MdCheckCircle, MdSwitchVideo, MdUpload } from 'react-icons/md';

import Button from '@/components/ui/button/Button';

import styles from './FooterForm.module.scss';

interface IFooterForm {
	percent: number;
	isUploaded: boolean;
	isChosen: boolean;
	isLoading?: boolean;
}

const FooterForm: FC<IFooterForm> = memo(
	({ isChosen, isUploaded, percent, isLoading }) => {
		return (
			<div className={styles.container}>
				<div className={styles.status}>
					{!isChosen ? (
						<div>
							<span className={styles.no_item}>
								<MdSwitchVideo />
							</span>
						</div>
					) : (
						<div className={styles.status}>
							{isUploaded ? (
								<span>
									<MdCheckCircle />
									Video is uploaded
								</span>
							) : (
								<span>
									<MdUpload /> Uploading {`${percent}%`}...
								</span>
							)}
						</div>
					)}
				</div>
				<div>
					<Button disabled={isLoading} className={styles.button}>
						Save
					</Button>
				</div>
			</div>
		);
	}
);
export default FooterForm;
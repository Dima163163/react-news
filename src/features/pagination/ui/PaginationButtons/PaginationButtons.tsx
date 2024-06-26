import { IPaginationProps } from '../../model/types';
import styles from './styles.module.css';
import { useTheme } from '@/app/providers/ThemeProvider';

const PaginationButtons = ({
	totalPages,
	handleNextPage,
	handlePreviousPage,
	handlePageClick,
	currentPage
}: IPaginationProps) => {
	const { isDark } = useTheme();
	return (
		<div
			className={`${styles.pagination} ${isDark ? styles.dark : styles.ligth}`}
		>
			<button
				className={styles.arrow}
				disabled={currentPage <= 1}
				onClick={handlePreviousPage}
			>
				{'<'}
			</button>
			<div className={styles.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							key={index}
							className={styles.pageNumber}
							disabled={index + 1 === currentPage}
							onClick={() => handlePageClick(index + 1)}
						>
							{index + 1}
						</button>
					);
				})}
			</div>
			<button
				className={styles.arrow}
				disabled={currentPage >= totalPages}
				onClick={handleNextPage}
			>
				{'>'}
			</button>
		</div>
	);
};
export default PaginationButtons;

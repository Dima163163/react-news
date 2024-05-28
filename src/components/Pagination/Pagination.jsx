import styles from './styles.module.css';

const Pagination = ({
	totalPages,
	handleNextPage,
	handlePreviousPage,
	handlePageClick,
	currentPage
}) => {
	return (
		<div className={styles.pagination}>
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
export default Pagination;

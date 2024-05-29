import styles from './style.module.css';

const Search = ({ keywords, setKeywords }) => {
	return (
		<div className={styles.search}>
			<input
				type="text"
				value={keywords}
				className={styles.input}
				onChange={(e) => setKeywords(e.target.value)}
				placeholder="Javascript"
			/>
		</div>
	);
};
export default Search;

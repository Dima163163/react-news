import styles from './style.module.css';

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
	return (
		<ul className={styles.categories}>
			<button
				className={!selectedCategory ? styles.active : styles.item}
				onClick={() => setSelectedCategory(null)}
			>
				All
			</button>
			{categories.map((category) => (
				<button
					key={category}
					className={
						selectedCategory === category ? styles.active : styles.item
					}
					onClick={() => setSelectedCategory(category)}
				>
					{category}
				</button>
			))}
		</ul>
	);
};
export default Categories;

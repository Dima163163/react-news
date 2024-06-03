import styles from './styles.module.css';

import NewsByFilters from './NewsByFilters/NewsByFilters';
import LatestNews from './LatestNews/LatestNews';

const MainPage = () => {
	return (
		<main className={styles.main}>
			<LatestNews />
			<NewsByFilters />
		</main>
	);
};
export default MainPage;

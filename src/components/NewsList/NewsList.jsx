import withSkeleton from '../../helpers/hock/withSkeleton';
import NewsItem from '../NewsItem/NewsItem';
import styles from './styles.module.css';

const NewsList = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news.length !== 0
				? news.map((item) => {
						return <NewsItem key={item.id} item={item} />;
				})
				: null}
		</ul>
	);
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);

export default NewsListWithSkeleton;

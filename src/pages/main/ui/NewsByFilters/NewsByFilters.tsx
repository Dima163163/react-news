import { useAppSelector } from '@/app/appStore';
import { useDebounce } from '@/shared/hooks/useDebounce';
import styles from './styles.module.css';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { NewsFilters } from '@/widgets/news';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import NewsListWithPagination from '../NewsListWithPagination/NewsListWithPagination';

const NewsByFilters = () => {
	const filters = useAppSelector((state) => state.news.filters);
	const news = useAppSelector((state) => state.news.news);

	const debounceKeywords = useDebounce(filters.keywords, 1500);

	const { isLoading } = useGetNewsQuery({
		...filters,
		keywords: debounceKeywords
	});

	const { data } = useGetCategoriesQuery(null);

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} categories={data?.categories || []} />
			<NewsListWithPagination
				isLoading={isLoading}
				filters={filters}
				news={news}
			/>
		</section>
	);
};
export default NewsByFilters;

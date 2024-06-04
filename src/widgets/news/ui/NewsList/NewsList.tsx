import { INews } from '@/entities/news';
import styles from './styles.module.css';
import withSkeleton from '@/shared/hocs/withSkeleton';
import NewsCard from '@/entities/news/ui/NewsCard/NewsCard';
import { ReactNode } from 'react';

interface Props {
	news?: INews[];
	type?: 'banner' | 'item';
	direction?: 'row' | 'column';
	viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsList = ({ news, type = 'item', viewNewsSlot }: Props) => {
	return (
		<ul className={`${type === 'item' ? styles.items : styles.banners}`}>
			{news?.map((item) => {
				return (
					<NewsCard
						key={item.id}
						viewNewsSlot={viewNewsSlot}
						item={item}
						type={type}
					/>
				);
			})}
		</ul>
	);
};

const NewsListWithSkeleton = withSkeleton(NewsList, 10);

export default NewsListWithSkeleton;

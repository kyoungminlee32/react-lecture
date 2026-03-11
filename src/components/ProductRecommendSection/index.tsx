import { ProductHashtagList } from '../ProductHashtagList';

export interface ProductRecommendItem {
    id: number;
    title: string;
    tags: string[];
}

interface ProductRecommendSectionProps {
    userName?: string;
    items?: ProductRecommendItem[];
    onSelect?: (item: ProductRecommendItem) => void;
}

export const ProductRecommendSection = ({
    userName = '',
    items = [],
    onSelect,
}: ProductRecommendSectionProps) => (
    <div className='product-recommend'>
        <h4 className='h5'>
            <span>{userName}</span>님을 위한 추천 상품
        </h4>
        <div className='product-recommend-list'>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href='javascript:void(0)'
                            role='button'
                            onClick={(event) => {
                                event.preventDefault();
                                onSelect?.(item);
                            }}
                        >
                            <div className='title'>{item.title}</div>
                            <ProductHashtagList tags={item.tags} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export interface ProductInfoItem {
    className?: string;
    term: string;
    description: string;
}

interface ProductInfoDlListProps {
    items?: ProductInfoItem[];
}

export const ProductInfoDlList = ({ items = [] }: ProductInfoDlListProps) => (
    <ul className='product-dl-list'>
        {items.map((item) => (
            <li key={`${item.term}-${item.className ?? ''}`} className={item.className}>
                <dl>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </dl>
            </li>
        ))}
    </ul>
);

export default ProductInfoDlList;

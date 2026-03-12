export interface VisualItem {
  id: number;
  className: string;
  titleHtml: string;
  descriptionHtml: string;
}

interface ProductVisualListProps {
  items: VisualItem[];
}

export const ProductVisualList = ({ items }: ProductVisualListProps) => (
  <ul className='product-visual-list'>
    {items.map((item) => (
      <li key={item.id} className={item.className}>
        <div className='inner'>
          <h3
            dangerouslySetInnerHTML={{ __html: item.titleHtml }}
          />
          <p
            className='visual-para'
            dangerouslySetInnerHTML={{ __html: item.descriptionHtml }}
          />
        </div>
      </li>
    ))}
  </ul>
);

export default ProductVisualList;
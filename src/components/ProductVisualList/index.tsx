export interface VisualItem {
  id: number;
  className: string;
  title: string;
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
          <h3>{item.title}</h3>
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
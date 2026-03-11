interface ProductBulletListProps {
  items: string[];
}

export const ProductBulletList = ({ items }: ProductBulletListProps) => (
  <ul className='ul -bullet'>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default ProductBulletList;
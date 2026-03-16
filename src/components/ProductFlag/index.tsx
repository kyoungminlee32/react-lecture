interface ProductFlagProp {
  label: string;
  badgeClass: string;
}

export const ProductFlag = ({ items }: { items: ProductFlagProp[] }) => (
  <div className='badges'>
    {items.map((item, index) => (
      <span
        key={`${item.label}-${index}`}
        className={`badge ${item.badgeClass}`.trim()}
      >
        {item.label}
      </span>
    ))}
  </div>
);

export default ProductFlag;
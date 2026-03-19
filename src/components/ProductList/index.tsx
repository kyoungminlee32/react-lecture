import React from 'react';

interface ProductItem {
  title: string;
  sub: string;
  max: string;
  def: string;
}

interface ProductListProps {
  items: ProductItem[];
}

export const ProductList: React.FC<ProductListProps> = ({ items }) => (
  <ul>
    {items.map((item, idx) => (
      <li key={idx}>
        <a href="javascript:void(0)" className="prod-txt-unit">
          <div className="prod-txts">
            <div className="title">{item.title}</div>
            <div className="sub">{item.sub}</div>
            <div className="prod-info">
              <span className="max">{item.max}</span>
              <span className="def">{item.def}</span>
            </div>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

export default ProductList;

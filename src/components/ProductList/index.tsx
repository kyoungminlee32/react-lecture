import React from 'react';

interface ProductItem {
  title: string;
  sub: string;
  max: string;
  def: string;
  loan?: boolean; // 대출 상품 여부를 나타내는 선택적 속성
  badge?: string; // 배지 텍스트를 나타내는 선택적 속성
}

interface ProductListProps {
  items: ProductItem[];
}

export const ProductList = ({
  items,
}: ProductListProps) => (
  <ul>
    {items.map((item, idx) => (
      <li key={idx}>
        <a href="javascript:void(0)" className="prod-txt-unit">
          <div className="prod-txts">
            <div className="title">{item.title}</div>
            <div className="sub">{item.sub}</div>
            <div className="prod-info">
              {item.loan ? (
                <>
                  <span className="low">{item.def}</span>
                  <span className="max">{item.max}</span>
                </>
              ) : (
                <>
                  <span className="max">{item.max}</span>
                  <span className="def">{item.def}</span>
                </>
              )}
            </div>
          </div>
        </a>
      </li>
    ))}
  </ul>
);

export default ProductList;

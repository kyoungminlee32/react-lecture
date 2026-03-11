interface ProductHashtagListProps {
  tags: string[];
}

export const ProductHashtagList = ({ tags }: ProductHashtagListProps) => (
  <div className='hashtag'>
    {tags.map((tag) => (
      <span key={tag}>{tag}</span>
    ))}
  </div>
);

export default ProductHashtagList;
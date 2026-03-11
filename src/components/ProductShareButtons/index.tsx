interface ProductShareButtonsProps {
    onShare?: () => void;
    onWishlist?: () => void;
}

export const ProductShareButtons = ({
    onShare,
    onWishlist,
}: ProductShareButtonsProps) => (
    <div className='product-share'>
        <ul>
            <li>
                <button
                    type='button'
                    className='share'
                    aria-haspopup='true'
                    onClick={onShare}
                >
                    <span className='hide'>공유</span>
                </button>
            </li>
            <li>
                <button type='button' className='wishlist' onClick={onWishlist}>
                    <span className='hide'>장바구니</span>
                </button>
            </li>
        </ul>
    </div>
);

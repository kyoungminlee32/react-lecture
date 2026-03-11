import { ProductInfoDlList, ProductInfoItem } from '../ProductInfoDlList';

interface ProductSubtitleAreaProps {
    maxLabel?: string;
    maxAmount?: string;
    baseLabel?: string;
    baseRate?: string;
    topLabel?: string;
    topRate?: string;
    costDescription?: string;
    infoItems?: ProductInfoItem[];
}

export type { ProductInfoItem };

export const ProductSubtitleArea = ({
    maxLabel = '',
    maxAmount = '',
    baseLabel = '기본',
    baseRate = '',
    topLabel = '최고',
    topRate = '',
    costDescription = '',
    infoItems = [],
}: ProductSubtitleAreaProps) => {
    const shouldShowMaxBlock = Boolean(maxLabel.trim());

    return (
        <div className='subtitle-area'>
            <div className='product-cost-area'>
                {shouldShowMaxBlock && (
                    <div className='inner'>
                        <dl>
                            <dt>{maxLabel}</dt>
                            <dd className='point'>{maxAmount}</dd>
                        </dl>
                    </div>
                )}

                <div className='inner'>
                    <dl>
                        <dt>{baseLabel}</dt>
                        <dd>{baseRate}</dd>
                    </dl>
                    <span className='daesh'>~</span>
                    <dl>
                        <dt>{topLabel}</dt>
                        <dd className='point'>{topRate}</dd>
                    </dl>
                </div>

                <p className='cost-para'>{costDescription}</p>
            </div>
            <ProductInfoDlList items={infoItems} />
        </div>
    );
};

export default ProductSubtitleArea;

// ProductInfoItem 인터페이스는 상품 정보 영역의 각 아이템을 나타내는 타입입니다.
// className은 각 아이템에 추가적인 CSS 클래스를 지정할 때 사용됩니다.
// term은 정보의 제목이나 용어를 나타내며, description은 해당 용어에 대한 설명을 제공합니다.
import { ProductInfoDlList, ProductInfoItem } from '../ProductInfoDlList';

interface ProductSubtitleAreaProps {
    // 최대
    maxLabel?: string;
    // 최대 금액
    maxAmount?: string;
    // 기본
    baseLabel?: string;
    // 기본 비율
    baseRate?: string;
    // 최고
    topLabel?: string;
    // 최고비율
    topRate?: string;
    // 기준날짜 및 기타 설명
    costDescription?: string;
    // 상품 정보 영역의 정보 아이템 리스트
    infoItems?: ProductInfoItem[];
}

export type { ProductInfoItem };

export const ProductSubtitleArea = ({
    // 최대
    maxLabel = '',
    // 최대 금액
    maxAmount = '',
    // 기본
    baseLabel = '기본',
    // 기본 비율
    baseRate = '',
    // 최고
    topLabel = '최고',
    // 최고비율
    topRate = '',
    // 기준날짜 및 기타 설명
    costDescription = '',
    // 상품 정보 영역의 정보 아이템 리스트
    infoItems = [],
}: ProductSubtitleAreaProps) => {
    // maxLabel이 존재하는지 여부를 판단하여 최대 블록을 보여줄지 결정합니다.
    const shouldShowMaxBlock = Boolean(maxLabel.trim());

    return (
        <div className='subtitle-area'>
            <div className='product-cost-area'>
                {/* 최대 있을 경우 */}
                {shouldShowMaxBlock && (
                    <div className='inner'>
                        <dl>
                            <dt>{maxLabel}</dt>
                            <dd className='point'>{maxAmount}</dd>
                        </dl>
                    </div>
                )}
                {/* 기본비율~최고비율 */}
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
             {/* 상품 정보 영역의 정보 아이템 리스트 */}
            <ProductInfoDlList items={infoItems} />
        </div>
    );
};

export default ProductSubtitleArea;

import { useMemo, useState } from 'react';

export interface InterestCalculatedPayload {
    principal: number;
    months: number;
    annualRate: number;
    pretaxAmount: number;
}

interface ProductInterestCalculatorProps {
    title?: string;
    annualRate?: number;
    initialAmount?: string | number;
    initialMonths?: string | number;
    initialPretaxAmount?: number;
    amountInputId?: string;
    monthsInputId?: string;
    onCalculated?: (payload: InterestCalculatedPayload) => void;
}

export const ProductInterestCalculator = ({
    title = '금리 미리 계산해보기',
    annualRate = 0.028,
    initialAmount = '',
    initialMonths = '',
    initialPretaxAmount = 1040500,
    amountInputId = 'tt1',
    monthsInputId = 'tt2',
    onCalculated,
}: ProductInterestCalculatorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [amount, setAmount] = useState(String(initialAmount ?? ''));
    const [months, setMonths] = useState(String(initialMonths ?? ''));
    const [pretaxAmount, setPretaxAmount] = useState(initialPretaxAmount);

    const formattedPretaxAmount = useMemo(() => {
        const value = Number(pretaxAmount) || 0;
        return `${value.toLocaleString('ko-KR')}원`;
    }, [pretaxAmount]);

    const togglePanel = () => {
        setIsOpen((prev) => !prev);
    };

    const calculate = () => {
        const principal = Number(String(amount).replace(/,/g, ''));
        const monthCount = Number(months);

        if (!principal || !monthCount) {
            setPretaxAmount(0);
            onCalculated?.({
                principal: 0,
                months: 0,
                annualRate,
                pretaxAmount: 0,
            });
            return;
        }

        const yearFraction = monthCount / 12;
        const nextPretaxAmount = Math.round(principal + (principal * annualRate * yearFraction));
        setPretaxAmount(nextPretaxAmount);

        onCalculated?.({
            principal,
            months: monthCount,
            annualRate,
            pretaxAmount: nextPretaxAmount,
        });
    };

    return (
        <div className='interest-calc-wrap'>
            <div
                className={`accordion -card${isOpen ? ' -active' : ''}`}
                data-role='fold'
            >
                <button
                    type='button'
                    className='title -interest'
                    data-role='marker'
                    aria-expanded={isOpen}
                    onClick={togglePanel}
                >
                    {title}
                </button>

                <div className='panel' data-role='hidden' hidden={!isOpen}>
                    <div className='interest-calc-cont'>
                        <div className='calc-row'>
                            <span className='calc-input'>
                                <div className='mix'>
                                    <div className='text -won' data-clear='false'>
                                        <input
                                            type='tel'
                                            id={amountInputId}
                                            value={amount}
                                            onChange={(event) => setAmount(event.target.value)}
                                            className='right num-call'
                                            aria-haspopup='true'
                                            placeholder='금액을 입력하세요'
                                        />
                                    </div>
                                </div>
                            </span>
                            <span className='calc-para'>원을</span>
                        </div>

                        <div className='calc-row'>
                            <span className='calc-input'>
                                <div className='mix'>
                                    <div className='text' data-clear='false'>
                                        <input
                                            type='tel'
                                            id={monthsInputId}
                                            value={months}
                                            onChange={(event) => setMonths(event.target.value)}
                                            className='right num-call'
                                            aria-haspopup='true'
                                            placeholder='개월 입력'
                                        />
                                    </div>
                                </div>
                            </span>
                            <span className='calc-para'>개월 동안 저축한다면?</span>
                        </div>

                        <div className='calc-btn-wrap'>
                            <button type='button' className='button -lg -secondary' onClick={calculate}>
                                계산해보기
                            </button>
                        </div>

                        <div className='interest-calc-result'>
                            <dl>
                                <dt>세전금액</dt>
                                <dd>{formattedPretaxAmount}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

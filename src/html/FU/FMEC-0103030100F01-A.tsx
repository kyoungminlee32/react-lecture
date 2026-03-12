import { useState } from 'react';
import { FwHeader } from '../../components/FwHeader';
import { CenterPopup } from '../../components/CenterPopup';

export const FMEC0103030100F01A = () => {
    const [isCenterPopupOpen, setIsCenterPopupOpen] = useState(true);
    const popupMessageHtml = '죄송합니다. 적립기간은 5년이상 선택하되, 적립기간 종료 후 고객님의 연령이 만 55세 이상이 될 수 있는 기간으로 선택하여야 합니다.';
    const popupMessageHtml2 = '(예:현재 만 40세의 경우 15년 입력, 적립기간 종료시 만 55세)';

    const onConfirm = () => {
        console.log('[FMEC-0103030100F01-A] confirm clicked');
        setIsCenterPopupOpen(false);
    };

    const onClose = () => {
        console.log('[FMEC-0103030100F01-A] popup closed');
        setIsCenterPopupOpen(false);
    };

    return (
        <div className="page-wrapper">
            <div className="page">
                <div className="container">
                    <FwHeader title="상품상세" showBack showHome showMenu />

                    <main className="contents">
                        <div className="content" />
                    </main>
                </div>
            </div>

            <CenterPopup
                isPopupOpen={isCenterPopupOpen}
                popupMessageHtml={popupMessageHtml}
                popupMessageHtml2={popupMessageHtml2}
                confirmLabel="확인"
                addButtonClass="-secondary"
                onConfirm={onConfirm}
                onClose={onClose}
            />
        </div>
    );
};

export default FMEC0103030100F01A;
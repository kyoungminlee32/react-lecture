import { useState } from 'react';
import { FwHeader } from '../../components/FwHeader';
import { SlidePopup } from '../../components/SlidePopup';

export const FMAA0100000000F01B = () => {
    const [isSlidePopupOpen, setIsSlidePopupOpen] = useState(true);
    const popupMessageHtml = '지문인증을 이용 중입니다. <br>전자서명을 진행하시겠어요?';

    const onCancel = () => {
        console.log('[FMAA-0100000000F01-B] cancel clicked');
        setIsSlidePopupOpen(false);
    };

    const onConfirm = () => {
        console.log('[FMAA-0100000000F01-B] confirm clicked');
        setIsSlidePopupOpen(false);
    };

    const onClose = () => {
        console.log('[FMAA-0100000000F01-B] popup closed');
        setIsSlidePopupOpen(false);
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

            <SlidePopup
                isPopupOpen={isSlidePopupOpen}
                popupType="fingerprint-sign"
                popupTitle="지문인증 전자서명"
                popupMessageHtml={popupMessageHtml}
                cancelLabel="아니요"
                confirmLabel="예"
                onCancel={onCancel}
                onConfirm={onConfirm}
                onClose={onClose}
            />
        </div>
    );
};

export default FMAA0100000000F01B;
import { useState } from 'react';
import { FwHeader } from '../../components/FwHeader';
import { SlidePopup } from '../../components/SlidePopup';

export const FMAA0400000000F01B = () => {
    const [isSlidePopupOpen, setIsSlidePopupOpen] = useState(true);
    const popupMessageHtml = '공동인증을 이용 중입니다. <br>전자서명을 진행하시겠어요?';

    const onCancel = () => {
        console.log('취소');
        setIsSlidePopupOpen(false);
    };

    const onConfirm = () => {
        console.log('확인');
        setIsSlidePopupOpen(false);
    };

    const onClose = () => {
        console.log('닫기');
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
                popupType="one-popup"
                popupTitle="간편인증 전자서명"
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

export default FMAA0400000000F01B;
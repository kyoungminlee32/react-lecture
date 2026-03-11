import { MouseEvent } from 'react';
import { closeLayer } from '../../assets/js/sample';
import { ProductActionButtons } from '../ProductActionButtons';

interface SlidePopupProps {
    isPopupOpen: boolean;
    activeLayer?: string | null;
    onClose?: (layerId?: string | null) => void;
}

const isActive = (isPopupOpen: boolean, activeLayer: string | null | undefined, layerId: string) =>
    isPopupOpen && activeLayer === layerId;

export const SlidePopup = ({ isPopupOpen, activeLayer = null, onClose }: SlidePopupProps) => {
    const handleClose = (layerId?: string | null) => {
        onClose?.(layerId);
        if (layerId) {
            closeLayer(layerId);
        }
    };

    const closeOnBackdrop = (layerId: string) => (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            handleClose(layerId);
        }
    };

    return (
        <div className="slide-popup">
            <div
                id="layer"
                className={`layer${isActive(isPopupOpen, activeLayer, 'layer') ? ' -active' : ''}`}
                onClick={closeOnBackdrop('layer')}
            >
                <div className="container">
                    <div className="header">
                        <div className="inner">
                            <h1 className="title">가입기간을 선택해 주세요</h1>
                        </div>
                    </div>
                    <div className="contents">
                        <div className="content">
                            <div className="options">
                                <ul>
                                    <li><button type="button" className="option stepBtn" onClick={() => handleClose('layer')}>9개월</button></li>
                                    <li><button type="button" className="option">10개월</button></li>
                                    <li><button type="button" className="option">11개월</button></li>
                                    <li><button type="button" className="option">12개월</button></li>
                                    <li><button type="button" className="option">13개월</button></li>
                                    <li><button type="button" className="option">14개월</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="buffer" style={{ height: 0 }} />
                    </div>
                </div>
            </div>

            <div
                id="layer1"
                className={`layer${isActive(isPopupOpen, activeLayer, 'layer1') ? ' -active' : ''}`}
                onClick={closeOnBackdrop('layer1')}
            >
                <div className="container">
                    <div className="header">
                        <div className="inner">
                            <h1 className="title">이자 받는 방법을 선택해 주세요</h1>
                        </div>
                    </div>
                    <div className="contents">
                        <div className="content">
                            <div className="options">
                                <ul>
                                    <li><button type="button" className="option stepBtn" onClick={() => handleClose('layer1')}>만기</button></li>
                                    <li><button type="button" className="option">매월</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="buffer" style={{ height: 0 }} />
                    </div>
                </div>
            </div>

            <div
                id="layer2"
                className={`layer${isActive(isPopupOpen, activeLayer, 'layer2') ? ' -active' : ''}`}
                onClick={closeOnBackdrop('layer2')}
            >
                <div className="container">
                    <div className="contents">
                        <div className="content">
                            <div className="choose-account-Wrap -inputed">
                                <div className="amount-btn-wrap">
                                    <button type="button" value={100000} className="button numBtn -sm -fit">+10만</button>
                                    <button type="button" value={500000} className="button numBtn -sm -fit">+50만</button>
                                    <button type="button" value={1000000} className="button numBtn -sm -fit">+100만</button>
                                    <button type="button" value={10000000} className="button numBtn -sm -fit">+1,000만</button>
                                </div>
                                <div className="custom-key-wrap">
                                    <button type="button" value={1} title="숫자 1 입력">1</button>
                                    <button type="button" value={2} title="숫자 2 입력">2</button>
                                    <button type="button" value={3} title="숫자 3 입력">3</button>
                                    <button type="button" value={4} title="숫자 4 입력">4</button>
                                    <button type="button" value={5} title="숫자 5 입력">5</button>
                                    <button type="button" value={6} title="숫자 6 입력">6</button>
                                    <button type="button" value={7} title="숫자 7 입력">7</button>
                                    <button type="button" value={8} title="숫자 8 입력">8</button>
                                    <button type="button" value={9} title="숫자 9 입력">9</button>
                                    <button type="button" disabled aria-hidden="true">NH</button>
                                    <button type="button" value={0} title="숫자 0 입력">0</button>
                                    <button type="button" className="btn-del" title="마지막 숫자 삭제">←</button>
                                </div>
                                <div className="buttons">
                                    <button type="button" className="button -lg -primary">확인</button>
                                </div>
                                <div className="action-buttons">
                                    <ProductActionButtons showConsult={false} active={true} onJoin={() => handleClose('layer2')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isPopupOpen && (
                <div
                    className={`dim${isPopupOpen ? ' -active' : ''}`}
                    onClick={() => handleClose(activeLayer)}
                />
            )}
        </div>
    );
};

export default SlidePopup;



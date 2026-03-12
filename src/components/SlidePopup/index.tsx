import ProductActionButtons from '../ProductActionButtons';

interface SlidePopupProps {
  isPopupOpen?: boolean;
  activeLayer?: string | null;
  popupType?: 'one-popup' | 'default' | 'fingerprint-sign';
  popupTitle?: string;
  popupMessageHtml?: string;
  showConsult?: boolean;
  showJoin?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  onClose?: (layerId: string) => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const SlidePopup = ({
  isPopupOpen = false,
  activeLayer = null,
  popupType = 'default',
  popupTitle = '',
  popupMessageHtml = '',
  showConsult = true,
  showJoin = true,
  cancelLabel = '상담',
  confirmLabel = '가입하기',
  onClose,
  onCancel,
  onConfirm,
}: SlidePopupProps) => {
  const closePopup = (layerId: string) => {
    onClose?.(layerId);
  };

  const handleCancel = () => {
    onCancel?.();
    closePopup('layer');
  };

  const handleConfirm = () => {
    onConfirm?.();
    closePopup('layer');
  };

  if (popupType === 'one-popup') {
    return (
      <div className="slide-popup">
        <div
          id="layer"
          className={`layer${isPopupOpen ? ' -active' : ''}`}
          onClick={(e) => { if (e.target === e.currentTarget) closePopup('layer'); }}
        >
          <div className="container">
            <div className="header">
              <div className="inner">
                <h1 className="title">{popupTitle}</h1>
              </div>
            </div>
            <div className="contents">
              <div className="content">
                <p className="p" dangerouslySetInnerHTML={{ __html: popupMessageHtml }} />
              </div>
              <ProductActionButtons
                rootClass="action-buttons"
                showConsult={showConsult}
                showJoin={showJoin}
                consultLabel={cancelLabel}
                joinLabel={confirmLabel}
                onConsult={handleCancel}
                onJoin={handleConfirm}
              />
            </div>
          </div>
        </div>
        {isPopupOpen && (
          <div
            className={`dim${isPopupOpen ? ' -active' : ''}`}
            onClick={() => closePopup('layer')}
          />
        )}
      </div>
    );
  }

  return (
    <div className="slide-popup">
      {/* layer: 가입기간 */}
      <div
        id="layer"
        className={`layer${isPopupOpen && activeLayer === 'layer' ? ' -active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closePopup('layer'); }}
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
                  <li><button type="button" className="option stepBtn" onClick={() => closePopup('layer')}>9개월</button></li>
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

      {/* layer1: 이자 받는 방법 */}
      <div
        id="layer1"
        className={`layer${isPopupOpen && activeLayer === 'layer1' ? ' -active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closePopup('layer1'); }}
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
                  <li><button type="button" className="option stepBtn" onClick={() => closePopup('layer1')}>만기</button></li>
                  <li><button type="button" className="option">매월</button></li>
                </ul>
              </div>
            </div>
            <div className="buffer" style={{ height: 0 }} />
          </div>
        </div>
      </div>

      {/* layer2: 금액 입력 */}
      <div
        id="layer2"
        className={`layer${isPopupOpen && activeLayer === 'layer2' ? ' -active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) closePopup('layer2'); }}
      >
        <div className="container">
          <div className="contents">
            <div className="content">
              <div className="choose-account-Wrap -inputed">
                <div className="amount-btn-wrap">
                  <button type="button" value="100000" className="button numBtn -sm -fit">+10만</button>
                  <button type="button" value="500000" className="button numBtn -sm -fit">+50만</button>
                  <button type="button" value="1000000" className="button numBtn -sm -fit">+100만</button>
                  <button type="button" value="10000000" className="button numBtn -sm -fit">+1,000만</button>
                </div>
                <div className="custom-key-wrap">
                  <button type="button" title="숫자 1 입력">1</button>
                  <button type="button" title="숫자 2 입력">2</button>
                  <button type="button" title="숫자 3 입력">3</button>
                  <button type="button" title="숫자 4 입력">4</button>
                  <button type="button" title="숫자 5 입력">5</button>
                  <button type="button" title="숫자 6 입력">6</button>
                  <button type="button" title="숫자 7 입력">7</button>
                  <button type="button" title="숫자 8 입력">8</button>
                  <button type="button" title="숫자 9 입력">9</button>
                  <button type="button" disabled aria-hidden="true">NH</button>
                  <button type="button" title="숫자 0 입력">0</button>
                  <button type="button" className="btn-del" title="마지막 숫자 삭제">←</button>
                </div>
              </div>
            </div>
            <ProductActionButtons
              rootClass="action-buttons"
              joinLabel="확인"
              showConsult={false}
              onJoin={() => closePopup('layer2')}
            />
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div
          className={`dim${isPopupOpen ? ' -active' : ''}`}
          onClick={() => activeLayer && closePopup(activeLayer)}
        />
      )}
    </div>
  );
};

export default SlidePopup;



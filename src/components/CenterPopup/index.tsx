import DOMPurify from 'dompurify';
import { ProductActionButtons } from '../ProductActionButtons';

interface CenterPopupProps {
    isPopupOpen: boolean;
    activeLayer?: string | null;
    popupTitle?: string;
    popupMessageHtml?: string;
    popupMessageHtml2?: string;
    cancelLabel?: string;
    confirmLabel?: string;
    confirmButtonClass?: string;
    onClose?: (layerId?: string | null) => void;
    onCancel?: () => void;
    onConfirm?: () => void;
}

export const CenterPopup = ({
    isPopupOpen = false,
    activeLayer = null,
    popupTitle = '',
    popupMessageHtml = '',
    popupMessageHtml2 = '',
    cancelLabel = '',
    confirmLabel = '',
    confirmButtonClass = '-primary',
    onClose,
    onCancel,
    onConfirm,
}: CenterPopupProps) => {
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
    const cleanHtml = DOMPurify.sanitize(popupMessageHtml);
    const cleanHtml2 = DOMPurify.sanitize(popupMessageHtml2);

    return (
        <div className="center-popup">
            <div
                id="layer"
                className={`alert${isPopupOpen ? ' -active' : ''}`}
                onClick={() => activeLayer && closePopup(activeLayer)}
            >
                <div className="container">
                    <div className="header">
                        <div className="inner">
                            <h1 className="title">{popupTitle}</h1>
                        </div>
                    </div>

                    <div className="contents">
                        <div className="content">
                            <p className="p" dangerouslySetInnerHTML={{ __html: cleanHtml }} />
                            {cleanHtml2 ? (
                            <p className="p" dangerouslySetInnerHTML={{ __html:cleanHtml2 }} />
                            ) : null}
                        </div>

                        <ProductActionButtons
                            rootClass="action-buttons"
                            showCancel={false}
                            cancelLabel={cancelLabel}
                            active={true}
                            confirmLabel={confirmLabel}
                            confirmButtonClass={confirmButtonClass}
                            onCancel={handleCancel}
                            onConfirm={handleConfirm}
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

export default CenterPopup;



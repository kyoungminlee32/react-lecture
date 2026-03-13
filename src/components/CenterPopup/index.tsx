import { MouseEvent } from 'react';
import { ProductActionButtons } from '../ProductActionButtons';

interface CenterPopupProps {
    isPopupOpen: boolean;
    activeLayer?: string | null;
    popupType?: string;
    popupTitle?: string;
    popupMessageHtml?: string;
    popupMessageHtml2?: string;
    cancelLabel?: string;
    confirmLabel?: string;
    addButtonClass?: string;
    onClose?: (layerId?: string | null) => void;
    onCancel?: () => void;
    onConfirm?: () => void;
}

export const CenterPopup = ({
    isPopupOpen,
    popupTitle = '',
    popupMessageHtml = '',
    popupMessageHtml2 = '',
    confirmLabel = '',
    addButtonClass = '-primary',
    onClose,
    onConfirm,
}: CenterPopupProps) => {
    const handleClose = (layerId?: string | null) => {
        onClose?.(layerId);
        console.log(`센터 팝업이 닫혔습니다. layerId: ${layerId}`);
    };

    const handleConfirm = () => {
        onConfirm?.();
        handleClose('alert');
        console.log('센터 팝업이 확인되었습니다. layerId: alert');
    };

    const closeOnBackdrop =
        (layerId: string) => (event: MouseEvent<HTMLDivElement>) => {
            if (event.target === event.currentTarget) {
                handleClose(layerId);
            }
        };

    if (!isPopupOpen) {
        return <div className="center-popup" />;
    }

    return (
        <div className="center-popup">
            <div
                id="layer"
                className={`alert${isPopupOpen ? ' -active' : ''}`}
                onClick={closeOnBackdrop('alert')}
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
                            {popupMessageHtml2 ? (
                                <p className="p" dangerouslySetInnerHTML={{ __html: popupMessageHtml2 }} />
                            ) : null}
                        </div>

                        <ProductActionButtons
                            rootClass="action-buttons"
                            showConsult={false}
                            active={true}
                            joinLabel={confirmLabel}
                            joinButtonClass={addButtonClass}
                            onJoin={handleConfirm}
                        />
                    </div>
                </div>
            </div>

            <div className="dim -active" onClick={() => handleClose('alert')} />
        </div>
    );
};

export default CenterPopup;



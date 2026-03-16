interface ProductActionButtonsProps {
  inline?: boolean;
  active?: boolean;
  showCancel?: boolean;
  showConfirm?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  confirmButtonClass?: string;
  rootClass?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const ProductActionButtons = ({
  inline = false,
  active = false,
  showCancel = true,
  showConfirm = true,
  cancelLabel = '취소',
  confirmLabel = '확인',
  confirmButtonClass = '-primary',
  rootClass = '',
  onCancel,
  onConfirm,
}: ProductActionButtonsProps) => {
  const wrapperClassName = inline ? rootClass : `fixer${rootClass ? ` ${rootClass}` : ''}`;

  return (
    <div className={wrapperClassName}>
      <div className="buttons">
        {showCancel && (
          <button
            type="button"
            className={`button -lg ${active ? '' : ' -disabled'}`}
            disabled={!active}
            onClick={onCancel}>
            {cancelLabel}
          </button>
        )}
        {showConfirm && (
          <button
            type="button"
            className={`button -lg ${confirmButtonClass}${active ? '' : ' -disabled'}`}
            disabled={!active}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductActionButtons;

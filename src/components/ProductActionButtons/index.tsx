interface ProductActionButtonsProps {
  inline?: boolean;
  active?: boolean;
  showConsult?: boolean;
  showJoin?: boolean;
  consultLabel?: string;
  joinLabel?: string;
  rootClass?: string;
  onConsult?: () => void;
  onJoin?: () => void;
}

export const ProductActionButtons = ({
  inline = false,
  active = false,
  showConsult = true,
  showJoin = true,
  consultLabel = '상담',
  joinLabel = '가입하기',
  rootClass = '',
  onConsult,
  onJoin,
}: ProductActionButtonsProps) => {
  const wrapperClassName = inline ? rootClass : `fixer${rootClass ? ` ${rootClass}` : ''}`;

  return (
    <div className={wrapperClassName}>
      <div className="buttons">
        {showConsult && (
          <button type="button" className="button -lg" onClick={onConsult}>
            {consultLabel}
          </button>
        )}
        {showJoin && (
          <button
            type="button"
            className={`button -lg -primary${active ? '' : ' -disabled'}`}
            disabled={!active}
            onClick={onJoin}
          >
            {joinLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductActionButtons;

interface FwHeaderProps {
  title: string;
  showBack?: boolean;
  rightText?: string;
  onBack?: () => void;
  onAction?: () => void;
}

export const FwHeader = ({
  title,
  showBack = false,
  rightText,
  onBack,
  onAction,
}: FwHeaderProps) => {
  return (
    <header className="header">
        <div className="inner">
            <div className="funcs">
                {showBack ? (
                <button type="button" className="func -back" onClick={onBack}>
                    <span className="hide">뒤로</span>
                </button>
                ) : null}
            </div>
            <h1 className="title">{title}</h1>
            <div className="funcs">
                {rightText ? (
                <button type="button" className="func" onClick={onAction}>
                    {rightText}
                </button>
                ) : null}
            </div>
        </div>
    </header>
  );
};

export default FwHeader;

import { ReactNode } from 'react';

interface FwHeaderProps {
    title?: string;
    centered?: boolean;
    showBack?: boolean;
    showHome?: boolean;
    showMenu?: boolean;
    showClose?: boolean;
    rightText?: string;
    leftSlot?: ReactNode;
    rightSlot?: ReactNode;
    onBack?: () => void;
    onHome?: () => void;
    onMenu?: () => void;
    onClose?: () => void;
    onAction?: () => void;
}

export const FwHeader = ({
    title = '',
    centered = false,
    showBack = false,
    showHome = false,
    showMenu = false,
    showClose = false,
    rightText = '',
    leftSlot,
    rightSlot,
    onBack,
    onHome,
    onMenu,
    onClose,
    onAction,
}: FwHeaderProps) => {
    const showLeft = showBack || Boolean(leftSlot);
    const showRight = showHome || showMenu || showClose || Boolean(rightText) || Boolean(rightSlot);

    return (
        <header className="header">
            <div className={`inner${centered ? ' center' : ''}`}>
                {showLeft ? (
                    <div className="funcs">
                        {showBack ? (
                            <button type="button" className="func -back" onClick={onBack}>
                                <span className="hide">뒤로가기</span>
                            </button>
                        ) : null}
                        {leftSlot}
                    </div>
                ) : null}

                <h1 className="title">{title}</h1>

                {showRight ? (
                    <div className="funcs">
                        {showHome ? (
                            <button type="button" className="func -home" onClick={onHome}>
                                <span className="hide">홈</span>
                            </button>
                        ) : null}
                        {showMenu ? (
                            <button type="button" className="func -menu" onClick={onMenu}>
                                <span className="hide">전체메뉴</span>
                            </button>
                        ) : null}
                        {showClose ? (
                            <button type="button" className="func -close" onClick={onClose}>
                                <span className="hide">닫기</span>
                            </button>
                        ) : null}
                        {rightText ? (
                            <button type="button" className="func" onClick={onAction}>
                                {rightText}
                            </button>
                        ) : null}
                        {rightSlot}
                    </div>
                ) : null}
            </div>
        </header>
    );
};

// export default FwHeader;

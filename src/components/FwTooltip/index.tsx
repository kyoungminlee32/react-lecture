import { MouseEvent, useEffect, useId, useRef, useState } from 'react';

interface FwTooltipProps {
  triggerText: string;
  title?: string;
  items?: string[];
  onOpen?: () => void;
  onClose?: () => void;
  onPanelClick?: () => void;
}

export const FwTooltip = ({
  triggerText,
  title,
  items = [],
  onOpen,
  onClose,
  onPanelClick,
}: FwTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const panelRef = useRef<HTMLSpanElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) {
      setIsReversed(false);
      return;
    }

    const tooltipElement = tooltipRef.current;
    const panelElement = panelRef.current;

    if (!tooltipElement || !panelElement) {
      return;
    }

    const triggerRect = tooltipElement.getBoundingClientRect();
    const panelRect = panelElement.getBoundingClientRect();
    const bottomOverflow = triggerRect.bottom + 16 + panelRect.height > window.innerHeight;
    const topSpace = triggerRect.top;

    setIsReversed(bottomOverflow && topSpace > panelRect.height);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | globalThis.MouseEvent) => {
      if (!tooltipRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        onClose?.();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handlePointerDown as EventListener);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown as EventListener);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const toggleTooltip = () => {
    setIsOpen((previous) => {
      const next = !previous;

      if (next) {
        onOpen?.();
      } else {
        onClose?.();
      }

      return next;
    });
  };

  const handlePanelClick = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    onPanelClick?.();
  };

  return (
    <span
      ref={tooltipRef}
      className={`tooltip${isOpen ? ' -active' : ''}${isReversed ? ' -reversed' : ''}`}
    >
      <button
        type="button"
        className="trigger"
        aria-label={triggerText}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggleTooltip}
      >
        <span className="hide">{triggerText}</span>
      </button>
      <span
        ref={panelRef}
        id={panelId}
        className="panel"
        role="tooltip"
        onClick={handlePanelClick}
      >
        {title ? <strong className="title">{title}</strong> : null}
        {items.length > 0 ? (
          <span className="t-content">
            {items.map((item, index) => (
              <span key={`${item}-${index}`} className="dot">
                {item}
              </span>
            ))}
          </span>
        ) : null}
      </span>
    </span>
  );
};

export default FwTooltip;
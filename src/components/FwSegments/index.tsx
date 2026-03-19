import { useId, useMemo } from 'react';

interface Tab {
    value: string;
    label: string;
    panel?: React.ReactNode;
}

interface FwSegmentsProps {
    value?: string;
    addClass?: string;
    tabs: Tab[];
    tabStyle?: boolean;
    onChange?: (value: string) => void;
    panels?: Record<string, React.ReactNode>;
}

export const FwSegments = ({
    value,
    addClass = '',
    tabs,
    tabStyle = false,
    onChange,
    panels,
}: FwSegmentsProps) => {
    const uid = `fw-segments-${useId().replace(/:/g, '')}`;
    const normalizedTabs = useMemo(() => tabs, [tabs]);
    const selectedValue = value ?? normalizedTabs[0]?.value ?? '';

    const handleSelect = (nextValue: string) => {
        onChange?.(nextValue);
    };

    const renderTabList = () => (
        <div role="tablist" className="list">
            {normalizedTabs.map(tab => {
                const isActive = selectedValue === tab.value;
                return (
                    <div key={tab.value} className={`item${isActive ? ' -active' : ''}`}>
                        <button
                            type="button"
                            role="tab"
                            id={`${uid}-tab-${tab.value}`}
                            aria-controls={`${uid}-panel-${tab.value}`}
                            aria-selected={isActive}
                            onClick={() => handleSelect(tab.value)}
                        >
                            {tab.label}
                            {isActive && <span className="hide">선택됨</span>}
                        </button>
                    </div>
                );
            })}
        </div>
    );


    const renderPanels = () => {
        return (
            <div className="segments-panels">
                {normalizedTabs.map(tab => {
                    const isActive = selectedValue === tab.value;
                    return (
                        <div
                            key={tab.value}
                            role="tabpanel"
                            id={`${uid}-panel-${tab.value}`}
                            aria-labelledby={`${uid}-tab-${tab.value}`}
                            className={`segments-panel${isActive ? ' -active' : ''}`}
                            tabIndex={isActive ? 0 : -1}
                            style={{ display: isActive ? 'block' : 'none' }}
                        >
                            {tab.panel}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div>
            <div className={`${addClass ? addClass : 'segments'}${tabStyle ? ' -tabstyle' : ''}`}>
                {tabStyle ? (
                    <div className="outer">
                        {renderTabList()}
                    </div>
                ) : (
                    renderTabList()
                )}
            </div>
            {renderPanels()}
        </div>
    );
};
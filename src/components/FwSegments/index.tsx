import { useId, useMemo } from 'react';

type TabValue = string;

type InputTab =
    | string
    | {
            key?: string;
            value?: string;
            label?: string;
            panel?: React.ReactNode;
        };

interface NormalizedTab {
    value: string;
    label: string;
    panel?: React.ReactNode;
}

interface FwSegmentsProps {
    value?: TabValue;
    modelValue?: TabValue;
    tabs?: InputTab[];
    tabStyle?: boolean;
    onChange?: (value: TabValue) => void;
    onModelValueChange?: (value: TabValue) => void;
}

export const FwSegments = ({
    value,
    modelValue,
    tabs = [],
    tabStyle = false,
    onChange,
    onModelValueChange,
}: FwSegmentsProps) => {
    const reactId = useId().replace(/:/g, '');
    const uid = `fw-segments-${reactId}`;

    const normalizedTabs = useMemo<NormalizedTab[]>(() => {
        return tabs.map((tab) => {
            if (typeof tab === 'string') {
                return { value: tab, label: tab };
            }

            const tabValue = tab.value ?? tab.key ?? '';
            return {
                value: tabValue,
                label: tab.label ?? tabValue,
                panel: tab.panel,
            };
        });
    }, [tabs]);

    const selectedValue = modelValue ?? value ?? normalizedTabs[0]?.value ?? '';

    const select = (nextValue: string) => {
        onModelValueChange?.(nextValue);
        onChange?.(nextValue);
    };

    const tabList = (
        <div role='tablist' className='list'>
            {normalizedTabs.map((tab) => {
                const isActive = selectedValue === tab.value;
                return (
                    <div
                        key={tab.value}
                        className={`item${isActive ? ' -active' : ''}`}
                    >
                        <button
                            type='button'
                            role='tab'
                            id={`${uid}-tab-${tab.value}`}
                            aria-controls={`${uid}-panel-${tab.value}`}
                            aria-selected={isActive}
                            onClick={() => select(tab.value)}
                        >
                            {tab.label}
                            {!tabStyle && isActive && <span className='hide'>선택됨</span>}
                        </button>
                    </div>
                );
            })}
        </div>
    );

    return (
        <div>
            <div className={`segments${tabStyle ? ' -tabstyle' : ''}`}>
                {tabStyle ? (
                    <div className='outer'>
                        <div className='inner'>{tabList}</div>
                    </div>
                ) : (
                    tabList
                )}
            </div>

            <div className='segments-panels'>
                {normalizedTabs.map((tab) => {
                    const isActive = selectedValue === tab.value;
                    return (
                        <div
                            key={tab.value}
                            role='tabpanel'
                            id={`${uid}-panel-${tab.value}`}
                            aria-labelledby={`${uid}-tab-${tab.value}`}
                            className={`segments-panel${isActive ? ' -active' : ''}`}
                            tabIndex={isActive ? 0 : -1}
                            hidden={!isActive}
                        >
                            {tab.panel}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

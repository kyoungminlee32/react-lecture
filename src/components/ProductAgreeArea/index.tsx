import { useState } from 'react';

export interface ProductAgreeLinkItem {
    label: string;
    href?: string;
}

interface ProductAgreeAreaProps {
    title?: string;
    links?: ProductAgreeLinkItem[];
    defaultOpen?: boolean;
    onSelect?: (item: ProductAgreeLinkItem) => void;
}

export const ProductAgreeArea = ({
    title = '상품설명서 및 약관',
    links = [],
    defaultOpen = true,
    onSelect,
}: ProductAgreeAreaProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className='product-agree-area'>
            <div className={`accordion -lg${isOpen ? ' -active' : ''}`} data-role='fold'>
                <button
                    type='button'
                    className='title'
                    data-role='marker'
                    aria-expanded={isOpen}
                    onClick={toggleOpen}
                >
                    {title}
                </button>

                <div className='panel' data-role='hidden' hidden={!isOpen}>
                    <div className='shortcut -boxType'>
                        <ul>
                            {links.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href || 'javascript:void(0)'}
                                        aria-haspopup='true'
                                        onClick={(event) => {
                                            event.preventDefault();
                                            onSelect?.(item);
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

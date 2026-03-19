import React from 'react';

interface ShortcutItem {
  label: string;
  href: string;
  role1?: string;
}

interface ShortcutBoxProps {
  items: ShortcutItem[];
  boxType?: boolean;
}

export const ShortcutBox: React.FC<ShortcutBoxProps> = ({ items, boxType = false }) => {
  return (
    <div className={['shortcut', boxType ? '-boxType' : ''].join(' ')}>
      {boxType ? (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              <a href={item.href} role={item.role1}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        items[0] && (
          <a href={items[0].href}>{items[0].label}</a>
        )
      )}
    </div>
  );
};

export default ShortcutBox;

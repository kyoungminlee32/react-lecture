import React from 'react';

interface LinkBannerProps {
  title?: string;
  subtitle?: string;
  onClick?: () => void;
}

const LinkBanner = ({
  title = '',
  subtitle = '',
  onClick,
}: LinkBannerProps) => {
  return (
    <div className="submain-link-wrap">
      <a
        className="submain-link-button"
        href="#"
        role="button"
        aria-haspopup="true"
        onClick={(e) => {
          e.preventDefault();
          onClick && onClick();
        }}
      >
        <div className="submain-link-title">{title}</div>
        <div className="submain-link-sub">{subtitle}</div>
      </a>
    </div>
  );
};

export default LinkBanner;

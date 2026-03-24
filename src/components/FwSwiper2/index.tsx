import React from 'react';
import { BaseSwiper, Slide } from '../BaseSwiper';

interface FwSwiperProps {
  slides: Slide[];
  wrapClass?: string;
  onBannerClick?: (code: number) => void;
  pagination?: {
    clickable?: boolean;
    type?: 'bullets' | 'fraction' | 'progressbar';
    el?: string;
  };
}

export const FwSwiper2: React.FC<FwSwiperProps> = ({
  slides,
  wrapClass = '',
  onBannerClick,
  pagination,
}) => {
  return (
    <BaseSwiper
      slides={slides}
      wrapClass={wrapClass}
      onBannerClick={onBannerClick}
      pagination={pagination}
    />
  );
};

export default FwSwiper2;

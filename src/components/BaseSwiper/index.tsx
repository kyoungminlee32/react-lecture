import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface Slide {
  code: number;
  type: string;
  title: string;
  sub: string;
  tags?: string[];
}

interface BaseSwiperProps {
  slides: Slide[];
  wrapClass?: string;
  onBannerClick?: (code: number) => void;
  pagination?: any;
  navigation?: any;
  autoplay?: any;
  loop?: boolean;
  speed?: number;
  spaceBetween?: number;
  observer?: boolean;
  observeParents?: boolean;
}

export const BaseSwiper: React.FC<BaseSwiperProps> = ({
  slides,
  wrapClass = '',
  onBannerClick = (code) => alert('배너 클릭: ' + code),
  pagination = { el: '.swiper-pagination', clickable: true, type: 'fraction' },
  navigation = { nextEl: '.slide_next', prevEl: '.slide_prev' },
  autoplay = { delay: 4000, disableOnInteraction: false },
  loop = true,
  speed = 500,
  spaceBetween = 24,
  observer = true,
  observeParents = true,
}) => {
  const [isStopped, setIsStopped] = useState(false);
  const swiperRef = useRef<any>(null);

  // aria-hidden 처리
  const setAriaHidden = () => {
    if (!swiperRef.current) return;
    const slidesEls = swiperRef.current.slides || [];
    slidesEls.forEach((el: HTMLElement, idx: number) => {
      el.setAttribute('aria-hidden', swiperRef.current.realIndex === idx ? 'false' : 'true');
    });
  };

  useEffect(() => {
    setAriaHidden();
  }, [slides]);

  const onInit = () => setAriaHidden();
  const onSlideChangeTransitionEnd = () => setAriaHidden();
  const onTouchEnd = () => {
    if (!swiperRef.current?.autoplay) return;
    if (!swiperRef.current.autoplay.running) setIsStopped(true);
  };
  const toggleAutoplay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!swiperRef.current?.autoplay) return;
    setIsStopped((prev) => {
      if (!prev) swiperRef.current.autoplay.stop();
      else swiperRef.current.autoplay.start();
      return !prev;
    });
  };

  return (
    <div className={['submain-banner-wrap', wrapClass].join(' ')} style={{ display: slides.length > 0 ? undefined : 'none' }}>
      {slides.length > 0 && (
        <>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            navigation={navigation}
            pagination={pagination} // 이 줄 추가!
            autoplay={!isStopped ? autoplay : false}
            loop={loop}
            speed={speed}
            spaceBetween={spaceBetween}
            observer={observer}
            observeParents={observeParents}
            onSwiper={(swiper: any) => (swiperRef.current = swiper)}
            onInit={onInit}
            onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
            onTouchEnd={onTouchEnd}
            className="submain-banner-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.code}>
                <a href="#" onClick={e => { e.preventDefault(); onBannerClick(slide.code); }}>
                  <div className={['submain-banner', slide.type].join(' ')}>
                    <div className="banner-txt-wrap">
                      <div className="prd-title" dangerouslySetInnerHTML={{ __html: slide.title }} />
                      <div className="prd-sub">{slide.sub}</div>
                    </div>
                    {slide.tags && (
                      <div className="hash-tag">
                        {slide.tags.map(tag => <span key={tag}>{tag}</span>)}
                      </div>
                    )}
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          {slides.length > 1 && (
            <div className="pagination-wrap" aria-hidden={slides.length <= 0}>
              <div className="pagination-inner">
                <button type="button" className="slide_prev" tabIndex={0} aria-label="Previous slide">
                  <span className="hide">이전 슬라이드</span>
                </button>
                <div className="swiper-pagination"></div>
                <button type="button" className="slide_next" tabIndex={0} aria-label="Next slide">
                  <span className="hide">다음 슬라이드</span>
                </button>
              </div>
              <a
                href="#"
                className={`button-stop${isStopped ? ' -active' : ''}`}
                role="button"
                onClick={toggleAutoplay}
              >
                <span className="hide">{isStopped ? '재생' : '정지'}</span>
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BaseSwiper;

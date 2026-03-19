import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  code: number;
  type: string;
  title: string;
  sub: string;
}

const slidesData: Slide[] = [
  {
    code: 10001160,
    type: 'type01',
    title: '복잡한 우대조건 없이<br>목돈을 굴릴 수 있는',
    sub: 'NH올원e예금',
  },
  {
    code: 10001314,
    type: 'type02',
    title: '복잡한 우대조건 없는<br>모바일 전용 고금리 적금',
    sub: 'NH올원e적금',
  },
  {
    code: 10001313,
    type: 'type03',
    title: '고객들의 이유있는 선택!<br>NH농협은행 대표 통장',
    sub: 'NH올원e통장',
  },
  {
    code: 10000587,
    type: 'type04',
    title: '청약권이 부여되는<br>내 집 마련의 필수 상품',
    sub: '주택청약종합저축',
  },
];

export const FwSwiper: React.FC = () => {
  const [isStopped, setIsStopped] = useState(false);
  const swiperRef = useRef<any>(null);

  const isDisabled = slidesData.length <= 0;

  // Swiper 인스턴스 참조
  const onSwiper = (swiper: any) => {
    swiperRef.current = swiper;
    setAriaHidden(swiper);
  };

  // 접근성: 활성 슬라이드 aria-hidden 처리
  const setAriaHidden = (swiper: any) => {
    if (!swiper) return;
    const slidesEls = swiper.slides || [];
    slidesEls.forEach((el: HTMLElement, idx: number) => {
      el.setAttribute('aria-hidden', swiper.realIndex === idx ? 'false' : 'true');
    });
  };

  // Swiper 이벤트 핸들러
  const onInit = (swiper: any) => setAriaHidden(swiper);
  const onSlideChangeTransitionEnd = (swiper: any) => setAriaHidden(swiper);
  const onTouchEnd = (swiper: any) => {
    if (!swiper?.autoplay) return;
    if (!swiper.autoplay.running) {
      setIsStopped(true);
    }
  };

  // 배너 클릭 시 getBnrDetail 호출
  const onBannerClick = (code: number) => {
    // @ts-ignore
    if (window.getBnrDetail) {
      // @ts-ignore
      window.getBnrDetail(code);
    } else {
      alert('배너 클릭: ' + code);
    }
  };

  // 정지/재생 토글
  const toggleAutoplay = () => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;
    if (isStopped) {
      swiper.autoplay.start();
      setIsStopped(false);
    } else {
      swiper.autoplay.stop();
      setIsStopped(true);
    }
  };

  if (slidesData.length === 0) return null;

  return (
    <div className="submain-banner-wrap -deposit">
      {!isDisabled && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          pagination={{ clickable: true, type: 'fraction', el: '.swiper-pagination' }}
          navigation={{ nextEl: '.slide_next', prevEl: '.slide_prev' }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={500}
          spaceBetween={24}
          observer
          observeParents
          onSwiper={onSwiper}
          onInit={onInit}
          onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
          onTouchEnd={onTouchEnd}
          className="submain-banner-swiper"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.code}>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  onBannerClick(slide.code);
                }}
              >
                <div className={['submain-banner', slide.type].join(' ')}>
                  <div className="banner-txt-wrap">
                    <div
                      className="prd-title"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <div className="prd-sub">{slide.sub}</div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {slidesData.length > 1 && (
        <div className="pagination-wrap" aria-hidden={isDisabled}>
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
            href="javascript:void(0);"
            className={['button-stop', isStopped ? '-active' : ''].join(' ')}
            role="button"
            onClick={e => {
              e.preventDefault();
              toggleAutoplay();
            }}
          >
            <span className="hide">{isStopped ? '재생' : '정지'}</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default FwSwiper;
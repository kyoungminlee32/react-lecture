import React, { useState } from 'react';
// 1.공통 헤더 컴포넌트
import { FwHeader } from '../../components/FwHeader';
// 2.탭 컴포넌트
import { FwSegments } from '../../components/FwSegments';
// 3.슬라이더 컴포넌트
import { FwSwiper2 } from '../../components/FwSwiper2';
// 4.상품 리스트 컴포넌트
import { ProductList } from '../../components/ProductList';
// 5.링크박스 컴포넌트
import { ShortcutBox } from '../../components/ShortcutBox';
// import slidesData2 등 필요한 데이터 import

export const FMBB0500000000F01 = () => {
  // 상위 탭 상태
  const [tabValue, setTabValue] = useState('mainTab02');
  // 하위 탭 상태
  const [ancTabValue, setAncTabValue] = useState('subTab02');

  // // 상품 리스트 데이터 정의
  const products = [
    {
      title: '신용대출 농협으로 갈아타기',
      sub: '서류 제출 없이 간편하게 신용대출 갈아타기',
      def: '연 4.9% ~ 6.26%',
      max: '최대 3억원',
      badge: '이벤트',
      loan: true
    },
    {
      title: '공무원을 위한 신용대출 농협으로 갈아타기',
      sub: '쉽게 공무원연금공단협약대출과 신용대출  안내 제출 없이 간편하게 신용대출 갈아타기',
      max: '최대 3억원',
      def: '최저 연 5.1%',
      loan: true
    },
    // ...다른 상품들
  ];
  // 링크박스 데이터 정의
  const shortcutItems = [
    {
      label: '계약서류 조회',
      href: '#',
      role: 'button',
    },
  ];

  // 대출 배너 데이터
  const loanSlides = [
    { code: 40000954, type: 'type02', title: '개인사업자 부동산 담보대출<br>비대면 신규 출시!', sub: 'NH e사장님 부동산담보대출', tags: ['#개인사업자', '#담보대출'] },
    { code: 40000938, type: 'type01', title: '여러 보증기관을<br>한번에 비교하세요', sub: 'NH모바일전세대출+', tags: ['#전세대출', '#갈아타기'] },
    { code: 40000890, type: 'type02', title: '개인사업자 전용<br>비대면 즉시 신용대출', sub: 'NH e사장님 바로대출', tags: ['#개인사업자', '#신용대출'] },
    { code: 40000950, type: 'type03', title: '새내기 직장인을 위한 <br>신용대출상품', sub: 'NH첫시작엔대출', tags: ['#신용대출', '#사회초년생'] },
    { code: 40000927, type: 'type04', title: '공적연금을 받는 고객이라면<br>간편하게 신청', sub: 'NH연금엔대출', tags: ['#신용대출', '#공적연금'] },
  ];

  return (
    <div className="page submain-body">
      <div className="container">
        {/* 공통 헤더 컴포넌트 */}
        <FwHeader
          title="금융상품몰"
          centered
          showBack
          showHome
          showMenu
        />
        <main className="contents">
          <div className="content">
            <div className="submain-content">
                {/* 상위 탭 컴포넌트 */}
                <FwSegments
                    tabStyle
                    value={tabValue}
                    onChange={setTabValue}
                    tabs={[
                    {
                        value: 'mainTab01',
                        label: '저축',
                        panel:
                        <>
                            저축 컨텐츠
                        </>
                    },
                    {
                        value: 'mainTab02',
                        label: '대출',
                        panel: (
                            <>
                                {/* Swiper 배너 영역 */}
                                <FwSwiper2
                                    slides={loanSlides}
                                    wrapClass="-loan"
                                />
                                <div className="submain-list">
                                    <FwSegments
                                    addClass="subs -anchor"
                                    value={ancTabValue}
                                    onChange={setAncTabValue}
                                    tabs={[
                                        {
                                            value: 'subTab01',
                                            label: '갈아타기',
                                            panel:
                                            <>
                                                갈아타기 컨텐츠
                                            </>
                                        },
                                        {
                                            value: 'subTab02',
                                            label: '직장인',
                                            panel: (
                                                <div className="sub-prod-list-units">
                                                    <ProductList items={products} />
                                                    <ShortcutBox items={shortcutItems} boxType />
                                                </div>
                                            ) 
                                        },
                                        {
                                            value: 'subTab03',
                                            label: '주택/전세',
                                            panel:
                                            <>
                                                주택/전세 컨텐츠
                                            </>
                                        },
                                        {
                                            value: 'subTab04',
                                            label: '예적금/기타',
                                            panel:
                                            <>
                                                예적금/기타 컨텐츠
                                            </>
                                        },
                                        {
                                            value: 'subTab05',
                                            label: '개인사업자',
                                            panel:
                                            <>
                                                개인사업자 컨텐츠
                                            </>
                                        },
                                        {
                                            value: 'subTab06',
                                            label: '개인사업자',
                                            panel:
                                            <>
                                                서민금융 컨텐츠
                                            </>
                                        },
                                        // ...다른 탭
                                    ]}
                                    />
                                </div>
                            </>
                        ) 
                    },
                     {
                        value: 'mainTab03',
                        label: '펀드/투자',
                        panel:
                        <>
                            펀드/투자 컨텐츠
                        </>
                    },
                     {
                        value: 'mainTab04',
                        label: '외환',
                        panel:
                        <>
                            외환 컨텐츠
                        </>
                    },
                     {
                        value: 'mainTab05',
                        label: '보험',
                        panel:
                        <>
                            보험 컨텐츠
                        </>
                    },
                     {
                        value: 'mainTab06',
                        label: '퇴직연금',
                        panel:
                        <>
                            퇴직연금 컨텐츠
                        </>
                    },
                    // ...다른 메인탭
                    ]}
                />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FMBB0500000000F01;
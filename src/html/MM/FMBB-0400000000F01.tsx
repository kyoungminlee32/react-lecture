import React, { useState } from 'react';
// 1.공통 헤더 컴포넌트
import { FwHeader } from '../../components/FwHeader';
// 2.탭 컴포넌트
import { FwSegments } from '../../components/FwSegments';
// 3.슬라이더 컴포넌트
import { FwSwiper } from '../../components/FwSwiper';
import { FwSwiper2 } from '../../components/FwSwiper2';
// 4.상품 리스트 컴포넌트
import { ProductList } from '../../components/ProductList';
// 5.링크박스 컴포넌트
import { ShortcutBox } from '../../components/ShortcutBox';
// 6.링크 배너 컴포넌트
import LinkBanner from '../../components/LinkBanner';

export const FMBB0400000000F01 = () => {
    // 상위 탭 상태
    const [tabValue, setTabValue] = useState('mainTab01');
    // 하위 탭 상태
    const [ancTabValue, setAncTabValue] = useState('subTab01');
    // 상품 리스트 데이터 정의
    const products = [
        {
            title: 'NH1934우대통장',
            sub: '만 19세부터 만 34세 청년을 위한 통장',
            max: '최고 1.5%',
            def: '기본 4.5%',
        },
        {
            title: 'NH페이모아통장',
            sub: '만 19세부터 만 34세 청년을 위한 통장',
            max: '최고 1.5%',
            def: '기본 4.5%',
        },
        {
            title: '매직트리(Magic Tree) 아이(i)계좌',
            sub: '모계좌 근거로 가입/거래하는 수시입출식 예금',
            max: '최고 1.5%',
            def: '기본 4.5%',
        },
        {
            title: '채움공직자통장',
            sub: '공무원, 공공기관 임직원 대상 입출금 상품',
            max: '최고 1.5%',
            def: '기본 4.5%',
        },
        {
            title: '채움공직자통장',
            sub: '공무원, 공공기관 임직원 대상 입출금 상품',
            max: '최고 1.5%',
            def: '기본 4.5%',
        },
        {
            title: '채움공직자통장',
            sub: '공무원, 공공기관 임직원 대상 입출금 상품',
            max: '최고 1.5%',
            def: '기본 4.5%',
        },
    ];
    // 링크박스 데이터 정의
    const shortcutItems = [
        {
            label: '계약서류 조회',
            href: '#',
            role: 'button'
        },
    ];

    // 저축 배너 데이터
    const depositSlides = [
        { code: 10001160, type: 'type01', title: '복잡한 우대조건 없이<br>목돈을 굴릴 수 있는', sub: 'NH올원e예금' },
        { code: 10001314, type: 'type02', title: '복잡한 우대조건 없는<br>모바일 전용 고금리 적금', sub: 'NH올원e적금' },
        { code: 10001313, type: 'type03', title: '고객들의 이유있는 선택!<br>NH농협은행 대표 통장', sub: 'NH올원e통장' },
        { code: 10000587, type: 'type04', title: '청약권이 부여되는<br>내 집 마련의 필수 상품', sub: '주택청약종합저축' },
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
        <div className='page-wrapper'>
            <div className='page submain-body'>
                <div className='container'>
                    {/* 공통 헤더 컴포넌트 */}
                    <FwHeader
                        title='금융상품몰'
                        centered
                        showBack
                        showHome
                        showMenu
                    />
                    <main className='contents'>
                        <div className='content'>
                            <div className='submain-content'>
                                {/* 상위 탭 컴포넌트 */}
                                <FwSegments
                                    tabStyle
                                    value={tabValue}
                                    onChange={setTabValue}
                                    tabs={[
                                        { 
                                            value: 'mainTab01',
                                            label: '저축',
                                            panel: (
                                                <>
                                                {/* 스와이퍼 컴포넌트 */}
                                                <FwSwiper
                                                    key={tabValue + '-deposit'}
                                                    slides={depositSlides}
                                                    wrapClass="-deposit"
                                                />
                                                <div className='submain-list'>
                                                    {/* 하위 탭 컴포넌트 */}
                                                     <FwSegments
                                                        // tabStyle
                                                        addClass="subs -anchor"
                                                        value={ancTabValue}
                                                        onChange={setAncTabValue}
                                                        tabs={[
                                                            { 
                                                                value: 'subTab01',
                                                                label: '입출금',
                                                                panel: (
                                                                    <>
                                                                        {/* 배너 영역 컴포넌트 */}
                                                                         <LinkBanner
                                                                            title="내 자녀의 생애 첫 금융 시작"
                                                                            subtitle="우리아이 계좌개설"
                                                                        />
                                                                        <div className='sub-prod-list-units'>
                                                                            {/* 상품리스트 컴포넌트 */}
                                                                            <ProductList
                                                                                items={products}
                                                                            />
                                                                            {/* 하단박스 컴포넌트 */}
                                                                            <ShortcutBox
                                                                                items={shortcutItems}
                                                                                boxType
                                                                            />
                                                                        </div>
                                                                    </>
                                                                ),
                                                            },
                                                            { 
                                                                value: 'subTab02',
                                                                label: '예금',
                                                                panel: (
                                                                    <div>
                                                                        {/* 배너 영역 컴포넌트 */}
                                                                         <LinkBanner
                                                                            title="내 자녀의 생애 첫 금융 시작"
                                                                            subtitle="우리아이 계좌개설"
                                                                        />
                                                                    </div>
                                                                ),
                                                            },
                                                            { 
                                                                value: 'subTab03',
                                                                label: '적금',
                                                                panel: (
                                                                    <div>
                                                                         {/* 배너 영역 컴포넌트 */}
                                                                         <LinkBanner
                                                                            title="내 자녀의 생애 첫 금융 시작"
                                                                            subtitle="우리아이 계좌개설"
                                                                        />
                                                                    </div>
                                                                ),
                                                            },
                                                            { 
                                                                value: 'subTab04',
                                                                label: '청약',
                                                                panel: (
                                                                    <div>
                                                                        컨텐츠 청약
                                                                    </div>
                                                                ),
                                                            },
                                                            { 
                                                                value: 'subTab05',
                                                                label: '지수연동예금',
                                                                panel: (
                                                                    <div>
                                                                        컨텐츠 지수연동예금
                                                                    </div>
                                                                ),
                                                            },
                                                        ]}
                                                    />
                                                </div>
                                                </>
                                            )
                                        },
                                        { 
                                                value: 'mainTab02',
                                                label: '대출',
                                                panel:
                                                 <>
                                                    {/* Swiper 배너 영역 */}
                                                    <FwSwiper2
                                                        key={tabValue + '-loan'}
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
                                        },
                                        { 
                                                value: 'mainTab03',
                                                label: '펀드/투자',
                                                panel: <>펀드/투자</>
                                        },
                                        { 
                                                value: 'mainTab04',
                                                label: '외환',
                                                panel: <>외환</>
                                        },
                                        { 
                                                value: 'mainTab05',
                                                label: '보험',
                                                panel: <>보험</>
                                        },
                                        { 
                                                value: 'mainTab06',
                                                label: '퇴직연금',
                                                panel: <>퇴직연금</>
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default FMBB0400000000F01;

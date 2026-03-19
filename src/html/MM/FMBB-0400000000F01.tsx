import React, { useState } from 'react';
// 1.공통 헤더 컴포넌트
import { FwHeader } from '../../components/FwHeader';
// 2.탭 컴포넌트
import { FwSegments } from '../../components/FwSegments';
// 3.슬라이더 컴포넌트
import { FwSwiper } from '../../components/FwSwiper';
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
                                                <FwSwiper />
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
                                                                        컨텐츠 예금
                                                                    </div>
                                                                ),
                                                            },
                                                            { 
                                                                value: 'subTab03',
                                                                label: '적금',
                                                                panel: (
                                                                    <div>
                                                                        컨텐츠 적금
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
                                                panel: <>대출</>
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

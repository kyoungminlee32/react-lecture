
<template>
    <div class="page-wrapper">
        <div class="page">
            <div class="container">
                <!-- 헤더 영역 -->
                <FwHeader title="상품상세" :show-back="true" :show-home="true" :show-menu="true" />

                <main class="contents">
                    <div class="content">
                        
                    </div>
                </main>
            </div>
        </div>
        <!-- 팝업 영역 -->
         <div id="popup" :class="['popup', { '-active': isPopupOpen }]">
            <div class="container">
                <!-- 팝업 헤더 영역 -->
                <FwHeader title="팝업 타이틀" :centered="true" :show-close="true" @close="closePopup" />

                <div class="contents">
                    <!-- 상품 상세 영역 -->
                    <div class="content">
                        <div class="product-detail-wrap">
                            <!-- 상품 안내 영역 -->
                            <div class="procuct-summary">
                                <div class="info-area">
                                    <div class="title-area">
                                        <!-- 상품 플래그 영역 -->
                                        <ProductFlagArea :items="productFlags" />
                                        <p class="top-para">롱숏전략을 통해 시장변동성을 방어하는 상품!</p>
                                        <h2>BNK 삼성전자중소형 증권투자 신탁1호(주)Ae</h2>
                                        <p class="under-para">연말정산 세액공제 목적</p>
                                        <p class="under-para -sm">안정성 수익성 높은 투자 포인트</p>
                                        <!-- 상품 해시태그 영역 -->
                                        <ProductHashtagList :tags="productHashtags" />
                                        <!-- 상품 불릿 리스트 영역 -->
                                        <ProductBulletList :items="productSummaryBullets" />
                                    </div><!-- //.title-area -->
                                    <!-- 상품 서브타이틀 영역 -->
                                    <ProductSubtitleArea
                                        :max-amount="productCostSummary.maxAmount"
                                        :base-rate="productCostSummary.baseRate"
                                        :top-rate="productCostSummary.topRate"
                                        :cost-description="productCostSummary.description"
                                        :info-items="productInfoItems"
                                    /><!-- //.subtitle-area -->
                                    <!-- 상품 액션 버튼 영역 -->
                                    <ProductActionButtons inline root-class="top-join-btn" :show-consult="false" @join="openPopup" />
                                </div><!-- //.info-area -->

                                <!-- 비주얼 영역 html 로드로 변경 (ID_de.html) -->
                                <div class="loadArea" data-includ="ID_vidu.html"></div>
                                <!-- //비주얼 영역 html 로드로 변경 -->
                                
                                <!-- 상품 비주얼 리스트 영역 -->
                                <ProductVisualList :items="productVisualItems" />

                                <!-- 금리 계산해보기 -->
                                <ProductInterestCalculator :annual-rate="0.028" @calculated="onInterestCalculated" />
                                <!-- //금리 계산해보기 -->
                            </div><!-- //.procuct-summary -->
                            <!-- //상품 안내 영역 -->

                            <!-- 상품 정보 영역 -->
                            <div class="procuct-info">
                                <div class="segments -tabstyle">
                                    <div class="outer">
                                        <div class="inner">
                                            <div role="tablist" class="list">
                                                <div class="item" :class="{ '-active': activeTab === 'segment01' }"><button type="button" role="tab" :aria-selected="String(activeTab === 'segment01')" aria-controls="segments-panel01" id="segment01" @click="setTab('segment01')">상품안내</button></div>
                                                <div class="item" :class="{ '-active': activeTab === 'segment02' }"><button type="button" role="tab" :aria-selected="String(activeTab === 'segment02')" aria-controls="segments-panel02" id="segment02" @click="setTab('segment02')">금리안내</button></div>
                                                <div class="item" :class="{ '-active': activeTab === 'segment03' }"><button type="button" role="tab" :aria-selected="String(activeTab === 'segment03')" aria-controls="segments-panel03" id="segment03" @click="setTab('segment03')">유의사항</button></div>
                                                <div class="item" :class="{ '-active': activeTab === 'segment04' }"><button type="button" role="tab" :aria-selected="String(activeTab === 'segment04')" aria-controls="segments-panel04" id="segment04" @click="setTab('segment04')">기타사항</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="segments-panels">
                                    <div role="tabpanel" aria-labelledby="segment01" id="segments-panel01" :class="['segments-panel', { '-active': activeTab === 'segment01' }]" tabindex="0">
                                        <dl class="prodect-info-dl">
                                            <dt class="h5">상품특징</dt>
                                            <dd>
                                                <p class="p">매월 약정 납입일에 저축금을 납입하여 순위 요건 충족시 국민 주택과 민영주택권이 부여되는 입주자 저축</p>
                                            </dd>

                                            <dt class="h5">가입대상</dt>
                                            <dd>
                                                <p class="p">국민인 개인(국내에 거주하는 재외동포 포함)또는 외국인 거주자로서 연령에 관계없이 누구나 가입가능</p>
                                                <ul class="ul -bullet">
                                                    <li>주택청약종합저축의 가입은 청년우대형주택청약종합저축, 청약저축, 청약예금, 청약부금을 포함 하여 전 금융기관 1인1계좌에 한함</li>
                                                    <li>비과세종합저축으로 가입가능(본인 한도 내)</li>
                                                </ul>
                                            </dd>

                                            <dt class="h5">가입기간</dt>
                                            <dd>
                                                <p class="p">가입일로부터 입주자로 선정된 날까지<br>별도 만기 없음</p>
                                            </dd>

                                            <dt class="h5">가입금액</dt>
                                            <dd>
                                                <p class="p">매월 약정납입일(신규가입일 해당일)에 2만원 이상 50만원 이하의 금액을 10원 단위로 자유롭게 납입<br>단, 월 납입금의 총액이 1,500만원에 이를 때까지는 50만원을 초과하여 납입가능</p>
                                                <p class="p">선납회차 : 정상 납입회차에 추가하여 최고 24회차까지 선납가능</p>
                                            </dd>
                                        </dl>

                                        <!-- 제로인등 아이프레임 데이터 영역 -->
                                        <div class="procuct-iframe">
                                            <iframe class="iframe">아이프레임 </iframe>
                                        </div>
                                        <!-- //제로인등 아이프레임 데이터 영역 -->
                                    </div>

                                    <div role="tabpanel" aria-labelledby="segment02" id="segments-panel02" :class="['segments-panel', { '-active': activeTab === 'segment02' }]" tabindex="0">
                                        <h4 class="h5">금리안내</h4>
                                        <div class="mix datepicker">
                                            <div class="text" data-clear="false">
                                                <input type="text" class="left-side" id="gga" value="2023.08.23" title="날짜선택" aria-haspopup="true" readonly>
                                            </div>
                                            <div class="space -lined date">
                                                <button type="button" class="icon-button -calendar" aria-haspopup="true"><span class="hide">달력 보기</span></button>
                                            </div>
                                        </div>
                                        <div class="case-wrap -xs">
                                            <h5 class="h6">만기지급금리</h5>
                                            <p class="p">만기일시지급식</p>
                                            <div class="table">
                                                <table>
                                                    <caption><span class="hide">만기일시지급식 금리</span></caption>
                                                    <colgroup>
                                                        <col style="width:55%">
                                                        <col style="width:45%">
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">가입기간</th>
                                                            <th scope="col">기본금리(연%, 세전)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1개월 이하</td>
                                                            <td>0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1개월초과 ~ 12개월미만</td>
                                                            <td>2.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>12개월이상 ~ 24개월미만</td>
                                                            <td>2.50</td>
                                                        </tr>
                                                        <tr>
                                                            <td>24개월이상</td>
                                                            <td>2.80</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p class="p">자세한 사항은 상품설명서 및 특약 참조</p>
                                        </div>
                                    </div>

                                    <div role="tabpanel" aria-labelledby="segment03" id="segments-panel03" :class="['segments-panel', { '-active': activeTab === 'segment03' }]" tabindex="0">
                                        <div class="loadArea" data-includ="ex3.html"></div>
                                        <!-- <h4 class="h5">유의사항</h4> -->
                                        <p class="p">청약 금액의 일부 인출은 불가능하며, 필요 시는 본인 명의 대출에 담보 제공가능 합니다.</p>
                                    </div>
                                    
                                    <div role="tabpanel" aria-labelledby="segment04" id="segments-panel04" :class="['segments-panel', { '-active': activeTab === 'segment04' }]" tabindex="0">
                                        <div class="loadArea" data-includ="ex4.html"></div>
                                       <!-- <h4 class="h5">가입서류</h4> -->
                                        <!-- 시작 -->
                                        <p class="p">실명확인증표 - 주민등록증, 운전면허증, 외국인등록증, 외국국적동포국내거소신고증 등<br>가족이 대리가입 시 가족관계 확인서류 및 대리인 실명확인증표
                                            <br>(미성년자 가입 시 법정 대리인 확인서류 포함)</p>

                                        <h4 class="h5">이자지급방식</h4>
                                        <ul class="ul -bullet">
                                            <li>해지 시 원금과 이자 일괄지급, 단리식</li>
                                            <li>중도해지이율은 별도로 정하지 않으며 가입기간별 약정금리를 적용합니다.<br>(정부고시금리: 국토교통부 <a href="http://www.molit.go.kr" class="link" title="외부브라우저로 열림" target="_blank">http://www.molit.go.kr</a>)</li>
                                        </ul>

                                        <h4 class="h5">청약유의사항</h4>
                                        <h5 class="h6">국민주택 청약의 경우</h5> 
                                        <ul class="ul -bullet">
                                            <li>월 납입금이 10만원을 초과하는 경우 10만원만 인정됩니다.</li>
                                            <li>국민주택 청약 1순위 요건은 입주자 모집공고일 기준으로 다음과 같으며, 따라서 입금 시 분할 입금 여부를 명확히 밝혀 주시기 바랍니다.
                                                <div>
                                                    <ul class="ul -dash">
                                                        <li>투기과열지구 또는 청약과열 지역 : 가입 후 24개월이 경과하고 월납입금 24회 이상 납입한 자</li>
                                                        <li>수도권 : 가입 후 12개월이 경과해도 월납입금 12회 이상 납입 한 자
                                                            (24개월 및  24회까지 연장가능)</li>
                                                        <li>수도권 외 : 가입 후 6개월이 경과하고 월납입금 6회 이상 납입한 자
                                                            (12개월 및 12회까지 연장가능)</li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>월납입금을 연체 및 선납한 계좌는 『주택공급에 관한 규칙』에 따라 납입인정일 및 순위 발생일이 지연될 수 있으며, 청약순위는 해당 회차가 인정되는 일자(납입인정일)에 도달하여야 발생합니다.</li>
                                            <li>투기과열지구 및 청약과열지역 1순위 청약 시 세대주가 아닌 자, 과거 5년 이내 다른 주택에 당첨된 세대에 속한 자, 재당첨 제한대상 세대에 속한 자, 유주택 세대에 속한 자는 자격이 제한 됩니다.</li>
                                        </ul>
                                        <h5 class="h6">민영주택 청약의 경우</h5>
                                        <ul class="ul -bullet">
                                            <li>민영주택 청약 1순위 요건은 입주자모집공고일 기준으로 다음과 같습니다.
                                                <div>
                                                    <ul class="ul -dash">
                                                        <li>투기과열지구 또는 청약과열지역 : 가입 후 24개월이 경과하고 청약예치기준급액 충족한 자</li>
                                                        <li>수도권 : 가입 후 12개월이 경과하고 월납입금이 연체 및 선납한 계좌는 『주택공급에 관한 규칙』에 따라 납입인정일 및  순위 발생일 지연될 수 있으며, 청약순위는 해당 회차가 인정되는 일자(납입인정일)에 도달하여야 발생합니다.</li>
                                                        <li> 수도권 외 : 가입 후 6개월이 경과하고 월납입금 6회 이상 납입한 자(12개월까지 연장 가능)</li>
                                                        <li>위축지역 : 가입 후 1개월이 경과하고 청약예치기준금액 충족 한 자</li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                        <!-- 끝 -->
                                    </div>
                                </div>
                            </div>
                            <!-- //상품 정보 영역 -->

                            <!-- 상품 추가 정보 영역 -->
                            <div class="product-other">
                                <!-- 상품설명서 및 약관 -->
                                <ProductAgreeArea :links="agreeLinks" @select="onSelectAgreeDoc" />
                                <!-- //상품설명서 및 약관 -->

                                <!-- 예금자보호 (관리자) -->
                                <div class="loadArea" data-includ="/content/nhbank/html/cn/common/protect01.html"></div>
                                <!-- //예금자보호 (관리자) -->

                                <!-- 준법감시 심의필 (관리자) -->
                                <div class="product-deliberate">
                                    <p class="p">준법감시심의필 000-0000(심의일:YYYY.MM.DD)<br>유효기간 : YYYYY.MM.DD ~ YYYYY.MM.DD</p>
                                </div>
                                <!-- //준법감시 심의필 (관리자) -->
                                
                                <!-- 공유 -->
                                <ProductShareButtons @share="onShare" @wishlist="onWishlist" />
                                <!-- //공유 -->
                                
                                <!-- 추천상품 -->
                                <ProductRecommendSection
                                    :user-name="recommendUserName"
                                    :items="recommendedProducts"
                                    @select="onSelectRecommendedProduct"
                                />
                                <!-- //추천상품 -->
                            </div>
                            <!-- //상품 추가 정보 영역 -->
                        </div><!-- //.product-detail-wrap -->
                    </div>
                    <!-- //상품 상세 영역 -->
                    <ProductActionButtons :active="true" @consult="onConsult" @join="openPopup" />
                    <div class="buffer" style="height:98px"></div>
                </div>
            </div>
        </div>
        <!-- //팝업 영역 -->
    </div>
</template>

<script>
// 1.공통 헤더 컴포넌트
import FwHeader from '@/components/FwHeader.vue'
// 2.상품 플래그 영역 컴포넌트
import ProductFlagArea from '@/components/ProductFlagArea.vue'
// 3.상품 해시태그 리스트 컴포넌트
import ProductHashtagList from '@/components/ProductHashtagList.vue'
// 4.상품 서브타이틀 영역 컴포넌트
import ProductSubtitleArea from '@/components/ProductSubtitleArea.vue'
// 5.상품 액션 버튼 컴포넌트
import ProductActionButtons from '@/components/ProductActionButtons.vue'
// 6.상품 불릿 리스트 컴포넌트
import ProductBulletList from '@/components/ProductBulletList.vue'
// 7.상품 비주얼 리스트 영역 컴포넌트
import ProductVisualList from '@/components/ProductVisualList.vue'
// 8.금리 계산해보기 영역 컴포넌트
import ProductInterestCalculator from '@/components/ProductInterestCalculator.vue'
// 9.상품설명서 및 약관 영역 컴포넌트
import ProductAgreeArea from '@/components/ProductAgreeArea.vue'
// 10.공유 버튼 영역 컴포넌트
import ProductShareButtons from '@/components/ProductShareButtons.vue'
// 11.추천 상품 영역 컴포넌트
import ProductRecommendSection from '@/components/ProductRecommendSection.vue'
// 공통js 메소드
import { fmdcTempMethods } from '@/assets/js/sample.js'

export default {
    name: 'FwProductDetail',
    components: {
        // 1.공통 헤더 컴포넌트
        FwHeader,
        // 2.상품 플래그 영역 컴포넌트
        ProductFlagArea,
        // 3.상품 해시태그 리스트 컴포넌트
        ProductHashtagList,
        // 4.상품 불릿 리스트 컴포넌트
        ProductBulletList,
        // 5.상품 서브타이틀 영역 컴포넌트
        ProductSubtitleArea,
         // 6.상품 액션 버튼 컴포넌트
        ProductActionButtons,
        // 7.상품 비주얼 리스트 영역 컴포넌트
        ProductVisualList,
        // 8.금리 계산기 컴포넌트
        ProductInterestCalculator,
        // 9.상품설명서 및 약관 영역 컴포넌트
        ProductAgreeArea,
        // 10.공유 버튼 영역 컴포넌트
        ProductShareButtons,
        // 11.추천 상품 영역 컴포넌트
        ProductRecommendSection,
    },
    data() {
        return {
            isPopupOpen: true,
            activeTab: 'segment01',
            productFlags: [
                { label: '계열사', badgeClass: '-grayline' },
                { label: '고난도', badgeClass: '-grade1' }
            ],
            productHashtags: ['#추천', '#세금절세', '#은퇴준비'],
            productSummaryBullets: ['수수료선취 - 온라인', '운용사 NH-Amundi 자산운용'],
            recommendUserName: '김농협',
            productCostSummary: {
                maxAmount: '3억원',
                baseRate: '3.81%',
                topRate: '4.15%',
                description: '2024.08.31 기준, 세전, 24개월'
            },
            productInfoItems: [
                { className: 'range', term: '가입기간', description: '입주자로 선전된 날까지' },
                { className: 'cost', term: '가입금액', description: '월 50만원 이내' },
                { className: 'cost -type2', term: '가입금액', description: '%미화 50불 이상%' },
                { className: 'target', term: '구매대상', description: '개인' },
                { className: 'date', term: '거래시간', description: '09:00~16:00' },
                { className: 'age', term: '가입나이', description: '만19세 ~ 75세' },
                { className: 'repay', term: '상환방법', description: '만기일시상환/원금균등상환/원리금 균등상환만기일시상환' }
            ],
            productVisualItems: [
                {
                    id: 1,
                    className: 'FMDC-0801000000F01_1',
                    title: '내집마련의 첫걸음!',
                    descriptionHtml: '내 집마련의 필수! 국민 주택과 민영주택의<br>청약권이 부여되는 적금이예요!'
                },
                {
                    id: 2,
                    className: 'FMDC-0801000000F01_2',
                    title: '내집마련의 첫걸음!',
                    descriptionHtml: '내 집마련의 필수! 국민 주택과 민영주택의<br>청약권이 부여되는 적금이예요!'
                },
                {
                    id: 3,
                    className: 'FMDC-0801000000F01_3',
                    title: '내집마련의 첫걸음!',
                    descriptionHtml: '내 집마련의 필수! 국민 주택과 민영주택의<br>청약권이 부여되는 적금이예요!'
                }
            ],
            agreeLinks: [
                { label: '기본약관' },
                { label: '상품설명서' },
                { label: '상품특약' }
            ],
            latestInterestCalc: null,
            recommendedProducts: [
                { id: 1, title: 'NH고향사랑 기부적금', tags: ['#추천상품', '#은퇴준비'] },
                { id: 2, title: 'NH내집마련 주택청약저축', tags: ['#내집마련', '#절세'] },
                { id: 3, title: 'NH프리미엄 정기예금', tags: ['#안정형', '#목돈마련'] }
            ]
        }
    },
    methods: {
        ...fmdcTempMethods()
    }
}
</script>
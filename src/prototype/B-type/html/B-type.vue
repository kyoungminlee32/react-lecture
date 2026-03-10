<template>
    <div>
        <div class="page">
            <div class="container">
                <FwHeader
                    title="예금 가입"
                    showBack
                    showHome
                    showMenu
                    @back="goBack"
                />
                <main class="contents">
                    <div class="content progress-layout">
                        <!-- 프로그레스 -->
                        <FwProgress :current="currentStep" :max="maxStep" />
                        <!-- 타이틀 그룹 -->
                        <FwH2Group :lines="['상품가입을 위한', '정보를 입력해 주세요']" />
                        <!-- B타입 인터랙션은 prod-list-wrap 으로 컨텐츠들을 감싸서 사용합니다. 항상 숨겨져 있다가 마지막 단계에서 -active 클래스를 사용하여 노출하는 방식입니다.-->
                        <div class="prod-list-wrap">
                            <FwSelectField
                                label="가입기간"
                                valueText="12개월"
                                @select="openLayer('layer', $event)"
                            />
                            <FwSelectField
                                label="이자 받는 방법"
                                valueText="만기"
                                @select="openLayer('layer1', $event)"
                            />
                            <div class="field">
                                <label for="text" class="label">가입금액</label>
                                <div class="mix">
                                    <div class="text -won">
                                        <input type="tel" id="text" class="right" value="700000000" @click="openLayer('layer2')" readonly>
                                        <div class="won">원</div>
                                    </div>
                                    <div class="info-wrap">
                                        <p class="info right">칠억원</p>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <div class="title-group">
                                    <div class="inner">
                                        <span class="title">비과세종합저축 신청</span>
                                    </div>
                                    <!-- 스위치 -->
                                    <FwSwitch id="switch-taxfree" v-model="switchTaxFreeOn" />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">출금계좌</label>
                                <!-- 계좌 박스 -->
                                <FwAccountInfo
                                    bankCode="011"
                                    accountName="주거래우대통장"
                                    bankName="NH농협"
                                    accountNumber="111-1234-5678-99"
                                    amountLabel="입금가능금액"
                                    availableAmount="250,000,000"
                                />
                                <!-- 체크 박스 -->
                                <FwCheckbox
                                    id="checkbox-smc"
                                    v-model="samePasswordAsWithdrawAccount"
                                    label="출금계좌와 동일하게 비밀번호 설정"
                                    size="sm"
                                    customClass="mt-20"
                                />
                            </div>
                            <div class="field">
                                <div class="title-group">
                                    <div class="inner">
                                        <span class="title">만기알림신청</span>
                                        <!-- 툴팁 -->
                                        <FwTooltip
                                            triggerText="툴팁"
                                            title="보험계약 상세조회"
                                            :items="[
                                                '우대금리는 대출 만기까지 적용됩니다.',
                                                '우대금리는 대출 만기까지 적용됩니다.'
                                            ]"
                                        />
                                    </div>
                                    <!-- 스위치 -->
                                    <FwSwitch id="switch-maturity" v-model="switchMaturityOn" />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">계약서류 받는 방법</label>
                                <div class="segments">
                                    <div class="outer">
                                        <div class="inner">
                                            <div role="tablist" class="list">
                                                <div :class="['item', { '-active': docMethod === 'email' }]">
                                                    <button type="button" role="tab" :aria-selected="docMethod === 'email'" @click="setDocMethod('email')">이메일</button>
                                                </div>
                                                <div :class="['item', { '-active': docMethod === 'sms' }]">
                                                    <button type="button" role="tab" :aria-selected="docMethod === 'sms'" @click="setDocMethod('sms')">문자메시지</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="segments-panels">
                                    <div class="segments-panel" :class="{ '-active': docMethod === 'email' }" v-show="docMethod === 'email'">
                                        <div class="field">
                                            <label for="email" class="label">이메일</label>
                                            <div class="mix">
                                                <div class="text" data-clear="false">
                                                    <input type="text" id="email" title="이메일 아이디">
                                                </div>
                                
                                                <div class="at">@</div>
                                
                                                <div class="select">
                                                    <button type="button">gmail.com</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="segments-panel" :class="{ '-active': docMethod === 'sms' }" v-show="docMethod === 'sms'">
                                        <div class="field">
                                            <label for="text" class="label">문자메시지</label>
                                            <div class="text">
                                                <input type="text" id="text" value="" placeholder="이름을 입력하세요">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr class="hr -xl">
                            <div class="h3-group"><h2 class="h3">기타 선택사항</h2></div>

                            <div class="title-group">
                                <div class="inner"><span class="title">우대 금리 쿠폰</span></div>
                                <FwSwitch id="switch-coupon" v-model="switchCouponOn" />
                            </div>

                            <div class="title-group">
                                <div class="inner">
                                    <span class="title">NH포인트 사용</span>
                                    <FwTooltip
                                        triggerText="툴팁"
                                        title="보험계약 상세조회"
                                        :items="[
                                            '우대금리는 대출 만기까지 적용됩니다.',
                                            '우대금리는 대출 만기까지 적용됩니다.'
                                        ]"
                                    />
                                </div>
                                <FwSwitch id="switch-point" v-model="switchPointOn" />
                            </div>

                            <div class="title-group">
                                <div class="inner"><span class="title">관리점 및 권유직원</span></div>
                                <FwSwitch id="switch-staff" v-model="switchStaffOn" />
                            </div>
                        </div>
                    </div>

                    <ProductActionButtons
                        rootClass=""
                        :active="true"
                        :showConsult="false"
                        :showJoin="true"
                        joinLabel="다음"
                        @join="nextStep"
                    />
                    <div class="buffer" style="height:98px"></div>
                </main>
            </div>
        </div>

        <!-- 팝업 영역 -->
        <SlidePopup
            :is-popup-open="isPopupOpen"
            :active-layer="activeLayer"
            @close="closePopup"
        />
        <!-- //팝업 영역 -->
    </div>
</template>

<script>
// 1.헤더 컴포넌트
import FwHeader from '@/components/FwHeader.vue'
// 2.프로그레스 컴포넌트
import FwProgress from '@/components/FwProgress.vue'
// 3.타이틀 그룹 컴포넌트
import FwH2Group from '@/components/FwH2Group.vue'
// 4.툴팁 컴포넌트
import FwTooltip from '@/components/FwTooltip.vue'
// 5.스위치 컴포넌트
import FwSwitch from '@/components/FwSwitch.vue'
// 6.체크박스 컴포넌트
import FwCheckbox from '@/components/FwCheckbox.vue'
// 7.계좌 정보 컴포넌트
import FwAccountInfo from '@/components/FwAccountInfo.vue'
// 8.셀렉트 필드 컴포넌트
import FwSelectField from '@/components/FwSelectField.vue'
// 9.상품 액션 버튼 컴포넌트
import ProductActionButtons from '@/components/ProductActionButtons.vue'
// 10.슬라이드 팝업 컴포넌트
import SlidePopup from '@/components/SlidePopup.vue'
// 공통js 메소드
import { fmdcTempMethods } from '@/assets/js/sample.js'

export default {
    name: 'BTypeView',
    components: {
        // 1.헤더 컴포넌트
        FwHeader,
        // 2.프로그레스 컴포넌트
        FwProgress,
        // 3.타이틀 그룹 컴포넌트
        FwH2Group,
        // 4.툴팁 컴포넌트
        FwTooltip,
        // 5.스위치 컴포넌트
        FwSwitch,
        // 6.체크박스 컴포넌트
        FwCheckbox,
        // 7.계좌 정보 컴포넌트
        FwAccountInfo,
        // 8.셀렉트 필드 컴포넌트
        FwSelectField,
        // 9.상품 액션 버튼 컴포넌트
        ProductActionButtons,
        // 10.슬라이드 팝업 컴포넌트
        SlidePopup,
    },
    data() {
        return {
            currentStep: 1,
            maxStep: 12,
            isPopupOpen: false,
            activeLayer: null,
            docMethod: 'email',
            samePasswordAsWithdrawAccount: false,
            switchTaxFreeOn: true,
            switchMaturityOn: true,
            switchCouponOn: true,
            switchPointOn: true,
            switchStaffOn: true
        }
    },
     methods: {
      ...fmdcTempMethods()
    }
}
</script>


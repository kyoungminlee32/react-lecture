<template>
    <div>
        <div class="page">
            <div class="container">
                <FwHeader title="예금가입" :show-back="true" rightText="취소" @back="goBack" @action="onCancel" />

                <main class="contents">
                    <div class="content">
                        <div>
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
                                <label for="joinAmount" class="label -readonly -textless">가입금액</label>
                                <div class="mix">
                                    <div class="text -won -readonly -unit">
                                        <input
                                            type="tel"
                                            id="joinAmount"
                                            class="right num-call"
                                            value="700000000"
                                            @click="openLayer('layer2')"
                                            readonly
                                        >
                                        <div class="won">원</div>
                                    </div>
                                    <p class="info right">칠억원</p>
                                </div>
                            </div>

                            <div class="field">
                                <div class="title-group">
                                    <div class="inner">
                                        <span class="title">비과세종합저축 신청</span>
                                    </div>
                                    <FwSwitch id="switch-taxfree" v-model="switchTaxFreeOn" />
                                </div>
                            </div>

                            <div class="field">
                                <label for="" class="label">출금계좌</label>
                                <!-- 계좌 박스 -->
                                <FwAccountInfo
                                    bankCode="011"
                                    accountName="김철수"
                                    bankName="농협은행"
                                    accountNumber="123-456-789012"
                                    :availableAmount="12345678"
                                    @click="$emit('selectWithdrawAccount')"
                                />
                                <!-- 체크박스 -->
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
                                            triggerText="도움말"
                                            title="만기알림신청이란111"
                                            :items="[
                                                '우대금리는 대출 만기까지 적용됩니다.111',
                                                '우대금리는 대출 만기까지 적용됩니다.222'
                                            ]"
                                        />
                                    </div>
                                    <!-- 스위치 -->
                                    <FwSwitch id="switch-maturity" v-model="switchMaturityOn" />
                                </div>
                            </div>

                            <div class="field">
                                <label for="text" class="label">휴대폰 번호</label>
                                <div class="text -textless">
                                    <input type="text" id="text" value="" placeholder="010-0000-0000">
                                </div>
                            </div>

                            <div class="field">
                                <label for="text" class="label">계약서류 받는 방법</label>
                                <div class="segments">
                                    <div class="outer">
                                        <div class="inner">
                                            <div role="tablist" class="list">
                                                <div :class="['item', { '-active': docMethod === 'email' }]">
                                                    <button
                                                        type="button"
                                                        role="tab"
                                                        id="segment-email"
                                                        aria-controls="segments-panel-email"
                                                        :aria-selected="docMethod === 'email'"
                                                        @click="setDocMethod('email')"
                                                    >
                                                        이메일
                                                        <span v-if="docMethod === 'email'" class="hide">선택됨</span>
                                                    </button>
                                                </div>
                                                <div :class="['item', { '-active': docMethod === 'sms' }]">
                                                    <button
                                                        type="button"
                                                        role="tab"
                                                        id="segment-sms"
                                                        aria-controls="segments-panel-sms"
                                                        :aria-selected="docMethod === 'sms'"
                                                        @click="setDocMethod('sms')"
                                                    >
                                                        문자메시지
                                                        <span v-if="docMethod === 'sms'" class="hide">선택됨</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="segments-panels">
                                    <div
                                        role="tabpanel"
                                        id="segments-panel-email"
                                        aria-labelledby="segment-email"
                                        :class="['segments-panel', { '-active': docMethod === 'email' }]"
                                        :tabindex="docMethod === 'email' ? 0 : -1"
                                        v-show="docMethod === 'email'"
                                    >
                                        <div class="field">
                                            <label for="email" class="label -textless">이메일</label>
                                            <div class="mix">
                                                <div class="text -textless" data-clear="false">
                                                    <input type="text" id="email" title="이메일 아이디">
                                                </div>
                                                <div class="at">@</div>
                                                <div class="select">
                                                    <button type="button">gmail.com</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        role="tabpanel"
                                        id="segments-panel-sms"
                                        aria-labelledby="segment-sms"
                                        :class="['segments-panel', { '-active': docMethod === 'sms' }]"
                                        :tabindex="docMethod === 'sms' ? 0 : -1"
                                        v-show="docMethod === 'sms'"
                                    >
                                        <div class="field">
                                            <label for="smsName" class="label">문자메시지</label>
                                            <div class="text -textless">
                                                <input type="text" id="smsName" placeholder="이름을 입력하세요">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr class="hr -xl" aria-hidden="true" tabindex="-1">
                            <FwH3Group title="기타 선택사항" />
                            <div class="title-group">
                                <div class="inner">
                                    <span class="title">우대 금리 쿠폰</span>
                                </div>
                                <!-- 스위치 -->
                            <FwSwitch id="switch-coupon" v-model="switchCouponOn" />
                            </div>
                            <div class="title-group">
                                <div class="inner">
                                    <span class="title">NH포인트 사용</span>
                                    <span class="tooltip">
                                        <button type="button" class="trigger">
                                            <span class="hide">도움말 보기</span>
                                        </button>
                                        <span class="panel" style="">
                                            <span class="title">보험계약 상세조회</span>
                                            <span class="t-content">
                                                <span class="dot">우대금리는 대출 만기까지 적용됩니다.</span>
                                                <span class="dot">우대금리는 대출 만기까지 적용됩니다.</span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <!-- 스위치 -->
                                <FwSwitch id="switch-nh-point" v-model="switchNhPointOn" />
                            </div>
                            <div class="title-group">
                                <div class="inner">
                                    <span class="title">관리점 및 권유직원</span>
                                </div>
                                <!-- 스위치 -->
                                <FwSwitch id="switch-branch-staff" v-model="switchBranchStaffOn" />
                            </div>
                        </div>
                    </div>

                    <ProductActionButtons
                        rootClass="b_page5"
                        :active="true"
                        :showConsult="false"
                        :showJoin="true"
                        joinLabel="다음"
                        @join="nextStep"
                    />
                    <div class="buffer"></div>
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
// 1.공통 헤더 컴포넌트
import FwHeader from '@/components/FwHeader.vue'
// 2.툴팁 컴포넌트
import FwTooltip from '@/components/FwTooltip.vue'
// 3.스위치 컴포넌트
import FwSwitch from '@/components/FwSwitch.vue'
// 4.체크박스 컴포넌트
import FwCheckbox from '@/components/FwCheckbox.vue'
// 5.계좌 정보 컴포넌트
import FwAccountInfo from '@/components/FwAccountInfo.vue'
// 6.H3 그룹 컴포넌트
import FwH3Group from '@/components/FwH3Group.vue'
// 7.셀렉트 필드 컴포넌트
import FwSelectField from '@/components/FwSelectField.vue'
// 8.상품 액션 버튼 컴포넌트
import ProductActionButtons from '@/components/ProductActionButtons.vue'
// 9.슬라이드 팝업 컴포넌트
import SlidePopup from '@/components/SlidePopup.vue'
// 공통js 메소드
import { fmdcTempMethods } from '@/assets/js/sample.js'

export default {
    name: 'AType-2',
    components: {
        // 1.공통 헤더 컴포넌트
        FwHeader,
        // 2.툴팁 컴포넌트
        FwTooltip,
        // 3.스위치 컴포넌트
        FwSwitch,
        // 4.체크박스 컴포넌트
        FwCheckbox,
        // 5.계좌 정보 컴포넌트
        FwAccountInfo,
        // 6.H3 그룹 컴포넌트
        FwH3Group,
        // 7.셀렉트 필드 컴포넌트
        FwSelectField,
        // 8.상품 액션 버튼 컴포넌트
        ProductActionButtons,
        // 9.슬라이드 팝업 컴포넌트    
        SlidePopup,
    },
    data() {
        return {
            isPopupOpen: false,
            activeLayer: null,
            docMethod: 'email',
            samePasswordAsWithdrawAccount: false,
            switch2On: true,
            switchTaxFreeOn: true,
            switchMaturityOn: true,
            switchCouponOn: true,
            switchNhPointOn: true,
            switchBranchStaffOn: true,
        }
    },
    methods: {
      ...fmdcTempMethods(),
    }
}
</script>
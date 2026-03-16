import { MouseEvent, useState } from 'react';
// 1.공통 헤더 컴포넌트
import { FwHeader } from '../../../components/FwHeader';
// 2.진행 단계 표시 컴포넌트
import { FwProgress } from '../../../components/FwProgress';
// 3.툴팁 컴포넌트
import { FwTooltip } from '../../../components/FwTooltip';
// 4.스위치 컴포넌트
import { FwSwitch } from '../../../components/FwSwitch';
// 5.체크박스 컴포넌트
import { FwCheckbox } from '../../../components/FwCheckbox';
// 6.계좌 정보 컴포넌트
import { FwAccountInfo } from '../../../components/FwAccountInfo';
// 7.H2 그룹 컴포넌트
import { FwH2Group } from '../../../components/FwH2Group';
// 8.H3 그룹 컴포넌트
import { FwH3Group } from '../../../components/FwH3Group';
// 9.셀렉트 필드 컴포넌트
import { FwSelectField } from '../../../components/FwSelectField';
// 10.상품 액션 버튼 컴포넌트
import { ProductActionButtons } from '../../../components/ProductActionButtons';
// 11.슬라이드 팝업 컴포넌트
import { SlidePopup } from '../../../components/SlidePopup';
// 12.탭 컴포넌트
import { FwSegments } from '../../../components/FwSegments';

const MAX_STEP = 12;

export const BType = () => {
  // 현재 단계
  const [currentStep] = useState(1);
  // 팝업 닫힌 상태
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // 활성화된 레이어
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  // 체크박스 상태
  const [BasicCheckbox, setBasicCheckbox] = useState(false);
  // 세금우대 정보 수신 여부 스위치 상태
  const [switchTaxFreeOn, setSwitchTaxFreeOn] = useState(true);
  // 만기알림 정보 수신 여부 스위치 상태
  const [switchMaturityOn, setSwitchMaturityOn] = useState(true);
  // 쿠폰 정보 수신 여부 스위치 상태
  const [switchCouponOn, setSwitchCouponOn] = useState(true);
  // 포인트 정보 수신 여부 스위치 상태
  const [switchPointOn, setSwitchPointOn] = useState(true);
  // 직원 정보 수신 여부 스위치 상태
  const [switchStaffOn, setSwitchStaffOn] = useState(true);
  // 계약서류 받는 방법 탭 상태
  const [tabValue, setTabValue] = useState('email');

 // 뒤로 가기 버튼 클릭 핸들러
  const goBack = () => window.history.back();
  // 다음 단계 버튼 클릭 핸들러
  const nextStep = () => {
    console.log('다음 단계');
  };
  // 레이어 열기 버튼 클릭 핸들러
  const openLayer = (layerName: string, event?: MouseEvent) => {
    event?.stopPropagation();
    setActiveLayer(layerName);
    setIsPopupOpen(true);
  };
  // 레이어 닫기 버튼 클릭 핸들러
  const closePopup = (layerName?: string | null) => {
    setIsPopupOpen(false);
    setActiveLayer(null);
  };

  return (
    <div>
      <div className="page">
        <div className="container">
          {/* 헤더 영역 */}
          <FwHeader title="예금가입" showBack showHome showMenu onBack={goBack} />
          <main className="contents">
            <div className="content progress-layout">
              <FwProgress current={currentStep} max={MAX_STEP} />
              <FwH2Group lines={['상품가입을 위한', '정보를 입력해 주세요']} />

              <div className="prod-list-wrap">
                <FwSelectField
                  label="가입기간"
                  valueText="12개월"
                  onClick={() => openLayer('layer')}
                />
                <FwSelectField
                  label="이자 받는 방법"
                  valueText="만기"
                  onClick={() => openLayer('layer1')}
                />

                <div className="field">
                  <label htmlFor="join-amount" className="label">가입금액</label>
                  <div className="mix">
                    <div className="text -won">
                      <input
                        type="tel"
                        id="join-amount"
                        className="right"
                        defaultValue="700000000"
                        onClick={() => openLayer('layer2')}
                        readOnly
                      />
                      <div className="won">원</div>
                    </div>
                    <div className="info-wrap">
                      <p className="info right">칠억원</p>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <div className="title-group">
                    <div className="inner">
                      <span className="title">비과세종합저축 신청</span>
                    </div>
                    <FwSwitch
                      id="switch-taxfree"
                      checked={switchTaxFreeOn}
                      onChange={setSwitchTaxFreeOn}
                      label="비과세종합저축 신청"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">출금계좌</label>
                  <FwAccountInfo
                    bankCode="011"
                    accountName="주거래우대통장"
                    bankName="NH농협"
                    accountNumber="111-1234-5678-99"
                    amountLabel="입금가능금액"
                    availableAmount="250,000,000"
                  />
                  <FwCheckbox
                    id="checkbox-smc"
                    checked={BasicCheckbox}
                    onChange={setBasicCheckbox}
                    label="출금계좌와 동일하게 비밀번호 설정"
                    size="sm"
                    customClass="mt-20"
                  />
                </div>

                <div className="field">
                  <div className="title-group">
                    <div className="inner">
                      <span className="title">만기알림신청</span>
                      <FwTooltip
                        triggerText="툴팁"
                        title="보험계약 상세조회"
                        items={[
                          '우대금리는 대출 만기까지 적용됩니다.',
                          '우대금리는 대출 만기까지 적용됩니다.',
                        ]}
                      />
                    </div>
                    <FwSwitch
                      id="switch-maturity"
                      checked={switchMaturityOn}
                      onChange={setSwitchMaturityOn}
                      label="만기알림신청"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">계약서류 받는 방법</label>
                   <FwSegments
                      value={tabValue}
                      onChange={setTabValue}
                      tabs={[
                          {
                              value: 'email',
                              label: '이메일',
                              panel: (
                                <div className="field">
                                    <label htmlFor="email" className="label -textless">이메일</label>
                                    <div className="mix">
                                        <div className="text -textless" data-clear="false">
                                            <input type="text" id="email" title="이메일 아이디" />
                                        </div>
                                        <div className="at">@</div>
                                        <div className="select">
                                            <button type="button">gmail.com</button>
                                        </div>
                                    </div>
                                </div>
                              ),
                          },
                          {
                              value: 'sms',
                              label: '문자메시지',
                              panel: (
                                <div className="field">
                                    <label htmlFor="smsName" className="label">문자메시지</label>
                                    <div className="text -textless">
                                        <input type="text" id="smsName" placeholder="이름을 입력하세요" />
                                    </div>
                                </div>
                              ),
                          },
                      ]}
                    />
                </div>

                <hr className="hr -xl" />
                <FwH3Group title="기타 선택사항" />

                <div className="title-group">
                  <div className="inner"><span className="title">우대 금리 쿠폰</span></div>
                  <FwSwitch
                    id="switch-coupon"
                    checked={switchCouponOn}
                    onChange={setSwitchCouponOn}
                    label="우대 금리 쿠폰"
                  />
                </div>

                <div className="title-group">
                  <div className="inner">
                    <span className="title">NH포인트 사용</span>
                    <FwTooltip
                      triggerText="툴팁"
                      title="보험계약 상세조회"
                      items={[
                        '우대금리는 대출 만기까지 적용됩니다.',
                        '우대금리는 대출 만기까지 적용됩니다.',
                      ]}
                    />
                  </div>
                  <FwSwitch
                    id="switch-point"
                    checked={switchPointOn}
                    onChange={setSwitchPointOn}
                    label="NH포인트 사용"
                  />
                </div>

                <div className="title-group">
                  <div className="inner"><span className="title">관리점 및 권유직원</span></div>
                  <FwSwitch
                    id="switch-staff"
                    checked={switchStaffOn}
                    onChange={setSwitchStaffOn}
                    label="관리점 및 권유직원"
                  />
                </div>
              </div>
            </div>

            <ProductActionButtons
              rootClass=""
              active={true}
              showCancel={false}
              showConfirm={true}
              confirmLabel="다음"
              onConfirm={nextStep}
            />
            <div className="buffer" style={{ height: 98 }} />
          </main>
        </div>
      </div>

      <SlidePopup
        popupType="multi-popup"
        isPopupOpen={isPopupOpen}
        activeLayer={activeLayer}
        onClose={closePopup}
      />
    </div>
  );
};

export default BType;

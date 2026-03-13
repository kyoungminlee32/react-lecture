import { MouseEvent, useState } from 'react';
import { FwHeader } from '../../../components/FwHeader';
import { FwProgress } from '../../../components/FwProgress';
import { FwH2Group } from '../../../components/FwH2Group';
import { FwTooltip } from '../../../components/FwTooltip';
import { FwSwitch } from '../../../components/FwSwitch';
import { FwCheckbox } from '../../../components/FwCheckbox';
import { FwAccountInfo } from '../../../components/FwAccountInfo';
import { FwSelectField } from '../../../components/FwSelectField';
import { ProductActionButtons } from '../../../components/ProductActionButtons';
import { SlidePopup } from '../../../components/SlidePopup';
import { FwSegments } from '../../../components/FwSegments';
import { FwH3Group } from '../../../components/FwH3Group';

const MAX_STEP = 12;

export const BType = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [samePasswordAsWithdrawAccount, setSamePasswordAsWithdrawAccount] = useState(false);
  const [switchTaxFreeOn, setSwitchTaxFreeOn] = useState(true);
  const [switchMaturityOn, setSwitchMaturityOn] = useState(true);
  const [switchCouponOn, setSwitchCouponOn] = useState(true);
  const [switchPointOn, setSwitchPointOn] = useState(true);
  const [switchStaffOn, setSwitchStaffOn] = useState(true);

  const goBack = () => window.history.back();

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, MAX_STEP));
  };

  const openLayer = (layerName: string, event?: MouseEvent) => {
    event?.stopPropagation();
    setActiveLayer(layerName);
    setIsPopupOpen(true);
  };

  const closePopup = (_layerId?: string | null) => {
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
                    checked={samePasswordAsWithdrawAccount}
                    onChange={setSamePasswordAsWithdrawAccount}
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
              showConsult={false}
              showJoin={true}
              joinLabel="다음"
              onJoin={nextStep}
            />
            <div className="buffer" style={{ height: 98 }} />
          </main>
        </div>
      </div>

      <SlidePopup
        isPopupOpen={isPopupOpen}
        activeLayer={activeLayer}
        onClose={closePopup}
      />
    </div>
  );
};

export default BType;

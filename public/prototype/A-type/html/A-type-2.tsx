import { MouseEvent, useState } from 'react';
// 1.공통 헤더 컴포넌트
import { FwHeader } from '../../../components/FwHeader';
// 2.툴팁 컴포넌트
import { FwTooltip } from '../../../components/FwTooltip';
// 3.스위치 컴포넌트
import { FwSwitch } from '../../../components/FwSwitch';
// 4.체크박스 컴포넌트
import { FwCheckbox } from '../../../components/FwCheckbox';
// 5.계좌 정보 컴포넌트
import { FwAccountInfo } from '../../../components/FwAccountInfo';
// 6.H3 그룹 컴포넌트
import { FwH3Group } from '../../../components/FwH3Group';
// 7.셀렉트 필드 컴포넌트
import { FwSelectField } from '../../../components/FwSelectField';
// 8.상품 액션 버튼 컴포넌트
import { ProductActionButtons } from '../../../components/ProductActionButtons';
// 9.슬라이드 팝업 컴포넌트
import { SlidePopup } from '../../../components/SlidePopup';
// 탭 컴포넌트
import { FwSegments } from '../../../components/FwSegments';

type DocMethod = 'email' | 'sms';

export const AType2 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [docMethod, setDocMethod] = useState<DocMethod>('email');
  const [samePasswordAsWithdrawAccount, setSamePasswordAsWithdrawAccount] = useState(false);
  const [switchTaxFreeOn, setSwitchTaxFreeOn] = useState(true);
  const [switchMaturityOn, setSwitchMaturityOn] = useState(true);
  const [switchCouponOn, setSwitchCouponOn] = useState(true);
  const [switchNhPointOn, setSwitchNhPointOn] = useState(true);
  const [switchBranchStaffOn, setSwitchBranchStaffOn] = useState(true);

  const goBack = () => window.history.back();

  const onCancel = () => {
    goBack();
  };

  const nextStep = () => {
    console.log('다음 단계');
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
          <FwHeader title="예금가입" showBack rightText="취소" onBack={goBack} onAction={onCancel} />

          <main className="contents">
            <div className="content">
              <div>
                {/* 가입기간 선택 */}
                <FwSelectField
                    label="가입기간"
                    valueText="12개월"
                  onSelect={() => openLayer('layer')}
                />

                {/* 이자 받는 방법 선택 */}
                <FwSelectField
                  label="이자 받는 방법"
                  valueText="만기"
                  onSelect={() => openLayer('layer1')}
                />

                {/* 가입금액 */}
                <div className="field">
                  <label htmlFor="joinAmount" className="label -readonly -textless">가입금액</label>
                  <div className="mix">
                    <div className="text -won -readonly -unit">
                      <input
                        type="tel"
                        id="joinAmount"
                        className="right num-call"
                        defaultValue="700000000"
                        onClick={() => openLayer('layer2')}
                        readOnly
                      />
                      <div className="won">원</div>
                    </div>
                    <p className="info right">칠억원</p>
                  </div>
                </div>

                {/* 비과세종합저축 스위치 */}
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

                {/* 출금계좌 */}
                <div className="field">
                  <label className="label">출금계좌</label>
                  <FwAccountInfo
                    bankCode="011"
                    accountName="김철수"
                    bankName="농협은행"
                    accountNumber="123-456-789012"
                    availableAmount={12345678}
                    onClick={() => console.log('출금계좌 선택')}
                  />
                  {/* 체크박스 */}
                  <FwCheckbox
                    id="checkbox-smc"
                    checked={samePasswordAsWithdrawAccount}
                    onChange={setSamePasswordAsWithdrawAccount}
                    label="출금계좌와 동일하게 비밀번호 설정"
                    size="sm"
                    customClass="mt-20"
                  />
                </div>

                {/* 만기알림신청 */}
                <div className="field">
                  <div className="title-group">
                    <div className="inner">
                      <span className="title">만기알림신청</span>
                      {/* 툴팁 */}
                      <FwTooltip
                        triggerText="도움말"
                        title="만기알림신청이란111"
                        items={[
                          '우대금리는 대출 만기까지 적용됩니다.111',
                          '우대금리는 대출 만기까지 적용됩니다.222',
                        ]}
                      />
                    </div>
                    {/* 스위치 */}
                    <FwSwitch
                      id="switch-maturity"
                      checked={switchMaturityOn}
                      onChange={setSwitchMaturityOn}
                      label="만기알림신청"
                    />
                  </div>
                </div>

                {/* 휴대폰 번호 */}
                <div className="field">
                  <label htmlFor="phone" className="label">휴대폰 번호</label>
                  <div className="text -textless">
                    <input type="text" id="phone" defaultValue="" placeholder="010-0000-0000" />
                  </div>
                </div>

                {/* 계약서류 받는 방법 탭 */}
                <div className="field">
                  <label htmlFor="segments-panel-email" className="label">계약서류 받는 방법</label>
                  <FwSegments
                    value={docMethod}
                    onChange={(v) => setDocMethod(v as DocMethod)}
                    tabs={[
                      {
                        key: 'email',
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
                        key: 'sms',
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

                <hr className="hr -xl" aria-hidden="true" tabIndex={-1} />

                {/* 기타 선택사항 */}
                <FwH3Group title="기타 선택사항" />

                <div className="title-group">
                  <div className="inner">
                    <span className="title">우대 금리 쿠폰</span>
                  </div>
                  {/* 스위치 */}
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
                    {/* 툴팁 */}
                    <FwTooltip
                      triggerText="도움말 보기"
                      title="보험계약 상세조회"
                      items={[
                        '우대금리는 대출 만기까지 적용됩니다.',
                        '우대금리는 대출 만기까지 적용됩니다.',
                      ]}
                    />
                  </div>
                  {/* 스위치 */}
                  <FwSwitch
                    id="switch-nh-point"
                    checked={switchNhPointOn}
                    onChange={setSwitchNhPointOn}
                    label="NH포인트 사용"
                  />
                </div>

                <div className="title-group">
                  <div className="inner">
                    <span className="title">관리점 및 권유직원</span>
                  </div>
                  {/* 스위치 */}
                  <FwSwitch
                    id="switch-branch-staff"
                    checked={switchBranchStaffOn}
                    onChange={setSwitchBranchStaffOn}
                    label="관리점 및 권유직원"
                  />
                </div>
              </div>
            </div>

            {/* 하단 다음 버튼 */}
            <ProductActionButtons
              rootClass="b_page5"
              active={true}
              showConsult={false}
              showJoin={true}
              joinLabel="다음"
              onJoin={nextStep}
            />
            <div className="buffer" />
          </main>
        </div>
      </div>

      {/* 팝업 영역 */}
      <SlidePopup
        isPopupOpen={isPopupOpen}
        activeLayer={activeLayer}
        onClose={closePopup}
      />
    </div>
  );
};

export default AType2;

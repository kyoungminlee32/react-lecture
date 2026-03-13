import { KeyboardEvent, useState } from 'react';
// 1.공통 헤더 컴포넌트
import { FwHeader } from '../../../components/FwHeader';
// 2.프로그레스 컴포넌트
import { FwProgress } from '../../../components/FwProgress';
// 3.타이틀 그룹 컴포넌트
import { FwH2Group } from '../../../components/FwH2Group';
// 4.툴팁 컴포넌트
import { FwTooltip } from '../../../components/FwTooltip';
// 5.스위치 컴포넌트
import { FwSwitch } from '../../../components/FwSwitch';
// 6.세그먼트(탭형 선택) 컴포넌트
import { FwSegments } from '../../../components/FwSegments';
// 7.상품 액션 버튼 컴포넌트
import { ProductActionButtons } from '../../../components/ProductActionButtons';



type DocMethod = 'email' | 'sms';

const MAX_STEP = 12;

const stepClassName = (step: number, currentStep: number) =>
  `step-area${currentStep === step ? ' -show' : ''}`;

export const AType = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [docMethod, setDocMethod] = useState<DocMethod>('email');
  const [switch2On, setSwitch2On] = useState(true);
  const [switchCouponOn, setSwitchCouponOn] = useState(true);
  const [switchNhPointOn, setSwitchNhPointOn] = useState(true);
  const [switchBranchStaffOn, setSwitchBranchStaffOn] = useState(true);

  const goToStep = (step: number) => {
    const safeStep = Math.min(Math.max(step, 1), MAX_STEP);
    setCurrentStep(safeStep);
  };

  const nextStep = () => goToStep(currentStep + 1);

  const goBack = () => window.history.back();

  const onCancel = () => {
    goToStep(1);
  };

  const handleEnterGoToStep = (step: number) => (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      goToStep(step);
    }
  };

  return (
    <div className="page">
      <div className="container">
        {/* 헤더 영역 */}
        <FwHeader title="예금가입" showBack={true} showHome={true} rightText="취소" onBack={goBack} onAction={onCancel}
          leftSlot = { 
            <button type="button" className="func -home">
                <span className="hide">홈</span>
            </button>
          }
        />

        <main className="contents">
          <div className="content progress-layout">
            {/* 프로그레스 */}
            <FwProgress current={currentStep} max={MAX_STEP} />

            <div className="show-wrap">
              <div id="page1" className={stepClassName(1, currentStep)}>
                <FwH2Group lines={['가입기간을 선택해 주세요']} />
                <div className="field">
                  <div className="box-radios">
                    <div className="box-radio">
                      <input
                        type="radio"
                        name="period"
                        id="box-radio11-1"
                        defaultChecked
                        onChange={() => goToStep(2)}
                      />
                      <label htmlFor="box-radio11-1" id="b_page1">
                        6개월
                      </label>
                    </div>
                    <div className="box-radio">
                      <input type="radio" name="period" id="box-radio11-2" onChange={() => goToStep(2)} />
                      <label htmlFor="box-radio11-2">8개월</label>
                    </div>
                  </div>
                  <div className="box-radios">
                    <div className="box-radio">
                      <input type="radio" name="period" id="box-radio11-3" onChange={() => goToStep(2)} />
                      <label htmlFor="box-radio11-3">10개월</label>
                    </div>
                    <div className="box-radio">
                      <input type="radio" name="period" id="box-radio11-4" onChange={() => goToStep(2)} />
                      <label htmlFor="box-radio11-4">12개월</label>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="field">
                    <div className="mix">
                      <div className="text -won">
                        <input type="tel" className="right" defaultValue="" onKeyDown={handleEnterGoToStep(4)} />
                        <div className="won">원</div>
                        <button className="clear" type="button" aria-hidden="true" style={{ zIndex: 1 }}>
                          <div className="hide">입력내용 삭제</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="page2" className={stepClassName(2, currentStep)}>
                <FwH2Group lines={['이자 받는 방법을 선택해 주세요']} />
                <div className="box-radios -half">
                  <div className="box-radio" id="b_page2">
                    <input
                      type="radio"
                      name="period-point-color"
                      id="box-radio1-point-color-1"
                      onChange={() => goToStep(3)}
                    />
                    <label htmlFor="box-radio1-point-color-1">만기</label>
                  </div>
                  <div className="box-radio">
                    <input
                      type="radio"
                      name="period-point-color"
                      id="box-radio1-point-color-2"
                      onChange={() => goToStep(3)}
                    />
                    <label htmlFor="box-radio1-point-color-2">매월</label>
                  </div>
                </div>
              </div>

              <div id="page3" className={stepClassName(3, currentStep)}>
                <FwH2Group lines={['가입금액을 입력하세요']} />
                <div className="field">
                  <div className="mix">
                    <div className="text -won" id="b_page3">
                      <input type="tel" className="right" defaultValue="" onKeyDown={handleEnterGoToStep(4)} />
                      <div className="won">원</div>
                    </div>
                    <div className="info-wrap">
                      <p className="message">10만원~10억 입력가능</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="page4" className={stepClassName(4, currentStep)}>
                <FwH2Group lines={['비과세종합저축을 신청 하시겠습니까?']} />
                <div className="box-radios -half">
                  <div className="box-radio">
                    <input
                      type="radio"
                      className="p4-op1"
                      name="period-point-color"
                      id="box-radio1-point-color-14442"
                      onChange={() => goToStep(5)}
                    />
                    <label htmlFor="box-radio1-point-color-14442">신청</label>
                  </div>
                  <div className="box-radio">
                    <input
                      type="radio"
                      name="period-point-color"
                      id="box-radio1-point-color-12122"
                      onChange={() => goToStep(5)}
                    />
                    <label htmlFor="box-radio1-point-color-12122">미신청</label>
                  </div>
                </div>
              </div>

              <div id="page5" className={stepClassName(5, currentStep)}>
                <FwH2Group lines={['출금계좌를 선택하세요']} />
                <div className="account">
                  <button type="button" data-bankcode="011" className="info" onClick={() => goToStep(7)}>
                    <span className="name">
                      <span>NH페이모아통장</span>
                    </span>
                    <span className="account-number">
                      <span>NH농협</span>
                      <span className="number">111-1234-5678-99</span>
                    </span>
                  </button>
                </div>
                <div className="account">
                  <button type="button" data-bankcode="011" className="info" onClick={() => goToStep(7)}>
                    <span className="name">
                      <span>NH페이모아통장</span>
                    </span>
                    <span className="account-number">
                      <span>NH농협</span>
                      <span className="number">111-1234-5678-99</span>
                    </span>
                  </button>
                </div>
              </div>

              <div id="page7" className={stepClassName(7, currentStep)}>
                <FwH2Group lines={['만기알림신청 정보를 확인해 주세요']} />
                <div className="field">
                  <div className="title-group">
                    <div className="inner">
                      <span className="title">만기알림신청이란</span>
                      {/* 툴팁 */}
                      <FwTooltip
                        triggerText="도움말"
                        title="만기알림신청이란"
                        items={['만기알림신청이란', '만기알림신청이란', '만기알림신청이란']}
                        onOpen={() => console.log('열림')}
                        onClose={() => console.log('닫힘')}
                        onPanelClick={() => console.log('패널 클릭')}
                      />
                    </div>
                    {/* 스위치 */}
                    <FwSwitch
                      id="switch2"
                      checked={switch2On}
                      onChange={setSwitch2On}
                      label="만기알림신청"
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="mobile-number" className="label">
                    휴대폰 번호
                  </label>
                  <div className="text">
                    <input
                      type="text"
                      id="mobile-number"
                      defaultValue="010-5000-1234"
                      placeholder="입력하세요"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div id="page8" className={stepClassName(8, currentStep)}>
                <FwH2Group lines={['계약서류 받는 방법을 선택해 주세요']} />
                <div className="field">
                  <label htmlFor="email" className="label">
                    계약서류 받는 방법
                  </label>
                  {/* 탭 */}
                  <FwSegments
                    tabStyle
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
              </div>

              <div id="page9" className={stepClassName(9, currentStep)}>
                <FwH2Group lines={['기타 선택사항을 확인해 주세요']} />
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
                    <button type="button" aria-label="NH포인트 사용 도움말">
                      도움말
                    </button>
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
        </main>
      </div>
    </div>
  );
};

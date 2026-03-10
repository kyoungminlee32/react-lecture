import { CSSProperties, KeyboardEvent, useState } from 'react';
import { FwHeader } from '../../../components/FwHeader';

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

  const progressStyle = {
    '--current': currentStep,
    '--max': MAX_STEP,
  } as CSSProperties;

  return (
    <div className="page">
      <div className="container">
      <FwHeader title="예금가입" showBack rightText="취소" onBack={goBack} onAction={onCancel} />

        <main className="contents">
          <div className="content progress-layout">
            <div className="progress-top" style={progressStyle} aria-label={`진행 ${currentStep}/${MAX_STEP}`}>
              <div className="progress">
                <div className="bar">
                  <div className="gauge" />
                </div>
              </div>
            </div>

            <div className="show-wrap">
              <div id="page1" className={stepClassName(1, currentStep)}>
                <div className="h2-group">
                  <h2 className="h2">가입기간을 선택해 주세요</h2>
                </div>
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
                <div className="h2-group">
                  <h2 className="h2">이자 받는 방법을 선택해 주세요</h2>
                </div>
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
                <div className="h2-group">
                  <h2 className="h2">가입금액을 입력하세요</h2>
                </div>
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
                <div className="h2-group">
                  <h2 className="h2">비과세종합저축을 신청 하시겠습니까?</h2>
                </div>
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
                <div className="h2-group">
                  <h2 className="h2">출금계좌를 선택하세요</h2>
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
                <div className="h2-group">
                  <h2 className="h2">만기알림신청 정보를 확인해 주세요</h2>
                </div>
                <div className="field">
                  <div className="title-group">
                    <div className="inner">
                      <span className="title">만기알림신청이란</span>
                      <button type="button" aria-label="도움말">
                        도움말
                      </button>
                    </div>
                    <div className="switch">
                      <input
                        id="switch2"
                        type="checkbox"
                        checked={switch2On}
                        onChange={(event) => setSwitch2On(event.target.checked)}
                      />
                      <label htmlFor="switch2">
                        <span className="hide">만기알림신청</span>
                      </label>
                    </div>
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
                <div className="h2-group">
                  <h2 className="h2">계약서류 받는 방법을 선택해 주세요</h2>
                </div>
                <div className="field">
                  <label htmlFor="email" className="label">
                    계약서류 받는 방법
                  </label>
                  <div className="segments">
                    <div className="outer">
                      <div className="inner">
                        <div role="tablist" className="list">
                          <div className={`item${docMethod === 'email' ? ' -active' : ''}`}>
                            <button
                              type="button"
                              role="tab"
                              id="segment-email"
                              aria-controls="segments-panel-email"
                              aria-selected={docMethod === 'email'}
                              onClick={() => setDocMethod('email')}
                            >
                              이메일
                              {docMethod === 'email' && <span className="hide">선택됨</span>}
                            </button>
                          </div>
                          <div className={`item${docMethod === 'sms' ? ' -active' : ''}`}>
                            <button
                              type="button"
                              role="tab"
                              id="segment-sms"
                              aria-controls="segments-panel-sms"
                              aria-selected={docMethod === 'sms'}
                              onClick={() => setDocMethod('sms')}
                            >
                              문자메시지
                              {docMethod === 'sms' && <span className="hide">선택됨</span>}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="segments-panels">
                    <div
                      role="tabpanel"
                      id="segments-panel-email"
                      aria-labelledby="segment-email"
                      className={`segments-panel${docMethod === 'email' ? ' -active' : ''}`}
                      tabIndex={docMethod === 'email' ? 0 : -1}
                      hidden={docMethod !== 'email'}
                    >
                      <div className="field">
                        <label htmlFor="email" className="label -textless">
                          이메일
                        </label>
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
                    </div>

                    <div
                      role="tabpanel"
                      id="segments-panel-sms"
                      aria-labelledby="segment-sms"
                      className={`segments-panel${docMethod === 'sms' ? ' -active' : ''}`}
                      tabIndex={docMethod === 'sms' ? 0 : -1}
                      hidden={docMethod !== 'sms'}
                    >
                      <div className="field">
                        <label htmlFor="smsName" className="label">
                          문자메시지
                        </label>
                        <div className="text -textless">
                          <input type="text" id="smsName" placeholder="이름을 입력하세요" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="page9" className={stepClassName(9, currentStep)}>
                <div className="h2-group">
                  <h2 className="h2">기타 선택사항을 확인해 주세요</h2>
                </div>
                <div className="title-group">
                  <div className="inner">
                    <span className="title">우대 금리 쿠폰</span>
                  </div>
                  <div className="switch">
                    <input
                      id="switch-coupon"
                      type="checkbox"
                      checked={switchCouponOn}
                      onChange={(event) => setSwitchCouponOn(event.target.checked)}
                    />
                    <label htmlFor="switch-coupon">
                      <span className="hide">우대 금리 쿠폰</span>
                    </label>
                  </div>
                </div>
                <div className="title-group">
                  <div className="inner">
                    <span className="title">NH포인트 사용</span>
                    <button type="button" aria-label="NH포인트 사용 도움말">
                      도움말
                    </button>
                  </div>
                  <div className="switch">
                    <input
                      id="switch-nh-point"
                      type="checkbox"
                      checked={switchNhPointOn}
                      onChange={(event) => setSwitchNhPointOn(event.target.checked)}
                    />
                    <label htmlFor="switch-nh-point">
                      <span className="hide">NH포인트 사용</span>
                    </label>
                  </div>
                </div>
                <div className="title-group">
                  <div className="inner">
                    <span className="title">관리점 및 권유직원</span>
                  </div>
                  <div className="switch">
                    <input
                      id="switch-branch-staff"
                      type="checkbox"
                      checked={switchBranchStaffOn}
                      onChange={(event) => setSwitchBranchStaffOn(event.target.checked)}
                    />
                    <label htmlFor="switch-branch-staff">
                      <span className="hide">관리점 및 권유직원</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixer b_page5">
            <button type="button" className="button -primary -lg" onClick={nextStep}>
              다음
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

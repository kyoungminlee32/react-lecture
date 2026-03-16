import { useState } from 'react';
import { FwHeader } from '../../components/FwHeader';
import { ProductActionButtons } from '../../components/ProductActionButtons';
import { ProductHashtagList } from '../../components/ProductHashtagList';
import { ProductShareButtons } from '../../components/ProductShareButtons';
import { FwSegments } from '../../components/FwSegments';
import {
  ProductVisualList,
  VisualItem,
} from '../../components/ProductVisualList';

type TabId = 'segment01' | 'segment02' | 'segment03';

export const FMHATemp = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<TabId>('segment01');

  const productHashtags = ['#추천', '#세금절세', '#은퇴준비'];

  const productVisualItems: VisualItem[] = [
    {
      id: 1,
      className: 'FMHA-0100000000F01_1',
      titleHtml: '연간 최대 1,800만원 자유입금',
      descriptionHtml: '연금저축, DC가입자 추가부담금 합산돼요',
    },
    {
      id: 2,
      className: 'FMHA-0100000000F01_2',
      titleHtml: '세액공제 최대 16.5%',
      descriptionHtml:
        '지방소득세 포함하여<br>연 900만원 입금 시 최대 1,485,000원 세금환급돼요',
    },
    {
      id: 3,
      className: 'FMHA-0100000000F01_3',
      titleHtml: '적립금 운용수익에 대한<br>원천징수 없이 재투자 복리효과',
      descriptionHtml:
        '위험자산에 대한 총투자한도는 <br> 가입자별 적립금 70% 이내 가능해요',
    },
  ];

  const onShare = () => console.log('공유 버튼이 클릭되었습니다.');
  const onWishlist = () => console.log('장바구니 버튼이 클릭되었습니다.');
  const onConsult = () => console.log('상담 버튼 클릭');

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="container">
          <FwHeader
            title="상품상세"
            showBack
            showHome
            showMenu
            onBack={() => window.history.back()}
          />

          <main className="contents">
            <div className="content"></div>
          </main>
        </div>
      </div>

      <div
        id="popup"
        className={`popup${isPopupOpen ? ' -active' : ''}`.trim()}
      >
        <div className="container">
          <FwHeader title="퇴직연금상세" centered showClose onClose={closePopup} />

          <div className="contents">
            <div className="content">
              <div className="product-detail-wrap">
                <div className="procuct-summary">
                  <div className="info-area">
                    <div className="title-area">
                      <h2>개인형 퇴직연금(IRP)</h2>
                      <p className="under-para">연말정산 세액공제 목적</p>
                      <ProductHashtagList tags={productHashtags} />
                    </div>

                    <div className="subtitle-area">
                      <div className="other-link">
                        <a href="#" className="a -arrow" onClick={(e) => e.preventDefault()}>
                          퇴직연금 꿀팁 영상 보러 가기
                        </a>
                      </div>
                    </div>

                    <ProductActionButtons
                      inline
                      rootClass="top-join-btn"
                      showCancel={false}
                      active
                      onConfirm={openPopup}
                    />
                  </div>

                  <ProductVisualList items={productVisualItems} />
                </div>

                <div className="procuct-info">
                  <FwSegments
                    tabStyle
                    value={activeTab}
                    onChange={(v) => setActiveTab(v as TabId)}
                    tabs={[
                      {
                        value: 'segment01',
                        label: '상품안내',
                        panel: (
                          <dl className="prodect-info-dl">
                            <dt className="h5">상품특징</dt>
                            <dd>
                              <p className="p">
                                매월 약정 납입일에 저축금을 납입하여 순위 요건 충족시 국민 주택과
                                민영주택권이 부여되는 입주자 저축
                              </p>
                            </dd>

                            <dt className="h5">가입대상</dt>
                            <dd>
                              <p className="p">
                                국민인 개인(국내에 거주하는 재외동포 포함)또는 외국인 거주자로서 연령에
                                관계없이 누구나 가입가능
                              </p>
                              <ul className="ul -bullet">
                                <li>
                                  주택청약종합저축의 가입은 청년우대형주택청약종합저축, 청약저축,
                                  청약예금, 청약부금을 포함 하여 전 금융기관 1인1계좌에 한함
                                </li>
                                <li>비과세종합저축으로 가입가능(본인 한도 내)</li>
                              </ul>
                            </dd>

                            <dt className="h5">가입기간</dt>
                            <dd>
                              <p className="p">
                                가입일로부터 입주자로 선정된 날까지
                                <br />
                                별도 만기 없음
                              </p>
                            </dd>

                            <dt className="h5">가입금액</dt>
                            <dd>
                              <p className="p">
                                매월 약정납입일(신규가입일 해당일)에 2만원 이상 50만원 이하의 금액을
                                10원 단위로 자유롭게 납입
                                <br />
                                단, 월 납입금의 총액이 1,500만원에 이를 때까지는 50만원을 초과하여
                                납입가능
                              </p>
                              <p className="p">
                                선납회차 : 정상 납입회차에 추가하여 최고 24회차까지 선납가능
                              </p>
                            </dd>
                          </dl>
                        ),
                      },
                      {
                        value: 'segment02',
                        label: '절세혜택 및 인출 시 세제',
                        panel: (
                          <>
                            <div className="mix datepicker">
                              <div className="text" data-clear="false">
                                <input
                                  type="text"
                                  className="left-side"
                                  id="gga"
                                  defaultValue="2023.08.23"
                                  title="날짜선택"
                                  aria-haspopup="true"
                                  readOnly
                                />
                              </div>
                              <div className="space -lined date">
                                <button
                                  type="button"
                                  className="icon-button -calendar"
                                  aria-haspopup="true"
                                >
                                  <span className="hide">달력 보기</span>
                                </button>
                              </div>
                            </div>
                            <div className="case-wrap -xs">
                              <h5 className="h6">만기지급금리</h5>
                              <p className="p">만기일시지급식</p>
                              <div className="table">
                                <table>
                                  <caption>
                                    <span className="hide">만기일시지급식 금리</span>
                                  </caption>
                                  <colgroup>
                                    <col style={{ width: '55%' }} />
                                    <col style={{ width: '45%' }} />
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
                              <p className="p">자세한 사항은 상품설명서 및 특약 참조</p>
                            </div>
                          </>
                        ),
                      },
                      {
                        value: 'segment03',
                        label: '유의사항',
                        panel: (
                          <p className="p">
                            청약 금액의 일부 인출은 불가능하며, 필요 시는 본인 명의 대출에 담보 제공가능
                            합니다.
                          </p>
                        ),
                      },
                    ]}
                  />
                </div>

                <div className="product-other">
                  <ProductShareButtons
                    onShare={onShare}
                    onWishlist={onWishlist}
                  />
                </div>
              </div>
            </div>

            <ProductActionButtons
              active
              onCancel={onConsult}
              onConfirm={openPopup}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FMHATemp;

import { useState } from 'react';
// 1.공통 헤더 컴포넌트
import { FwHeader } from '../../components/FwHeader';
// 2.상품 해시태그 리스트 컴포넌트
import { ProductHashtagList } from '../../components/ProductHashtagList';
// 3.상품 서브타이틀 영역 컴포넌트
import { ProductInfoItem, ProductSubtitleArea } from '../../components/ProductSubtitleArea';
// 4.상품 액션 버튼 영역 컴포넌트
import { ProductActionButtons } from '../../components/ProductActionButtons';
// 5.상품 비주얼 리스트 영역 컴포넌트
import { ProductVisualList, VisualItem } from '../../components/ProductVisualList';
// 6.금리 계산해보기 영역 컴포넌트
import { InterestCalculatedPayload, ProductInterestCalculator } from '../../components/ProductInterestCalculator';
// 7. 세그먼트(탭형 선택) 컴포넌트
import { FwSegments } from '../../components/FwSegments';
// 8.상품설명서 및 약관 영역 컴포넌트
import { ProductAgreeArea } from '../../components/ProductAgreeArea';
// 9.공유 버튼 영역 컴포넌트
import { ProductShareButtons } from '../../components/ProductShareButtons';
// 10.추천 상품 영역 컴포넌트
import { ProductRecommendSection } from '../../components/ProductRecommendSection';

interface RecommendItem {
  id: number;
  title: string;
  tags: string[];
}

export const FMDCTemp = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [tabValue, setTabValue] = useState('segment01');

  const productHashtags = ['#소득공제', '#가입추천'];

  const productCostSummary = {
    baseRate: '3.81%',
    topRate: '4.15%',
    description: '(연/세전)2024.08.31 기준',
  };

  const productInfoItems: ProductInfoItem[] = [
    {
      className: 'range',
      term: '가입기간',
      description:
        '입주자로 선정된 날까지입주자로 선정된 날까지입주자로 선정된 날까지입주자로 선정된 날까지입주자로 선정된 날까지',
    },
    { className: 'cost', term: '가입금액', description: '월 50만원 이내' },
  ];

  const productVisualItems: VisualItem[] = [
    {
      id: 1,
      className: 'FMDC-0801000000F01_1',
      titleHtml: '내집마련의 첫걸음!',
      descriptionHtml:
        '내 집마련의 필수! 국민 주택과 민영주택의<br>청약권이 부여되는 적금이예요!',
    },
    {
      id: 2,
      className: 'FMDC-0801000000F01_2',
      titleHtml: '국내 거주자는 누구나 가입 가능',
      descriptionHtml:
        '복잡한 우대조건 없이 시장실세금리를 반영, 가입시점의 약정이율을 만기까지 지급돼요',
    },
    {
      id: 3,
      className: 'FMDC-0801000000F01_3',
      titleHtml: '거래조건 충족 시 청약권 부여',
      descriptionHtml:
        '매월 2~50만원 이하의 금액을 자유롭게 납입하고, 신규 분양주택 청약이 가능',
    },
  ];

  const agreeLinks = [
    { label: '변경이력보기' },
    { label: '기본약관' },
    { label: '상품설명서' },
    { label: '핵심설명서' },
    { label: '상품특약' },
  ];

  const recommendUserName = '김농협';

  const recommendedProducts: RecommendItem[] = [
    { id: 1, title: 'NH고향사랑 기부적금', tags: ['#추천상품', '#은퇴준비'] },
    { id: 2, title: 'NH내집마련 주택청약저축', tags: ['#내집마련', '#절세'] },
    { id: 3, title: 'NH프리미엄 정기예금', tags: ['#안정형', '#목돈마련'] },
  ];

  const onInterestCalculated = (payload: InterestCalculatedPayload) => {
    console.log('금리 계산 결과', payload);
  };

  const onShare = () => console.log('공유 버튼이 클릭되었습니다.');
  const onWishlist = () => console.log('장바구니 버튼이 클릭되었습니다.');
  const onSelectRecommendedProduct = (item: RecommendItem) =>
    console.log('추천상품 선택', item);
  const onSelectAgreeDoc = (item: { label: string }) =>
    console.log('약관 문서 선택', item);
  const onConsult = () => console.log('상담 버튼 클릭');

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="container">
          {/* 헤더 영역 */}
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
      {/* 팝업 영역 */}
      <div
        id="popup"
        className={`popup${isPopupOpen ? ' -active' : ''}`.trim()}
      >
        <div className="container">
          {/* 팝업 헤더 영역 */}
          <FwHeader
            title="청약"
            centered
            showClose
            onClose={closePopup}
          />
          <div className="contents">
            {/* 상품 상세 영역 */}
            <div className="content">
              <div className="product-detail-wrap">
                {/* 상품 안내 영역 */}
                <div className="procuct-summary">
                  <div className="info-area">
                    <div className="title-area">
                      <h2>주택청약종합저축</h2>
                      {/* 상품 해시태그 영역 */}
                      <ProductHashtagList tags={productHashtags} />
                    </div>

                    {/* 상품 서브타이틀 영역 */}
                    <ProductSubtitleArea
                        baseRate={productCostSummary.baseRate}
                        topRate={productCostSummary.topRate}
                        costDescription={productCostSummary.description}
                        infoItems={productInfoItems}
                    />

                    {/* 상품 액션 버튼 영역 */}
                    <ProductActionButtons
                      inline
                      rootClass="top-join-btn"
                      active={true}
                      showCancel={false}
                      showConfirm={true}
                      confirmLabel="다음"
                      onConfirm={openPopup}
                    />
                  </div>

                  {/* 상품 비주얼 리스트 영역 */}
                  <ProductVisualList items={productVisualItems} />

                  {/* 금리 계산해보기 */}
                  <ProductInterestCalculator
                    annualRate={0.028}
                    onCalculated={onInterestCalculated}
                  />
                </div>

                {/* 상품 정보 영역 */}
                <div className="procuct-info">
                  <FwSegments
                    tabStyle
                    value={tabValue}
                    onChange={setTabValue}
                    tabs={[
                      {
                        value: 'segment01',
                        label: '상품안내',
                        panel: (
                          <>
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
                                  가입일로부터 입주자로 선정된 날까지<br />별도 만기 없음
                                </p>
                              </dd>
                              <dt className="h5">가입금액</dt>
                              <dd>
                                <p className="p">
                                  매월 약정납입일(신규가입일 해당일)에 2만원 이상 50만원 이하의 금액을
                                  10원 단위로 자유롭게 납입<br />단, 월 납입금의 총액이 1,500만원에
                                  이를 때까지는 50만원을 초과하여 납입가능
                                </p>
                                <p className="p">
                                  선납회차 : 정상 납입회차에 추가하여 최고 24회차까지 선납가능
                                </p>
                              </dd>
                            </dl>
                            {/* 제로인등 아이프레임 데이터 영역 */}
                            <div className="procuct-iframe">
                              <iframe className="iframe" title="아이프레임">
                                아이프레임{' '}
                              </iframe>
                            </div>
                          </>
                        ),
                      },
                      {
                        value: 'segment02',
                        label: '금리안내',
                        panel: (
                          <>
                            <h4 className="h5">금리안내</h4>
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
                                <button type="button" className="icon-button -calendar" aria-haspopup="true">
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
                          <>
                            {/* <div className="loadArea" data-includ="ex3.html"></div> */}
                            <p className="p">
                              청약 금액의 일부 인출은 불가능하며, 필요 시는 본인 명의 대출에 담보
                              제공가능 합니다.
                            </p>
                          </>
                        ),
                      },
                      {
                        value: 'segment04',
                        label: '기타사항',
                        panel: (
                          <>
                            {/* <div className="loadArea" data-includ="ex4.html"></div> */}
                            <p className="p">
                              실명확인증표 - 주민등록증, 운전면허증, 외국인등록증,
                              외국국적동포국내거소신고증 등<br />가족이 대리가입 시 가족관계 확인서류
                              및 대리인 실명확인증표<br />(미성년자 가입 시 법정 대리인 확인서류 포함)
                            </p>
                            <h4 className="h5">이자지급방식</h4>
                            <ul className="ul -bullet">
                              <li>해지 시 원금과 이자 일괄지급, 단리식</li>
                              <li>
                                중도해지이율은 별도로 정하지 않으며 가입기간별 약정금리를
                                적용합니다.<br />(정부고시금리: 국토교통부{' '}
                                <a
                                  href="http://www.molit.go.kr"
                                  className="link"
                                  title="외부브라우저로 열림"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  http://www.molit.go.kr
                                </a>
                                )
                              </li>
                            </ul>
                            <h4 className="h5">청약유의사항</h4>
                            <h5 className="h6">국민주택 청약의 경우</h5>
                            <ul className="ul -bullet">
                              <li>월 납입금이 10만원을 초과하는 경우 10만원만 인정됩니다.</li>
                              <li>
                                국민주택 청약 1순위 요건은 입주자 모집공고일 기준으로 다음과 같으며,
                                따라서 입금 시 분할 입금 여부를 명확히 밝혀 주시기 바랍니다.
                                <div>
                                  <ul className="ul -dash">
                                    <li>
                                      투기과열지구 또는 청약과열 지역 : 가입 후 24개월이 경과하고
                                      월납입금 24회 이상 납입한 자
                                    </li>
                                    <li>
                                      수도권 : 가입 후 12개월이 경과해도 월납입금 12회 이상 납입
                                      한 자 (24개월 및 24회까지 연장가능)
                                    </li>
                                    <li>
                                      수도권 외 : 가입 후 6개월이 경과하고 월납입금 6회 이상
                                      납입한 자 (12개월 및 12회까지 연장가능)
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                월납입금을 연체 및 선납한 계좌는 『주택공급에 관한 규칙』에 따라
                                납입인정일 및 순위 발생일이 지연될 수 있으며, 청약순위는 해당 회차가
                                인정되는 일자(납입인정일)에 도달하여야 발생합니다.
                              </li>
                              <li>
                                투기과열지구 및 청약과열지역 1순위 청약 시 세대주가 아닌 자, 과거 5년
                                이내 다른 주택에 당첨된 세대에 속한 자, 재당첨 제한대상 세대에 속한 자,
                                유주택 세대에 속한 자는 자격이 제한 됩니다.
                              </li>
                            </ul>
                            <h5 className="h6">민영주택 청약의 경우</h5>
                            <ul className="ul -bullet">
                              <li>
                                민영주택 청약 1순위 요건은 입주자모집공고일 기준으로 다음과 같습니다.
                                <div>
                                  <ul className="ul -dash">
                                    <li>
                                      투기과열지구 또는 청약과열지역 : 가입 후 24개월이 경과하고
                                      청약예치기준급액 충족한 자
                                    </li>
                                    <li>
                                      수도권 : 가입 후 12개월이 경과하고 월납입금이 연체 및 선납한
                                      계좌는 『주택공급에 관한 규칙』에 따라 납입인정일 및 순위
                                      발생일 지연될 수 있으며, 청약순위는 해당 회차가 인정되는
                                      일자(납입인정일)에 도달하여야 발생합니다.
                                    </li>
                                    <li>
                                      수도권 외 : 가입 후 6개월이 경과하고 월납입금 6회 이상
                                      납입한 자(12개월까지 연장 가능)
                                    </li>
                                    <li>
                                      위축지역 : 가입 후 1개월이 경과하고 청약예치기준금액 충족 한
                                      자
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </>
                        ),
                      },
                    ]}
                  />
                </div>

                {/* 상품 추가 정보 영역 */}
                <div className="product-other">
                  {/* 상품설명서 및 약관 */}
                  <ProductAgreeArea
                    links={agreeLinks}
                    onSelect={onSelectAgreeDoc}
                  />

                  {/* 예금자보호 (관리자) */}
                  {/* <div
                    className="loadArea"
                    data-includ="/content/nhbank/html/cn/common/protect01.html"
                  ></div> */}

                  {/* 준법감시 심의필 (관리자) */}
                  <div className="product-deliberate">
                    <p className="p">
                      준법감시심의필 000-0000(심의일:YYYY.MM.DD)
                      <br />
                      유효기간 : YYYYY.MM.DD ~ YYYYY.MM.DD
                    </p>
                  </div>

                  {/* 공유 */}
                  <ProductShareButtons
                    onShare={onShare}
                    onWishlist={onWishlist}
                  />

                  {/* 추천상품 */}
                  <ProductRecommendSection
                    userName={recommendUserName}
                    items={recommendedProducts}
                    onSelect={onSelectRecommendedProduct}
                  />
                </div>
              </div>
            </div>

            {/* //상품 상세 영역 */}
            <ProductActionButtons
              active
              showCancel={true}
              showConfirm={true}
              confirmLabel="다음"
              onCancel={onConsult}
              onConfirm={openPopup}
            />
            <div className="buffer" style={{ height: '98px' }}></div>
          </div>
        </div>
      </div>
      {/* //팝업 영역 */}
    </div>
  );
};

export default FMDCTemp;

// import './index.css';
import styles from './worklist.module.css';

import { Link } from 'react-router-dom';

export const Worklist = () => {
  return (
    <div className={styles.worklist}>
        <div className={styles.skipNav}>
            <a href="#main">본문 바로가기</a>
            <a href="#gnb">메뉴 바로가기</a>
        </div>
        <header>
            <div className={styles.title}>
                <div className={styles.subject}>
                    {/* <img src="./com/images/guide_logo_nh.svg" alt="NH Bank, NH 농협" className="nhLogo"> */}
                    <span className={styles.headerTit}>
                        <em className={styles.headerYear}>UI/UX Guide SYSTEM</em> | 
                        <em className="prj">금상몰</em>
                    </span>
                    {/* <div className="total"><em>진행률 </em><span></span></div> */}
                </div>
                <div className={styles.search}>
                    <input type="text" id="tableSearch" placeholder="검색어입력" />
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li><Link to="pubList.html" className={styles.active} title="선택됨">퍼블리스트</Link></li>
                        <li><Link to="guide.html">UI가이드</Link></li>
                        <li><Link to="docs.html">컨벤션</Link></li>
                    </ul>
                </div>
            </div>
            <nav className={styles.gnb}>
                <ul>
                    {/* gnb는 depth1로 자동생성됩니다. */}
                    <li><span>전체보기</span></li>
                    <li><span>2025_상시</span></li>
                </ul>
            </nav>
        </header>
        <main id="main" className={styles.pubList}>
            <table className="dataTable compact">
                <tbody>
                    <tr>
                        <td className="lv2">A타입 인터랙션</td>
                        <td className="lv3"></td>
                        <td className="lv4"></td>
                        <td className="lv5"></td>
                        <td className="lv6"></td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to="/prototype/A-type/html/A-type" className="linked" target="_blank">A타입인터랙션 샘플</Link>
                        </td>
                        <td className={styles.user}>이병철</td>
                        <td className={styles.date}><span></span></td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                    <tr>
                        <td className="lv2">A타입 인터랙션</td>
                        <td className="lv3"></td>
                        <td className="lv4"></td>
                        <td className="lv5"></td>
                        <td className="lv6"></td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to="/prototype/A-type/html/A-type-2" className="linked" target="_blank">A타입인터랙션 샘플2</Link>
                        </td>
                        <td className={styles.user}>이병철</td>
                        <td className={styles.date}><span></span></td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                    <tr>
                        <td className="lv2">B타입 인터랙션</td>
                        <td className="lv3"></td>
                        <td className="lv4"></td>
                        <td className="lv5"></td>
                        <td className="lv6"></td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to="/prototype/B-type/html/B-type" className="linked" target="_blank">B타입인터랙션 샘플</Link>
                        </td>
                        <td className={styles.user}>이병철</td>
                        <td className={styles.date}><span></span></td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                    <tr>
                        <td className="lv2">상품상세 템플릿</td>
                        <td className="lv3"></td>
                        <td className="lv4"></td>
                        <td className="lv5"></td>
                        <td className="lv6"></td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to="/html/_FW/fw_product_detail" className="linked" target="_blank">템플릿</Link>
                        </td>
                        <td className={styles.user}>이원익</td>
                        <td className={styles.date}><span>240112</span></td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                    <tr>
                        <td className="lv2">상품상세 템플릿</td>
                        <td className="lv3">수신상품</td>
                        <td className="lv4"></td>
                        <td className="lv5"></td>
                        <td className="lv6"></td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to='/html/_PD/FMDC-temp' className='linked' target='_blank'>FMDC-temp</Link>
                        </td>
                        <td className={styles.user}>이원익</td>
                        <td className={styles.date}>240112</td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                    <tr>
                        <td className="lv2">상품상세 템플릿</td>
                        <td className="lv3">퇴직연금</td>
                        <td className="lv4"></td>
                        <td className="lv5"></td>
                        <td className="lv6"></td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to='/html/_PD/FMHA-temp' className='linked' target='_blank'>FMHA-temp</Link>
                        </td>
                        <td className={styles.user}>이원익</td>
                        <td className={styles.date}>240112</td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                    <tr>
                        <td className="lv2">전자서명</td>
                        <td className="lv3">지문인증</td>
                        <td className="lv4"></td>
                        <td className="lv5"></td>
                        <td className="lv6"></td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to='/html/UD/FMAA-0100000000F01-B' className='linked' target='_blank'>FMAA-0100000000F01-B</Link>
                        </td>
                        <td className={styles.user}>이병철</td>
                        <td className={styles.date}>231122</td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                    <tr>
                        <td className="lv2">전자서명</td>
                        <td className="lv3">간편인증</td>
                        <td className="lv4"></td>
                        <td className="lv5"></td>
                        <td className="lv6"></td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to='/html/UD/FMAA-0200000000F01-B' className='linked' target='_blank'>FMAA-0200000000F01-B</Link>
                        </td>
                        <td className={styles.user}>이병철</td>
                        <td className={styles.date}>231122</td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                    <tr>
                        <td className="lv2">전자서명</td>
                        <td className="lv3">NH모바일인증</td>
                        <td className="lv4"></td>
                        <td className="lv5"></td>
                        <td className="lv6"></td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to='/html/UD/FMAA-0300000000F01-B' className='linked' target='_blank'>FMAA-0300000000F01-B</Link>
                        </td>
                        <td className={styles.user}>이병철</td>
                        <td className={styles.date}>231122</td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                    <tr>
                        <td className="lv2">전자서명</td>
                        <td className="lv3">공동인증</td>
                        <td className="lv4"></td>
                        <td className="lv5"></td>
                        <td className="lv6"></td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to='/html/UD/FMAA-0400000000F01-B' className='linked' target='_blank'>FMAA-0400000000F01-B</Link>
                        </td>
                        <td className={styles.user}>이병철</td>
                        <td className={styles.date}>231122</td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                    <tr>
                        <td className="lv2">연금저축펀드계좌</td>
                        <td className="lv3">연금저축펀드계좌 신규</td>
                        <td className="lv4">가입정보입력</td>
                        <td className="lv5">저축기간 선택</td>
                        <td className="lv6">선택오류 안내</td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to='/html/FU/FMEC-0103030100F01-A' className='linked' target='_blank'>FMEC-0103030100F01-A</Link>
                        </td>
                        <td className={styles.user}>김종익</td>
                        <td className={styles.date}>231128</td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                    <tr>
                        <td className="lv2">서브메인</td>
                        <td className="lv3">저축</td>
                        <td className="lv4">입출금</td>
                        <td className="lv5"></td>
                        <td className="lv6"></td>
                        <td className="lv7"></td>
                        <td className={styles.func}>
                            <input type="radio" className={styles['iframe-select']} name="iframename" />
                            <Link to='/html/MM/FMBB-0400000000F01' className='linked' target='_blank'>FMBB-0400000000F01</Link>
                        </td>
                        <td className={styles.user}>김종익</td>
                        <td className={styles.date}>231128</td>
                        <td className={styles.cf1}></td>
                        <td className={styles.note}></td>
                    </tr>
                </tbody>
            </table>
        </main>
        <footer>
            <address>Copyright © NH Bank. All Rights Reserved.</address>
        </footer>
    </div>
  );
};

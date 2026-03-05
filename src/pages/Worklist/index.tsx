import './index.css';
import { Link } from 'react-router-dom';

export const Worklist = () => {
  return (
    <div>
      <div className='wh'>
        <div className='wh__title'><Link to='/'>NDS</Link></div>
        <div className='wh__nav'>
            <Link to='/'>홈</Link>
            <Link to='/About'>About</Link>
            <Link to='/메뉴1'>메뉴1</Link>
            <Link to='/메뉴2'>메뉴2</Link>
            <Link to='/메뉴3'>메뉴3</Link>
            <Link to='#' className='-active'>Example of use</Link>
        </div>

        <div className='wh__search'>
            <div className='wh__inner'>
                <div className='field'>
                    <div className='mix'>
                        <div className='text'>
                            <input type='text' id='tableSearch' className='left-side' />
                        </div>
        
                        <div className='space -lined search'>
                            <button type='button' className='icon-button -search right-side search-bt'></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <main>
        <div className='wrap'>
            <table>
                <colgroup>
                    <col style={{width: '10%'}} />
                    <col style={{width: '10%'}} />
                    <col style={{width: '10%'}} />
                    <col style={{width: '10%'}} />
                    <col style={{width: '10%'}} />
                    <col style={{width: '10%'}} />
                    <col style={{width: '15%'}} />
                    <col style={{width: '4%'}} />
                    <col style={{width: '5%'}} />
                    <col style={{width: '5%'}} />
                    <col style={{width: '5%'}} />
                    <col style={{width: '10%'}} />
                </colgroup>
                <thead>
                    <tr>
                        <th>Lv2</th>
                        <th>Lv3</th>
                        <th>Lv4</th>
                        <th>Lv5</th>
                        <th>Lv6</th>
                        <th>Lv7</th>
                        <th>화면ID</th>
                        <th>담당</th>
                        <th>완료일</th>
                        <th>UX라이팅</th>
                        <th>수정일</th>
                        <th>수정내역</th>
                    </tr>
                </thead>
                {/* 공통 */}
                <tbody className='util2'>
                    <tr>
                        <td className='lv2'>공통</td>
                        <td className='lv3'>셀렉트 박스</td>
                        <td className='lv4'>통신사 선택</td>
                        <td className='lv5'></td>
                        <td className='lv6'></td>
                        <td className='lv7'></td>
                        <td className='func'>
                            <input type='radio' className='iframe-select' name='iframename' />
                            <Link to='./prototype/NDS/html/BKOB/BKOB-0100000000V01-P.html' className='linked' target='_blank'>BKOB-0100000000V01-P</Link>
                        <button type='button' className='clip'></button></td>
                        <td className='user'></td>
                        <td className='date'></td>
                        <td className='cf1'></td>
                        <td className='cf2'></td>
                        <td className='note'></td>
                    </tr>
                    <tr>
                        <td className='lv2'>공통</td>
                        <td className='lv3'>셀렉트 박스</td>
                        <td className='lv4'>휴대폰번호 앞자리 선택</td>
                        <td className='lv5'></td>
                        <td className='lv6'></td>
                        <td className='lv7'></td>
                        <td className='func'>
                            <input type='radio' className='iframe-select' name='iframename' />
                            <Link to='./prototype/NDS/html/BKOB/BKOB-0200000000V01-P.html' className='linked' target='_blank'>BKOB-0200000000V01-P</Link>
                        <button type='button' className='clip'></button></td>
                        <td className='user'></td>
                        <td className='date'></td>
                        <td className='cf1'></td>
                        <td className='cf2'></td>
                        <td className='note'></td>
                    </tr>
                    <tr>
                        <td className='lv2'>공통</td>
                        <td className='lv3'>셀렉트 박스</td>
                        <td className='lv4'>이메일 선택</td>
                        <td className='lv5'></td>
                        <td className='lv6'></td>
                        <td className='lv7'></td>
                        <td className='func'>
                            <input type='radio' className='iframe-select' name='iframename' />
                            <Link to='./prototype/NDS/html/BKOB/BKOB-0400000000V01-P.html' className='linked' target='_blank'>BKOB-0400000000V01-P</Link>
                        </td>
                        <td className='user'></td>
                        <td className='date'></td>
                        <td className='cf1'></td>
                        <td className='cf2'></td>
                        <td className='note'></td>
                    </tr>
                </tbody>
                {/* //모듈서비스 */}
            </table>
        </div>
      </main>
    </div>
  );
};

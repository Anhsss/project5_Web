import './Web.css';
import web from './img/03.png'
import web1 from './img/04.png'
import web2 from './img/05.png'
import web3 from './img/06.png'

function SecHTML(probs) { //매개변수
  console.log(probs.h1);
  let webN =null;

  if (probs.h1 === 'HTML') webN = web
  else if ( probs.h1 === 'CSS') webN = web1
  else if ( probs.h1 === 'JavaScript') webN = web2
  else if ( probs.h1 === 'React') webN = web3

  /* probs에 따라 object로 구분 */
  const pContent = {
    'HTML' : 'HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용',
    'CSS' : 'Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어',
    'JavaScript' : '웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원',
    'React' : '사용자 인터페이스를 만들기 위한 JavaScript 라이브러리',
  }

  return (
    <section>
      <div>
        <img src={webN} width="200" height="200"alt={probs.h1}/>
      </div>
      <div className="content">
        <h1>{probs.h1}</h1>
        <p>{pContent[probs.h1]}</p>
      </div>
    </section>
  );
}

export default SecHTML;
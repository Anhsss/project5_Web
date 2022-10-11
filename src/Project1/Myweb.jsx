import './Web.css';
import Myweb1 from './Myweb1'

function Myweb() {
  return (
  <section>
    <nav>
   <div className="nav_logo">
      <p>mylogo</p>
   </div>
    <ul className="nav_menu">
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
      <li><a href="#">React</a></li>
    </ul>
    <ul className="nav_icon">
      <li><i className="fa-brands fa-facebook"></i></li>
      <li><i className="fa-brands fa-square-instagram"></i></li>
    </ul>
    </nav>
    </section>
  );
}

export default Myweb;
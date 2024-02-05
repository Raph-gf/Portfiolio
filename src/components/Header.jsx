import logo from "../assets/logo.svg";
import GitHub from "../assets/github.svg";
import Logosocial from "../assets/Logosocial.svg";
import CodePen from "../assets/CodePen.svg";
function Header() {
  return (
    <>
      <div className="header">
        <h3 className="textheader">Raphael Garnier Fagour</h3>

        <div className="logo">
          <a href="">
            {" "}
            <img src={logo} alt="" />
          </a>
          <a href="https://github.com/Raph-gf">
            <img src={GitHub} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/raphael-garnier-698226224/">
            <img src={Logosocial} alt="" />
          </a>
          <a href="">
            <img src={CodePen} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
export default Header;

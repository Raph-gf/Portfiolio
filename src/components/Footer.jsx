import LogoSo from "../assets/Logosocial.svg";
import CodePen from "../assets/CodePen.svg";
import GitHub from "../assets/GitHub.svg";
import logo from "../assets/logo.svg";

function Footer(params) {
  return (
    <>
      <div className="footer">
        <h1>Raphael Garnier Fagour</h1>
        <div className="footer-logo">
          <a href="https://www.linkedin.com/in/raphael-garnier-698226224/">
            <img src={LogoSo} alt="" />
          </a>
          <a href="">
            <img src={CodePen} alt="" />
          </a>
          <a href="https://github.com/Raph-gf">
            <img src={GitHub} alt="" />
          </a>
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;

import TourEffel from "../assets/TourEffel.png";

function FirstSection() {
  return (
    <>
      <div className="first-section">
        <h1>
          Enchanter de vous rencontrer je suis <u>Raphael</u>
        </h1>

        <p>
          Basé à Paris je suis un développeur Eclaté au sol, passionné par les
          applications web & l’accesibilité
        </p>
        <button className="contacter-moi">Contacter moi</button>

        <div className="Image-first-section">
          <img className="TourEffel" src={TourEffel} alt="" />
        </div>
      </div>
    </>
  );
}
export default FirstSection;

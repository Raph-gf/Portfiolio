function Projets({ imageUrl, name, languages }) {
  console.log(imageUrl, name, languages);
  return (
    <>
      <div className="projets-card">
        <img className="projets-image" src={imageUrl} alt="image" />
        <a href="" className="projets-name">
          {name}{" "}
        </a>
        <a href="" className="projets-explore">
          {languages}
        </a>
      </div>
    </>
  );
}
export default Projets;

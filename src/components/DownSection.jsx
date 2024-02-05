function DownSection() {
  return (
    <>
      <hr />
      <div className="Downsection_wrapper">
        {" "}
        <div className="contact">
          <h1>Contact</h1>
          <p>
            J'aimerais connaître votre projet et savoir comment je pourrais vous
            aider. je pourrais vous aider. Remplissez le formulaire et je vous
            répondrai dès que possible. dans les plus brefs délais.
          </p>
        </div>
        <div className="form">
          <form action="downform">
            <label For="name" />
            <input type="text" placeholder="NAME" required />
            <label For="email" />
            <input type="email" placeholder="EMAIL" required />
            <textarea cols="33" rows="10"></textarea>
          </form>
          <button className="contacter-moi">Envoyer</button>
        </div>
      </div>
    </>
  );
}
export default DownSection;

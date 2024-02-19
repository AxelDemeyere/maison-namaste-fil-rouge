function Contact() {
  return (
    <>
      <div className="contact">
        <h2>Me contacter</h2>
        <div className="contact-container">
          <h3>Téléphone</h3>
          <a href="tel:+33646789661">06 46 78 96 61</a>
        </div>
        <div className="contact-container">
          <h3>Mail</h3>
          <a href="mailto:namaste.ronchin@gmail.com">
            namaste.ronchin@gmail.com
          </a>
        </div>
        <div className="contact-container">
          <h3>Messenger</h3>
          <a href="https://www.facebook.com/Maison.Namaste/">
            M'envoyer un message
          </a>
        </div>
      </div>

      <div className="map">
        <h2>Où est l'institut ?</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.0109117775987!2d3.081404276857811!3d50.60833477598294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d5a1bf84c13d%3A0x5cf7ee9945324a6a!2sMaison%20Namast%C3%A9!5e0!3m2!1sfr!2sfr!4v1707908726267!5m2!1sfr!2sfr"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;

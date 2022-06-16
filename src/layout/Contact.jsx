import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ltm9l3c',
        'template_q9zqm9p',
        form.current,
        'fAywHeWjp-eiZulGE'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact__content">
      <h2 className="contact__h2">Besoin d'information? Contactez-moi :</h2>
      <form className="form-contact" ref={form} onSubmit={sendEmail}>
        <label>Nom</label>
        <input className="input input__name" type="text" name="user_name" />
        <label>Email</label>
        <input className="input input__mail" type="email" name="user_email" />
        <label>Message</label>
        <textarea className="input input__message" name="message" />
      
        <input className="input input__submit" type="submit" value="Envoyer" aria-label='Envoyer'/>
      </form>
    </div>
  );
};
export default Contact;

// export default function Contact() {
//   return (
//     <div className="contact__content">
//       <h2 className="contact__h2">Besoin d'information? Contactez-moi :</h2>
//       <form className="form-contact" action="">
//         <label htmlFor="input-contact">Votre message : </label>
//         <input className="input-contact" type="text" />
//         <label htmlFor="input-mail">Votre email</label>
//         <input className="input-mail" type="mail" />
//         <button className="input__submit" type="submit">
//           {' '}
//           Envoyer
//         </button>
//       </form>

//       <div className="contact__hours">
//         <h3>Téléphone : 06 16 71 72 81</h3>
//         {/* <p className="hours">
//           Ouvert du :
//           <br />
//           mardi au vendredi de 9H00 à 11H30
//           <br />
//           Samedi de 14H00 à 18H00
//           <br />
//           Fermé le dimanche et lundi
//         </p> */}
//       </div>
//     </div>
//   );
// }

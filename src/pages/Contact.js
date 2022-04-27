import { Email, Instagram, Phone,Facebook } from '@mui/icons-material'
import React from 'react'
import image from '../assests/image1.jpg'
import '../style/Contact.css'

function Contact() {
 
  return (
    <div className='contact' style={{backgroundImage:`url(${image})`}}>
           
            <div className='c-imageside' >
            
            <a href='mailto:oumerassia@gmail.com'><Email/> Elhayat-cabinet@gmail.com</a>
            <br></br>
            <a href='tel:+213556954596'><Phone/> +213(0)556954596</a>
            <br></br>
            <a href='https://www.instagram.com/med_saidou/'><Instagram/> Notre page Instagram</a>
            <br></br>
            <a href='https://www.facebook.com/med_saidou/'><Facebook/> Notre page Facebook</a>
            
            
            

            


  </div>

            <div className='c-formside'>
              <h1>Formulaire de contact</h1>
              
              <form id="form" methode="POST" >
                
              <label>Nom:</label>
              <input name="nom" placeholder='Votre nom' type ="text" required />
              
              <label>Prénom:</label>
              <input name="prenom" placeholder='Votre prenom' type ="text" required />
              <label>Email:</label>
              <input name="email" placeholder='Votre email' type ="e-mail" required/>
              <label>Numéro de téléphone:</label>
              <input name="numero" placeholder='Votre numero' type ="number" required />
              <label>Message:</label>
              <textarea name="message" placeholder='Ecrire votre message ici' ></textarea >
              <button type="submit"> Envoyer </button>
              
              </form>
            </div>
    </div>
  )
}

export default Contact

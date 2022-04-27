import React from 'react'
import image from '../assests/image3.jpg'
import '../style/Rendezvous.css'
function Rendezvous() {
  
  
  return (
    
    <div className='rendezvous'>

            <div className='imageside' style={{backgroundImage:`url(${image})`}} >
            
            </div>

            <div className='formside'>
              <h1>VOUS DEVEZ REMPLIR LE FORMULAIRE CI-DESSOUS</h1>
              <form id="form" methode="POST" action="index.php" >
              <label>nom</label>
              <input name="name" placeholder='entre votre nom' type ="text" required />
              <label>prenom</label>
              <input name="prenom" placeholder='entre votre prenom' type ="text" required />
              <label>E-mail</label>
              <input name="email" placeholder='entre votre email' type ="email" required />
              <label>numero de telephone</label>
              <input name="numero" placeholder='entre votre nom' type ="number" required />
              <label>date</label>
              <input name="date" type ="date" required />
              <label>motif</label>
              <select name="motif" >
              <option>consultaion</option>
              <option>blanchiment</option>
              <option>plombage</option>

              </select>
              <button type="submit" value="ajouter"> Envoyez</button>
              
              </form>
            </div>
    </div>
  )
}

export default Rendezvous

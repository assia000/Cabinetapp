import React from 'react'
import '../style/Admin.css'

function Admin() {
  return (
    <div className='admin'>
    <h2> Connectez-vous!</h2>
      <div className='container'>
      <form >
      <label> Pseudo:</label>
      <input name="pseudo" type="text" placeholder='Entrez votre pseudo' required /> 
      <label> Mot de passe:</label>
      <input name="motdepasse" type="password" placeholder='Entrez votre mot de passe' required /> 
      <input className='submit' type="submit"/>
      </form>
      </div>
    </div>
  )
}

export default Admin

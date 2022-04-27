import React from 'react'
import img1 from './apropos2.jpg'
import img2 from './apropos.jpg'
import './Apropos.css'

function Apropos() {
  return (
    <div className='apro'>
      <img className='img1' src={img1}></img>
      <h1>Cabinet dentaire El-Hayat </h1>
      
Notre Cabinet dentaire située à Bir-Eldjir , Oran, a pour mission d’améliorer votre santé dentaire et l’esthétique de votre sourire en prodiguant des soins de dernières générations.

Nos chirurgiens-dentistes accompagnés d’assistant(e)s dentaires qualifié(e)s  réalisent quotidiennement des traitements de haute qualité, allant du contrôle bucco-dentaire aux traitements les plus complexes : soins dentaires conventionnels, implantologie, orthodontie et dentisterie esthétique répondant ainsi a vos exigences.

Aussi, la diversité et la complémentarité́ de ces disciplines nous permettent d’offrir une prise en charge globale et personnalisée à chacun de nos patients
<div className='cli'>
<img className='img2' src={img2}></img>
Le Cabinet dentaire El-Hayat dispose d’un plateau technique moderne et très performant composé de 3 salles de soins, 2 salle de chirurgies, 2 salles de stérilisations, 1 salle de radiologie, un laboratoire de prothèse.

<ul>L’établissement est doté aussi d’un équipement de dernière génération, notamment :

<li>Digora Soredex : imagerie numérique</li>
<li>Pièzochirurgie</li>
<li>Radio panoramique</li>
<li>Scanner dentaire 3D</li>
<li>Système endodontique ENDO-MATE</li>
<li>CAD-CAM : conception et fabrication assistée par ordinateur</li>
<li>Omnicam : Empreinte optique</li>
<li>LASER</li>
<li>Lampe de blanchiment</li></ul>
Pour le plus grand confort de nos patient, un parking est réservé uniquement à la patientelle du cabinet dentaire El-Hayat.
      </div>
    </div>
  )
}

export default Apropos


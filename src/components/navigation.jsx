import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dashboard from '../img/dashboard.svg';
import unifilar from '../img/unifilar.svg';
import medidor from '../img/medidor.svg';
import historico from '../img/historico.svg';
import alarmes from '../img/alarme.svg';
import logos from '../img/logos.svg';


// Componente de item de menu
function NavigationItem({ id, imgSrc, text, selected, onClick}) {
  return (

    <Link to={`/${id}`} className={`flex-colum ${selected ? 'selected' : ''}`} onClick={() => onClick(id)} >
      <img src={imgSrc} alt="" />
      <h3>{text}</h3>
    </Link>
    // <div id={id} className={`flex-colum ${selected ? 'selected' : ''}`} onClick={() => onClick(id)}>
    //   <img src={imgSrc} alt="" />
    //   <h3>{text}</h3>
    // </div>
  );
}

// Componente de menu
function Navigation() {
  const [selectedItem, setSelectedItem] = useState('dashboard'); 

  const NavigationItems = [
    { id: "dashboard", imgSrc: dashboard, text: "DASHBOARD" },
    { id: "unifilar", imgSrc: unifilar, text: "UNIFILAR" },
    { id: "medidor", imgSrc: medidor, text: "MEDIDOR" },
    { id: "historico", imgSrc: historico, text: "HISTÓRICO" },
    { id: "alarmes", imgSrc: alarmes, text: "ALARMES" },
    // { id: "logos", imgSrc: logos, text: "" } 
  ];

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <div id="nav">
      {NavigationItems.map(item => (
        <NavigationItem
        key={item.id}
        id={item.id}
        imgSrc={item.imgSrc}
        text={item.text}
        selected={selectedItem === item.id} 
        onClick={handleItemClick}
        />
      ))}
      <div className="static-logo">
        <img src={logos} alt="Logotipo" />
      </div>
    </div>
  );
}




export default Navigation;
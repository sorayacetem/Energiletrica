import React, { useState, useEffect } from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
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
    
  );
}

// Componente de menu
function Navigation() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState('dashboard'); 

  const NavigationItems = [
    { id: "dashboard", imgSrc: dashboard, text: "DASHBOARD" },
    { id: "unifilar", imgSrc: unifilar, text: "UNIFILAR" },
    { id: "medidor", imgSrc: medidor, text: "MEDIDOR"},
    { id: "historico", imgSrc: historico, text: "HISTÓRICO" },
    { id: "alarmes", imgSrc: alarmes, text: "ALARMES" },
   
  ];

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  useEffect(() => {
    const currentPath = location.pathname.substring(1); // Remove o '/' inicial
    if (matchPath('/unifilar/*', location.pathname) || matchPath('/pmt', location.pathname)) {
      setSelectedItem('unifilar');
    } else if (currentPath) {
      setSelectedItem(currentPath);
    } else {
      setSelectedItem('dashboard'); // Valor padrão caso a URL esteja vazia
    }
  }, [location.pathname]);


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
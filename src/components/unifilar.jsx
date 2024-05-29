import React from 'react';
import { Link } from 'react-router-dom';


const Unifilar = () => {
    return(
        <div className="page">
            <div className="navTop">            
            <Link to="/pmt"><h3 className='disponivel'>PMT</h3></Link>
                <h3> - </h3>           
                <h3 className="titulo-color">UNIFILAR</h3>
            </div> 

            <h1>Tela UNIFILAR</h1>       
        </div>
    );

}

export default Unifilar;
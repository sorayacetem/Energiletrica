import React from 'react';
import { Link } from 'react-router-dom';
import pmt from '../img/pmt.png';

const Pmt = () => {
    return(
        <div className="page">
            <div className="navTop">            
                <h3 className="titulo-color">PMT</h3>
                <h3> - </h3>           
                <Link to="/unifilar"><h3 className='disponivel'>UNIFILAR</h3></Link>
            </div>   


            <div id='body_pmt'>
                <img src={pmt} alt="PMT" />
            </div>  
        </div>
    );

}

export default Pmt;
import React from "react";
import left from "../img/seta-esquerda.svg";
import right from "../img/seta-direita.svg";
import protecao from "../img/alarme proteção.png";

const Dashboard = () => {
  return (
    <div className="page">
      <div className="navTop">
        <a href="#">
          <img src={left} alt="Seta esquerda" />
        </a>
        <h3 className="titulo-color">MEDIDOR 01</h3>
        <a href="#">
          <img src={right} alt="Seta esquerda" />
        </a>
      </div>

      <div id="TPC">
        <div id="tensao" className="dash_box">
          <h4>TENSÃO</h4>
        </div>
        <div id="protecao" className="dash_box">
          <h4>PROTEÇÃO</h4>
          <img src={protecao} alt="Alarme de proteção" />
        </div>
        <div id="corrente" className="dash_box">
          <h4>CORRENTE</h4>
        </div>
      </div>

      <div id="PFF">
        <div id="potencia" className="dash_box">
          <h4>POTÊNCIA</h4>
        </div>
        <div id="frequencia" className="dash_box">
          <h4>FREQUÊNCUA</h4>
          <span>00,0 Hz</span>
        </div>
        <div id="fatorPotencia" className="dash_box">
          <h4>TENSÃO</h4>
          <div id="progressBar">
            <div id="bar"></div>
          </div>
          <span>00000</span>
        </div>
      </div>

      <div id="totalEnergy">
        <h4>ENERGIA TOTAL</h4>
        <div id="powerParameters">
          <div id="energiaAtivaEntrada" className="boxEnergy">
            <span>ENERGIA ATIVA (ENT.)</span>
            <label>000000</label>
          </div>

          <div id="energiaReativaEntrada" className="boxEnergy">
            <span>ENERGIA REATIVA (ENT.)</span>
            <label>000000</label>
          </div>

          <div id="energiaAtivaSaida" className="boxEnergy">
            <span>ENERGIA ATIVA (SAI.)</span>
            <label>000000</label>
          </div>

          <div id="energiaAtivaSaida" className="boxEnergy">
            <span>ENERGIA REATIVA (SAI.)</span>
            <label>000000</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

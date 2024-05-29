import React from "react";
import medidorimg from "../img/medidor2.svg";

const Medidor = () => {
  return (
    <div className="page">
      <div className="navTop">
        <h3 className="titulo-color">MEDIDOR</h3>
      </div>

      <div className="box_medidor">
        <div className="figura_medidor">
          <img src={medidorimg} alt="" />
          <div className="img_medidor_dados"></div>
          <div className="img_medidor_dados"></div>
        </div>
        <div className="dados_medidor">
          <div className="dados_tensao">
            <div className="titulo_medicoes">
              <h3>TENSÃO</h3>
            </div>
            <div className="body_tensao">
              <div className="cores_tensao">
                <div className="cor">
                  <div id="verde"></div>
                </div>
                <div className="cor">
                  <div id="azul"></div>
                </div>
                <div className="cor">
                  <div id="vermelho"></div>
                </div>
              </div>

              <div className="tensao">
                <div id="tensao_r">
                  <h3>TENSÃO R</h3>
                </div>
                <div id="tensao_s">
                  <h3>TENSÃO S</h3>
                </div>
                <div id="tensao_t">
                  <h3>TENSÃO T</h3>
                </div>
              </div>
              <div className="grafic_tensao"></div>
            </div>
          </div>

          <div className="dados_corrente">
            <div className="titulo_medicoes">
              <h3>CORRENTE</h3>
            </div>
            <div className="body_corrente">
              <div className="cores_corrente">
                <div className="cor">
                  <div id="verde"></div>
                </div>
                <div className="cor">
                  <div id="azul"></div>
                </div>
                <div className="cor">
                  <div id="vermelho"></div>
                </div>
              </div>
              <div className="corrente">
                <div id="corrente_r">
                  <h3>CORRENTE R</h3>
                </div>
                <div id="corrente_s">
                  <h3>CORRENTE S</h3>
                </div>
                <div id="corrente_t">
                  <h3>CORRENTE T</h3>
                </div>
              </div>
              <div className="grafic_corrente"></div>
            </div>
          </div>
        </div>
      </div>

        <div className="medicoes_eletricas">
            <div className="titulo_medicoes">
            <h3>MEDIÇÕES ELÉTRICAS</h3>
            </div>

            <div className="body_medicoes">

                <div className="medicoes">
                    <div className="me_corrente">
                        
                        <div class="titulo_medicoes">
                            <h3>CORRENTE</h3>
                        </div>
                        <div className="dados_me">
                            <div className="row">
                                <h3>R</h3>
                                <div id="dados_corrente_R" className="dados">                                
                                </div>
                            </div>

                            <div className="row">
                                <h3>S</h3>
                                <div id="dados_corrente_S" className="dados"> 
                                </div>
                            </div>

                            <div className="row">
                                <h3>T</h3>
                                <div id="dados_corrente_T" className="dados">                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="me_tensao">

                    <div class="titulo_medicoes">
                            <h3>TENSÃO</h3>
                        </div>
                        <div className="dados_me">

                            <div className="row">
                                <h3>R-S</h3>
                                <div className="dados" id="dados_tensao_RS">                                
                                </div>
                                <h3>R</h3>
                                <div className="dados" id="dados_tensao_R">                                
                                </div>
                                
                            </div>

                            <div className="row">
                                <h3>S-T</h3>
                                <div className="dados" id="dados_tensao_ST">                                
                                </div>
                                <h3>S</h3>
                                <div className="dados" id="dados_tensao_S">
                                </div>
                                
                            </div>

                            <div className="row">
                                <h3>R-T</h3>
                                <div className="dados" id="dados_tensao_RT">                                
                                </div>
                                <h3>T</h3>
                                <div className="dados" id="dados_tensao_T">                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="medicoes">
                    
                    <div className="me_energiaTotal">
                        
                        <div class="titulo_medicoes">
                            <h3>ENERGIA TOTAL</h3>
                        </div>
                        <div className="dados_me">

                            <div className="row-large">
                                <h3>ATIVA</h3>
                                <div className="dados" id="E_total_ativa">                                
                                </div>
                            </div>

                            <div className="row-large">
                                <h3>REATIVA</h3>
                                <div className="dados" id="E_total_reativa">
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    <div className="me_potencia">

                    <div class="titulo_medicoes">
                            <h3>POTÊNCIA</h3>
                        </div>
                        <div className="dados_me">
                            <div className="row">
                                <h3>ATIVA TOTAL</h3>
                                <div className="dados" id="P_ativa_total">                                
                                </div>
                            </div>

                            <div className="row">
                                <h3>REATIVA TOTAL</h3>
                                <div className="dados" id="P_reativa_total">
                                </div>
                            </div>

                            <div className="row">
                                <h3>APARENTE TOTAL</h3>
                                <div className="dados" id="P_aparente_total">
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                <div className="medicoes">
                
                    <div className="fator_potencia">                    
                        <h3>FATOR POTÊNCIA</h3>
                          <div className="dados" id="dados_f_potencia">                                
                          </div>
                    </div>
                    
                    <div className="frequencia">
                      <h3>FREQUÊNCIA</h3>
                          <div className="dados" id="dados_frequencia">                                
                          </div>
                    </div>

                
                </div>
            </div>
        </div>

        
    </div>
  );
};

export default Medidor;

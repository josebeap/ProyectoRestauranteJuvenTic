import React from 'react';
import './styles/style_index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import icon1 from '../../images/icono1@2x.png';
import icon2 from '../../images/icono2@2x.png';
import icon3 from '../../images/icono3@2x.png';
import icon4 from '../../images/icono4@2x.png';
import fondo from '../../images/foto3@2x.png';

const seccion_2 = () => {

    return (
        <>
            <div className="container-fluid pd-0" style={{backgroundImage: {fondo}, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
                <h1 className="fw-light text-center text-lg-center mt-4 mb-0" style={{ color: 'white' }}>Organizamos eventos para cualquier celebración</h1>
                <br/>
                <div className="row class align-items-end">
                    <div className="col-3 text-center">
                        <div className="d-block h-100 mb-4">
                            <img className="img-fluid" src={icon1} width="40%" alt="" />
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <div className="d-block h-100 mb-4">
                            <img className="img-fluid" src={icon2} width="40%" alt="" />
                        </div>
                    </div>
                    <div className=" col-3 text-center ">
                        <div className="d-block h-100 mb-4">
                            <img className="img-fluid" src={icon3} width="60%" alt="" />
                        </div>
                    </div>
                    <div className=" col-3 text-center">
                        <div className="d-block h-100 mb-4">
                            <img className="img-fluid" src={icon4} width="60%" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row class align-items-end">
                    <div className="col-3 ">
                        <div className="d-block h-100 mb-4">
                            <p style={{ textAlign: 'center', fontSize: '2vw', color: 'white' }}>
                                Fiestas temáticas
                            </p>
                            <p style={{ textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nisl et diam
                                fringilla posuere. Quisque sed lacus erat. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Cras sed pulvinar libero
                            </p>
                        </div>
                    </div>
                    <div className="col-3 ">
                        <div className="d-block h-100 mb-4">
                            <p style={{ textAlign: 'center', fontSize: '2vw', color: 'white' }}>
                                Matrimonios
                            </p>
                            <p style={{ textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nisl et diam
                                fringilla posuere. Quisque sed lacus erat. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Cras sed pulvinar libero
                            </p>
                        </div>
                    </div>
                    <div className=" col-3 ">
                        <div className="d-block h-100 mb-4">
                            <p style={{ textAlign: 'center', fontSize: '2vw', color: 'white' }}>
                                Cenas Empresariales
                            </p>
                            <p style={{ textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nisl et diam
                                fringilla posuere. Quisque sed lacus erat. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Cras sed pulvinar libero
                            </p>
                        </div>
                    </div>
                    <div className=" col-3 ">
                        <div className="d-block h-100 mb-4">
                            <p style={{ textAlign: 'center', fontSize: '2vw', color: 'white' }}>
                                Cumpleaños
                            </p>
                            <p style={{ textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nisl et diam
                                fringilla posuere. Quisque sed lacus erat. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Cras sed pulvinar libero
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default seccion_2
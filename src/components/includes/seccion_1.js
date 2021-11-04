import React from 'react';
import './styles/style_index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from '../../images/5.jpg';
import img2 from '../../images/11.jpg';
import img3 from '../../images/14.jpg';
import img4 from '../../images/15.jpg';
import menu from '../../images/menu@2x.png';
import plato from '../../images/plato_banner.png';


const seccion_1 = () => {

    return (
        <>
            <div className="py-4">
            <div className="card bg-dark text-white">
                <img src={plato} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <p className="card-text fs-1 fw-bolder">¡Saborea el mundo, conoce su historia y tradiciones, con nuestros platillos!</p>
                
                </div>
            </div>
            </div>
        
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <h1 className="fw-light text-center text-lg-start mt-4 mb-0">Recomendación del chef</h1>
                            <div className="col-6 py-2">
                                <div className="d-block h-100 mb-4">
                                    <img className="img-fluid" src={img1} alt="" />
                                </div>
                            </div>
                            <div className="col-6 py-2">
                                <div className="d-block h-100 mb-4">
                                    <img className="img-fluid" src={img3} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-block h-100 mb-4">
                                    <img className="img-fluid" src={img4} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-block h-100 mb-4">
                                    <img className="img-fluid" src={img2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <h1 className="fw-light text-center text-lg-start mt-4 mb-0"><br /></h1>
                            <h1 className="fw-light text-center text-lg-start mt-4 mb-0"><br /></h1>
                            <div className="col-md-12 container-img">
                                <div className="d-block h-100 mb-4">
                                    <img className="img-fluid" src={menu} alt="" style={{ width: '600px' }} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-center">
                                {/* <a href="" className="btn btn-primary my-2" download="prueba.pdf" target="_blank">Ver la Carta</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default seccion_1

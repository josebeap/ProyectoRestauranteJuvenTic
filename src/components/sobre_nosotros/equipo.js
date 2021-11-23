import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Style.css";
//import gerente from "../../assets/images/person-4.jpg";
import mujadmin from "../../assets/images/mujadmin.jpg";
import chef_jefe from "../../assets/images/chef_jefe.jpg";
import subchef from "../../assets/images/subchef.jpg";
import chefaux from "../../assets/images/chefaux.jpg";
import meseros2 from "../../assets/images/meseros2.jpg";
import servi from "../../assets/images/servi.jpg";
import admin from "../../assets/images/admin.jpg";

const Equipo = ({empleadosItems}) => {
  return (
    <section>
		
      <div class="stuff-box">
	  {!empleadosItems ? <h2> carga </h2>:
	  empleadosItems.map((empleadoItem) => (
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="heading-title text-center">
                <h2>Nuestro Equipo de Trabajo</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4 col-sm-6">
              <div class="our-team">
                <div class="pic">
                  <img src={empleadoItem.img} />
                </div>
                <div class="team-content">
                  <h3 class="">{empleadoItem.nombre}</h3>
                  <h3 class="">{empleadoItem.cargo}</h3>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="our-team">
                <div class="pic">
                  <img src={mujadmin} />
                </div>
                <div class="team-content">
                  <h3 class="">{empleadoItem.nombre}</h3>
                  <h3 class="">{empleadoItem.cargo}</h3>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="our-team">
                <div class="pic">
                  <img src={chef_jefe} />
                </div>
                <div class="team-content">
                  <h3 class="">Alexandra Mejia</h3>
                  <h3 class="">Chef Jefe</h3>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="our-team">
                <div class="pic">
                  <img src={subchef} />
                </div>
                <div class="team-content">
                  <h3 class="">Julian Garcia</h3>
                  <h3 class="">Sub-Chef</h3>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="our-team">
                <div class="pic">
                  <img src={chefaux} />
                </div>
                <div class="team-content">
                  <h3 class="">Chef Auxiliares</h3>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="our-team">
                <div class="pic">
                  <img src={meseros2} />
                </div>
                <div class="team-content">
                  <h3 class="">Meseros</h3>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="our-team">
                <div class="pic">
                  <img src={servi} />
                </div>
                <div class="team-content">
                  <h3 class="">Servicios Generales</h3>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="our-team">
                <div class="pic">
                  <img src={admin} />
                </div>
                <div class="team-content">
                  <h3 class="">Equipo Administrativo</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
		))}
      </div>

    </section>
  );
};
export default Equipo;

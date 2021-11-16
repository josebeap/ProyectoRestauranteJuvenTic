import React from 'react';
/*import { useForm } from 'react-hook-form';*/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/comentarios.css'

const Subform = (props) => {

    /*const {register, handleSubmit, formState: {errors}}=useForm();

    const onSubmit = (data, e)=>{
        
        props.addComent(data)
        e.target.reset(data)
    }*/


    return (
         <>
           
                <form action>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" defaultValue="John" /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" defaultValue="Doe" /><br /><br />
                    <input type="submit" defaultValue="Submit" />
                </form>

            {/*<div className="container">
                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" {...register("nombre",
                            {
                                required: { value: true, message: 'Campo Requerido' }
                            })} />
                        <div>
                            {errors?.nombre?.message}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <textarea className="form-control" placeholder="Leave a comment here" id="comentario" name="comentarioPrincipal" {...register("comentarioPrincipal",
                            {
                                required: { value: true, message: 'Campo Requerido' }
                            })} />
                        <div>
                            {errors?.comentarioPrincipal?.message}
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" id="boton-guardar">Enviar</button>
                    </div>
                </form>
                        </div>*/}
        </>








    );




}

export default Subform
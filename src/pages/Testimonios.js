import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/includes/styles/comentarios.css'
import ComentarioP from '../components/includes/comentario_principal'
import Formulario from '../components/includes/Formulario'


const Testimonios=()=>{
    
    const userData=[
        {
            id:uuidv4(),
            nombre: "aioria",
            comentarioPrincipal: "Hola digimundo estás muy grande que genial",
        },
        {
            id:uuidv4(),
            nombre: "Sasuke",
            comentarioPrincipal: "Hola konoha"
        },
        {
            id:uuidv4(),
            nombre: "Sakura",
            comentarioPrincipal: "Pinche tabla inutil"
        },
    ]


    const [users, setUsers]=useState(userData);

    /*modal*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   /*const [usersCom, setUsersCom]=useState(userSub);*/

    const addComent=(co)=>{
        co.id = uuidv4()
        setUsers([
            ...users,
            co
        ])
        
    }

    const subComentario = (id)=>{
        console.log(id)
    }

    return (
        <>
        <div className="comments-container">
            <ul id="comments-list" className="comments-list">
                <i>
                     <ComentarioP users={users} subComentario={subComentario}/>
                </i>
            </ul>
        </div>
        <Formulario addComent={addComent}/>
        </>
    )
}

export default Testimonios;
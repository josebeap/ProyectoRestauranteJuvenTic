import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/comentarios.css';


const sub_comentario = (props) => {

    return (
        <>
            
            <li> 
                        <ul className="comments-list reply-list" key={props.sub.idUser}>
                            
                            <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt="" /></div>
                            
                            <div className="comment-box">
                                <div className="comment-head">
                                    <h6 className="comment-name">{props.sub.nombreSub}</h6>
                                </div>
                                <div className="comment-content">
                                    {props.sub.comentarioSub}
                                </div>
                            </div>
                        </ul>
            </li>
        </>
    )
}

export default sub_comentario;
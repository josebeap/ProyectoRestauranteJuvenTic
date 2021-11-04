import React from "react";
import loginImg from "../../../src/login.svg";
//<img src={loginImg} />
import Header from "../../components/includes/header"
import Footer from "../../components/includes/footer"

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                <Header />
                <div className="base-container">

                    <div className="header">
                        <h1>Login</h1>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">
                                    <h1>Usuario</h1>
                                </label>
                                <input type="text" name="username" placeholder="username"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <h1>Contraseña</h1>
                                </label>
                                <input type="password" name="password" placeholder="password"></input>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn btn-warning">
                            <h1>Login</h1>
                        </button>
                    </div>
                </div>
                <br></br>
                <Footer />
            </div>
        );
    }
}
import React,{ useState} from 'react';
import {AiOutlineStar,AiFillShop} from 'react-icons/ai';
import {BsPhone,BsClipboard} from 'react-icons/bs';
import Navi from './nav';
import './styles/index.css'

const Header = () => {

    const [move, setMove] = useState(500)

    const onCopy=()=>{
        navigator.clipboard.writeText("+57 321 7289 009")
        .then(()=>{
            setMove(0);
            setTimeout(()=>{
                setMove(500)
            },3000)
        })
        .catch((e)=>console.log(e))
    }



    return(
        <header style={{minHeight:`70vh`,overflow:'hidden'}} >
            <div className="sup">
            <div className="left">
                <BsPhone color="rgb(255,200,0)" style={{fontSize:'1em'}} onClick={onCopy}/>
                <p>+57 321 7289 009<br/>+57 310 0987 908</p>
                <div className="modalCopy" style={{right:move}}><BsClipboard/>  Copy to clipboard</div>
            </div>

            <div className="right">
                <div className="count"></div>
                <AiFillShop color="rgb(255,200,0)" style={{fontSize:'2em'}}/>
            </div>
            </div>
            <div className="center">
                <div className="text">
                    <span className="linea"></span>
                        <h1>Welcome<br/>to<br/>World Food</h1>
                    <span className="linea" ></span>
                </div>
                <div className="stars">
                    <AiOutlineStar color="rgb(255,250,0)" style={{fontSize:'2em'}}/>
                    <AiOutlineStar color="rgb(255,250,0)" style={{fontSize:'2em'}}/>
                    <AiOutlineStar color="rgb(255,250,0)" style={{fontSize:'2em'}}/>
                    <AiOutlineStar color="rgb(255,250,0)" style={{fontSize:'2em'}}/>
                    <AiOutlineStar color="rgb(255,250,0)" style={{fontSize:'2em'}}/>
                </div>
                <Navi/>
            </div>
            <button className="btn">
                <div className="subbtn"></div>
                <span>Ver mas</span>
            </button>
        </header>
    )    
}

export default Header
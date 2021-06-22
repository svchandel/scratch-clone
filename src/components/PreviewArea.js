import React,{useState} from "react";
import CatSprite from "./CatSprite";
import "./Sidebar"
import hello from "./icons/hello.png"
import think from "./icons/think.png"

export default function PreviewArea() {
  const [cssR, setCssR] = useState(0)
  const [cssP, setCssP] = useState(0)
  const [cssLook, setCssLook] = useState()
  const [cssHW, setCssHW] = useState("0em")


  const myStyle = {
    transform: "rotate(" + cssR +"deg)"+ "translate("+ cssP + "px)",
    position: "relative",
  }
  function handleClick(){
    switch(window.value){
      case 'move10':
        setCssP(cssP+20)
        break;
      case 'rotate15left':
        setCssR(cssR-15)
        break;
      case 'rotate15right':
        setCssR(cssR+15)
        break;
      case 'hello':
        setCssLook(hello)
        setCssHW("4em")
        break;
      case '2hello':
        setCssLook(hello)
        setCssHW("4em")
        setTimeout(() => {
          setCssHW("0em")
        }, 3000);
        break;
      case 'think':
        setCssLook(think)
        setCssHW("4em")
        break;
      case '2think':
        setCssLook(think)
        setCssHW("4em")
        setTimeout(() => {
          setCssHW("0em")
        }, 3000);
        break;
      case 'KeyA':
        setCssP(cssP + parseInt(window.step))
        break;
      case 'KeyS':
        setCssR(cssR+90)
        break;
      case 'Space':
        setCssLook(hello)
        setCssHW("4em")
        break;
      case 'ArrowUp':
        setCssLook(think)
        setCssHW("4em")
        setTimeout(() => {
          setCssHW("0em")
        }, 5000);
      default:
        break;
    }
  }
  const looksStyle={
    backgroundImage: "url(" + cssLook +")",
    height: cssHW,
    width: cssHW,
    backgroundSize: "contain",
    position: "relative",
    top: "1px",
    display: "block",
    margin: "0 3em 0"
  }
  return (
    <div >
    <button style = {{margin: "10px 10px 20px"}} onClick= {handleClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
    </svg>
    </button>
    <div className= "hideme" style ={myStyle} >
      <div className="hideme" style = {looksStyle}></div>
      <CatSprite  />
    </div>
      
    </div>
  );
}

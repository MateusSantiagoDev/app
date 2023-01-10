import "./Home.css";
import logo from "../assets/images/logo.png";
import { HiOutlineMail } from 'react-icons/hi';
import { RiWhatsappFill } from 'react-icons/ri';

export function Home() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="contato">
         {/*  <a href="/" target="_blank"><HiOutlineMail/></a>
          <a href="/" target="_blank"><RiWhatsappFill/></a> */}
          <button>Caça Vazamento</button>
          <button>Limpeza de Caixa d'agua</button>
          <button>Desentupimento</button>
          <button>Desalojamento de Pombo</button>
        </div>
      </div>
      <div className="home"></div>
    </div>
  );
}

import "./Home.css";
/* import logo from "../assets/logo/logo.png"; */
/* import { HiOutlineMail } from 'react-icons/hi';*/
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";

import carousel0 from "../assets/images/carousel/carousel0.png";
import carousel1 from "../assets/images/carousel/carousel1.jpeg";
import carousel2 from "../assets/images/carousel/carousel2.jpg";
import carousel3 from "../assets/images/carousel/carousel3.jpg";
import carousel4 from "../assets/images/carousel/carousel4.jpeg";
import chevron from "../assets/images/carousel/chevron.png";

import logo from "../assets/logo/logo.png";

import vazamento0 from "../assets/images/vazamento0.jpg";
import vazamento1 from "../assets/images/vazamento1.jpg";
import vazamento2 from "../assets/images/vazamento2.jpg";
import vazamento3 from "../assets/images/vazamento3.jpg";

import limpeza0 from "../assets/images/limpeza0.jpg";
import limpeza1 from "../assets/images/limpeza1.jpg";
import limpeza2 from "../assets/images/limpeza2.jpg";
import limpeza3 from "../assets/images/limpeza3.jpg";

import desentupimento0 from "../assets/images/desentupimento0.jpg";
import desentupimento1 from "../assets/images/desentupimento1.jpg";
import desentupimento2 from "../assets/images/desentupimento2.webp";
import desentupimento3 from "../assets/images/desentupimento3.jpg";

import pombos0 from "../assets/images/pombos0.jpg";
import pombos1 from "../assets/images/pombos1.jpg";
import pombos2 from "../assets/images/pombos2.jpg";
import pombos3 from "../assets/images/pombos3.jpg";

import atendimento from "../assets/images/atendimento.png";
import campeao from "../assets/images/campeao.png";

import pix from "../assets/images/pix.png";
import master from "../assets/images/master.png";
import visa from "../assets/images/visa.png";
import boleto from "../assets/images/boleto.png";
import american from "../assets/images/american.jpg";
import diners from "../assets/images/diners.png";
import elo from "../assets/images/elo.png";
import hipercard from "../assets/images/hipercard.png";

export function Home() {
  const carousel = useRef();

  const handlescrollleft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handlescrollright = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div>
      <div className="container">
        <div className="slider">
          <div className="wrapper">
            <img
              src={chevron}
              alt="img"
              onClick={handlescrollleft}
              className="chevron-left chevron"
            />

            <div className="carousel" ref={carousel}>
              <img src={carousel3} alt="img-carousel" />
              <img src={carousel4} alt="img-carousel" />
              <img src={carousel2} alt="img-carousel" />
              <img src={carousel1} alt="img-carousel" />
              <img src={carousel0} alt="img-carousel" />
            </div>

            <img
              src={chevron}
              alt="img"
              onClick={handlescrollright}
              className="chevron-right chevron"
            />
          </div>
        </div>

        <div className="div_orcamento">
          <h1>Orçamento Gratuito</h1>
          <button className="button_orcamento">
            <a href="https://wa.me/5511948914939" target="_blanc">
              <RiWhatsappFill size={35} className="whatssap" />
            </a>
          </button>
        </div>

        <div className="div_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="home">
        <div className="div_h2-serviço">
          <h2>Caça Vazamento</h2>
        </div>
        <div className="div_servicos1">
          <div className="div_servico1-img">
            <img src={vazamento0} alt="img" classname="img_servico" />
            <span>Caça Vazamentos em Sistemas de Água</span>
          </div>

          <div className="div_servico1-img">
            <img src={vazamento1} alt="img" classname="img_servico" />
            <span>Caça Vazamentos em Sistemas de Drenagem</span>
          </div>

          <div className="div_servico1-img">
            <img src={vazamento2} alt="img" classname="img_servico" />
            <span>Caça Vazamentos em Sistemas de Esgoto</span>
          </div>

          <div className="div_servico1-img">
            <img src={vazamento3} alt="img" classname="img_servico" />
            <span>Caça Vazamentos em Piscinas</span>
          </div>
        </div>

        <div className="div_h2-serviço">
          <h2>Limpeza de Caixa d'agua</h2>
        </div>

        <div className="div_servicos1">
          <div className="div_servico1-img">
            <img src={limpeza0} alt="img" classname="img_servico" />
            <span>Limpeza de Caixa d'água</span>
          </div>

          <div className="div_servico1-img">
            <img src={limpeza1} alt="img" classname="img_servico" />
            <span>Impermeabilização de Caixa d'água</span>
          </div>

          <div className="div_servico1-img">
            <img src={limpeza2} alt="img" classname="img_servico" />
            <span>Higienização de Caixa d'água</span>
          </div>

          <div className="div_servico1-img">
            <img src={limpeza3} alt="img" classname="img_servico" />
            <span>Higienização de Reservatório</span>
          </div>
        </div>

        <div className="div_h2-serviço">
          <h2>Desentupimento</h2>
        </div>

        <div className="div_servicos1">
          <div className="div_servico1-img">
            <img src={desentupimento0} alt="img" classname="img_servico" />
            <span>Desentupimento de Vaso Sanitário</span>
          </div>

          <div className="div_servico1-img">
            <img src={desentupimento1} alt="img" classname="img_servico" />
            <span>Desentupimento de Ralos</span>
          </div>

          <div className="div_servico1-img">
            <img src={desentupimento2} alt="img" classname="img_servico" />
            <span>Desentupimento de Canos</span>
          </div>

          <div className="div_servico1-img">
            <img src={desentupimento3} alt="img" classname="img_servico" />
            <span>Desentupimento de Pias</span>
          </div>
        </div>

        <div className="div_h2-serviço">
          <h2>Desalojamento de Pombo</h2>
        </div>

        <div className="div_servicos1">
          <div className="div_servico1-img">
            <img src={pombos0} alt="img" classname="img_servico" />
            <span>Fio Tensionado</span>
          </div>

          <div className="div_servico1-img">
            <img src={pombos1} alt="img" classname="img_servico" />
            <span>Vedantes para Impedir Acesso</span>
          </div>

          <div className="div_servico1-img">
            <img src={pombos2} alt="img" classname="img_servico" />
            <span>Telas Bloqueadoras</span>
          </div>

          <div className="div_servico1-img">
            <img src={pombos3} alt="img" classname="img_servico" />
            <span>Espícula Plástica ou Metálica</span>
          </div>
        </div>
      </div>

      <div className="div_pagamento">
        <h3>Formas de Pagamento</h3>
        <div className="div_pagamento-img">
          <img src={american} alt="img_pagamento" />
          <img src={diners} alt="img_pagamento" />
          <img src={elo} alt="img_pagamento" />
          <img src={hipercard} alt="img_pagamento" />
          <img src={master} alt="img_pagamento" />
          <img src={visa} alt="img_pagamento" />
          <img src={boleto} alt="img_pagamento" />
          <img src={pix} alt="img_pagamento" />
        </div>
      </div>

      <div className="footer">
        <h3>
          <img src={campeao} alt="img_tradição" /> 23 anos de atuação no mercado
        </h3>

        <h3>
          <img src={atendimento} alt="img_localização" /> atendemos em toda
          grande São Paulo e interior
        </h3>

        <a
          className="fale_conosco"
          href="https://wa.me/5511948914939"
          target="_blanc"
        >
          <RiWhatsappFill /> Solicitar Orçamento
        </a>
      </div>
    </div>
  );
}

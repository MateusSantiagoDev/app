import "./Home.css";
/* import logo from "../assets/logo/logo.png"; */
/* import { HiOutlineMail } from 'react-icons/hi';*/
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";
import desentupimento from "../assets/images/carousel/desentupimento.png";
import desentupimento0 from "../assets/images/carousel/desentupimento0.jpeg";
import desalojamento1 from "../assets/images/carousel/desalojamento1.jpg";
import caca from "../assets/images/carousel/caca.jpg";
import chevron from "../assets/images/carousel/chevron.png";
import vazamento0 from "../assets/images/vazamento0.jpg";
import vazamento1 from "../assets/images/vazamento1.jpg";
import vazamento2 from "../assets/images/vazamento2.jpg";
import vazamento3 from "../assets/images/vazamento3.jpg";
import limpeza3 from "../assets/images/limpeza3.jpg";
import limpeza6 from "../assets/images/limpeza6.jpg";
import limpeza4 from "../assets/images/limpeza4.jpg";
import limpeza5 from "../assets/images/limpeza5.jpg";
import desentupimento1 from "../assets/images/desentupimento1.jpg";
import desentupimento2 from "../assets/images/desentupimento2.jpg";
import desentupimento3 from "../assets/images/desentupimento3.webp";
import desentupimento4 from "../assets/images/desentupimento4.jpg";
import pombos1 from "../assets/images/pombos1.jpg";
import pombos2 from "../assets/images/pombos2.jpg";
import pombos3 from "../assets/images/pombos3.jpg";
import pombos4 from "../assets/images/pombos4.jpg";
/* import logo_boleto from "../assets/images/logo_boleto.png";
import logo_master from "../assets/images/logo_master.png";
import logo_visa from "../assets/images/logo_visa.png"; */
import logo_pix from "../assets/images/logo_pix.png";
import master1 from "../assets/images/master1.png";
import visa3 from "../assets/images/visa3.png";
import boleto1 from "../assets/images/boleto1.png";
import logo from "../assets/logo/logo.png";
import localizacao1 from "../assets/images/localizacao1.png";
import campeao from "../assets/images/campeao.png";

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
              <img src={caca} alt="img-carousel" />
              <img src={desalojamento1} alt="img-carousel" />
              <img src={desentupimento0} alt="img-carousel" />
              <img src={desentupimento} alt="img-carousel" />
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
            <a href="/" target="_blanc">
              <RiWhatsappFill size={35} className="whatssap" />
            </a>
          </button>
        </div>

        <div className="div_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="home">
        <h1>Nossos Serviços</h1>
        <div className="div_h2-serviço">
          <h2>Caça Vazamento</h2>
        </div>
        <div className="div_servicos1">
          <div className="div_servico1-img">
            <img src={vazamento0} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={vazamento1} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={vazamento2} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={vazamento3} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>
        </div>

        <div className="div_h2-serviço">
          <h2>Limpeza de Caixa d'agua</h2>
        </div>

        <div className="div_servicos1">
          <div className="div_servico1-img">
            <img src={limpeza3} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={limpeza6} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={limpeza4} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={limpeza5} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>
        </div>

        <div className="div_h2-serviço">
          <h2>Desentupimento</h2>
        </div>

        <div className="div_servicos1">
          <div className="div_servico1-img">
            <img src={desentupimento1} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={desentupimento2} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={desentupimento3} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={desentupimento4} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>
        </div>

        <div className="div_h2-serviço">
          <h2>Desalojamento de Pombo</h2>
        </div>

        <div className="div_servicos1">
          <div className="div_servico1-img">
            <img src={pombos1} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={pombos2} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={pombos3} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>

          <div className="div_servico1-img">
            <img src={pombos4} alt="img" classname="img_servico" />
            <span>desentupimento</span>
          </div>
        </div>
      </div>

      <div className="div_pagamento">
        <h3>Aceitamos todas as formas de pagamento</h3>
        <div className="div_pagamento-img">
          <img src={master1} alt="img_pagamento" />
          <img src={visa3} alt="img_pagamento" />
          <img src={boleto1} alt="img_pagamento" />
          <img src={logo_pix} alt="img_pagamento" />
        </div>
      </div>

      <div className="footer">
        <img src={campeao} alt="img_tradição" />
        <h3>23 anos de atuação no mercado</h3>
        <img src={localizacao1} alt="img_localização" />
        <h3>atendemos em toda grande São Paulo e interior</h3>
        <a className="fale_conosco" href="/" target="_blanc"><RiWhatsappFill /> Solicitar Orçamento</a>
      </div>
    </div>
  );
}

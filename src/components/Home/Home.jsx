import ImageSlide from "../ImageSlide/ImageSlide";
import hombreCarrusel from "../../assets/imgs/hombrenaranja.jpg";
import womansport from "../../assets/imgs/womansport.jpg";
import mansport from "../../assets/imgs/mansport.jpg";
import mujercarrusel from "../../assets/imgs/mujercarrusel.jpg";
import jovenesinvierno from "../../assets/imgs/jovenesinvierno.jpg";
import sesionwinter from "../../assets/imgs/sesionwinter.png";
import deportistasection from "../../assets/imgs/deportistasesion.png";
import menseccion from "../../assets/imgs/menseccion.png";
import womansection from "../../assets/imgs/womansection.png";
import pnghat from "../../assets/imgs/pnghat.png";
import pngsport from "../../assets/imgs/pngsport.png";
import pngman from "../../assets/imgs/pngman.png";
import pngwomen from "../../assets/imgs/pngwomen.png";
import "./Home.scss";
import Section from "../section/section";
function Home() {
  const slides = [
    { url: hombreCarrusel, title: "hombreCarrusel" },
    { url: womansport, title: "womansport" },
    { url: mansport, title: "mansport" },
    { url: mujercarrusel, title: "mujercarrusell" },
    { url: jovenesinvierno, title: "jovenesinvierno" },
  ];
  const containerStyles = {
    width: "100%",
    height: "540px",
    margin: "0 auto",
  };
  const sectionTextImg = [
    {
      url: pngwomen,
      title: "CONFY WOMEN",
      description:
        "You will find unique collections for women. One of the latest trending for empowered women",
    },
    {
      url: pngman,
      title: "CONFY MEN",
      description:
        "You will find the best clothes for men. One of the best collections so far",
    },
    {
      url: pnghat,
      title: "CONFY WINTER",
      description:
        "You will find unique collections for women. One of the latest trending for empowered women",
    },
    {
      url: pngsport,
      title: "CONFY SPORT",
      description:
        "Te best clothes to get ready to workout. Don't miss this out",
    },
  ];
  return (
    <div className="setting">
      <div className="caroussel" style={containerStyles}>
        <ImageSlide slides={slides} />
      </div>
      <div className="secondpart">
        <Section
          imgBackground={womansection}
          number={11}
          imgurl={sectionTextImg[0].url}
          title={sectionTextImg[0].title}
          description={sectionTextImg[0].description}
        />
        <Section
          imgBackground={menseccion}
          number={20}
          imgurl={sectionTextImg[1].url}
          title={sectionTextImg[1].title}
          description={sectionTextImg[1].description}
        />
        <Section
          imgBackground={sesionwinter}
          number={11}
          imgurl={sectionTextImg[2].url}
          title={sectionTextImg[2].title}
          description={sectionTextImg[2].description}
        />
        <Section
          imgBackground={deportistasection}
          number={20}
          imgurl={sectionTextImg[3].url}
          title={sectionTextImg[3].title}
          description={sectionTextImg[3].description}
        />
      </div>
    </div>
  );
}

export default Home;

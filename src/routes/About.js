import userIcon from "../img/user-icon.png";
import video from "../video/cinematique-esthetique.mp4";

function About() {
  return (
    <>
      <main className="main-about">
        <div className="cinematique">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="content-about">
          <h1>Qui suis-je ?</h1>
          <div>
            <img src={userIcon} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Integer egestas sit neque
              volutpat morbi felis malesuada lorem. Ac quis feugiat maecenas et
              sed. Eu ultrices pharetra justo risus risus egestas id. Duis neque
              massa consectetur eget gravida ultrices proin.Lorem ipsum dolor
              sit amet consectet. Eu ultrices pharetra justo risus risus egestas
              id. Duis neque massa consectetur eget gravida ultrices proin.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;

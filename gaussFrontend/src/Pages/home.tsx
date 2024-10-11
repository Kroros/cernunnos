function Home() {
  var snd = new Audio("src/snd/buttonClick.mp3")
  return (
    <>
      <div className="pageBody">
        <p className="pageTitle">CERNUNNOS</p>
        <br />
        <p className="pageTitle">logs:</p>
        <ul className="linkList">
          <li>
            <a href="#/prologue" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                cernunnos
              </button>
            </a>
          </li>
          <li>
            <a href="#/galaxy" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                galaxy: avon
              </button>
            </a>
          </li>
          <li>
            <a href="#/starsystem" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                system: lvgvs
              </button>
            </a>
          </li>
          <li>
            <a href="#/planet" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                planet: annwn
              </button>
            </a>
          </li>
          <li>
            <a href="#/hayat" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                [DATA CORRUPTED] {/*species evolution*/}
              </button>
            </a>
          </li>
          <li>
            <a href="#/hikma" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                [DATA CORRUPTED] {/*Emergence of sapience*/}
              </button>
            </a>
          </li>
          <li>
            <a href="#/mujtama" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                [DATA CORRUPTED] {/*Societal and Cultural Genesis*/}
              </button>
            </a>
          </li>
          <li>
            <a href="#/luga" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                [DATA CORRUPTED] {/*Language Evolution*/}
              </button>
            </a>
          </li>
          <li>
            <a href="#/tarikh" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                [DATA CORRUPTED] {/*History Timeline*/}
              </button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;

function Home() {
  var snd = new Audio("snd/buttonClick.mp3")
  return (
    <>
      <div className="pageBody">
        <p className="pageTitle">CERNUNNOS</p>
        <br />
        <p className="pageSubTitle">logs:</p> <ul className="linkList">
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
            <a href="#/life" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                evolutionary history [MASSIVE DATA LOSS: RECOVERY IN PROGRESS]
              </button>
            </a>
          </li>
          <li>
            <a href="#/history" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                anthropolgy [MASSIVE DATA LOSS: RECOVERY IN PROGRESS]
              </button>
            </a>
          </li>
          {/* <li>
            <a href="#/language" className="mainLink">
              <button
                className="buttonLink"
                onClick={() => {
                  snd.play();
                  snd.currentTime = 0;
                }}
              >
                lanagues of annwn [MASSIVE DATA LOSS: IN RECOVERY QUEUE]
              </button>
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Home;

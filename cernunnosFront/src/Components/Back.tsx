function BackButton() {
    var snd = new Audio("snd/buttonClick.mp3");
    return (
      <>
        <a href="/#/life" className="mainLink">
          <button
            className="returnButton"
            onClick={() => {
              snd.play();
              snd.currentTime = 0;
            }}
          >
              cladogram
          </button>
        </a>
      </>
    );
}

export default BackButton;
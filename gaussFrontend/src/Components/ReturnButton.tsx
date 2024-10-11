function ReturnButton() {
    var snd = new Audio("snd/buttonClick.mp3");
    return (
      <>
        <a href="/" className="mainLink">
          <button
            className="returnButton"
            onClick={() => {
              snd.play();
              snd.currentTime = 0;
            }}
          >
              main
          </button>
        </a>
      </>
    );
}

export default ReturnButton;
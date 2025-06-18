function Color() {
    var snd = new Audio("snd/buttonClick.mp3");
    return (
      <>
        <button
          className="returnButton"
          onClick={() => {
            snd.play();
            snd.currentTime = 0;
          }}
        >
          <img src={"img/ico/imgIco.png"} className="linkIcon"></img>
        </button>
      </>
    );
}

export default Color;
interface File {
    fileLink: string
    caption: string
    icoSource?: string
}

function FileLink({ fileLink, caption, icoSource }: File) {
  var icon = false;
  var snd = new Audio("public/snd/buttonClick.mp3");
  return (
    <>
      <a
        href={fileLink}
        target="_blank"
        rel="noopener noreferrer"
        className="buttonContainer"
      >
        <button
          className="imageLinkContainer"
          onClick={() => {
            snd.play();
            snd.currentTime = 0;
          }}
        >
          {icoSource === null ? (icon = false) : (icon = true)}
          <p className="imageLink">
            {icon && <img src={icoSource} className="linkIcon"></img>}
            {caption}
          </p>
        </button>
      </a>
      <br/>
    </>
  );
}

export default FileLink
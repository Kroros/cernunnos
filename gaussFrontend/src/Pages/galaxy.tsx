import Paragraph from "../Components/Paragraph";
import FileLink from "../Components/FileLink"
import ReturnButton from "../Components/ReturnButton";

function Galaxy() {
  return (
    <>
      <ReturnButton />
      <Paragraph
        head={"log 34501:"}
        text={`I am now close enough to Avon, that I would have been able to see it with the naked eye, had I still had eyes.
              Vessel camera has taken a picture of the galaxy. See avon_galaxy.img for result.
              Vessel computer is currently measuring dimensions of the galaxy.`}
      />
      <FileLink
        fileLink={"img/avon_galaxy.png"}
        caption={"avon_galaxy.img"}
        icoSource={"img/ico/imgIco.png"}
      />

      <Paragraph
        head={"log 34502:"}
        text={
          "Measurements of Avon have concluded. See table_1.tab for results."
        }
      />

      <FileLink
        fileLink={"#/galacticdata"}
        caption={"table_1.tab"}
        icoSource={"img/ico/tabIco.png"}
      ></FileLink>

      <Paragraph
        head={"log 34503:"}
        text={`Vessel has started scanning the galaxy, I will report if anything interesting is found.
          I will make course for the central black hole in the meantime.`}
      />
      <br />
      <Paragraph
        head={"log 34504:"}
        text={`Vessel camera has taken a picture of the central black hole, henceforth dubbed Tarvos.
          See tarvos.img for result.`}
      />
      <FileLink
        fileLink={"img/tarvos.png"}
        caption={"tarvos.img"}
        icoSource={"img/ico/imgIco.png"}
      />

      <br />
      <Paragraph
        head={"log 34505:"}
        text={`Scanner has detected organic compounds near coordinates [█████,█████,███]. Changing course immediately.`}
      />
      <br />
      <Paragraph
        head={"log 34506:"}
        text={`I have opened communications with the vessel.`}
      />
      <br />
      <Paragraph
        head={"log 34507:"}
        text={`I have written a small report on Avon, see avon.rep`}
      />
      <FileLink
        fileLink={"#/reportAvon"}
        caption={"avon.rep"}
        icoSource={"img/ico/repIco.png"}
      ></FileLink>
    </>
  );
}

export default Galaxy;

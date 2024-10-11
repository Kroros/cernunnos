import FileLink from "../Components/FileLink";
import Paragraph from "../Components/Paragraph";
import ReturnButton from "../Components/ReturnButton";

function StarSystem() {
    return (
      <>
        <ReturnButton />
        <Paragraph
          head={"log 89613:"}
          text={`
            I have nearly arrived at the coordinates generated by the scan. Approximate time of arrival to star system is 48 hours.
            This system consists of only one star, and so far I have been able to confirm 7 planet mass objects in the system.
            I have indeed confirmed that this system harbours life, so I have decided give its star a name, Lvgvs.
            The planet of interest is the second in order of distance to Lvgvs, henceforth called Annwn.
        `}
        />
        <br />
        <Paragraph
          head={"log 89614:"}
          text={`
            28 hours until arrival to system, I have created an illstration of Lvgvs, see lvgvs_star.img for result.
        `}
        />
        <FileLink
          fileLink={"img/lvgvs_star.png"}
          caption={"lvgvs_star.img"}
          icoSource={"img/ico/imgIco.png"}
        />
        <br />
        <Paragraph
          head={"log 89615:"}
          text={`
                I have entered orbit around Lvgvs. Before I proceed to Annwn, I will visit every other planet and perform a quick study of them.
                Pictures of each planet except for Annwn were taken. See files below for results.
            `}
        />
        <FileLink
          fileLink={"img/gwydion.png"}
          caption={"gwydion.img"}
          icoSource={"img/ico/imgIco.png"}
        />
        <FileLink
          fileLink={"img/esvs.png"}
          caption={"esvs.img"}
          icoSource={"img/ico/imgIco.png"}
        />
        <FileLink
          fileLink={"img/ogmios.png"}
          caption={"ogmios.img"}
          icoSource={"img/ico/imgIco.png"}
        />
        <FileLink
          fileLink={"img/epona.png"}
          caption={"epona.img"}
          icoSource={"img/ico/imgIco.png"}
        />
        <FileLink
          fileLink={"img/taranis.png"}
          caption={"taranis.img"}
          icoSource={"img/ico/imgIco.png"}
        />
        <FileLink
          fileLink={"img/midir.png"}
          caption={"midir.img"}
          icoSource={"img/ico/imgIco.png"}
        />
        <br />
        <Paragraph
          head={"log 89616:"}
          text={`
                I have finished my studies of the planets. I will make course for Lvgvs. Reports below.
            `}
        />
        <FileLink
          fileLink={"#/reportGwydion"}
          caption={"gwydion.rep"}
          icoSource={"img/ico/repIco.png"}
        />

        <FileLink
          fileLink={"#/reportEsvs"}
          caption={"esvs.rep"}
          icoSource={"img/ico/repIco.png"}
        />

        <FileLink
          fileLink={"#/reportOgmios"}
          caption={"ogmios.rep"}
          icoSource={"img/ico/repIco.png"}
        />
        <FileLink
          fileLink={"#/reportEpona"}
          caption={"epona.rep"}
          icoSource={"img/ico/repIco.png"}
        />
        <FileLink
          fileLink={"#/reportTaranis"}
          caption={"taranis.rep"}
          icoSource={"img/ico/repIco.png"}
        />
        <FileLink
          fileLink={"#/reportMidir"}
          caption={"midir.rep"}
          icoSource={"img/ico/repIco.png"}
        />
        <br />
        <Paragraph
          head={"log 89617:"}
          text={`
                Data on Lvgvs below. Heading towards Annwn.
            `}
        />
        <FileLink
          fileLink={"#/reportLvgvs"}
          caption={"lvgvs.tab"}
          icoSource={"img/ico/tabIco.png"}
        />
      </>
    );
}

export default StarSystem;
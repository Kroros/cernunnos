import FileLink from "../Components/FileLink";
import Paragraph from "../Components/Paragraph";
import ReturnButton from "../Components/ReturnButton";

function Planet() {
  return (
    <>
      <ReturnButton />
      <Paragraph
        head={"log 98721:"}
        text={`
                I have finally made it into orbit around Annwn. Approximately 29% of its surface is covered by a single super continent,
                with the rest being covered by one ocean. The planet has one very massive satallite, much like Terra's moon, which I have dubbed Gwynn.
                I was disappointed to see the continent be a massive desert, meaning that life has not colonized land yet. 
                I have activated my vessel's veil, and will keep contact with the planet to observation only, meaning I will not land on the planet.
                Though with this vessel's technologies, this should form no problem for my studies.
            `}
      />
      <Paragraph
        head={""}
        text={`
                Below are files with some data on Annwn and Gwynn, along with pictures of both. The pictures of Gwynn are as seen from Annwn.
            `}
      />
      <FileLink
        fileLink={"#/annwnTab"}
        caption={"annwn.tab"}
        icoSource={"img/ico/tabIco.png"}
      />
      <FileLink
        fileLink={"#/gwynnTab"}
        caption={"gwynn.tab"}
        icoSource={"img/ico/tabIco.png"}
      />
      <FileLink
        fileLink={"img/annwn_2000.png"}
        caption={"annwn.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/new_moon.png"}
        caption={"new_moon.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/waxing_crescent.png"}
        caption={"waxing_crescent.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/first_quarter.png"}
        caption={"first_quarter.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/waxing_gibbous.png"}
        caption={"waxing_gibbous.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/full_moon.png"}
        caption={"full_moon.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/waning_gibbous.png"}
        caption={"waning_gibbous.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/third_quarter.png"}
        caption={"third_quarter.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/waning_crescent.png"}
        caption={"waning_crescent.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <br />
      <Paragraph
        head={"log 98722:"}
        text={`
                I will be documenting the evolution of Annwn starting from its current state.
            `}
      />
      <br />
      <Paragraph
        head={""}
        text={`
            [LOGS 98723-98733 CORRUPTED]
            `}
      />
      <Paragraph
        head={"[ATTEMPTING DATA RECONSTRUCTION]"}
        text={`
                [DATA PARTIALLY RECONSTRUCTED]
            `}
      />
      <br />
      <Paragraph
        head={"log 98723:"}
        text={`
                100 Million years since discovery. The super continent has split into 4 large continents.
                Life still has not colonised land yet, but has undergone significant changes. Satallite images and heightmap below.
            `}
      />
      <FileLink
        fileLink={"img/1900-1.png"}
        caption={"annwn_100_1.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1900-2.png"}
        caption={"annwn_100_2.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1900Ma.png"}
        caption={"[RECONSTRUCTION]climes_100.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"#/planet"}
        caption={"7 FILES LOST"}
        icoSource={"img/ico/imgIco.png"}
      />
      <br />
      <Paragraph
        head={"log 98725:"}
        text={`
                200 Million years since discovery. Continent breakup continues.
                Life similar to what would be called plants on earth has colonised land, and along with it
                motile animals who want to feed upon them.
            `}
      />
      <FileLink
        fileLink={"img/1800-1.png"}
        caption={"annwn_200_1.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1800-2.png"}
        caption={"annwn_200_2.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1800-3.png"}
        caption={"annwn_200_3.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1800Ma.png"}
        caption={"[RECONSTRUCTION]climes_200.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"#/planet"}
        caption={"7 FILES LOST"}
        icoSource={"img/ico/imgIco.png"}
      />
      <br />
      <Paragraph
        head={"log 98727:"}
        text={`
                300 Million years since discovery. Annwn has entered a super continent assembly phase, and with it entered an icehouse state.
                Life has spread to almost all of the planet, though there are still large deserts and ice caps.
            `}
      />
      <FileLink
        fileLink={"img/1700-1.png"}
        caption={"annwn_300_1.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1700-2.png"}
        caption={"annwn_300_2.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1700Ma.png"}
        caption={"[RECONSTRUCTION]climes_300.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"#/planet"}
        caption={"7 FILES LOST"}
        icoSource={"img/ico/imgIco.png"}
      />
      <br />
      <Paragraph
        head={"log 98729:"}
        text={`
                500 Million years since discovery. The continents have reassembled into a super continent, and massive ice caps have formed on the north pole.

            `}
      />
      <FileLink
        fileLink={"img/1500-1.png"}
        caption={"annwn_500_1.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1500-2.png"}
        caption={"annwn_500_2.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1500-3.png"}
        caption={"annwn_500_3.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1500Ma.png"}
        caption={"[RECONSTRUCTION]climes_500.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"#/planet"}
        caption={"7 FILES LOST"}
        icoSource={"img/ico/imgIco.png"}
      />
      <br />
      <Paragraph
        head={"log 98731:"}
        text={`
                600 Million years since discovery. Super continent break up has commenced again, ending the ice age.
            `}
      />
      <FileLink
        fileLink={"img/1400-1.png"}
        caption={"annwn_600_1.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1400-2.png"}
        caption={"annwn_600_2.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1400-3.png"}
        caption={"annwn_600_3.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1400-4.png"}
        caption={"annwn_600_4.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1400Ma.png"}
        caption={"[RECONSTRUCTION]climes_600.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"#/planet"}
        caption={"7 FILES LOST"}
        icoSource={"img/ico/imgIco.png"}
      />
      <br />
      <Paragraph
        head={"log 98733:"}
        text={`
                700 Million years since discovery. Super continent breakup continues. 
                The latest splitting of the continent has created a flood basalt that caused a mass extinction event, ending approximately 83% of all species, along with thrusting Annwn into a hothouse state.
            `}
      />
      <FileLink
        fileLink={"img/1300-1.png"}
        caption={"annwn_700_1.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1300-2.png"}
        caption={"annwn_700_2.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1300-3.png"}
        caption={"annwn_700_3.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1300-4.png"}
        caption={"annwn_700_4.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1300-5.png"}
        caption={"annwn_700_5.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/1300Ma.png"}
        caption={"[RECONSTRUCTION]climes_700.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"#/planet"}
        caption={"7 FILES LOST"}
        icoSource={"img/ico/imgIco.png"}
      />
      <br />
      <Paragraph
        head={"log 98735:"}
        text={`
                850 Million years since discovery. Annwn has reentered super continent assembly, enough time has passed for the hothouse period
                to end, and the passing of two continents through the poles has cooled the planet enough for icecaps to form. Most interestingly though,
                it appears as if one particular species has evolved human-like sapience. This of course warrants more frequent logs.
                Moreover I will document the climate and weather of Annwn from now on, which will be helpful in the study of all the cultures that I hope this species
                will bring forth. More info on this species in the 'life' section. For the maps below, maps designated 1 are mapped when the northern hemisphere
                experiences its coldest month, maps designated 2 are mapped when the southern hemisphere experiences its coldest month.
            `}
      />
      <FileLink
        fileLink={"img/topomap.png"}
        caption={"annwn_topo_850.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/climate.png"}
        caption={"annwn_climate_zones.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/wind1.png"}
        caption={"prevailing_winds_1.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/wind2.png"}
        caption={"prevailing_winds_2.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/currents1.png"}
        caption={"ocean_currents_1.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/currents2.png"}
        caption={"ocean_currents_2.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/rain1.png"}
        caption={"precipitation_1.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/rain2.png"}
        caption={"precipiation_2.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/temp1.png"}
        caption={"temperature_1.img"}
        icoSource={"img/ico/imgIco.png"}
      />
      <FileLink
        fileLink={"img/temp2.png"}
        caption={"temperature_2.img"}
        icoSource={"img/ico/imgIco.png"}
      />
    </>
  );
}

export default Planet;

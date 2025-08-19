import DataRecovery from "../Components/DataRecovery";
import FileLink from "../Components/FileLink";
import Paragraph from "../Components/Paragraph";
import ReturnButton from "../Components/ReturnButton";

function Life() {
    return (
      <>
        <ReturnButton />
        <br/>
        <DataRecovery progress = {0} percentage={1} /> <br/>
        <Paragraph 
            head="Life History"
            text={`
                Life history on Annwn has been documented below. To provide context on the habitats of each species, the continents have been divided into sectors that remained constant between 470Ma and 850Ma since discovery.
                Geological time periods have been tabulated below.
                `}
        />
        <FileLink 
            fileLink="/img/sector_divisions.png"
            caption="Sector Divisions"
            icoSource="img/ico/imgIco.png"
        />
        <FileLink
            fileLink="#/geoAgesTab"
            caption="Geological time periods"
            icoSource="img/ico/tabIco.png"
        />
      </>
    );
}

export default Life;
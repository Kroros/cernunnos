import DataRecovery from "../Components/DataRecovery";
import FileLink from "../Components/FileLink";
import Paragraph from "../Components/Paragraph";
import ReturnButton from "../Components/ReturnButton";

function History() {
    return (
      <>
        <ReturnButton />
        
        <DataRecovery progress = {0} percentage={1} /><br/>
        <Paragraph
          head={"log 105464:"}
          text={`Any data that could be relevant for this section, or can provide any context, has been added to this log.`}
        />
        <FileLink 
        fileLink={"img/rivers.png"}
        caption={"Rivers"}
        icoSource={"img/ico/imgIco.png"}/>
      </>
    );
}

export default History;
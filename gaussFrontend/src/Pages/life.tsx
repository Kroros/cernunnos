import DataRecovery from "../Components/DataRecovery";
import ReturnButton from "../Components/ReturnButton";

function Life() {
    return (
      <>
        <ReturnButton />
        <br/>
        <DataRecovery progress = {0} percentage={0.01} />
      </>
    );
}

export default Life;
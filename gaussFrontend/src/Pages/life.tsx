import DataRecovery from "../Components/DataRecovery";
import Paragraph from "../Components/Paragraph";
import ReturnButton from "../Components/ReturnButton";

function Life() {
    return (
      <>
        <ReturnButton />
        <Paragraph
          head={"log ??"}
          text={`?∿ ∿?∿?∿?∿?∿ ∿?∿?∿?∿ l█ fe ∿?∿?∿?∿?∿?∿?∿?∿?∿? ∿?∿?∿?∿?∿?∿?∿?∿? mu█tic██████ ∿?∿?∿?∿?∿?∿?∿?∿? evo█████ ∿?∿?∿?∿?∿?∿?∿?∿?`}
        /><br/>
        <DataRecovery progress = {0} percentage={0.01} />
      </>
    );
}

export default Life;
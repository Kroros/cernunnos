import Paragraph from "./Paragraph";

interface Props {
    progress: number;
    percentage: number;
}

function DataRecovery({ progress, percentage }: Props) {
    var loaded = "";
    var unloaded = "░░░░░░░░░░".split("");
    for(var i = 1; i <= progress; i++) {
        loaded = loaded + "█";
        unloaded = unloaded.slice(1)
    }
    var bar = loaded + unloaded.join("");

    
    return (
    <>
        <Paragraph head={"[DATA RECOVERY IN PROGRESS]"} text={bar + "[" + percentage + "%]"} />

    </>
    )
}

export default DataRecovery;
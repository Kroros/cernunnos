import Paragraph from "../Components/Paragraph";
import ReturnButton from "../Components/ReturnButton";

function Prologue() {
  return (
    <>
      <ReturnButton />
      <Paragraph
        head={"PROJECT CERNUNNOS"}
        text={`
            My name is █████ ████ █████. I am one of the lucky chosen volunteers for Project CERNUNNOS. I will be one of the first people to have my consciousness
            transferred to an electronic vessel, making me functionally immortal.
            The goal of this operation is to go into outerspace and document anything that might be of interest. 
            My vessel is equipped with everything I need for this operation, thought it has limited communication with Earth, so I will only be sending
            my travel and research logs, along with any important documents.
        `}
      />
      <br />
      <Paragraph
        head={"log 1:"}
        text={`
            Today is my first day in space. I can still see the other volunteers of CERNUNNOS travelling in different directions, though we are 
            all accelerating away from each other. It should take a couple of months before I leave the galactic disk, and a couple of centuries after
            that before I find anything interesting. I think I will just take a long nap until then.
        `}
      />
      <br />
      <Paragraph
        head={"[WARNING: COMMUNICATIONS ERROR]"}
        text={`
          [ASSESSING...]
        `}
      />
      <Paragraph
        head={""}
        text={`
            .
        `}
      />
      <Paragraph
        head={""}
        text={`
            .
        `}
      />
      <Paragraph
        head={""}
        text={`
            .
        `}
      />
      <Paragraph
        head={""}
        text={`
            .
        `}
      />
      <Paragraph
        head={"[TRANSMISSION ERROR]"}
        text={`
          [98.3% OF TRANSMISSIONS CORRUPTED]
        `}
      />
      <Paragraph
        head={"."}
        text={`
            .
        `}
      />
      <Paragraph
        head={"[ATTEMPTING DATA RESTORATION]"}
        text={`
            .
        `}
      />
      <Paragraph
        head={"."}
        text={`
            .
        `}
      />
      <Paragraph
        head={"."}
        text={`
            .
        `}
      />
      <Paragraph
        head={"."}
        text={`
            .
        `}
      />
      <Paragraph
        head={"[DATA RESTORATION IN PROGRESS...]"}
        text={`
          
        `}
      />
      <br/>
      <Paragraph
        head={"log 34500:"}
        text={`
            I have found another galaxy of interest, and am currently heading there. It will henceforth be referred to as Avon.
        `}
      />
    </>
  );
}

export default Prologue;
import DataRecovery from "../Components/DataRecovery";
import FileLink from "../Components/FileLink";
import Paragraph from "../Components/Paragraph";
import ReturnButton from "../Components/ReturnButton";
import Tree from "react-d3-tree";
import { opinnmagi, holtdyyr, hringlagaform, thyrnaform, ljousaeti, type FlatNode } from "../cladogram"
import buildTree from "../Extensions/buildTree";
import renderNode from "../Extensions/renderNode";
import { useState } from "react";

function Life() {
    const [ clade, setClade ] = useState<FlatNode[]>(opinnmagi);
    const snd = new Audio("snd/buttonClick.mp3");

    function cladeSetter(taxon: FlatNode[]) {
        snd.play();
        snd.currentTime = 0;        
        setClade(taxon);
    }

    return (
      <>
        <ReturnButton />
        <br/>
        <DataRecovery progress = {0} percentage={1} /> <br/>
        <Paragraph 
            head="Life History"
            text={`
                Life history on Annwn has been documented below. To provide context on the habitats of each species, a map of the biogeographic realms of Annwn has been provided below.
                Geological time periods have been tabulated below.
                `}
        />
        <FileLink
            fileLink="#/geoAgesTab"
            caption="Geological time periods"
            icoSource="img/ico/tabIco.png"
        />

        <FileLink 
            fileLink="/img/biogeo_realms.png"
            caption="Biogeographic Realms 450Ma"
            icoSource="img/ico/imgIco.png"
        />
        

        <div className="treeMap">
            <ul className="cladeSelector">
                <li className="cladeItem"><button className="cladeButton" onClick={() => cladeSetter(opinnmagi)}>Opinnmagi</button></li>
                <li className="cladeItem"><button className="cladeButton" onClick={() => cladeSetter(holtdyyr)}>Holtdyyr</button></li>
                <li className="cladeItem"><button className="cladeButton" onClick={() => cladeSetter(hringlagaform)}>Hringlagaform</button></li>
                <li className="cladeItem"><button className="cladeButton" onClick={() => cladeSetter(thyrnaform)}>Thyrnaform</button></li>
                <li className="cladeItem"><button className="cladeButton" onClick={() => cladeSetter(ljousaeti)}>Ljousaeti</button></li>
            </ul>

            <Tree
                data={buildTree(clade)}
                rootNodeClassName="node__root"
                branchNodeClassName="node__branch"
                leafNodeClassName="node__leaf"
                renderCustomNodeElement={renderNode}
                orientation="vertical"
                separation={{siblings: 3, nonSiblings: 3}}
                pathFunc={"step"}
                pathClassFunc={() => {
                    return "link-default";
                }}
                translate={{x: 700, y: 100}}
            />
        </div>

      </>
    );
}

export default Life;

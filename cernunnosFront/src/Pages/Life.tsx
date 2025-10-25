import DataRecovery from "../Components/DataRecovery";
import FileLink from "../Components/FileLink";
import Paragraph from "../Components/Paragraph";
import ReturnButton from "../Components/ReturnButton";
import Tree from "react-d3-tree";
import { arakochyla, plotochea, type FlatNode } from "../cladogram"
import buildTree from "../Extensions/buildTree";
import renderNode from "../Extensions/renderNode";
import { useState } from "react";

function Life() {
    const [ clade, setClade ] = useState<FlatNode[]>(arakochyla);

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

        <div className="treeMap">
            <ul className="cladeSelector">
                <li className="cladeItem"><button className="cladeButton" onClick={() => setClade(arakochyla)}>Arakochyla</button></li>
                <li className="cladeItem"><button className="cladeButton" onClick={() => setClade(plotochea)}>Plotochea</button></li>
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
import { useParams } from "react-router-dom"
import type { FlatNode } from "../cladogram";
import { arakochyla } from "../cladogram";
import InfoBox from "../Components/InfoBox";

export default function Genus() {
    const { id } = useParams<{ id: string}>();
    const genus: FlatNode = arakochyla.find(g => g.id === id) ?? { id: "root", parent: null, name: "root", desc: "", habitat: "", reproduction: ""}

    const classification: string[] = genus.id.split(".").map((rank) => rank.charAt(0).toUpperCase() + rank.slice(1))

    return (
        <div className="genusContainer">
            <div className="genusText">
                <h1 className="genusTitle">{genus.name}</h1>
                <h2 className="genusTitle">Description</h2>
                <p className="genusDesc">{genus.desc}</p>
                <hr/>
                <h2 className="genusTitle">Reproduction</h2>
                <p className="genusDesc">{genus.reproduction}</p>
                <hr/>
                <h2 className="genusTitle">Habitat</h2>
                <p className="genusDesc">{genus.habitat}</p>
            </div>

            <InfoBox kingdom={classification[0]} phylum={classification[1]} bClass={classification[2]} order={classification[3]} family={classification[4]} genus={genus}/> <br/>
        </div>
    )
}
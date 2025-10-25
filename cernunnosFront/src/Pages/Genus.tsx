import { useParams } from "react-router-dom"
import type { FlatNode } from "../cladogram";
import { arakochyla, plotochea } from "../cladogram";
import InfoBox from "../Components/InfoBox";
import type { BodyTraits } from "../cladogram";
import { Helmet } from "react-helmet-async";

export default function Genus() {
    const { id } = useParams<{ id: string }>();

    const nullTraits: BodyTraits = {
        
        motility: "Sessile",
        symmetry: "Asymmteric",
        segmented: false,
        locomotion: "",
        gasExchange: "Diffusion",
        nutrition: "Leaves",
        excretion: "Leaves",
        senses: [""],
        defence: "",
        reproduction: {
            manner: "Asexual",
            isogamy: false,
            ecy: "Monoecious",
            sexDetermination: "",
            fertilisation: "External",
            morphology: ""
        }
    }

    const nullGenus: FlatNode = { id: "root", parent: null, name: "root", desc: "", habitat: "", reproduction: "", bodyTraits: nullTraits}

    //const genus: FlatNode = arakochyla.find(g => g.id === id) ?? { id: "root", parent: null, name: "root", desc: "", habitat: "", reproduction: "", bodyTraits: nullTraits}
    let genus: FlatNode;

    if (id?.startsWith("ypokinita.arakochyla")){
        genus = arakochyla.find(g => g.id === id) ?? nullGenus;
    } else if (id?.startsWith("ypokinita.plotochea")) {
        genus = plotochea.find(g => g.id === id) ?? nullGenus;
    }



    else {
        genus = nullGenus;
    }

    const classification: string[] = genus.id.split(".").map((rank) => rank.charAt(0).toUpperCase() + rank.slice(1))

    return (
        <>
            <Helmet>
                <title>{genus.name} | Cernunnos</title>
                <meta name="description" content={genus.desc} />
                <meta property="og:title" content={genus.name} />
                <meta property="og:description" content={genus.desc} />
                <meta property="og:image" content={`img/species/${genus.id}.png`} />
            </Helmet>
            
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
        </>
    )
}
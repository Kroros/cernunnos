import { useParams } from "react-router-dom"
import type { FlatNode } from "../cladogram";
import { opinnmagi, holtdyyr, hringlagaform, thyrnaform, ljousaeti } from "../cladogram";
import InfoBox from "../Components/InfoBox";
import type { BodyTraits } from "../cladogram";
import { Meta } from "react-head";
import BackButton from "../Components/Back";

function formatImg(imgs: string[]) {
    return (
        <div className="gallery">
            {imgs.map((img) => (
                <img key={img} src={`img/species/extras/${img}.png`} className="galleryObject"/>
            ))}
        </div>
    );
}

export default function Genus() {
    const { id } = useParams<{ id: string }>();

    const nullTraits: BodyTraits = {
        
        motility: "Sessile",
        symmetry: "Asymmteric",
        segmented: false,
        locomotion: "string",
        gasExchange: "Diffusion",
        nutrition: "Leaves",
        excretion: "Leaves",
        senses: ["string"],
        defence: "string",
        reproduction: {
            manner: "Asexual",
            isogamy: false,
            ecy: "Monoecious",
            sexDetermination: "string",
            fertilisation: "External",
            morphology: "string"
        },
        notes: ""
    }

    const nullGenus: FlatNode = { id: "root", parent: null, name: "root", morphology: "string", physiology: "string", habitat: "string", behaviours: "string", ecology: "string", reproduction: "string", bodyTraits: nullTraits, extraImgs: []}

    let genus: FlatNode;

    if (id?.startsWith("hreyfimadhur.opinnmagi")){
        genus = opinnmagi.find(g => g.id === id) ?? nullGenus;
    } else if (id?.startsWith("hreyfimadhur.holtdyyr")) {
        genus = holtdyyr.find(g => g.id === id) ?? nullGenus;
    } else if (id?.startsWith("hreyfimadhur.hringlagaform")) {
        genus = hringlagaform.find(g => g.id === id) ?? nullGenus;
    } else if (id?.startsWith("hreyfimadhur.thyrnaform")) {
        genus = thyrnaform.find(g => g.id === id) ?? nullGenus;
    } else if (id?.startsWith("ljousaeti")) {
        genus = ljousaeti.find(g => g.id === id) ?? nullGenus;
    }



    else {
        genus = nullGenus;
    }

    const classification: string[] = genus.id.split(".").map((rank) => rank.charAt(0).toUpperCase() + rank.slice(1))

    return (
        <>  
            {/* <Title>{genus.name} | CERNUNNOS</Title> */}
            <Meta name="description" content={genus.morphology} />
            <Meta property="og:title" content={genus.name} />
            <Meta property="og:description" content={genus.morphology} />
            <Meta property="og:image" content={`img/species/${genus.id}.png`} />

            <BackButton />
            
            <div className="genusContainer">
                <div className="genusText">
                    <h1 className="genusTitle">{genus.name}</h1>
                    <h2 className="genusTitle">Morphology</h2>
                    <p className="genusDesc">{genus.morphology}</p>
                    <hr/>
                    <h2 className="genusTitle">Physiology</h2>
                    <p className="genusDesc">{genus.physiology}</p>
                    <hr/>
                    <h2 className="genusTitle">Reproduction</h2>
                    <p className="genusDesc">{genus.reproduction}</p>
                    <hr/>
                    <h2 className="genusTitle">Habitat</h2>
                    <p className="genusDesc">{genus.habitat}</p>

                    {genus.behaviours && <><hr/>
                    <h2 className="genusTitle">Behaviours and Ecology</h2>
                    <p className="genusDesc">{genus.behaviours}</p></>}

                    {genus.ecology && <><hr/>
                    <h2 className="genusTitle">Interactions with Local Biosphere</h2>
                    <p className="genusDesc">{genus.ecology}</p></>}

                    {genus.evoHist && <><hr/>
                        <h2 className="genusTitle">Evolutionary History</h2>
                        <p className="genusDesc">{genus.evoHist}</p>
                        </>}

                    {genus.extraImgs.length > 0 && <><hr/>
                    <h2 className="genusTitle">Gallery</h2>
                    {formatImg(genus.extraImgs)}
                    </>
                    }
                </div>

                <InfoBox kingdom={classification[0]} phylum={classification[1]} bClass={classification[2]} order={classification[3]} family={classification[4]} genus={genus}/> <br/>
            </div>
        </>
    )
}

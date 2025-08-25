import type { FlatNode } from "../cladogram"

interface Props {
    kingdom?: string,
    phylum?: string,
    bClass?: string,
    order?: string,
    family?: string,
    genus: FlatNode
}

export default function InfoBox({ kingdom, phylum, bClass, order, family, genus }: Props) {
    return (
        <div className="infoBox">
            <span className="imgContainer">
                <img src={`img/species/${genus.id}.png`} className="genusImg"/>
            </span>
            <span className="infoContainer">
                <ul className="infoList">
                    {kingdom && <li>Kingdom: {kingdom}</li>}
                    {phylum && <li>Phylum: {phylum}</li>}
                    {bClass && <li>Class: {bClass}</li>}
                    {order && <li>Order: {order}</li>}
                    {family && <li>Family: {family}</li>}
                </ul>
            </span>
        </div>
    )
}
export interface FlatNode {
    id: string,
    parent: string | null,
    name: string,
    desc: string,
    reproduction: string,
    habitat: string,
    traits?: string[],
}

interface NodeAttributes {
    id: string,
    desc: string,
    originTime: number
}

export interface TreeNode {
    name: string,
    children?: TreeNode[],
    attributes: NodeAttributes
}

export const arakochyla: FlatNode[] = [
    {   
        id: "ypokinita.arakochyla",
        parent: null,
        name: "Arakochylan",
        desc: `Arakochylans are small (10-50cm) carnivorous Ypokinites. They have a calcareous shell which houses the main body; this shell attaches itself to rocks on the sea floor. From this shell extend tantacle-like appendages. These appendages grab small ypokinites and push them into the shell, where they are digested. The ends of these appendages flare out into gill like structures which are used for taking oxygen from the surrounding water.`,
        reproduction: `Arakochylans reproduce sexually, where each individual has a single sex. Upon reaching sexual maturity, an individual will broadcast a large number of gametes which, upon meeting with the compatible gamete of another individual, will develop into a tiny (1-5mm)larva. The larva are dependent on the ocean currents for their movement, and feed on zooplankton until their digestive system matures.`,
        habitat: "Arakochylans are found in all shallow, tropical waters on Annwn, except for the inland waterbody body of sector Eluveitie.",
    },
];
export interface FlatNode {
    id: string,
    parent: string | null,
    name: string,
    desc: string,
    reproduction: string,
    habitat: string,
    bodyTraits: BodyTraits,
}

interface NodeAttributes {
    id: string,
    desc: string,
    originTime: number
}

export interface Reproduction {
    manner: "Sexual" | "Asexual",
    isogamy: boolean,
    ecy: "Monoecious" | "Dioecious",
    sexDetermination: string,
    fertilisation: "External" | "Internal",
    morphology: string
}

export interface BodyTraits {
    motility: "Sessile" | "Motile",
    symmetry: "Asymmteric" | "Radial" | "Bilateral",
    segmented: boolean,
    locomotion: string,
    gasExchange: "Diffusion" | "Open" | "Closed",
    nutrition: "Leaves" | "Body Cavity",
    excretion: "Leaves" | "Blind Gut" | "Through Gut",
    senses: string[],
    defence: string,
    reproduction: Reproduction
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
        desc: `Arakochylans are small (10-50cm in height) carnivorous Ypokinites, that first evolved in the early Oberian. They have a calcareous shell which houses the main body; this shell attaches itself to rocks on the sea floor. From this shell extend tantacle-like appendages. These appendages grab small ypokinites and pull them into a mouth in the opening of the shell, where they are digested in a stomach organ. The ends of these appendages flare out into gill like structures which are used for taking in oxygen from the surrounding water. Arakochylans have blind guts, so excretion happens through the feeding hole.`,
        reproduction: `Arakochylans reproduce sexually. Each individual is capable of producing both male, and female gametes. Upon reaching sexual maturity, an individual will broadcast a large number of gametes from an organ on the side of the mouth opposite to the limbs. The gametes, upon meeting with the compatible gamete of another individual, will develop into a tiny (1-5mm) larva. The larvae are dependent on the ocean currents for their movement, but are capable of adjusting their course using their limbs. The larvae feed on zooplankton until their digestive system matures.`,
        habitat: "Arakochylans are found in all shallow, tropical waters on Annwn, except for the inland waterbody of sector Eluveitie.",
        bodyTraits: {
            motility: "Sessile",
            symmetry: "Radial",
            segmented: false,
            locomotion: "Sessile",
            gasExchange: "Diffusion",
            nutrition: "Body Cavity",
            excretion: "Blind Gut",
            senses: ["Mechanoreception"],
            defence: "Shell and retractable arms",
            reproduction: {
                manner: "Sexual",
                isogamy: false,
                ecy: "Monoecious",
                sexDetermination: "NA",
                fertilisation: "External",
                morphology: "Organ near the mouth that broadcasts gametes"
            }
        }
    }, //Arakochylan
];

export const plotochea: FlatNode[] = [
    {
        id: "ypokinita.plotochea",
        parent: null,
        name: "Plotochean", //Ocean Floater
        desc: "Plotocheans are medium sized (50-100cm in diameter) Ypokinites, that first appeared in the early Oberian. The main body is composed of a central body, which is covered by a chitinous shell on top. From the main body hangs a gas chamber, which keeps the individual floating on the water surface. Connected to the body, hanging over the gas chamber, are six long, tentacle-like appendages. Their length can vary from two to three times the width of the organism. Along the lengths of these appendages, are three organs used for respiration, and consumption of plankton. Gasses produced during metabollic processes are used to regulate the pressure inside the gas chamber. Plotocheans mostly rely on the currents for mobility, but they can use their appendages for some motility.",
        reproduction: "Plotocheans reproduce sexually. Individuals are either male or female. When two compatible individuals are brought together by the ocean currents, they use one of their tentacles to hold onto each other, and release gametes from an organ at the end of their tentacles. Upon meeting, the gametes develop into a larva. The larva sinks to the ocean floor and develops into a polyp. The polyp is sessile, and feeds on plankton. During development, the polyps grow their tentacles upward, and they develop their gas chamber. When the gas chamber is sufficiently developed, it slowly starts filling with gasses, until the buoyancy is enough to lift the individual off the floor. Upon reaching the surface, the shell starts developing.",
        habitat: "Plotocheans are primarily found in shallow tropical waters, though some species also exist in temperate waters. Most notabily, one species is found in the inland sea of sector Eluveitie.",
        bodyTraits: {
            motility: "Sessile",
            symmetry: "Radial",
            segmented: false,
            locomotion: "Ocean currents",
            gasExchange: "Diffusion",
            nutrition: "Leaves",
            excretion: "Leaves",
            senses: [""],
            defence: "Chitinous shell",
            reproduction: {
                manner: "Sexual",
                isogamy: false,
                ecy: "Dioecious",
                sexDetermination: "NA",
                fertilisation: "External",
                morphology: "Ends of appendages can release gametes"
            }
        }
    }, //Plotochean
];
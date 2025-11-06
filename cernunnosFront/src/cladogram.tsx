export interface FlatNode {
    id: string,
    parent: string | null,
    name: string,
    morphology: string,
    physiology: string,
    reproduction: string,
    habitat: string,
    behaviours: string,
    ecology: string,
    bodyTraits: BodyTraits,
    extraImgs: string[],
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
    reproduction: Reproduction,
    notes: string
}

export interface TreeNode {
    name: string,
    children?: TreeNode[],
    attributes: NodeAttributes
}


/* 
Node template
    {
        id: "root",
        parent: null,
        name: "name", 
        morphology: ``,
        physiology: ``,
        reproduction: ``,
        habitat: ``,
        behaviours: ``,
        ecology: ``,
        bodyTraits: {
            motility: "Motile",
            symmetry: "Bilateral",
            segmented: true,
            locomotion: "",
            gasExchange: "Diffusion",
            nutrition: "Body Cavity",
            excretion: "Through Gut",
            senses: [""],
            defence: "",
            reproduction: {
                manner: "Sexual",
                isogamy: false,
                ecy: "Dioecious",
                sexDetermination: "",
                fertilisation: "External",
                morphology: ""
            },
            notes: "",
        },
        extraImgs: [],
    },
*/


export const opinnmagi: FlatNode[] = [
    {   
        id: "hreyfimadhur.opinnmagi",
        parent: null,
        name: "Opinnmagi", //Open stomach
        morphology: `Opinnmagis are small (10-50cm in height) carnivorous hreyfimadhur, that first evolved in the early Oberian. They have a calcareous shell which houses the main body; this shell attaches itself to rocks on the sea floor. From this shell extend tantacle-like appendages.`,
        physiology: `Opinnmagis use their appendages to grab small hreyfimadhurs and pull them into a mouth in the opening of the shell, where they are digested in a hollow chamber. When digestion has completed, the opinnmagi uses its appendages to remove any leftover matter and throws it out to see. The ends of their appendages flare out into gill like structures which are used for taking in oxygen from the surrounding water.`,
        reproduction: `Opinnmagis reproduce sexually. Each individual is capable of producing both male, and female gametes. Upon reaching sexual maturity, an individual will broadcast a large number of gametes from an organ on the side of the mouth opposite to the limbs. The gametes, upon meeting with the compatible gamete of another individual, will develop into a tiny (1-5mm) larva. The larvae are dependent on the ocean currents for their movement, but are capable of adjusting their course using their limbs. The larvae feed on zooplankton until their digestive system matures.`,
        habitat: "Opinnmagis are found in all shallow, tropical waters on Annwn, except for the inland waterbody of the Eluveitie realm.",
        behaviours: "",
        ecology: "",
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
            },
            notes: "",
        },
        extraImgs: []
    }, //Opinnmagi
];

export const holtdyyr: FlatNode[] = [
    {
        id: "hreyfimadhur.holtdyyr",
        parent: null,
        name: "Holtdyyr", //Hollow animal
        morphology: "Holtdyyrs are medium sized (50-100cm in diameter) hreyfimadhurs, that first appeared in the early Oberian. The main body is composed of a central body, which is covered by a chitinous shell on top. From the main body hangs a gas chamber, which keeps the individual floating on the water surface. Connected to the body, hanging over the gas chamber, are six long, tentacle-like appendages. Their length can vary from two to three times the width of the organism. Along the lengths of these appendages, are three organs used for respiration, and nutrition. Gasses produced during metabollic processes are used to regulate the pressure inside the gas chamber. Holtdyyrs mostly rely on the currents for mobility, but they can use their appendages for some motility.",
        physiology: "The organs along the tentacles of the holdyyr are split into two layers, the feeding layer located on top, and the breathing ;ayer which is partially covered from above by the feeding layer. The upper layer is covered in a sticky substance. Plankton that come in contact with this part are then digested externally, and the nutrition is absorbed. The breather layer is used respiration by diffusion.",
        reproduction: "Holtdyyrs reproduce sexually. Individuals are either male or female. When two compatible individuals are brought together by the ocean currents, they use one of their tentacles to hold onto each other, and release gametes from an organ at the end of their tentacles. Upon meeting, the gametes develop into a larva. The larva sinks to the ocean floor and develops into a polyp. The polyp is sessile, and feeds on plankton. During development, the polyps grow their tentacles upward, and they develop their gas chamber. When the gas chamber is sufficiently developed, it slowly starts filling with gasses, until the buoyancy is enough to lift the individual off the floor. Upon reaching the surface, the shell starts developing.",
        habitat: "Holtdyyrs are primarily found in tropical waters, though some species also exist in temperate waters. Most notabily, one species is found in the inland sea of the Eluveitie realm.",
        behaviours: "",
        ecology: "",
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
            },
            notes: "",
        },
        extraImgs: []
    }, //Holtdyyr
];

export const hringlagaform: FlatNode[] = [
    {
        id: "hreyfimadhur.hringlagaform",
        parent: null,
        name: "Hringlagaform", //Ringed form
        morphology: `Hringlagaforms are small (20-40cm in length) Oberian hreyfimadhurs. Their body consists of four segments, with all but the anterior segment having a pair of fins, for a total of six fins. The fins are used for locomotion by means of median paired fin propulsion. There are a pair of gills on the underside of the anterior segment. The anterior segment ends in a long trunk-like organ, which ends with a small mouth. The exterior of the end of the trunk is covered in tiny hairs, used for smell. The trunk is surrounded with a quartet of eyes.`,
        physiology: `The interior of the hringlagaform's body is filled with haemolymph. This haemolymph can be pumped around the body using ring muscles surrounding the haemocoel. It is oxygenated at the gills on the frontal segment. The ring muscles can also be used to narrow the organism's body, giving it the ability to more easily fit into narrow spaces. \n
        Hringlagaforms use their trunk to eat tiny hreyfimadhurs, like holdyyr polyps or small thyrnaforms. Waste is expelled from an anus on the underside of the posterior segment.`,
        reproduction: "Hringlagaforms reproduce sexually, using external fertilisation. Once a female finds a suitable male, she lays the eggs. The typical number of eggs laid ranges from 20 to 100 eggs. The eggs are laid in secluded areas, where they are hidden from prey. Once the eggs have been lain, the male fertilises  them. Should a population have an out of balance ratio of male to female individuals, a number of individuals will undergo sequential hermaphroditism; this hermaphroditism is bidirectional, so any individual can change their sex.",
        habitat: "Hringlagaforms are found in all tropical, shallow waters.",
        behaviours: "",
        ecology: "",
        bodyTraits: {
            motility: "Motile",
            symmetry: "Bilateral",
            segmented: true,
            locomotion: "Median-paired fin swimming",
            gasExchange: "Open",
            nutrition: "Body Cavity",
            excretion: "Through Gut",
            senses: ["Sight", "Mechanoreception", "Smell"],
            defence: "None",
            reproduction: {
                manner: "Sexual",
                isogamy: false,
                ecy: "Dioecious",
                sexDetermination: "Environmental",
                fertilisation: "External",
                morphology: ""
            },
            notes: "",
        },
        extraImgs: [],
    }, //Hringlagaform
];

export const thyrnaform: FlatNode[] = [
    {
        id: "hreyfimadhur.thyrnaform",
        parent: null,
        name: "Thyrnaform", //Thorned form
        morphology: `Thyrnaforms are tiny (5-50mm in length) Oberian hreyfimadhurs. Their body consists of four segments, with each segment possessing a pair of limbs, for a total of eight. The organism flexes its body from side to side in a wave-like pattern to push its limbs against the sea floor. The anterior segment has two extrusions on either side, to which are attached the gills. This segment also has has a pair of eyes, and a mouth, which consists of three extrusions on the bottom of the head. There are a total of four tall spikes protruding from the top of the middle two segments, which can be raised or lowered by pumping haemolymph.`,
        physiology: `The interior of a thyrnaform's body is filled with haemolymph. This is circulated around the body through the thyrnaform's movement.
        
        Thyrnaforms possess a through gut, with the mouth located under the anterior segment, and the anus under the posterior segment. The mouth is used to eat phytoplankton, and to nibble on mats of ljousaeti.
        
        The spikes on the back of the organism possess minimal defensive capatbilities, since they are too soft to cause any damage, their defensive capability lies in their ability to scare off predators.`,
        reproduction: `Thyrnaforms reproduce sexually, using external fertilisation. Once a female finds a suitable male, she lays anywhere from 200-500 eggs. Hatchlings lack the ability to inflate their spikes, typically gaining this ability after 2 days.`,
        habitat: `Thyrnaforms live on the shallow seabeds off the coasts of Spurv and Myra.`,
        behaviours: ``,
        ecology: ``,
        bodyTraits: {
            motility: "Motile",
            symmetry: "Bilateral",
            segmented: true,
            locomotion: "Lateral Undulation",
            gasExchange: "Open",
            nutrition: "Body Cavity",
            excretion: "Through Gut",
            senses: [""],
            defence: "Spikes on the back to deter predators",
            reproduction: {
                manner: "Sexual",
                isogamy: false,
                ecy: "Dioecious",
                sexDetermination: "",
                fertilisation: "External",
                morphology: ""
            },
            notes: "",
        },
        extraImgs: ["thyrnaform_mouth"],
    }, //Thyrnaform
];

export const six: FlatNode[] = [
    {
        id: "[DATA MISSING].[DATA MISSING]",
        parent: null,
        name: "[DATA MISSING]", //
        morphology: `[DATA MISSING]`,
        physiology: `[DATA MISSING]`,
        reproduction: `[DATA MISSING]`,
        habitat: `[DATA MISSING]`,
        behaviours: ``,
        ecology: ``,
        bodyTraits: {
            motility: "Motile",
            symmetry: "Bilateral",
            segmented: true,
            locomotion: "",
            gasExchange: "Diffusion",
            nutrition: "Body Cavity",
            excretion: "Through Gut",
            senses: [""],
            defence: "",
            reproduction: {
                manner: "Sexual",
                isogamy: false,
                ecy: "Dioecious",
                sexDetermination: "",
                fertilisation: "External",
                morphology: ""
            },
            notes: "",
        },
        extraImgs: [],
    },
];

export const ljousaeti: FlatNode[] = [
    {
        id: "ljousaeti",
        parent: null,
        name: "Ljousaeti", //Light eater
        morphology: `[DATA MISSING]`,
        physiology: `[DATA MISSING]`,
        reproduction: `[DATA MISSING]`,
        habitat: `[DATA MISSING]`,
        behaviours: `[DATA MISSING]`,
        ecology: ``,
        bodyTraits: {
            motility: "Motile",
            symmetry: "Bilateral",
            segmented: true,
            locomotion: "",
            gasExchange: "Diffusion",
            nutrition: "Body Cavity",
            excretion: "Through Gut",
            senses: [""],
            defence: "",
            reproduction: {
                manner: "Sexual",
                isogamy: false,
                ecy: "Dioecious",
                sexDetermination: "",
                fertilisation: "External",
                morphology: ""
            },
            notes: "",
        },
        extraImgs: [],
    },
];
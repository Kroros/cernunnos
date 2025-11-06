import type { FlatNode } from "../cladogram";
import type { RawNodeDatum } from "react-d3-tree";

export default function buildTree(nodes: FlatNode[]): RawNodeDatum[] {
    const map: Record<string, RawNodeDatum> = {};
    let root: RawNodeDatum | null = null;

    nodes.forEach(node => {
        map[node.id] = {
            name: node.name,
            children: [],
            attributes: { id: node.id, desc: node.morphology }
        };
    });

    nodes.forEach(node => {
        if (node.parent === null) {
            root = map[node.id];
        } else {
            map[node.parent].children?.push(map[node.id]);
        }
    });

    if (!root) {
        throw new Error("No root node found")
    }

    return root;
}
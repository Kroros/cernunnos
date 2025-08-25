import { Link } from "react-router-dom";

export default function renderNode( { nodeDatum }: any) {
    const boxWidth = 400;
    const boxHeight = 40;

    return (
        <g>
            
            <Link
                to={`/genus/${nodeDatum.attributes.id}`}
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "25px",
                    textDecoration: "none"
                }}
            >
                <rect
                    width={boxWidth}
                    height={boxHeight}
                    x={-boxWidth / 2}
                    y={-boxHeight / 2 - 5}
                    fill="#000000"
                    stroke="rgb(0, 200, 0)"
                    strokeWidth={2}
                />
                <text
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="rgb(0, 200, 0)"
                    fontSize="35"
                    fontWeight="bold"
                >
                    {nodeDatum.name}
                </text>
                {nodeDatum.name}
            </Link>
        </g>
    );
}
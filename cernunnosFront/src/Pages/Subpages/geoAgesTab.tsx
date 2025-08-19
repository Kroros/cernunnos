import ReturnButton from "../../Components/ReturnButton"

export default function GeoAgesTab() {
    return (
        <>
            <ReturnButton />
            <table>
                <tr>
                    <th className="tableHeader">Geological Eon</th>
                    <th className="tableHeader">Geological Era</th>
                    <th className="tableHeader">Geological Period</th>
                    <th className="tableHeader">Time Span [Ma since discovery]</th>
                </tr>

                <tr>
                    <td rowSpan={3} className="tableData">Protean</td>
                    <td className="tableData">Nidusian</td>
                    <td className="tableData">-</td>
                    <td className="tableData">0-198</td>
                </tr>
                <tr>
                    <td className="tableData">Lavosian</td>
                    <td className="tableData">-</td>
                    <td className="tableData">198-291</td>
                </tr>
                <tr>
                    <td className="tableData">Qorvian</td>
                    <td className="tableData">-</td>
                    <td className="tableData">291-450</td>
                </tr>
                <tr>
                    <td rowSpan={9} className="tableData">Urielian</td>
                    <td rowSpan={4} className="tableData">Oraxian</td>
                    <td className="tableData">Oberian</td>
                    <td className="tableData">450-469</td>
                </tr>
                <tr>
                    <td className="tableData">Templian</td>
                    <td className="tableData">469-495</td>
                </tr>
                <tr>
                    <td className="tableData">Mesian</td>
                    <td className="tableData">495-534</td>
                </tr>
                <tr>
                    <td className="tableData">Nyxian</td>
                    <td className="tableData">534-602</td>
                </tr>
                <tr>
                    <td rowSpan={3} className="tableData">Kullervian</td>
                    <td className="tableData">Sarynic</td>
                    <td className="tableData">602-647</td>
                </tr>
                <tr>
                    <td className="tableData">Styinic</td>
                    <td className="tableData">647-713</td>
                </tr>
                <tr>
                    <td className="tableData">Voltaic</td>
                    <td className="tableData">713-758</td>
                </tr>
                <tr>
                    <td rowSpan={2} className="tableData">Yarelian</td>
                    <td className="tableData">Excalian</td>
                    <td className="tableData">758-782</td>
                </tr>
                <tr>
                    <td className="tableData">Gyrian</td>
                    <td className="tableData">782-850</td>
                </tr>

            </table>
        </>
    )
}
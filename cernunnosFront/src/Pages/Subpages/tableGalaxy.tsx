function TableGalaxy() {
    return (
      <>
        {/* radius: 67512ly; type: TBA; mass: 4.9E42 kg*/}
        <table>
          <tr className="tableRow">
            <td className="tableHeader">Radius</td>
            <td className="tableData">~68000 ly</td>
          </tr>
          <tr className="tableRow">
            <td className="tableHeader">Type</td>
            <td className="tableData">Spiral</td>
          </tr>
          <tr className="tableRow">
            <td className="tableHeader">Mass</td>
            <td className="tableData">~4.9&times;10<sup>42</sup> kg</td>
          </tr>
        </table>
      </>
    );
}

export default TableGalaxy;
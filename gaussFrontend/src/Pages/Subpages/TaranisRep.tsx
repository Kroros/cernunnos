import Paragraph from "../../Components/Paragraph";

function TaranisRep() {
  return (
    <>
      <Paragraph
        head={"Lvgvs Ag"}
        text={`
          Irremarkable ice giant. Dubbed Taranis.
        `}
      />
      <br />
      <Paragraph
        head={""}
        text={`
          Plantary Characteristics below.
        `}
      />
      <table>
        <tr className="tableRow">
          <td className="tableHeader">
            Mass [&times;10<sup>24</sup>kg]
          </td>
          <td className="tableData">124</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Radius [km]</td>
          <td className="tableData">26312</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            Density [g/cm<sup>3</sup>]
          </td>
          <td className="tableData">1.635</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Surface gravity [G]</td>
          <td className="tableData">1.23</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Semimajor axis [AU]</td>
          <td className="tableData">35.7</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Orbital Eccentricity</td>
          <td className="tableData">0.0193</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Period [days]</td>
          <td className="tableData">83283.9</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Periapsis [AU]</td>
          <td className="tableData">35.01</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apoapsis [AU]</td>
          <td className="tableData">36.39</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Synodic Day Length [hours]</td>
          <td className="tableData">49</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Equilibrium Temperature [K]</td>
          <td className="tableData">42</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Surface Temperature [K]</td>
          <td className="tableData">90</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            Average Irradiance [W/m<sup>2</sup>]
          </td>
          <td className="tableData">1.041</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Bond Albedo</td>
          <td className="tableData">0.309</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Geometric Albedo</td>
          <td className="tableData">0.436</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apparent Magnitude from Annwn</td>
          <td className="tableData">+8.18 ~ +8.31</td>
        </tr>
      </table>
      <br />
      <Paragraph head={""} text={"Atmospheric Data:"} />
      <table>
        <tr className="tableRow">
          <td className="tableHeader">Atmospheric pressure at surface [atm]</td>
          <td className="tableData">1</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            Air density at surface [kg/m<sup>3</sup>]
          </td>
          <td className="tableData">0.3675</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Molar Mass [kg/mol]</td>
          <td className="tableData">0.00265377</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Scale Height [m]</td>
          <td className="tableData">22960</td>
        </tr>
      </table>
      <br />
      <Paragraph head={""} text={"Atmospheric Composition:"} />
      <table>
        <tr className="tableRow">
          <td className="tableHeader">
            H<sub>2</sub>
          </td>
          <td className="tableData">79.99%</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">He</td>
          <td className="tableData">18%</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">CH<sub>4</sub></td>
          <td className="tableData">2%</td>
        </tr>
      </table>
    </>
  );
}

export default TaranisRep;

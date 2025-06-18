import Paragraph from "../../Components/Paragraph";

function GwydionRep() {
  return (
    <>
      <Paragraph
        head={"Lvgvs Ab"}
        text={`
      The first planet of the Lvgvs system, now called Gwydion. There is sadly nothing remarkable about this planet other than it's very dense iron core.
      It possesses no atmosphere. Planetary Characteristics below.
    `}
      />
      <table>
        <tr className="tableRow">
          <td className="tableHeader">
            Mass [&times;10<sup>24</sup>kg]
          </td>
          <td className="tableData">0.3583</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Radius [km]</td>
          <td className="tableData">2417</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            Density [g/cm<sup>3</sup>]
          </td>
          <td className="tableData">6.05</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Surface gravity [G]</td>
          <td className="tableData">0.417</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Semimajoraxis [AU]</td>
          <td className="tableData">0.42</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Orbital Eccentricity</td>
          <td className="tableData">0.146</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Period [days]</td>
          <td className="tableData">106.2792</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Periapsis [AU]</td>
          <td className="tableData">0.36</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apoapsis [AU]</td>
          <td className="tableData">0.48</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Synodic Day Length [hours]</td>
          <td className="tableData">185</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Equilibrium Temperature [K]</td>
          <td className="tableData">411</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Surface Temperature [K]</td>
          <td className="tableData">411</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            Average Irradiance [W/m<sup>2</sup>]
          </td>
          <td className="tableData">7604</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Metal Core Fraction</td>
          <td className="tableData">0.61</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Bond Albedo</td>
          <td className="tableData">0.14</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Geometric Albedo</td>
          <td className="tableData">0.17</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apparent Magnitude from Annwn</td>
          <td className="tableData">+6.75 ~ -1.78</td>
        </tr>
      </table>
    </>
  );
}

export default GwydionRep;

import Paragraph from "../../Components/Paragraph";

function EponaRep() {
    return (
      <>
      <Paragraph
        head={"Lvgvs Af"}
        text={`
          Lvgvs Af, is a mostly ordinary gas giant. The most interesting thing about it is the fact that it rotates on its side.
          I've called it Epona.
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
          <td className="tableHeader">Mass [&times;10<sup>24</sup>kg]</td>
          <td className="tableData">896</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Radius [km]</td>
          <td className="tableData">69890</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Density [g/cm<sup>3</sup>]</td>
          <td className="tableData">0.626</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Surface gravity [G]</td>
          <td className="tableData">1.25</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Semimajor axis [AU]</td>
          <td className="tableData">18.9</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Orbital Eccentricity</td>
          <td className="tableData">0.0268</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Period [days]</td>
          <td className="tableData">32074.16</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Periapsis [AU]</td>
          <td className="tableData">18.4</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apoapsis [AU]</td>
          <td className="tableData">19.4</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Synodic Day Length [hours]</td>
          <td className="tableData">12.6</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Equilibrium Temperature [K]</td>
          <td className="tableData">57</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Surface Temperature [K]</td>
          <td className="tableData">103</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Irradiance [W/m<sup>2</sup>]</td>
          <td className="tableData">3.716</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Bond Albedo</td>
          <td className="tableData">0.367
          </td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Geometric Albedo</td>
          <td className="tableData">0.459
          </td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apparent Magnitude from Annwn</td>
          <td className="tableData">+2.96 ~ +3.20</td>
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
          <td className="tableData">0.257</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Molar Mass [kg/mol]</td>
          <td className="tableData">0.002066538</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Scale Height [m]</td>
          <td className="tableData">32278</td>
        </tr>
      </table>
      <br />
      <Paragraph head={""} text={"Atmospheric Composition:"} />
      <table>
        <tr className="tableRow">
          <td className="tableHeader">
            H<sub>2</sub>
          </td>
          <td className="tableData">97.43%</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            He
          </td>
          <td className="tableData">2.56%</td>
        </tr>
      </table>
    </>
  );
}

export default EponaRep
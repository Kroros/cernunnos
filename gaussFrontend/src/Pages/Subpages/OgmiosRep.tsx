import Paragraph from "../../Components/Paragraph";

function OgmiosRep() {
  return (
    <>
      <Paragraph
        head={"Lvgvs Ae"}
        text={`
          Lvgvs Ae, henceforth Ogmios, is a gas giant lying outside the system's frost line. Due to its high temperature,
          the planet has considerable water vapour clouds in its upper atmosphere, giving it a bluish gray hue.
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
          <td className="tableData">2090</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Radius [km]</td>
          <td className="tableData">71164</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            Density [g/cm<sup>3</sup>]
          </td>
          <td className="tableData">1.38</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Surface gravity [G]</td>
          <td className="tableData">2.81</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Semimajor axis [AU]</td>
          <td className="tableData">7.70</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Orbital Eccentricity</td>
          <td className="tableData">0.0126</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Period [days]</td>
          <td className="tableData">8337.766</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Periapsis [AU]</td>
          <td className="tableData">7.60</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apoapsis [AU]</td>
          <td className="tableData">7.80</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Synodic Day Length [hours]</td>
          <td className="tableData">36</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Equilibrium Temperature [K]</td>
          <td className="tableData">84</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Surface Temperature [K]</td>
          <td className="tableData">171</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            Average Irradiance [W/m<sup>2</sup>]
          </td>
          <td className="tableData">22.38</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Bond Albedo</td>
          <td className="tableData">0.799
          </td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Geometric Albedo</td>
          <td className="tableData">0.816
          </td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apparent Magnitude from Annwn</td>
          <td className="tableData">-1.06 ~ -1.66</td>
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
          <td className="tableData">0.164</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Molar Mass [kg/mol]</td>
          <td className="tableData">0.002198059</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Scale Height [m]</td>
          <td className="tableData">18592</td>
        </tr>
      </table>
      <br />
      <Paragraph head={""} text={"Atmospheric Composition:"} />
      <table>
        <tr className="tableRow">
          <td className="tableHeader">
            H<sub>2</sub>
          </td>
          <td className="tableData">90.81%</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            He
          </td>
          <td className="tableData">9.18%</td>
        </tr>
      </table>
    </>
  );
}

export default OgmiosRep;

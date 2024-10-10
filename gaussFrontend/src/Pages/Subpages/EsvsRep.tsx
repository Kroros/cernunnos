import Paragraph from "../../Components/Paragraph";

function EsvsRep() {
  return (
    <>
      <Paragraph
        head={"Lvgvs Ad"}
        text={`
          I have dubbed the third planet of the system Esvs. 
          `}
      />
      <Paragraph
        head={""}
        text={`
          This planet has an extremely dense atmosphere composed mostly of carbon dioxide.
          This means that like Venus in the Sol system, this planet has an extremely high surface temperatue. Other than carbon, it's atmosphere
          possesses a high concentration of sulphur, giving it a yellow hue. This makes the planet extremely hostile to all life, though
          terraforming efforts could be made to make it more tolerable. This would be worth the effort for sufficiently advanced lifeforms, since it 
          also contains large amounts of rare elements.
        `}
      /><br/>
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
          <td className="tableData">6.33</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Radius [km]</td>
          <td className="tableData">6644</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            Density [g/cm<sup>3</sup>]
          </td>
          <td className="tableData">5.15</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Surface gravity [G]</td>
          <td className="tableData">0.97</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Semimajor axis [AU]</td>
          <td className="tableData">2.27</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Orbital Eccentricity</td>
          <td className="tableData">0.0185</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Period [days]</td>
          <td className="tableData">1335.4030</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Periapsis [AU]</td>
          <td className="tableData">2.22</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apoapsis [AU]</td>
          <td className="tableData">2.31</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Synodic Day Length [hours]</td>
          <td className="tableData">18.3</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Equilibrium Temperature [K]</td>
          <td className="tableData">136</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Surface Temperature [K]</td>
          <td className="tableData">438</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            Average Irradiance [W/m<sup>2</sup>]
          </td>
          <td className="tableData">257.6</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Metal Core Fraction</td>
          <td className="tableData">0.25</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Bond Albedo</td>
          <td className="tableData">0.698</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Geometric Albedo</td>
          <td className="tableData">0.708</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apparent Magnitude from Annwn</td>
          <td className="tableData">-0.09 ~ -2.26</td>
        </tr>
      </table>
      <br />
      <Paragraph head={""} text={"Atmospheric Data:"} />
      <table>
        <tr className="tableRow">
          <td className="tableHeader">Atmospheric pressure at surface [atm]</td>
          <td className="tableData">87</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Air density at surface [kg/m<sup>3</sup>]</td>
          <td className="tableData">159.4478</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Molar Mass [kg/mol]</td>
          <td className="tableData">0.043312101</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Scale Height [m]</td>
          <td className="tableData">5788</td>
        </tr>
      </table>
      <br />
      <Paragraph head={""} text={"Atmospheric Composition:"} />
      <table>
        <tr className="tableRow">
          <td className="tableHeader">N<sub>2</sub></td>
          <td className="tableData">2.77%</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">H<sub>2</sub>S</td>
          <td className="tableData">4.51%</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">CO<sub>2</sub></td>
          <td className="tableData">91.73%</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">SO<sub>2</sub></td>
          <td className="tableData">0.98%</td>
        </tr>
      </table>
    </>
  );
}

export default EsvsRep;

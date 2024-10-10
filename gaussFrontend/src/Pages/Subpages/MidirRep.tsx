import Paragraph from "../../Components/Paragraph";

function MidirRep() {
  return (
    <>
      <Paragraph
        head={"Lvgvs Ag"}
        text={`
          Irremarkable ice giant. Dubbed Midir.
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
          <td className="tableData">107</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Radius [km]</td>
          <td className="tableData">24783</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            Density [g/cm<sup>3</sup>]
          </td>
          <td className="tableData">1.676</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Surface gravity [G]</td>
          <td className="tableData">1.18</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Semimajor axis [AU]</td>
          <td className="tableData">50.8</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Orbital Eccentricity</td>
          <td className="tableData">0.0102</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Period [days]</td>
          <td className="tableData">141370</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Periapsis [AU]</td>
          <td className="tableData">50.28</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apoapsis [AU]</td>
          <td className="tableData">51.32</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Synodic Day Length [hours]</td>
          <td className="tableData">23.8</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Equilibrium Temperature [K]</td>
          <td className="tableData">35</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Surface Temperature [K]</td>
          <td className="tableData">84</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            Average Irradiance [W/m<sup>2</sup>]
          </td>
          <td className="tableData">0.5142</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Bond Albedo</td>
          <td className="tableData">0.348</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Geometric Albedo</td>
          <td className="tableData">0.476</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Apparent Magnitude from Annwn</td>
          <td className="tableData">+9.83 ~ +9.92</td>
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
          <td className="tableData">0.3873</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Average Molar Mass [kg/mol]</td>
          <td className="tableData">0.002605901</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">Scale Height [m]</td>
          <td className="tableData">22568.88279</td>
        </tr>
      </table>
      <br />
      <Paragraph head={""} text={"Atmospheric Composition:"} />
      <table>
        <tr className="tableRow">
          <td className="tableHeader">
            H<sub>2</sub>
          </td>
          <td className="tableData">79.37%</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">He</td>
          <td className="tableData">19.12%</td>
        </tr>
        <tr className="tableRow">
          <td className="tableHeader">
            CH<sub>4</sub>
          </td>
          <td className="tableData">1.5%</td>
        </tr>
      </table>
    </>
  );
}

export default MidirRep;

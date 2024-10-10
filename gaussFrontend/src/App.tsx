import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Home from "./Pages/home";
import Galaxy from "./Pages/galaxy";
import TableGalaxy from "./Pages/Subpages/tableGalaxy";
import AvonRep from "./Pages/Subpages/avonRep";
import Life from "./Pages/life";
import StarSystem from "./Pages/starSystem";
import EponaRep from "./Pages/Subpages/EponaRep";
import EsvsRep from "./Pages/Subpages/EsvsRep";
import GwydionRep from "./Pages/Subpages/GydwionRep";
import MidirRep from "./Pages/Subpages/MidirRep";
import OgmiosRep from "./Pages/Subpages/OgmiosRep";
import TaranisRep from "./Pages/Subpages/TaranisRep";
import LvgvsRep from "./Pages/Subpages/LvgvsRep";
import Planet from "./Pages/Planet";
import AnnwnTab from "./Pages/Subpages/AnnwnTab";
import GwynnTab from "./Pages/Subpages/GwynnTab";
import Forum from "./Pages/Forum";
import PostPage from "./Components/PostPage";
import Prologue from "./Pages/Prologue";
import FileLost from "./Pages/FileLost";

function App() {
  return (
    <Router>
      {/*Main pages*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prologue" element={<Prologue />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/filelost" element={<FileLost />} />
        <Route path="/post">
          <Route path=":postId" element={<PostPage />} />
        </Route>
        <Route path="/galaxy" element={<Galaxy />} />
        <Route path="/starSystem" element={<StarSystem />} />
        <Route path="/planet" element={<Planet />} />
        <Route path="/hayat" element={<Life />} />
        {/* <Route path="/hikma" element={<DataRecovery />} />
        <Route path="/mujtama" element={<DataRecovery />} />
        <Route path="/luga" element={<DataRecovery />} />
        <Route path="/tarikh" element={<DataRecovery />} /> */}

        {/* Galaxy Subpages */}
        <Route path="/reportAvon" element={<AvonRep />} />
        <Route path="/galacticdata" element={<TableGalaxy />} />

        {/*Star System Subpages*/}
        <Route path="/reportGwydion" element={<GwydionRep />} />
        <Route path="/reportEsvs" element={<EsvsRep />} />
        <Route path="/reportOgmios" element={<OgmiosRep />} />
        <Route path="/reportEpona" element={<EponaRep />} />
        <Route path="/reportTaranis" element={<TaranisRep />} />
        <Route path="/reportMidir" element={<MidirRep />} />
        <Route path="/reportLvgvs" element={<LvgvsRep />} />

        {/*Annwn Subpages*/}
        <Route path="annwnTab" element={<AnnwnTab />} />
        <Route path="gwynnTab" element={<GwynnTab />} />
      </Routes>
    </Router>
  );
}

export default App;

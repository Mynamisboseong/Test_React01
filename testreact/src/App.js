import BrandExample from './components/layouts/icon_brand.js';
import BasicExample from './components/layouts/menu-navbar.js';
import UncontrolledExample from './components/layouts/carousels.js';
import LogoBrandExample from './components/layouts/logo_brand.js';
import GraphExample from './components/layouts/graph.js'
import GraphtrashExample from './components/layouts/graph_trash.js'
import FooterExample from './components/layouts/footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <BrandExample />
        <LogoBrandExample/>
        <BasicExample/>
        <UncontrolledExample />
        <GraphExample />
        <GraphtrashExample/>
        <FooterExample/>
      </>
    </div>
  );
}

export default App;

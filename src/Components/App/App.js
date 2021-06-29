import './App.css';
import Grid from '../Grid/Grid';
import EqualWidth from '../EqualWidth/EqualWidth';
import WithRowsEqualWidth from '../WithRowsEqualWidth/WithRowsEqualWidth';
import OneColumnWidthWider from '../OneColumnWidthWider/OneColumnWidthWider';
import FormsNavbar from '../FormsNavbar/FormsNavbar';
import ExternalContent from '../ExternalContent/ExternalContent';
import ColorNav from '../ColorNav/ColorNav';
import KitchenSink from '../KitchenSink/KitchenSink';
import MultiKitchWithCol from '../MultiKitchWithCol/MultiKitchWithCol';

function App() {
  return (
    <>
    <div className="App">
      <Grid />
    </div>
    <div>
      <EqualWidth />
    </div>
    <div>
      <WithRowsEqualWidth />
    </div>
    <div>
      <OneColumnWidthWider />
    </div>
    <div>
      <FormsNavbar />
    </div>
    <div>
      <ExternalContent />
    </div>
    <div>
      <ColorNav />
    </div>
    <div>
      <KitchenSink />
    </div>
    <div>
      <MultiKitchWithCol />
    </div>
    </>
  );
}

export default App;

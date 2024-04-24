import './App.css';
import Form from './components/1-forms/Form';
import FormObject from './components/1-forms/FormObject';
import KeyboardClipboards from './components/2-keyboardClipboards/KeyboardClipboards';
import MouseEvents from './components/3-mouseEvents/MouseEvents';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <FormObject/>
    {/* <KeyboardClipboards/>
    <MouseEvents/>
    <Form/> */}
    </div>
  );
}

export default App;

import './App.css';
import MyBody from './routers'
import 'antd/dist/antd.css'
import Menus from './component/menus'

function App() {
  return (
    <div id='new_app'>
      <Menus />
      <div className="App">
        <header className="App-header"></header>
        <MyBody/>
      </div>
    </div>
  );
}

export default App;

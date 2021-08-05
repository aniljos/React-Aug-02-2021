import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ListProducts from './components/ListProducts';
import ProductStore from './components/ProductStore';
import UseCallbackDemo from './components/UseCallbackDemo';

function App() {


  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    
      <section>
          {/* <Hello message="React" type="a"/>
          <Hello message="JavaScript" show={false}/>
          <Hello message="JSX" count={100} /> */}

          {/* <Counter title="Counter"/>
          <Counter title="Value"/> */}

          {/* <ListProducts/> */}

          <ProductStore/>

          {/* <UseCallbackDemo/> */}

      </section>
    </div>
  );
}

export default App;

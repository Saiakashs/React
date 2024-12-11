import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import ConditionalRenderingComp from './components/ConditionalRenderingComp';
import CssComp from './components/CssComp';
import EventComp from './components/EventComp';
import FuncComp from './components/FuncComp';
import MyStateComp from './components/MyStateComp';
import MyCounterComp from './tasks/MyCounterComp';
import SaiFuncComp from './tasks/SaiFuncComp';
import ParentComp from './components/ParentComp';
import ClickCounterComp from './components/ClickCounterComp';
import HoverCounterComp from './components/HoverCounterComp';
import MyImagesComp from './components/MyImagesComp';
import UserComp from './components/UserComp';
import ErrorBoundaryComp from './components/ErrorBoundaryComp';
import VirtualDOMComp from './components/VirtualDOMComp';
import EmpDetails from './tasks/EmpDetails';
import ToggleImgComp from './tasks/ToggleImgComp';
import MultipleImgComp from './tasks/MultipleImgComp';


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

        <h1>Welcome You All in React Session</h1>

        {/* <FuncComp fname="Sai Kutthalingam S" post="Full Stack Developer"></FuncComp> */}

        {/* <SaiFuncComp fname="Sai Kutthalingam" lname="S" salary={300000} gender="Male" address="Tirunelveli"></SaiFuncComp> */}

        {/* <ClassComp fname="Sai Kutthalingam S" post="Full Stack Developer" /> */}

       {/* <EventComp /> */}

        {/* <MyStateComp /> */}

        {/* <MyCounterComp /> */}

        {/* <ConditionalRenderingComp /> */}

        {/* <CssComp /> */}

        {/* <ParentComp gender="Male" contact={9360335909}></ParentComp> */}

        {/* <ClickCounterComp /> */}

        {/* <HoverCounterComp /> */}

        {/* <MyImagesComp /> */}

        {/* <ErrorBoundaryComp>
          <UserComp user="Akash" />
        </ErrorBoundaryComp>
        <ErrorBoundaryComp>
          <UserComp user="Ashwin" />
        </ErrorBoundaryComp>
        <ErrorBoundaryComp>
          <UserComp user="Anush" />
        </ErrorBoundaryComp>
        <ErrorBoundaryComp>
          <UserComp user="kamali" />
        </ErrorBoundaryComp> */}

        {/* <VirtualDOMComp /> */}
        {/* <EmpDetails/>
        <ToggleImgComp/>
        <MultipleImgComp/> */}

        

        

        
    </div>
  );
}

export default App;

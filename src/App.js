import logo from './logo.svg';
import './App.css';
import Message from './components/message';
import Counter from './components/counter';
import ParentComponent from './components/ParentComponent';
import Parent from './components/Parent';
import LifeCycleA from './components/LifeCycleA';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusINput from './components/FocusINput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ErrorHandlingParent from './components/ErrorHandlingParent';
import HOC1 from './components/HOC1';
import HoverCounter from './components/HoverCounter';
import MainComponent from './components/Context_concept/MainComponent';
import { UserProvider } from './components/Context_concept/UserContect';
import GetCall from './components/HTTP_calls/GetCall';
import PostCall from './components/HTTP_calls/PostCall';

function App() {
  let response = {"Name":"Varun"}
  return (
    <div className="App">
      {/* <GetCall /> */}
      <PostCall/>

      {/* <UserProvider value={response}>
        <MainComponent/>
      </UserProvider> */}
      {/* <HOC1 /> */}
      {/* <HoverCounter /> */}
      {/* <ErrorHandlingParent /> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusINput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp/> */}
      {/* <PureComp/> */}
      {/* <LifeCycleA/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Parent/> */}
    </div>
  );
}

export default App;

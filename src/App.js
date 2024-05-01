import logo from './logo.svg';
import './App.css';
import Login from "./pages/user/Login"
import Signup from "./pages/user/Signup"
import Info from "./pages/user/Info"
import MyGroup from "./pages/user/MyGroup"
import PeopleInGroup from "./pages/user/PeopleInGroup"
import Pending from "./pages/admin/Pending"
function App() {
  return (
   <div>
    <Login></Login>
    <Signup></Signup>
    <Info></Info>
    <MyGroup></MyGroup>
    <PeopleInGroup></PeopleInGroup>
    <Pending></Pending>
   </div>
  );
}

export default App;

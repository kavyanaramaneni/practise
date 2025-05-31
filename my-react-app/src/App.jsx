import './App.css'
import Codemon from './Codemon'
import Liger from './Liger';
import Vamika from './Vamika';
import Andaman from './Andaman';
import List from "./List";
import Button from './Button';
import ProfilePicture from './ProfilePicture';
import Hooks from './Hooks';
import HandleEvent from './assets/HandleEvents';

function App() {
  const fruits=[
    {
      id:"1",
      name:"kavya",
      age:"25",
    },
    {
      id:"2",
      name:"bhavya",
      age:"36",

    },
    {
      id:"7",
      name:"rthwika",
      age:"40",
    }

  ];
  return(
    <div>
       
       
       
       <HandleEvent/>
      </div>
  );
}

export default App

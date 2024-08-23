 import './App.css';
 import { MantineProvider } from '@mantine/core';
 import Main from './components/sample/Main'
 import Header  from './components/sample/Header';
import HomePage from './components/sample/HomePage';
import FirstPage from './components/sample/FirstPage';
import SecondPage from './components/sample/SecondPage';
import ThirdPage from './components/sample/ThirdPage';
import FourthPage from './components/sample/FourthPage';


function App() {
  return (
    <div>
<MantineProvider>

<Header/>
<HomePage/>
<FirstPage/>
<SecondPage/>
<ThirdPage/>
<FourthPage/>
</MantineProvider>
    

     
    </div>
  );
}

export default App;

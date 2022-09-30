import './App.css';
import Vocabulary from "./pages/Vocabulary";
import {Routes , Route , BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import AddNewWord from "./pages/AddNewWord";
import Audit from "./pages/Audit";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
        <BrowserRouter >
            <Header />
            <Routes>
                <Route path={'/'} element={<Vocabulary />} />
                <Route path={'/add-new-word'} element={<AddNewWord />} />
                <Route path={'/audit'} element={<Audit />} />
                <Route path={'/results'} element={<Results />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

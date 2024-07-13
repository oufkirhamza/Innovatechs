
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import Header from './layouts/header';
function App() {
  return (
    <MyProvider>
      <Header/>
      <Routes >
        <Route path='/' element={<HomePage />} />
      </Routes >
    </MyProvider>

  );
}
export default App;

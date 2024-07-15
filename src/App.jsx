
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { MyProvider } from './utils/contextProvider';
import Header from './layouts/header';
import Footer from './layouts/footer';
function App() {
  return (
    <MyProvider>
      <Header/>
      <Routes >
        <Route path='/' element={<HomePage />} />
      </Routes >
      <Footer/>
    </MyProvider>

  );
}
export default App;

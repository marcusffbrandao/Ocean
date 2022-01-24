// import { Navbar, Footer} from './styles';
import Header from '../header/index'
// import Footer from '../footer/index'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;

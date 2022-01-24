import Layout from '../components/layout';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout>
      <h1>HomePage</h1>
      <Link to="/products">See products</Link>
    </Layout>
  );
};

export default HomePage;

import Photos from './Photos';
import SingleProduct from './SingleProduct';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Photos} />
        <Route exact path="/singleproduct" component={SingleProduct} />
        <Redirect to="/" />
      </Router>
    </>
  );
};

export default App;

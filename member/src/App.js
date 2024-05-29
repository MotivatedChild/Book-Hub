import './App.css';
import Product_List from './component/Product_List';
import Product_forms from './component/Products_forms';
import Footer from './component/Footer'; // Import the Footer component

function App() {
  return (
    <>
      <div className='container'>
        <div className="col">
          <div className="col-md-6"><Product_forms/></div>
          <div className="col-md-6"><Product_List/></div>
        </div>
      </div>
      <Footer /> {/* Add Footer component */}
    </>
  );
}

export default App;

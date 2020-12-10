//import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Product from './components/danhmucsanpham';

function App() {
    var products = [
        {name: "Iphone pro 1", price: "1000"},
        {name: "Iphone pro 2", price: "1001"},
        {name: "Iphone pro 3", price: "1002"},
        {name: "Iphone pro 4", price: "1003"},
        {name: "Iphone pro 5", price: "1004"},
        {name: "Iphone pro 6", price: "1005"}
    ];
    var elements = products.map((product, index) => {
        return (
            <Product key={index} name={product.name} price={product.price}/>
        )
    });
    // console.log(products);
    // console.log(elements);
    return (
        <div className="container">
            <Header/>
            <hr/>
            <div className="row">
                {elements}
            </div>
        </div>
    );
}

export default App;

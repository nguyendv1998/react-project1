import {Component} from 'react';

class danhmucsanpham extends Component {
    // constructor(props) {
    //     super(props);
    //     this.onClick=this.onClick.bind(this);
    // }
    onClick =()=>{
        alert(this.props.name + " +  " + this.props.price);
    }
    render() {
        return (
            <div className="card col-md-4" style={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://cdn.tgdd.vn/Products/Images/42/228736/iphone-12-xanh-la-new-600x600-600x600.jpg"
                     alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">Name: {this.props.name}</h5>
                    <p className="card-text">Price: {this.props.price} </p>
                    <button onClick={this.onClick}  className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        );
    }
}

export default danhmucsanpham;

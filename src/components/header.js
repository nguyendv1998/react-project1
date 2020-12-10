import React, {Component} from 'react';

class header extends Component {
    constructor(props) {
        super(props);
        this.onSearch=this.onSearch.bind(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }
    onSearch(){
        console.log(this.refs.noname.value);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="https://facebook.com">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://facebook.com">Home <span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://facebook.com">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="https://facebook.com" id="navbarDropdown"
                               role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="https://facebook.com">Action</a>
                                <a className="dropdown-item" href="https://facebook.com">Another action</a>
                                <div className="dropdown-divider"/>
                                <a className="dropdown-item" href="https://facebook.com">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" ref={this.textInput} placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.focusTextInput} type="submit">Search</button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default header;

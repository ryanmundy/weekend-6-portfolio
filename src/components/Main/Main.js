import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';

class Main extends Component {

    componentDidMount(){
        this.getProjects();
    }

    getProjects = () => {
        this.props.dispatch({type: 'FETCH_PROJECTS'});
    }

    render() {
        return (
            <div className="Main">
                {JSON.stringify(this.props.reduxStore)}
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Main);
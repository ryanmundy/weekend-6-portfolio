import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import ProjectTable from '../ProjectTable/ProjectTable';

class Admin extends Component {

    render() {

        return (
            <div className="Main">
                <h2>Administrator</h2>
                <ProjectTable/>
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Admin);
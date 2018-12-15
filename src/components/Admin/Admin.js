import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import ProjectTable from '../ProjectTable/ProjectTable';
import Button from '@material-ui/core/Button';

class Admin extends Component {

    handleBackClick = () => {
        this.props.history.push('/');
    }

    render() {

        return (
            <div className="Main">
                <Button id="returnHome" variant="contained" color="primary" onClick={this.handleBackClick}>Return Home</Button>
                <h2>Administrator</h2>
                <form>
                    <input placeholder="Name" onChange={this.handleChangeFor} />
                    <input placeholder="Description" onChange={this.handleChangeFor} />
                    <input placeholder="Website URL" onChange={this.handleChangeFor} />
                    <input placeholder="Github URL" onChange={this.handleChangeFor} />
                    <input placeholder="Completion Date" onChange={this.handleChangeFor} />
                    <select id="select" >
                        <option value="React">React</option>
                        <option value="jQuery">jQuery</option>
                        <option value="Node">Node</option>
                        <option value="SQL">SQL</option>
                        <option value="Redux">Redux</option>
                        <option value="HTML">HTML</option>
                    </select>
                    <Button variant="contained" color="primary" onClick={this.handleClick}>Add Project</Button>
                </form>
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
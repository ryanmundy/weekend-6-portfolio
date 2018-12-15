import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import ProjectTable from '../ProjectTable/ProjectTable';
import Button from '@material-ui/core/Button';

class Admin extends Component {

    state = {
        newProject: {
            name: '',
            description: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: ''

        }
    }

    handleChangeFor = (propertyName) => (event) => {
        console.log('in handleChangeFor')
        this.setState({
            newProject: {
                ...this.state.newProject,
                [propertyName]: event.target.value
            }
        });
    }

    handleClick = event => {
        event.preventDefault();
        console.log('this is state', this.state);
        this.props.dispatch({type:'ADD_PROJECT', payload: this.state.newProject})
        
    }


    handleBackClick = () => {
        this.props.history.push('/');
    }

    render() {

        return (
            <div className="Main">
                <Button id="returnHome" variant="contained" color="primary" onClick={this.handleBackClick}>Return Home</Button>
                <h2>Administrator</h2>
                <form>
                    <input placeholder="Name" onChange={this.handleChangeFor('name')} />
                    <input placeholder="Description" onChange={this.handleChangeFor('description')} />
                    <input placeholder="Website URL" onChange={this.handleChangeFor('website')} />
                    <input placeholder="Github URL" onChange={this.handleChangeFor('github')} />
                    <input placeholder="Completion Date" onChange={this.handleChangeFor('date_completed')} />
                    <select id="select" onChange={this.handleChangeFor('tag_id')}>
                        <option value="1">React</option>
                        <option value="2">jQuery</option>
                        <option value="3">Node</option>
                        <option value="4">SQL</option>
                        <option value="5">Redux</option>
                        <option value="6">HTML</option>
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
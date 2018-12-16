import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';
import ProjectTable from '../ProjectTable/ProjectTable';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Home, Add} from '@material-ui/icons';

class Admin extends Component {

    state = {
        newProject: {
            name: '',
            description: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: 1,
            thumbnail: '',
            built_with: ''

        }
    }

    componentDidMount(){
        this.getTags();
        
    }

    getTags=()=>{
        this.props.dispatch({ type: 'FETCH_TAGS' });
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
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject })
    }

    handleTagClick = event => {
        event.preventDefault();
        console.log('this is state', this.state);
        this.props.dispatch({ type: 'ADD_TAG', payload: this.state.newProject })
    }


    handleBackClick = () => {
        this.props.history.push('/');
    }

    render() {
        let tags = this.props.reduxStore.tags.map(tag => {
            return (
                <option key={tag.id} value={tag.id}>{tag.built_with}</option>
            );
        })
    

        return (
            <div className="Main">
                <Button id="returnHome" variant="contained" color="primary" onClick={this.handleBackClick}><Home/>Return Home</Button>
                <h2>Administrator</h2>
                
                <div id="inputDiv">
                    <h3>Create New Project</h3>
                    <form>
                        <TextField id="input" placeholder="Name" onChange={this.handleChangeFor('name')} />
                        <br />
                        <TextField id="input" placeholder="Description" onChange={this.handleChangeFor('description')} />
                        <TextField id="input" placeholder="Website URL" onChange={this.handleChangeFor('website')} />
                        <TextField id="input" placeholder="Github URL" onChange={this.handleChangeFor('github')} />
                        <TextField id="input" placeholder="Image URL" onChange={this.handleChangeFor('thumbnail')} />
                        <br />
                        <p>Completed On:</p>
                        <TextField id="input" type="date" placeholder="Completion Date" onChange={this.handleChangeFor('date_completed')} />
                        <p>Built With:</p>
                        <select  onChange={this.handleChangeFor('tag_id')}>
                        {tags}
                        </select>
                        <br />
                        <Button id="input" variant="contained" color="primary" onClick={this.handleClick}><Add/>Add Project</Button>
                    </form>
                </div>
                <div id="newTag">
                    <h3>Add New Tag</h3>
                    <TextField id="input" placeholder="New Tag" onChange={this.handleChangeFor('built_with')} />
                    <Button id="input" variant="contained" color="primary" onClick={this.handleTagClick}><Add />Add Tag</Button>
                </div>
                <ProjectTable />
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
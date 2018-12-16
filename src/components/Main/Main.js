import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';
import { Card, Grid } from '@material-ui/core';

class Main extends Component {

    //gets current projects on page load
    componentDidMount() {
        this.getProjects();
    }

    //gets current projects from db
    getProjects = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }

    render() {
        //maps over current projects and creates new card with info
        let newCard = this.props.reduxStore.projects.map(project => {
            return (
                <Card id="projectCard" key={project.id}>
                    <h3>{project.name}</h3>
                    <img src={project.thumbnail} width="300" alt=''></img>
                    <p>Built with: {project.built_with}</p>
                    <p>{project.description}</p>
                    <p><a href={project.website} target="_blank">{project.website}</a></p>
                    <p><a href={project.github} target="_blank">{project.github}</a></p>
                    <p>Completed on: {project.date_completed}</p>
                </Card>
            );
        })

        return (
            <div className="Main">
                <h2>My Projects</h2>
                <Grid id="projectGrid" container justify="center">
                    <Grid item xs={6}>
                        {newCard}
                    </Grid>
                </Grid>
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
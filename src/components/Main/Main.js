import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Main extends Component {

    componentDidMount() {
        this.getProjects();
    }

    getProjects = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }

    render() {

        return (
            <div className="Main">
            <h2>My Projects</h2>
                <Table>
                    <TableHead>
                        <TableRow>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Website</th>
                            <th>Github</th>
                            <th>Completed</th>
                            <th>Built With</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.reduxStore.projects.map(project => {
                        return (
                            <TableRow key={project.id}>
                                <TableCell>{project.thumbnail}</TableCell>
                                <TableCell>{project.name}</TableCell>
                                <TableCell>{project.description}</TableCell>
                                <TableCell><a href={project.website} target="_blank">{project.website}</a></TableCell>
                                <TableCell><a href={project.github} target="_blank">{project.github}</a></TableCell>
                                <TableCell>{project.date_completed}</TableCell>
                                <TableCell>{project.built_with}</TableCell>
                            </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
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
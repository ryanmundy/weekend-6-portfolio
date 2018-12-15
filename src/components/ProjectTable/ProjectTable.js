import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectTable.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class ProjectTable extends Component {

    componentDidMount() {
        this.getProjects();
    }

    getProjects = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }

    handleDelete = (id) => {
        console.log('in handleDelete', id);
        this.props.dispatch({type: 'DELETE_PROJECT', payload: id})
        
    }

    render() {

        return (
            <div className="Main">
                <Table>
                    <TableHead>
                        <TableRow>
                            <th>Name</th>
                            <th>Action</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxStore.projects.map(project => {
                            return (
                                <TableRow key={project.id} id={project.id}>
                                    <TableCell>{project.name}</TableCell>
                                    <Button variant="contained" color="secondary" onClick={() =>this.handleDelete(project.id)}>Delete</Button>
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

export default connect(mapStateToProps)(ProjectTable);
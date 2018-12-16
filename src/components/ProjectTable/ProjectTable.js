import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectTable.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class ProjectTable extends Component {

    //gets current projects on page load
    componentDidMount() {
        this.getProjects();
    }

    //gets current projects from db
    getProjects = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }

    //click handler for deleting item by id
    handleDelete = (id) => {
        console.log('in handleDelete', id);
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: id })

    }

    render() {
        //maps over project list and creates new table row for each project with delete button
        let newRow = 
            this.props.reduxStore.projects.map(project => {
                return (
                    <TableRow key={project.id} id={project.id}>
                        <TableCell>{project.name}</TableCell>
                        <Button variant="contained" color="secondary" onClick={() => this.handleDelete(project.id)}><DeleteIcon />Delete</Button>
                    </TableRow>
                );
            })
        

        return (
            <div className="tableMain">
                <h2>Manage Current Projects</h2>
                <Table id="adminTable">
                    <TableHead>
                        <TableRow>
                            <th>Name</th>
                            <th>Action</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {newRow}
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
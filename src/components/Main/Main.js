import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';

class Main extends Component {

    componentDidMount() {
        this.getProjects();
    }

    getProjects = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }

    render() {


        // return (
        //     <div className="Main">
        //         <ul>
        //             {this.props.reduxStore.projects.map(project => {
        //                 return (
        //                   <li key={project.id}>{project.name}</li>  
        //                 );
        //             })}
        //         </ul>
        //         {JSON.stringify(this.props.reduxStore.projects)}
        //     </div>
        // );
        return (
            <div className="Main">
                <table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Website</th>
                            <th>Github</th>
                            <th>Completed</th>
                            <th>Built With</th>
                        </tr>
                    </thead>
                    {this.props.reduxStore.projects.map(project => {
                        return (
                            <tr key={project.id}>
                                <td>{project.thumbnail}</td>
                                <td>{project.name}</td>
                                <td>{project.description}</td>
                                <td>{project.website}</td>
                                <td>{project.github}</td>
                                <td>{project.date_completed}</td>
                                <td>{project.built_with}</td>
                            </tr>
                        );
                    })}
                </table>
                {JSON.stringify(this.props.reduxStore.projects)}
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
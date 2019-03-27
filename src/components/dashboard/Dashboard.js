import React, { Component } from 'react';
// Custom Compnents
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
// connecting redux
import { connect } from 'react-redux';
// connecting firestore
import { firestoreConnect } from 'react-redux-firebase';
// redux compose
import { compose } from 'redux';

class Dashboard extends Component{
    render(){
        const { projects } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);
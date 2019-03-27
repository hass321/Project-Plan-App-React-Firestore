const initState = {
    projects: [
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('Project Created', action.project);
            const newProject = action.project;
            const id = state.projects.length + 1;
            state = {
                projects: [
                    ...state.projects,
                    {...newProject, id}
                ]
            }
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Create project error ', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer
const initState = {
    users: [
        {id:1, name:'Phuong'},
        {id:2, name: 'Ba'},
        {id:3, name: 'Hoang'}
    ], 
    posts: []
}
const rootReducer = (state = initState, action)=>{

console.log('action',action)
    switch (action.type) {
        
        case 'DELETE_USER':
            console.log('action',action)
            let users = state.users
            users = users.filter((userDelete)=>{
                return userDelete.id != action.payload.id
            })
            return {
                ...state, users
            };

        case 'CREATE_USER':
            console.log('action',action.payload.name)
            let user = {
                id: action.payload.id,
                name: action.payload.name
            }
            return {
                ...state, users: [...state.users, user]
            }

        default:
            return state;
    }
}
export default rootReducer;
const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let defaultState = {

    PostsData: [
        {id: 1, post: 'Hi, I am fine', likes: 12},
        {id: 2, post: 'How are you?', likes: 2}
    ],
    onPostChange:
        ""

}

const profilePageReducer = (state = defaultState, action) => {


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                post: state.onPostChange,
                likes: 0
            };
            let stateCopy = {...state};
            stateCopy.PostsData = [...state.PostsData]
            stateCopy.PostsData.push(newPost);
            stateCopy.onPostChange = '';
            return stateCopy;
        }
        case UPDATE_POST: {
            let stateCopy = {...state}
            stateCopy.onPostChange = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, newText: text})

export default profilePageReducer;


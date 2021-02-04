const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';


const profilePageReducer = (state, action) => {


    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: state.newPostMessage.onPostChange,
                likes: 0
            };
            state.profilePage.PostsData.push(newPost);
            state.newPostMessage.onPostChange = '';
            return state;

        case UPDATE_POST:
            state.newPostMessage.onPostChange = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, newText: text})

export default profilePageReducer;


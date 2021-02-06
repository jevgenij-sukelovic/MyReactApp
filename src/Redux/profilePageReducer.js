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
        case ADD_POST:
            let newPost = {
                id: 3,
                post: state.onPostChange,
                likes: 0
            };
            state.PostsData.push(newPost);
            state.onPostChange = '';
            return state;

        case UPDATE_POST:
            state.onPostChange = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, newText: text})

export default profilePageReducer;


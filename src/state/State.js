const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

let store={
    _state: {
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is Your learning'},
                {id: 3, message: "What's up"},
            ],
            dialogsData: [
                {id: 1, name: 'Rick'},
                {id: 2, name: 'Morty'},
                {id: 3, name: 'Ralph'},
                {id: 4, name: 'Sarah'},
            ],
            addMessage: 'write your message here'
        },
        messagesPage: {

            PostsData: [
                {id: 1, post: 'Hi, I am fine', likes: 12},
                {id: 2, post: 'How are you?', likes: 2}
            ]
        },
        sideBar: {
            myFriends:
                [
                    {id: 1, name: 'Rick'},
                    {id: 2, name: 'Morty'},
                    {id: 3, name: 'Ralph'}
                ]

        },
        newPostMessage: {
            onPostChange:
                "Write your post here"
        }

    },
    _callSubscriber(){

    },

    getState() {
        return this._state;
    },
    subscriber (observer) {
        this._callSubscriber = observer;
    },

    dispatch  (action) {
    if (action.type===ADD_POST) {
        let newPost = {
            id: 3,
            post: this._state.newPostMessage.onPostChange,
            likes: 0
        };
        this._state.messagesPage.PostsData.push(newPost);
        this._state.newPostMessage.onPostChange = '';
        this._callSubscriber(store._state);

    }else if (action.type===UPDATE_POST){
        this._state.newPostMessage.onPostChange = action.newText;
        this._callSubscriber(store._state);

    }else if (action.type===ADD_NEW_MESSAGE){
        let newMessage = {
            id: 4, message: this._state.dialogsPage.addMessage
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.addMessage = '';
        this._callSubscriber(store._state)

    }else if(action.type===NEW_MESSAGE_TEXT){
        this._state.dialogsPage.addMessage = action.newText;
        this._callSubscriber(this._state)
    }
    }
}

export const addPostActionCreator =()=>{

    return {
       type: ADD_POST
    }
}
export const updatePostActionCreator =(text)=>{

    return {
        type: UPDATE_POST, newText:text
    }
}
export const addNewMessageActionCreator=()=>{

    return{
        type: ADD_NEW_MESSAGE
    }
}
export const NewMessageTextActionCreator=(text)=>{

    return{
        type: NEW_MESSAGE_TEXT, newText: text
    }
}


export default store;
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";


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
            addMessage: ''
        },
        profilePage: {

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
                ""
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

        profilePageReducer(store.getState(), action);
        dialogsPageReducer(store.getState(), action);

        this._callSubscriber(store._state);

    }
}


export default store;
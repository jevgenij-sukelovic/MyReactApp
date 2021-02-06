const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

let defaultStore = {

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

}


const dialogsPageReducer = (state = defaultStore, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 4, message: state.addMessage
            }
            state.messagesData.push(newMessage);
            state.addMessage = '';
            return state;

        case NEW_MESSAGE_TEXT:
            state.addMessage = action.newText;
            return state;

        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE})
export const NewMessageTextActionCreator = (text) => ({type: NEW_MESSAGE_TEXT, newText: text})


export default dialogsPageReducer;
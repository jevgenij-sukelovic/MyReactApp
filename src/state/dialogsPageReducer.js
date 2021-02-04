const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';


const dialogsPageReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 4, message: state.dialogsPage.addMessage
            }
            state.dialogsPage.messagesData.push(newMessage);
            state.dialogsPage.addMessage = '';
            return state;

        case NEW_MESSAGE_TEXT:
            state.dialogsPage.addMessage = action.newText;
            return state;

        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE})
export const NewMessageTextActionCreator = (text) => ({type: NEW_MESSAGE_TEXT, newText: text})


export default dialogsPageReducer;
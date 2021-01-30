import {rerenderEntireTree} from "../render";

let state = {
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
        addMessage:'write your message here'
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
    newPostMessage:{
        onPostChange:
        "Write your post here"
    }

}

export const addPost = () => {

    let newPost = {
        id: 3,
        post: state.newPostMessage.onPostChange,
        likes: 0
    };
    state.messagesPage.PostsData.push(newPost);
    state.newPostMessage.onPostChange='';
    rerenderEntireTree(state);
}
export const updatePost = (newText) => {
    state.newPostMessage.onPostChange = newText;
    rerenderEntireTree(state);
}
export const addNewMessage = () =>{
    let newMessage={
        id:4, message:state.dialogsPage.addMessage
    }
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.addMessage='';
    rerenderEntireTree(state)
}
export const newMessageText =(newText)=>{
state.dialogsPage.addMessage=newText;
    rerenderEntireTree(state)
}



export default state;
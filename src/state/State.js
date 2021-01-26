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
        ]
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

    }

}

export let addPost = (addMessage) => {

    let newPost = {
        id: 3,
        post: addMessage,
        likes: 0
    };
    state.messagesPage.PostsData.push(addMessage)
}


export default state


let friends = {
    myFriends:
        [
            {id: 1, name: 'Rick'},
            {id: 2, name: 'Morty'},
            {id: 3, name: 'Ralph'}
        ]

}

let sideBarReducer = (store = friends, action) =>{

    return store;
}



export default sideBarReducer;
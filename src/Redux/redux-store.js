import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sideBarReducer from "./sideBarReducer";
import usersPageReducer from "./usersPageReducer";


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    friendsPage: sideBarReducer,
    usersPage: usersPageReducer
});



let store = createStore(reducers);


export default store;
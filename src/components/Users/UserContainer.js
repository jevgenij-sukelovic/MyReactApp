import React from 'react'
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../Redux/usersPageReducer";
import Users from "./Users";




let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }

}

let mapDispatchToProps = (dispatch)=>{
    return{
        follow: (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount)=>{
            dispatch(setTotalCountAC(totalCount))
        }


    }

}


export default connect (mapStateToProps, mapDispatchToProps) (Users)
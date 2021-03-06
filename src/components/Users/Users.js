import React from 'react'
import classes from './users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }
    getCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })

    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div>
            <div>

                {pages.map(p => {
                    return <span className={this.props.currentPage===p && classes.currentPage}
                                      onClick={()=>{this.getCurrentPage(p)}}>{" "+p}</span>
                })}

            </div>

            {
                this.props.users.map(u => <div key={u.id}>
                    <span></span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <span>
                   <span>
                       <div>{u.name}</div>
                   </span>
                    <span>

                        <div>locationCountry</div>
                        <div>locationCity</div>

                    </span>
                </span>
                </div>)
            }


        </div>

    }
}

export default Users;

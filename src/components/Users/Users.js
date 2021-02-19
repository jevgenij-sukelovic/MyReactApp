import React from 'react'
import classes from './users.module.css'


const Users = (props) => {

    if(props.users.length===0){
        props.setUsers(     [{
                id: 1,
                userPhoto: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Pocket_Mortys.png',
                followed: true,
                fullName: 'Rick',
                status: 'I am super',
                location: {country: 'Lithuania', city: 'Vilnius'}
            },
            {
                id: 2,
                userPhoto: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Pocket_Mortys.png',
                followed: false,
                fullName: 'Morty',
                status: 'I am a boss',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 3,
                userPhoto: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Pocket_Mortys.png',
                followed: true,
                fullName: 'Ralph',
                status: 'Hi, I am shameless',
                location: {country: 'Poland', city: 'Warsaw'}
            }])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span></span>
                <div>
                    <img src={u.userPhoto} className={classes.userPhoto}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                        <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                </div>
                <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                    <span>

                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>
            </div>)
        }


    </div>

}
export default Users;

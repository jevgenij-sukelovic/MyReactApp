import React from 'react';
import OnlineFriends from "./OnlineFriends/OnlineFriends";



const Friends = (props) =>{

let friends = props.myFriends.map(el => <OnlineFriends name={el.name}/>)

    return(
        <div>

            {friends}

        </div>


    )
}
export default Friends;
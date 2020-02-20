import React, { Component } from 'react'
const UserItem = (props) => {
    const {avatar_url, login, html_url} = props.user;
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" style={{width: 60}} className="round-img"/>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1" target="_blank">More</a>
                </div>
            </div>
        )
}
export default UserItem;
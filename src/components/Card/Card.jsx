import React from 'react';
import './Card.css';


class Card extends React.Component {
    render () {
        const profile = this.props; // here we use testData elements like a props, and give them to profile variable
        return (
            <div className='github-profile'>
                <img src={profile.avatar_url} alt=""/>
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.location}</div>
                    <div className="followers">Followers: {profile.followers}</div>
                    <button onClick={this.props.addNewProfile}>
                            <div className="name">Show followers</div>
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;

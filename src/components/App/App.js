import React from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Form from '../Form/Form';
import './App.css';

// Here below we have a function component, instead class.
// I'm using that because just for mix class and func component in one file, and React ok with that;
const CardList = (props) => {
  return (
      <div>
        {props.profiles.map((profile) => <Card {...profile} key={profile.id}/>)} 
      </div>
  );
}

class App extends React.Component {
  state = {
    profiles: [],
  }
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]

    }))
  }
  
  render() {
    return (
    <div className="main">
      <Header title="The GitHub Cards App"/>
      <Form onSubmitUser={this.addNewProfile}/>
      <CardList profiles={this.state.profiles}/>
    </div>
    )
  }
}

export default App;

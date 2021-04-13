import React from 'react';
import './Form.css';

class Form extends React.Component {
    state = { userName: ''};
    handleSubmit = async (event) => {
        event.preventDefault();
        let respUser = await fetch(`https://api.github.com/users/${this.state.userName}`);
        let gitHubUser = await respUser.json();
        this.props.onSubmitUser(gitHubUser);
        this.setState({ userName: '' });
        
    };
    render() {
        return(
            <form  onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="Github username" 
                    required
                />
                <button>Add card</button>
            </form>
        );
    }
}

export default Form;

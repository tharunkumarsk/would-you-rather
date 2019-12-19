import React, { Component } from 'react'
import { Divider, Grid, Segment, Form ,Dimmer,Loader} from "semantic-ui-react";
import { handleSaveQuestion } from '../actions/questionList';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';


class NewQuestion extends Component {

  state = {
    option1: '',
    option2: '',
    isLoading:false,
    redirect:false
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({isLoading:true})
    const { authUser } = this.props;
    const { option1, option2 } = this.state;

    this.props.dispatch(handleSaveQuestion(option1,option2,authUser))
   
    setTimeout(
      function() {
        this.setState({
          option1: '',
          option2: '',
          isLoading:false,
          redirect:true

        });
      }
      .bind(this),
      1000
  );
  };

  render() {
    const disabled = this.state.option1 === '' || this.state.option2 === '';
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Grid columns={1} padded textAlign="center">
      <Grid.Column width={8}>
      {this.state.isLoading && (
      <Dimmer active>
      <Loader />
    </Dimmer>
    )}
        <Segment placeholder>
          <h3>Crteate you Question here !</h3>
          <p>
            <strong>Would you rather...</strong>
          </p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input id="option1" placeholder="Enter option one..." required onChange={this.handleChange}/>
            <Divider horizontal>Or</Divider>
            <Form.Input id="option2" placeholder="Enter option two..." required onChange={this.handleChange}/>
            <Form.Button positive size="tiny" fluid disabled={disabled}>
              Submit
            </Form.Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
    )
  }
}

function mapStateToProps({authUser}) {
  
    return {authUser}
 
}

export default connect(mapStateToProps)(NewQuestion);


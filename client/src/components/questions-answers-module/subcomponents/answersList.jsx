import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from '@mui/material/Card';

import Answer from './Answer.jsx'



class AnswersList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      allAnswers: []
    }
    axios.get('/api/questionsAnswers/answers', {
      params: {
        question_id: this.props.question_id
      }
      })
      .then((results) => {
        console.log(`Answer list for ${this.props.question_id}`, results.data.results)
        this.setState({allAnswers: results.data.results})
      })
      .catch((error) => {
         console.log('error', error);
      })
  }



  render () {
    return (
      <Card>
        {this.props.question_id}

      </Card>
    )
  }
}

export default AnswersList;

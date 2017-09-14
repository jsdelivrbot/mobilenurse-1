import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import moment from 'moment';
import Header from './header';
import { Row, Col, Panel, Table } from 'react-bootstrap';

class PostsIndex extends Component {
  constructor(props) {
      super(props);
      this.state = {
        examData: []
      }
  }
  componentWillMount() {
    let socket = io('http://localhost:8000');
    socket.on('connection', function(){ });
    socket.emit('get_exams', null);
    socket.on('exam_data', data => {
      this.setState({examData: data.data});
    });
    socket.on('disconnect', function(){ });
  }

  goToPost(postId) {
    this.props.history.push("posts/" + postId)
  }

  render() {
    let posts = this.state.examData;

    posts.sort(function compare(a, b) {
      var dateA = new Date(a.examDate);
      var dateB = new Date(b.examDate);
      if(_.isEqual(dateA, dateB)){
        return a.examTime.localeCompare(b.examTime);
      } else {
        return dateA - dateB;
      }
    });

    let currentExamOrders = [];
    let completedExams = [];
    let canceledExams = [];
    _.map(posts,(post, i) => {
      let examDate = moment(new Date(post.examDate)).format("MM/DD/YYYY");
      if(post.examStatus === 'Pending Confirmation' || post.examStatus === 'Scheduling Confirmed'){
        currentExamOrders.push(<tr key={post.examid} onClick={()=>this.goToPost(post.id)} style={{cursor:'pointer'}}>
          <td>{post.firstname} {post.lastname}</td>
          <td>{examDate}</td>
          <td>{post.examTime}</td>
          <td>{post.examStatus}</td>
        </tr>)
      } else if (post.examStatus === 'Completed') {
        completedExams.push(<tr key={post.examid} onClick={()=>this.goToPost(post.id)} style={{cursor:'pointer'}}>
          <td>{post.firstname} {post.lastname}</td>
          <td>{examDate}</td>
          <td>{post.examStatus}</td>
          <td>{post.tracking}</td>
        </tr>)
      } else if (post.examStatus === 'Canceled') {
        canceledExams.push(<tr key={post.examid} onClick={()=>this.goToPost(post.id)} style={{cursor:'pointer'}}>
          <td>{post.firstname} {post.lastname}</td>
          <td>{examDate}</td>
          <td>{post.examStatus}</td>
          <td>{post.examNotes}</td>
        </tr>)
      }
    });
    let noDataFound = <tr><td colSpan={4}><h5 className="text-center"></h5></td></tr>;
      if(currentExamOrders.length < 1) {
        currentExamOrders.push(noDataFound);
      }
      if(completedExams.length < 1) {
        completedExams.push(noDataFound);
      }
      if(canceledExams.length < 1) {
        canceledExams.push(noDataFound);
      }
    return (
        <div className="row">
          <Header title="EXAMS" />
          <div className="col-xs-12">
          </div>
          <div className="col-xs-9" >
            <Panel header="Current Exam Orders">
              <Table responsive striped bordered condensed hover>
                 <thead>
                   <tr>
                     <th>Client Name</th>
                     <th>Exam Date</th>
                     <th>Time</th>
                     <th>Status</th>
                   </tr>
                 </thead>
                 <tbody>
                   {currentExamOrders}
                 </tbody>
               </Table>
            </Panel>
            <Panel header="Completed Exams">
              <Table responsive striped bordered condensed hover>
                 <thead>
                   <tr>
                     <th>Client Name</th>
                     <th>Exam Date</th>
                     <th>Status</th>
                     <th>Tracking Number</th>
                   </tr>
                 </thead>
                 <tbody>
                   {completedExams}
                 </tbody>
               </Table>
            </Panel>
            <Panel header="Canceled Exams">
              <Table responsive striped bordered condensed hover>
                 <thead>
                   <tr>
                     <th>Client Name</th>
                     <th>Exam Date</th>
                     <th>Status</th>
                     <th>Notes</th>
                   </tr>
                 </thead>
                 <tbody>
                   {canceledExams}
                 </tbody>
               </Table>
            </Panel>
            <div className="pull-right">
                <Link exact to="/posts/new" className="btn btn-primary">
                  SCHEDULE EXAM
                </Link>
            </div>
        </div>
      </div>
    );
  }
}

export default PostsIndex;

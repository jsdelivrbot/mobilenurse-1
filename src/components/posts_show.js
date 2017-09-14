import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';


class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    componentWillMount() {
      this.props.fetchPost(this.props.params.id);
    }
    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
        .then(() => {
            this.context.router.push('/repinfo/');
        });
    }
    render() {
        const { post } = this.props;

        if(!post) {
            return <div>Loading..</div>;
        }
        return (
            <div>
                <h1> CLIENT INFORMATION </h1>
                <hr/><br/>
                <h3>EXAM STATUS: {post.examStatus} </h3>
                <br/>
                <h4>FIRSTNAME: {post.firstname}</h4>
                <h4>LASTNAME: {post.lastname}</h4>
                <h4>AGE: {post.clientAge}</h4>
                <h4>DOB: {post.clientDOB}</h4>
                <h4>PHONE: {post.clientPhone}</h4>
                <h4>POLICY AMOUNT: {post.policyAmount}</h4>
                <h4>COMMENTS: {post.examNotes}</h4>
                <br/>
                <br/>
                <h3>EXAM INFORMATION</h3>
                <hr/>
                <h4>EXAM DATE: {post.examDate}</h4>
                <h4>EXAM TIME: {post.examTime}</h4>
                <h4>ADDRESS: {post.examStreetAddress}</h4>
                <h4>CITY: {post.examCity}</h4>
                <h4>STATE: {post.examState}</h4>
                <h4>ZIP: {post.examZipCode}</h4>
                <h4>EXAM TYPE: {post.examType}</h4>
                <h4>RECORD ID: {post.id}</h4>
                <br/>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    CANCEL EXAM
                </button>
             </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}



export default connect(mapStateToProps, {fetchPost, deletePost}) (PostsShow);

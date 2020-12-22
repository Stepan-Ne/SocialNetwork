import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../utils/validator';
import { Textarea } from '../../Common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

  const submit = (formData) => {
    props.addPostAC(formData.newPostText);
  };

  let postElements = [... props.postData].reverse().map((message) => (
    <Post
      message={message.message}
      key={message.id}
      likesCount={message.likesCount}
    />
  ));

  return (
    <div>
      <div className={s.profileblock}>
        <h3>My Posts</h3>
        <PostReduxForm onSubmit={submit} />
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='newPostText' component={Textarea}
      validate={[required, maxLength10]}/>
      <div className={s.btn}>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: 'myPost' })(PostForm);

export default MyPosts;

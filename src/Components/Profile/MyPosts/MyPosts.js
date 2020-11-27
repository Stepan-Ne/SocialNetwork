import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
  //create link to the textarea (React works with Virtual DOM)
  //this link we connect to textarea with ref={}
  //let newPostElement = React.createRef(); //textarea
  //   let newTextPost = () => {
  //     let text = newPostElement.current.value;
  //     props.updateNewPostText(text); //call-back
  //   };

  //   let onAddPost = () => {
  //     props.addPost();
  //   };

  const submit = (formData) => {
    console.log(formData);
  };

  let postElements = props.postData.map((message) => (
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
      <Field name='post' component='textarea' />
      <div className={s.btn}>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: 'myPost' })(PostForm);

export default MyPosts;

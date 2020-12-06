import { addPostAC, deletePostAC } from './../Redux/profile-reducer';
import profileReducer from './../Redux/profile-reducer';

test('post should be added', () => {
    
    //test data
    let newAC = addPostAC('New Post')
    let initialState = {

        postData: [
          { id: 1, message: 'How are you?', likesCount: '12' },
          { id: 2, message: 'See you!', likesCount: '8' },
          { id: 3, message: 'Hello!', likesCount: '1' },
        ]
      };

      //action
      let newData = profileReducer(initialState, newAC)

      //expectation
      expect(newData.postData.length).toBe(4)
  });

  //Delete Post
  test('post should be delet', () => {
      // 1. data
let deleteAC = deletePostAC(1)
let initialState = {

    postData: [
      { id: 1, message: 'How are you?', likesCount: '12' },
      { id: 2, message: 'See you!', likesCount: '8' },
      { id: 3, message: 'Hello!', likesCount: '1' },
    ]
  };
      // 2. action
      let newData = profileReducer(initialState, deleteAC)
      // 3. expectation
      expect(newData.postData.length).toBe(2)
  })
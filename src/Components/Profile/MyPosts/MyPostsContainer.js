import {addPostAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPostAC})(MyPosts);

export default MyPostsContainer;
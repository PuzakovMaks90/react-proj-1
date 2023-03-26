import './PostList.css';
import Post from "./../Post/";

const PostList = ({ delPost, posts, title }) => {
    return (
        <div className="posts-block">
            <h2>{ title }</h2>
            <ul className="posts">
            { posts.map(post => <Post key={post.id} post={post} delPost={delPost} />) }
            </ul>
        </div>
    )
}

export default PostList;
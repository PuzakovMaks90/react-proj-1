import './Post.css';

const Post = ({ post }) => {
    
    const delPost = (id) => {
        console.log(`del: ${id}`);
    }

    return (
        <li className="post">
            <span className="post-number">{ post.id }</span>
            <div className="post-content">
                <h3 className="post-title">{ post.title }</h3>
                <p className="post-text">{ post.text }</p>
            </div>
            <button 
                className="btn btn-del"
                onClick={() => delPost(post.id) }>
                Удалить
            </button>
        </li>
    ) 
}

export default Post;
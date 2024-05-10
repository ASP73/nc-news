import { useState } from "react";


const NewCommentForm = ({onSubmit, username}) => {
    const [commentBody, setCommentBody] = useState("");

    const handleSubmit = () => {
        onSubmit(username, commentBody);
        // setUsername("");
        // setCommentBody("");
    }

    return (
        <div>
            {/* replace hardcode when user login implemented */}
            <p>grumpy19</p>
            {/* <label>Your name:</label>
            <input type="text" id="username" placeholder="Please enter your name" onChange={(e) => setUsername(e.target.value)} required minLength="1"/>
            <br /> */}
            <label>Your comment:</label>
            <textarea type="text" id="body" placeholder="Please add comment" onChange={(e) => setCommentBody(e.target.value)}required minLength="1"/>
            <button className="comment-btn" onClick={handleSubmit}>Submit Comment</button>

        </div>


    )
}

export default NewCommentForm;
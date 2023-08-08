import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineUpload } from "react-icons/ai";
import { FaRetweet } from 'react-icons/fa';
import { LiaCommentDotsSolid } from "react-icons/lia";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { AiOutlineDislike } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./tuit-item.css";

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch();


    const [liked, setLiked] = useState(tuit.liked);
    const [likesNum, setlikesNum] = useState(tuit.likes);

    const handleLikeToggle = () => {
        if (liked) {
            setlikesNum((prev) => prev - 1);
            dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: !tuit.liked }))
        } else {
            setlikesNum((prev) => prev + 1);
            dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: !tuit.liked }))
        }
        setLiked((prevLiked) => !prevLiked);
    };

    const [disliked, setdisLiked] = useState(tuit.disliked);
    const [dislikesNum, setdislikesNum] = useState(tuit.dislikes);

    const handleDisLikeToggle = () => {
        if (disliked) {
            setdislikesNum((prev) => prev - 1);
            dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes - 1, disliked: !tuit.disliked }))
        } else {
            setdislikesNum((prev) => prev + 1);
            dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked: !tuit.disliked }))
        }
        setdisLiked((prevdisLiked) => !prevdisLiked);
    };

    //portions of the style/icon were given by chatGPT
    return (
        <div className="row alignment">
            <div className="col-2">
                <LiaCommentDotsSolid /> {tuit.replies}
            </div>
            <div className="col-2">
                <FaRetweet /> {tuit.retuits}
            </div>
            <div className="col-3" onClick={handleLikeToggle}><FontAwesomeIcon
                icon={faHeart}
                style={{ color: liked ? "red" : "black"}}
            />
                {likesNum}
            </div>
            <div className="col-3" onClick={handleDisLikeToggle}><FontAwesomeIcon
                
                icon={faThumbsDown}
                style={{ color: disliked ? "blue" : "black"}}
            />
                {dislikesNum}
            </div>
            <div className="col-2">
                <AiOutlineUpload />
            </div>
        </div>
    );
};
export default TuitStats;
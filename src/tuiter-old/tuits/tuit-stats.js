import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineUpload } from "react-icons/ai";
import { FaRetweet } from 'react-icons/fa';
import { LiaCommentDotsSolid } from "react-icons/lia";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import {AiOutlineDislike} from "react-icons/ai";
import "./tuit-item.css";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();


    return (
        <div className="row alignment">
            <div className="col-2">
                <LiaCommentDotsSolid /> {tuit.replies}
            </div>
            <div className="col-2">
                <FaRetweet /> {tuit.retuits}
            </div>
            <div className="col-3">
                <FaHeart
                    className="text-danger"
                    onClick={() =>
                        dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                    }
                />
                <span className="ms-2">{tuit.likes}</span>
            </div>
            <div className="col-3">
                <AiOutlineDislike
                    className="text-danger"
                    onClick={() =>
                        dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes - 1 }))
                    }
                />
                <span className="ms-2">{tuit.dislikes}</span>
            </div>
            <div className="col-2">
                <AiOutlineUpload />
            </div>
        </div>
    );
};
export default TuitStats;
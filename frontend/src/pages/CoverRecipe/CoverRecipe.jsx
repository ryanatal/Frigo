import React from 'react';
import './CoverRecipe.scss';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const CoverRecipe = () => {
    return (
        <div className="CoverRecipe">
            <div className="Intro">
                <h1>What's for dinner?</h1>
            </div>
            <div className="card">
                <div className="header">
                    <img></img>
                </div>
                <div className="text">
                    <h1 className="food">
                        Chinese Noodles
                    </h1>
                    <p className="info">ETA: Likes: </p>
                </div>
                    <a href="#" className="btn">Let's Cook!</a>
            </div>
        </div>
    );
};
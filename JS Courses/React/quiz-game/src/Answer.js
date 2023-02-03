import React from 'react';

export default function Answer({ text, isWrong }) {
    let className = '';
    if (isWrong !== undefined && !isWrong) {
        className = 'rigth-answer';
    }
    else if (isWrong !== undefined && isWrong) {
        className = 'wrong-answer';
    }

    return (
        <button className={className}>{text}</button>
    )
}
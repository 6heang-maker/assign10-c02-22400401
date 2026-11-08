/* eslint-disable react/prop-types */

import '../App.css'

export default function Header({username, timer, wrongTries}) {
    return (
        <header className='game-info'>
            <h3 className='player-name'>플레이어: {username}</h3>
            <p className="timer">남은 시간: {timer}</p>
            <p className='wrong-tries'>틀린 횟수: {wrongTries}</p>
        </header>
    )
}
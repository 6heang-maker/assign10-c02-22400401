
1. Project Information

카드 맞추기 게임이다.

어릴 때 자주 했던 게임이기도 하고 바꾸거나 더 만들기 쉬울 것 같아서 정했다. 

Project: https://github.com/khalilelemam/react-memory-game
License: MIT License

기능으로는 
- 같은 그림의 카드 2장 찾기
- 제한시간
- 틀린 횟수 표시
- 게임 결과 표시

2. Installation

프로젝트를 실행하기 위해 다음 명령어를 사용했다.

git clone https://github.com/khalilelemam/react-memory-game.git
npm install
npm run dev


 3. Source Code Exploration


- src/App.jsx: 사용자 이름을 입력하고 게임을 시작하는 파일
- src/components/Board.jsx: 카드를 뒤집고 짝이 맞는지 확인하는 파일
- src/App.css: 게임 화면의 스타일을 설정하는 파일


MemoryGame:정보를 보여주고 카드 게임을 실행
Header: 이름, 남은 시간, 틀린 횟수를 화면에 표시



4. Customizing

- MemoryGame.jsx, Header.jsx

Memory Game, Name is, Time Remaining, Wrong Tries을 
카드 짝 맞추기 게임, 플레이어, 남은 시간, 틀린 횟수 로 바꾸었다. 

게임 제목과 정보를 한글로 수정했다.


- Style

App.css

회색 배경과 회색 카드 -> 연한 파란색 배경과 보라색 카드

CSS의 background-color를 변경했다.


- UI/Data

src/assets/data.js

React와 Angular 로고 -> 별과 하트 아이콘

기존 카드의 그림을 다른 아이콘으로 변경했다.

5. Deployment

Vercel: https://assign10-c02-22400401.vercel.app/


6. Weekly Review

- 새롭게 배운 내용

1. 다른 사람이 만든 깃허브 프로젝트를 보고 가져와 고치는 부분
2. Api를 사용해서 정보를 받아오는데 api라는 걸 배웠다. 
3. 실행 명령어

- 어려웠던 점과 해결 방법

처음에 어떤 프로젝트를 선택할지 고민할 때 어려웠다. GitHub 저장소에 내 vs에 연결하는 과정이 어려웠다. 

제출하고 배포까지 했는데 알고보니 내가 카드 한 쌍에서 하나씩만 바꿔서 게임 클리어가 안되는 버그가 생겨서 다시 고쳤다. 



- AI 활용 및 느낀 점

어떻게 연결하고 어떻게 실행하는지 오류나고 커밋 할 때만 사용해서 크게 사용하지 않았다. 









































# Memory Game

A fun and engaging memory game built with React. Test your memory skills by matching pairs of blocks with the same icons. The game includes a timer and keeps track of your attempts.

Start Playing:  [here](https://reactjs-vite-memorygame.netlify.app/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Gameplay](#gameplay)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Interactive Gameplay**: Flip blocks to find matching pairs.

- **Timer**: A countdown timer adds a challenge to the game.

- **Audio Feedback**: Enjoy sound effects for correct and wrong matches.

- **Wrong Tries**: show number of wrong tries.

- **Winning Screen**: Celebrate your victory with a winning screen and confetti.

- **Responsive Design**: Play the game on any device.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Khalil-Elemam/react-memory-game.git
   cd react-memory-game
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the App:**:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to play the game.

## Usage

1. **Start the Game**:

   - The game board will display all blocks with their icons for 3 seconds.
   - After 3 seconds, the blocks will flip back to their hidden state.

2. **Flip Blocks**:

   - Click on a block to reveal its icon. Try to find the matching pair.

3. **Match Blocks**:

   - If the icons match, the blocks will remain visible. If not, they will flip back after a short delay.

4. **Win the Game**:
   - Match all pairs before the timer runs out to win the game. A winning screen will appear, celebrating your success.

## Gameplay

- **Initial State**: All blocks are revealed for 3 seconds at the start of the game, then they flip back to their hidden state.

- **Flipping Blocks**: Click to flip blocks and reveal their icons.

- **Matching Logic**: If two flipped blocks have the same icon, they remain visible. If not, they flip back.

- **Timer**: The game includes a timer. Complete the game before the timer runs out.

- **End of Game**: The game ends when all pairs are matched or the timer finishes.

## Technologies Used

- React.js
- HTML
- CSS
- VITE

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## Acknowledgements

- Special thanks to the contributors of this project.

- Audio assets from [Freesound](https://freesound.org/), which provided the sound effects for correct and wrong matches.

- Confetti effect by [react-confetti](https://github.com/alampros/react-confetti), used for the winning screen celebration.

- Icons from [FontAwesome](https://fontawesome.com/) for the game blocks.

- Inspiration and guidance from the React community and various online tutorials.

## Credits

This project was created by [Khalil Elemam].

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

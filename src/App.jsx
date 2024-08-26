import GameBoard from "./components/GameBoard"
import Player from "./components/player"

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initisalName="Type your name" symbol="X" />
          <Player initisalName="Type your name" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App

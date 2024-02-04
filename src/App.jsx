import './App.css'
import ChessBoard from './components/Chessboard/Chessboard.jsx'

function App() {

  return (
    <div style={{
      height: "100vh",
      width:"100vw",
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ChessBoard />
    </div>
  )
}

export default App

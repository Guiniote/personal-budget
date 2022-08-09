import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeContainer from './components/HomeContainer'
import TransactionContainer from './components/TransactionContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        <Route path="/transaction" element={<TransactionContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

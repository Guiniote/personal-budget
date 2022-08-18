import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeContainer from './components/HomeContainer'
import TransactionContainer from './components/TransactionContainer'
import TransactionFormContainer from './components/TransactionFormContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        <Route path="/transaction" element={<TransactionContainer />} />
        <Route path="/transaction/new" element={<TransactionFormContainer />} />
        <Route
          path="/transaction/:transactionId"
          element={<TransactionFormContainer />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

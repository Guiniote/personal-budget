import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeContainer from './components/HomeContainer'
import NewTransaction from './components/NewTransaction'
import TransactionContainer from './components/TransactionContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        <Route path="/transaction" element={<TransactionContainer />} />
        <Route path="/transaction/new" element={<NewTransaction />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

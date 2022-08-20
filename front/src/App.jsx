import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeContainer from './components/HomeContainer'
import TransactionContainer from './components/TransactionContainer'
import TransactionFormContainer from './components/TransactionFormContainer'
import UserFormContainer from './components/UserFormContainer'
import ProtectedRoute from './components/ProtectedRoute'
import UnprotectedRoute from './components/UnprotectedRoute'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route exact path="/" element={<HomeContainer />} />
          <Route path="/transaction" element={<TransactionContainer />} />
          <Route
            path="/transaction/new"
            element={<TransactionFormContainer />}
          />
          <Route
            path="/transaction/:transactionId"
            element={<TransactionFormContainer />}
          />
        </Route>
        <Route element={<UnprotectedRoute />}>
          <Route path="/login" element={<UserFormContainer />} />
          <Route
            path="/register"
            element={<UserFormContainer toBeRegister={1} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

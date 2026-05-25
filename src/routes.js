import {Routes,Route} from 'react-router-dom'

import TravelDetails from './components/TravelDetails'
import Login from './components/Login'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import ProtectedRoute from './components/ProtectedRoute'
import BookingPage from './components/BookingPage'
import PaymentPage from './components/PaymentPage'
import Success from './pages/Success'
import TransportBooking from './components/TransportBooking'
const AppRoutes=()=>(
<Routes>

<Route
path="/login"
element={<Login/>}
/>

<Route
path="/"
element={
<ProtectedRoute>
<Home/>
</ProtectedRoute>
}
/>
<Route
path="/transport"
element={
<ProtectedRoute>
<TransportBooking/>
</ProtectedRoute>
}
/>
<Route
path="/details/:id"
element={
<ProtectedRoute>
<TravelDetails/>
</ProtectedRoute>
}
/>

<Route
path="/favorites"
element={
<ProtectedRoute>
<Favorites/>
</ProtectedRoute>
}
/>

<Route
path="/booking"
element={
<ProtectedRoute>
<BookingPage/>
</ProtectedRoute>
}
/>

<Route
path="/payment"
element={
<ProtectedRoute>
<PaymentPage/>
</ProtectedRoute>
}
/>

<Route
path="/success"
element={
<ProtectedRoute>
<Success/>
</ProtectedRoute>
}
/>

</Routes>
)

export default AppRoutes
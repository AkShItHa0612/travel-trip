import {BrowserRouter} from 'react-router-dom'

import AppRoutes from './routes'
import {TravelProvider} from './context/TravelContext'

const App=()=>(
<BrowserRouter>

<TravelProvider>

<AppRoutes/>

</TravelProvider>

</BrowserRouter>
)

export default App
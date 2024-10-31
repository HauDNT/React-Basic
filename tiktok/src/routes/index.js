// Layouts
import { HeaderOnly } from '../components/Layouts'

// Components
import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'
import Search from '../pages/Search'

// Access without login
const publicRoutes = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/profile', element: Profile },
    { path: '/upload', element: Upload, layout: HeaderOnly },
    { path: '/search', element: Search, layout: null },
]

// Must login to access
const privateRoutes = [

]

export { publicRoutes, privateRoutes }
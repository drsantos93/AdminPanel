// we need a main layout
// then after main layout all the pages
import MainLayout from "../components/layouts/MainLayout"
import Dashboard from "../pages/Dashboard"
import Profiles from "../pages/Profiles"
const AdminRoute = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
            },
            {
                path: "/profiles",
                element: <Profiles/>
            }
        ]
    }
]

export default AdminRoute
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import RootLayout from './layouts/root-layout'
import IndexPage from './pages'
import AboutPage from './pages/about'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<IndexPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>,
  ),
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

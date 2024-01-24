import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import ProductList, {loader as productListLoader} from "./pages/ProductList"
import ErrorPage from './routes/error-page';
import ProductDetail, {loader as productDetailLoader} from './pages/ProductDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
    errorElement: <ErrorPage />,
    loader: productListLoader
  },
  {
    path: "/products/:productId",
    element: <ProductDetail />,
    loader: productDetailLoader
  }

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App

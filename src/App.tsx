import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProductList, {loader as productListLoader} from "./pages/ProductList"
import ErrorPage from './routes/error-page';
import ProductDetail, {loader as productDetailLoader} from './pages/ProductDetail';

import {store} from './store/redux-toolkit/store';
import {Provider} from 'react-redux';
import Cart from "./pages/Cart";

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
    },
    {
      path: "/cart",
      element: <Cart/>
    }
]);

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  )
}


export default App

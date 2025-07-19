import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";
import Cart from "../../pages/cart/cart";
import Product from "../../pages/product/product";
import { Provider } from "react-redux";
import { store } from "../../store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ComingSoon from "../../pages/coming-soon/coming-soon";
import NotFound from "../../pages/not-found/not-found";
import Home from "../../pages/Home/home";
import Category from "../../pages/category/category";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 10000,
    },
  },
});

function MainLayout() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col justify-between min-h-screen ">
          <BrowserRouter>
            {/* <Header/> */}
            <Navbar />
            {/* <Content/> */}
            <div className="container mx-auto max-w-screen-xl flex-1 md:py-10 py-7 px-2 ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/category/:category" element={<Category />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<ComingSoon />} />
                <Route path="/contact" element={<ComingSoon />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </div>

            {/* <Footer/> */}
            <Footer />
          </BrowserRouter>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default MainLayout;

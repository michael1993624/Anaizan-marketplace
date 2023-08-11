import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {
  HOMEPAGE,
  CHATBOT,
  CATEGORIES_PAGE,
  CATEGORY_FILTER_PAGE,
  PRODUCT_DETAIL_PAGE,
  ALL_CATEGORIES_PAGE,
  LOGIN,
  REGISTER,
  SELLER_HOME,
  SELLER_CONTACT,
  SELLER_PROMOTION,
  SELLER_PRODUCT_FEEDS,
  SELLER_PRODUIT,
  SELLER_PROFILE,
  CHECKOUT,
  SHOPING_CARD,
  PRODUCT_PAGE,
  COMPARISON_PAGE,
  OFFICIAL_SHOP_PAGE,
  REQUEST_FOR_QUOTATION_PAGE,
  INSTANT_FOR_QUOTE_PAGE,
  DROPSHIPPING_PAGE,
  RANKING_PRODUCT_PAGE,
  NEW_ARRIVALS_PAGE,
  SUB_CATEGORIE_PAGE,
  FAVOURITE_PRODUCT_PAGE,
  HOME_SELLER_ANAIZAN,
  PlATEFORM_PAGE,
  WHY_ANAIZAN_PAGE,
  ONLINE_STORE_PAGE,
  FULFILLEMENT_PAGE,
  B2B_ECOMMERCE_PAGE,
  ADVERTISSEMENT_PRODUCT_PAGE,
  WHOLESALE_PAGE,
  SELL_WORD_WIDE_PAGE,
  PRICING_PAGE,
  SUCCESS_STORY_PAGE,
} from "./settings/constants";

import { InLineLoader } from "./components/InlineLoader/InlineLoader";
import Home from "./pages/Home/Home";
// import ChatArea from "./pages/Chatbot/ChatArea";
import Categorie from "./pages/Categories/Categories";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SubCategorie from "./pages/SubCategories/SubCategories";
import OfficialShop from "./pages/OfficialShop/OfficialShop";
import CheckoutPage from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/Cart";
import RankingProduct from "./pages/RankingProduct/RankingProduct";
import DropShipping from "./pages/DropShipping/DropShipping";
import RequestForQuotation from "./pages/RequestForQuotation/RequestForQuotation";
import InstantQuote from "./pages/IntantForQuote/IntantForQuote";
import ProductFavourite from "./pages/FavouriteProduct/FavouriteProduct";
import Comparison from "./pages/Comparison/Comparison";
import HomeSeller from "./pages/SellerPage/SellerHome/SellerHome";
import ProductsSeller from "./pages/SellerPage/Product/Product";
import ProductFeeds from "./pages/SellerPage/ProductFeed/ProductFeed";
import ProductPromotion from "./pages/SellerPage/PromotionSeller/PromotionSeller";
import ProfileSeller from "./pages/SellerPage/Profile/Profile";
import SellerContact from "./pages/SellerPage/SellerContact/SellerContact";


import LayoutHome from "./Layouts/LayoutHome";
import LayoutCart from "./Layouts/LayoutCart";
import LayoutCheckout from "./Layouts/LayoutCheckout";
import LayoutSellerShop from "./Layouts/LayoutSellerShop";
import HomeBody from "./pages/seller.anaizan.com/src/pages/Home";
import LayoutSeller from "./pages/seller.anaizan.com/src/components/layout/Layout";
import Plateform from "./pages/seller.anaizan.com/src/pages/plateform";
import WhyAnaizan from "./pages/seller.anaizan.com/src/pages/whyAnaizan/whyAnaizan";
import OnlineStore from "./pages/seller.anaizan.com/src/pages/onlineStore/OnlineStore";
import Fulfillment from "./pages/seller.anaizan.com/src/pages/fulfillement/Fulfillement";
import B2bBody from "./pages/seller.anaizan.com/src/pages/b2bCommerce/B2BEcommerce";
import Advertise from "./pages/seller.anaizan.com/src/pages/advertise/advertise";
import WholesaleBody from "./pages/seller.anaizan.com/src/pages/wholesale/WholesaleBody";
import SellWorldWideBody from "./pages/seller.anaizan.com/src/pages/sellWorldWide/SellWorldWideBody";
import PricingBody from "./pages/seller.anaizan.com/src/pages/pricing/PricingBody";
import StoryBody from "./pages/seller.anaizan.com/src/pages/SuccessStory/StoryBody";

import LayoutAuth from "./Layouts/layoutAuth/layoutAuth";

import Registration from "./pages/auth/Register/Register";
import Login from "./pages/auth/Login/Login";




//function protected route
const ProtectedRoute = ({ isAuth, children }) => {
  isAuth = true;
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
}


const ROUTES = () => {
  return (
    <Suspense fallback={<InLineLoader />}>
      <Router>
        <Routes>
          {/* login page */}
          <Route path={REGISTER} element={
            <ProtectedRoute isAuth={true}>
              <LayoutAuth>
                <Suspense fallback={<InLineLoader />}>
                  <Registration />
                </Suspense>
              </LayoutAuth>
            </ProtectedRoute>
          } />

          {/* Register page */}
          <Route path={LOGIN} element={
            <ProtectedRoute isAuth={true}>
              <LayoutAuth>
                <Suspense fallback={<InLineLoader />}>
                  <Login />
                </Suspense>
              </LayoutAuth>
            </ProtectedRoute>
          } />
          {/* chatbot page */}
          {/* <Route path={CHATBOT} element={
            <ProtectedRoute isAuth={true}>
              <LayoutAuth>
                <Suspense fallback={<InLineLoader />}>
                  <ChatArea />
                </Suspense>
              </LayoutAuth>
            </ProtectedRoute>
          } /> */}
          {/* home page */}
          <Route index element={
            <ProtectedRoute isAuth={true}>
              <LayoutHome>
                <Suspense fallback={<InLineLoader />}>
                  <Home />
                </Suspense>
              </LayoutHome>
            </ProtectedRoute>
          } />
          {/* categorie page */}
          <Route path={CATEGORIES_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutHome>
                <Suspense fallback={<InLineLoader />}>
                  <Categorie />
                </Suspense>
              </LayoutHome>
            </ProtectedRoute>
          } />
          {/* product details page */}
          <Route path={PRODUCT_DETAIL_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutHome>
                <Suspense fallback={<InLineLoader />}>
                  <ProductDetails />
                </Suspense>
              </LayoutHome>
            </ProtectedRoute>
          } />
          {/* subcategorie page */}
          <Route path={SUB_CATEGORIE_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutHome>
                <Suspense fallback={<InLineLoader />}>
                  <SubCategorie />
                </Suspense>
              </LayoutHome>
            </ProtectedRoute>
          } />
          {/* official shop page */}
          <Route path={OFFICIAL_SHOP_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutHome>
                <Suspense fallback={<InLineLoader />}>
                  <OfficialShop />
                </Suspense>
              </LayoutHome>
            </ProtectedRoute>
          } />


          {/* cart page */}
          <Route path={SHOPING_CARD} element={
            <ProtectedRoute isAuth={true}>
              <LayoutCart>
                <Suspense fallback={<InLineLoader />}>
                  <Cart />
                </Suspense>
              </LayoutCart>
            </ProtectedRoute>
          } />

          {/* checkout page */}
          <Route path={CHECKOUT} element={
            <ProtectedRoute isAuth={true}>
              <LayoutCheckout>
                <Suspense fallback={<InLineLoader />}>
                  <CheckoutPage />
                </Suspense>
              </LayoutCheckout>
            </ProtectedRoute>
          } />
          {/* ranking page */}
          <Route path={RANKING_PRODUCT_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutHome>
                <Suspense fallback={<InLineLoader />}>
                  <RankingProduct />
                </Suspense>
              </LayoutHome>
            </ProtectedRoute>
          } />

          {/* dropshipping page */}
          <Route path={DROPSHIPPING_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutHome>
                <Suspense fallback={<InLineLoader />}>
                  <DropShipping />
                </Suspense>
              </LayoutHome>
            </ProtectedRoute>
          } />


          {/* request for quotation page */}
          <Route path={REQUEST_FOR_QUOTATION_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutHome>
                <Suspense fallback={<InLineLoader />}>
                  <RequestForQuotation />
                </Suspense>
              </LayoutHome>
            </ProtectedRoute>
          } />


          {/* Instant quote page */}
          <Route path={INSTANT_FOR_QUOTE_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutHome>
                <Suspense fallback={<InLineLoader />}>
                  <InstantQuote />
                </Suspense>
              </LayoutHome>
            </ProtectedRoute>
          } />

          {/* favourite page */}
          <Route path={FAVOURITE_PRODUCT_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutHome>
                <Suspense fallback={<InLineLoader />}>
                  <ProductFavourite />
                </Suspense>
              </LayoutHome>
            </ProtectedRoute>
          } />

          {/* comparison page */}
          <Route path={COMPARISON_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutHome>
                <Suspense fallback={<InLineLoader />}>
                  <Comparison />
                </Suspense>
              </LayoutHome>
            </ProtectedRoute>
          } />

          {/* Seller pages */}

          {/* home page */}
          <Route path={SELLER_HOME} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSellerShop>
                <Suspense fallback={<InLineLoader />}>
                  <HomeSeller />
                </Suspense>
              </LayoutSellerShop>
            </ProtectedRoute>
          } />

          {/* product page */}
          <Route path={SELLER_PRODUIT} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSellerShop>
                <Suspense fallback={<InLineLoader />}>
                  <ProductsSeller />
                </Suspense>
              </LayoutSellerShop>
            </ProtectedRoute>
          } />


          {/* product feed page */}
          <Route path={SELLER_PRODUCT_FEEDS} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSellerShop>
                <Suspense fallback={<InLineLoader />}>
                  <ProductFeeds />
                </Suspense>
              </LayoutSellerShop>
            </ProtectedRoute>
          } />

          {/* product feed page */}
          <Route path={SELLER_PROMOTION} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSellerShop>
                <Suspense fallback={<InLineLoader />}>
                  <ProductPromotion />
                </Suspense>
              </LayoutSellerShop>
            </ProtectedRoute>
          } />

          {/* profil page */}
          <Route path={SELLER_PROFILE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSellerShop>
                <Suspense fallback={<InLineLoader />}>
                  <ProfileSeller />
                </Suspense>
              </LayoutSellerShop>
            </ProtectedRoute>
          } />

          {/* seller contact page */}
          <Route path={SELLER_CONTACT} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSellerShop>
                <Suspense fallback={<InLineLoader />}>
                  <SellerContact />
                </Suspense>
              </LayoutSellerShop>
            </ProtectedRoute>
          } />


          {/* seller.anaizan.com */}
          
          {/* seller home */}
          <Route path={HOME_SELLER_ANAIZAN} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSeller>
                <Suspense fallback={<InLineLoader />}>
                  <HomeBody />
                </Suspense>
              </LayoutSeller>
            </ProtectedRoute>
          } />

          {/* plateform */}
          <Route path={PlATEFORM_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSeller>
                <Suspense fallback={<InLineLoader />}>
                  <Plateform />
                </Suspense>
              </LayoutSeller>
            </ProtectedRoute>
          } />

          {/* why anaizan */}
          <Route path={WHY_ANAIZAN_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSeller>
                <Suspense fallback={<InLineLoader />}>
                  <WhyAnaizan />
                </Suspense>
              </LayoutSeller>
            </ProtectedRoute>
          } />

          {/* oneline */}
          <Route path={ONLINE_STORE_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSeller>
                <Suspense fallback={<InLineLoader />}>
                  <OnlineStore />
                </Suspense>
              </LayoutSeller>
            </ProtectedRoute>
          } />

          {/* fulfillement */}
          <Route path={FULFILLEMENT_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSeller>
                <Suspense fallback={<InLineLoader />}>
                  <Fulfillment />
                </Suspense>
              </LayoutSeller>
            </ProtectedRoute>
          } />

          {/* b2b commerce */}
          <Route path={B2B_ECOMMERCE_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSeller>
                <Suspense fallback={<InLineLoader />}>
                  <B2bBody />
                </Suspense>
              </LayoutSeller>
            </ProtectedRoute>
          } />

          {/* advertissement */}
          <Route path={ADVERTISSEMENT_PRODUCT_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSeller>
                <Suspense fallback={<InLineLoader />}>
                  <Advertise />
                </Suspense>
              </LayoutSeller>
            </ProtectedRoute>
          } />

          {/* wholesale */}
          <Route path={WHOLESALE_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSeller>
                <Suspense fallback={<InLineLoader />}>
                  <WholesaleBody />
                </Suspense>
              </LayoutSeller>
            </ProtectedRoute>
          } />

          {/* sell world wide */}
          <Route path={SELL_WORD_WIDE_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSeller>
                <Suspense fallback={<InLineLoader />}>
                  <SellWorldWideBody />
                </Suspense>
              </LayoutSeller>
            </ProtectedRoute>
          } />

          {/* pricing */}
          <Route path={PRICING_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSeller>
                <Suspense fallback={<InLineLoader />}>
                  <PricingBody />
                </Suspense>
              </LayoutSeller>
            </ProtectedRoute>
          } />

          {/* success story */}
          <Route path={SUCCESS_STORY_PAGE} element={
            <ProtectedRoute isAuth={true}>
              <LayoutSeller>
                <Suspense fallback={<InLineLoader />}>
                  <StoryBody />
                </Suspense>
              </LayoutSeller>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default ROUTES;

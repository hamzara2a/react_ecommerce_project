import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./Utils/Firebase/Firebase";
import { setCurrentUser } from "./Store/User/User.action";
import Home from "./Routes/Home/Home";
import Navigation from "./Routes/Navigation/Navigation";
import Authentication from "./Routes/Authentication/Authentication";
import Shop from "./Routes/Shop/Shop";
import Checkout from "./Routes/Checkout/Checkout";

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user)
        }
        // setCurrentUser is now returning an object, but we still need to dispatch the object
        dispatch(setCurrentUser(user))
    });

    return unsubscribe; //"unsubscribe whenever you unmount"
    }, [dispatch])
  //passing dispatch in useEffect is not really necessary. useDispatch is always going to be the same reference

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} /> {/* the * means 'match anything after shop/' */}
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
 );

}

export default App;










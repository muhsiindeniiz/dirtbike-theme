import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Loading from "./components/Loading";
import PageFramerMotion from "./components/PageFramerMotion";

const App = () => {
  const Home = React.lazy(() => import("./pages/Home"));
  const About = React.lazy(() => import("./pages/About"));
  const Contact = React.lazy(() => import("./pages/Contact"));
  const Reservation = React.lazy(() => import("./pages/Reservation"));
  const Calendar = React.lazy(() => import("./pages/Calendar"));
  const Races = React.lazy(() => import("./pages/Races"));

  return (
    <PageFramerMotion>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/races" element={<Races />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </PageFramerMotion>
  );
};

export default App;

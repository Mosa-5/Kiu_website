import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout";
import NotFound from "./pages/NotFound";
import { Loader2 } from "lucide-react";
import Students from "./pages/Students";
import Research from "./pages/Research";
import { preloadCriticalImages } from "./utils/imagePreloader";

const CampusPage = lazy(() => import("./pages/Campus"));
const News = lazy(() => import("./pages/News"));
const SingleNews = lazy(() => import("./pages/SIngleNews"));
const Home = lazy(() => import("./pages/Home"));
const SingleProgram = lazy(() => import("./pages/SingleProgram"));
const Projects = lazy(() => import("./pages/Projects"));
const YouthUni = lazy(() => import("./pages/YouthUni"));
const Frontiers = lazy(() => import("./pages/Frontiers"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Vacancies = lazy(() => import("./pages/Vacancies"));
const Admission = lazy(() => import("./pages/Admission"));

const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-[70vh] sm:min-h-screen">
    <Loader2 className="w-13 h-13 sm:w-20 sm:h-20 animate-spin text-main" />
  </div>
);

function App() {
  useEffect(() => {
    preloadCriticalImages();
  }, []);

  return (
    <Routes>
      {/* Redirect root to default language */}
      <Route path="/" element={<Navigate to="/en" replace />} />

      {/* Language-prefixed routes */}
      <Route path="/:lang" element={<Layout />}>
        <Route
          path="news"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <News />
            </Suspense>
          }
        />
        <Route
          path="news/:id"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <SingleNews />
            </Suspense>
          }
        />
        <Route
          path="programs/:id"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <SingleProgram />
            </Suspense>
          }
        />
        <Route
          path="projects"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="projects/youthuni"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <YouthUni />
            </Suspense>
          }
        />
        <Route
          path="projects/frontiers"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Frontiers />
            </Suspense>
          }
        />
        <Route
          path="about-us"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="programs"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Programs />
            </Suspense>
          }
        />
        <Route
          path="vacancies"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Vacancies />
            </Suspense>
          }
        />
        <Route
          path="admission"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Admission />
            </Suspense>
          }
        />
        <Route
          path="campus"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <CampusPage />
            </Suspense>
          }
        />
        <Route
          path="students"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Students />
            </Suspense>
          }
        />
        <Route
          path="research"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Research />
            </Suspense>
          }
        />
        <Route
          index
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Home />
            </Suspense>
          }
        />
      </Route>
      {/* Catch-all route for any other unmatched paths */}
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;

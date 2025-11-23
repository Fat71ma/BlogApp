import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
// import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetail"; 
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          

        
          {/* Dynamic Post Details Page */}
          <Route path="/stories/:id" element={<PostDetails />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
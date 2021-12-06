import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { getBlogs } from './services/blogs';
import BlogCard from './components/BlogCard/BlogCard';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchData();
  }, []);
  return (
    <section className="main">
      <Header />
      {blogs.map((blogs) => {
        return <BlogCard key={blogs.id} {...blogs} />;
      })}

      <Footer />
    </section>
  );
}

export default App;

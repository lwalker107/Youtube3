import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";


export default function Home() {
  return (
    <section className='font-bold'>
      <Navbar />
      <Feed />
      <Footer />
    </section>
  );
}

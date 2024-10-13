import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";


export default async function Home() {
  // fetch() method takes an argument, which is the path to the resource I want to fetch
  // returns a response, which I store in the res variable
  const res = await fetch('https://www.googleapis.com/youtube/v3/search');
  const videos = await res.json();


  return (
    <section className='font-bold'>
      <Feed videos={videos} />
    </section>
  );
}

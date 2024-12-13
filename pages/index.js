import Navbar from "./navbar";
import Jumbotorn from "./jumbotorn";
import Works from "./works";
import Trusts from "./trusts";
import Logos from "./logos";
import Sections from "./sections";
import Products from "./products";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Jumbotorn/>
      <div class="divide-y divide-gray-500">
        <Works/>
        <Trusts/>
        <div className="h-1"></div>
      </div>
      <Logos/>
      <Sections/>
      <Products/>
      <div className="h-screen"></div>
    </div>
  );
}

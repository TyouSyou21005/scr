import Nav from "./navigationMenu"
import images from "../images/dove.png"
export default function Header() {
    return (
      <header >
        <h1>Birdwatching</h1>
        <img src={images} alt="a simple dove logo"/>
        <Nav />
      </header>
    );
  }
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./data";
import "yet-another-react-lightbox/styles.css";
import { Captions, Download, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function App() {
  const [index, setIndex] = useState<number>(-1);

  return (
    <div className="container">
      <header>
        <h1>Pawfect Memories 🐶📸</h1>
        <p>Treasure your beloved dogs with our beautiful gallery.</p>
      </header>

      {/* Image Gallery */}
      <div className="gallery">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.title}
            className="gallery-img"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* Lightbox for viewing images */}
      <Lightbox
        plugins={[Captions, Download, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </div>
  );
}

export default App;

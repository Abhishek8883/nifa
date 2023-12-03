import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import './gallery.css';
import photos from "./photos";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const gallery = () => {

    const [index, setIndex] = useState(-1);


    return (
        <>
        <div className="gallery_container">
            <h1>Students Work</h1>
            <PhotoAlbum photos={photos} layout="rows"  onClick={({ index }) => setIndex(index)} />
        </div>

        <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow]}
      />
        </>
    )
}

export default gallery
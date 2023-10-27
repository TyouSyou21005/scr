import img1 from '../images/favorite-1_th.jpg'
import img2 from '../images/favorite-2_th.jpg'
import img3 from '../images/favorite-3_th.jpg'
import img4 from '../images/favorite-4_th.jpg'
import React from 'react';
export default function Image() {
    return (

      <aside>
        <h2>Favourite photos</h2>

        <a href="favorite-1.jpg"><img src={img1} alt="Small black bird, black claws, long black slender beak, links to larger version of the image"/></a >
        <a href="favorite-2.jpg">< img src={img2} alt="Top half of a pretty bird with bright blue plumage on neck, light colored beak, blue headdress, links to larger version of the image"/></a >
        <a href="favorite-3.jpg">< img src={img3} alt="Top half of a large bird with white plumage, very long curved narrow light colored break, links to larger version of the image"/></a >
        <a href="favorite-4.jpg">< img src={img4} alt="Large bird, mostly white plumage with black plumage on back and rear, long straight white beak, links to larger version of the image"/></a >
      </aside>
      );
  }
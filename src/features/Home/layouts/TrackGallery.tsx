import React from "react";

const TrackGallery = () => {
  return (
    <div className="py-20 w-full bg-[#eee]">
      <h3 className="text-4xl text-center font-semibold mb-14">
        Track Gallery
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[1440px] mx-auto">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://motocross.progressionstudios.com/wp-content/uploads/elementor/thumbs/bigstock-197578369-nhh9q5sb14yojbuawdvtawr4qllfde416h8oy11v24.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://motocross.progressionstudios.com/wp-content/uploads/elementor/thumbs/motocross-1927421_1920-nhh9q9jnsh3ttrouafibkvsz452w86iyizumv4wad8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://motocross.progressionstudios.com/wp-content/uploads/elementor/thumbs/bigstock-Gdansk-Poland-September-159088721-nhhd9f5obn68eqzlse7fvsns2mcfi5brccxa0od0n0.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://motocross.progressionstudios.com/wp-content/uploads/elementor/thumbs/bigstock-Motocross-Racing-109373804-nhhd9d9zxz3nrj2c3de6qt4uvulp2r4ao3mb24fszg.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://motocross.progressionstudios.com/wp-content/uploads/elementor/thumbs/bigstock-Enduro-Bike-Rider-108520886-nhhdda9sf4go51dj82c84tjzznar5co17hh51mmr24.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://motocross.progressionstudios.com/wp-content/uploads/elementor/thumbs/motorsport-2298685_1920-nhhd9bebkb134b52eckxltlxp2uyncwtzubc3kilbw.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TrackGallery;

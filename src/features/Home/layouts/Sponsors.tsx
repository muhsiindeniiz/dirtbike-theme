import React from "react";
import argylmx from "../../../assets/sponsors/argylmx_logo130.jpg";
import hyperx from "../../../assets/sponsors/HyperX.jpg";
import capitolyamaha from "../../../assets/sponsors/capitolyamaha.jpg";
import crossgroup from "../../../assets/sponsors/crossgroup.jpg";
import garrahan from "../../../assets/sponsors/garrahan.gif";
import rmatv from "../../../assets/sponsors/rmatv.jpg";
import suspension from "../../../assets/sponsors/707suspension.jpg";

const Sponsors = () => {
  const sponsors = [
    argylmx,
    hyperx,
    capitolyamaha,
    crossgroup,
    garrahan,
    rmatv,
    suspension,
  ];

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <h6 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-relaxed text-blue-gray-900 mb-8">
          SPONSORED BY
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {sponsors &&
            sponsors.map((resp) => (
              <img
                alt="sponsor"
                loading="lazy"
                height={256}
                key={resp}
                decoding="async"
                data-nimg="1"
                className="object-contain"
                src={resp}
                style={{ color: "transparent" }}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

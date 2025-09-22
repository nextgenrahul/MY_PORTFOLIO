import { abilities } from "../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ LazyLoadImagePath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
             <LazyLoadImage  effect="blur" src={LazyLoadImagePath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
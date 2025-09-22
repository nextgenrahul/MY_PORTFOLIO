import TitleHeader from "../components/TitleHeader";
import { techStack } from "../constants";

const TechStack = () => (
  <div className="w-full padding-x-lg mt-30" id="skills">
    <TitleHeader
      title="How I Can Contribute & My Key Skills"
      sub="🤝 What I Bring to the Table"
    />
    <div className="mx-auto my-20 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {techStack.map(({ imgPath, title }) => (
        <div
          key={title}
          className="card-border rounded-xl p-4 flex flex-col gap-2"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} className="w-14 h-14 md:w-16 md:h-16" />
          </div>
          <h3 className="text-white-50 text-[16px] font-semibold mt-1">{title}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default TechStack;




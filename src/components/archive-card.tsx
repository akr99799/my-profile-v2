import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
import { FaRegFolder } from "react-icons/fa";

interface Props {
  title: string;
  content: string;
  githubLink: string;
  deployedLink: string;
  techStack: string[];
}

export default function ArchiveCard({
  title,
  content,
  githubLink,
  deployedLink,
  techStack,
}: Props) {
  return (
    <a href={deployedLink} target="_blank">
      <div className="w-full h-96 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center text-4xl">
          <FaRegFolder className="text-textGreen" />
          <div className="flex gap-2 text-2xl">
            <a
              href={githubLink}
              target="_blank"
              className="hover:text-textGreen duration-300"
            >
              <TbBrandGithub />
            </a>
            <a
              href={deployedLink}
              target="_blank"
              className="hover:text-textGreen duration-300"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
        <h2 className="text-xl font-titleFont font-semibold group-hover:text-textGreen tracking-wide">
          {title}
        </h2>
        <p className="text-sm mt-3">{content}</p>
        <ul className="flex justify-around items-center flex-wrap text-xs md:text-sm text-textDark">
          {techStack.map((tech, index) => (
            <li key={`${tech}-${index}`}>{tech}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}
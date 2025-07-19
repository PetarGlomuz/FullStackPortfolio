import Image from "next/image";
import Link from "next/link";
import Badge from "./badge";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tools: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  tools,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        {tools.map((tool) => (
          <Badge key={tool} text={tool} />
        ))}

        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

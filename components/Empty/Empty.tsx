import Image from "next/image";

interface EmptyProps {
  icon: string;
  title: string;
}

const Empty = ({ icon, title }: EmptyProps) => {
  return (
    <div className="w-full h-full text-center flex flex-col items-center justify-center mt-2">
      <Image
        alt="empty-image"
        src={icon}
        title={title}
        width={200}
        height={200}
      />
      <span className="text-xl">{title}</span>
    </div>
  );
};

export default Empty;

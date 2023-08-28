interface HeadingProps {
  title: string;
  description: string;
  icon: string;
  iconColor?: string;
  bgColor?: string;
}

const Heading = ({
  title,
  description,
  icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
      <div
        className={`p-4 w-fit flex items-center justify-center rounded-full ${bgColor} `}
      >
        <i className={`text-2xl ${icon} ${iconColor} `} />
      </div>
      <div>
        <h2 className={`text-3xl font-bold ${iconColor}`}>{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Heading;

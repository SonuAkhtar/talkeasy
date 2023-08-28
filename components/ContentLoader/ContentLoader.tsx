import TypewriteComponent from "typewriter-effect";

interface LoaderProps {
  title: string;
}

const ContentLoader = ({ title }: LoaderProps) => {
  return (
    <div className="text-center flex items-center p-10 rounded-3xl h-60 w-full md:h-80 flex items-center justify-center bg-[#EDF8F6] border border-black/2 shadow-md text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-green-600">
      <TypewriteComponent
        options={{
          strings: title,
          autoStart: true,
          loop: true,
          delay: 40,
        }}
      />
    </div>
  );
};

export default ContentLoader;

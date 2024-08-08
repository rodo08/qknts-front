import { IllustrationHome } from "../components/Icons";

const HomePage = () => {
  return (
    // <div className="flex items-center justify-center h-[calc(100vh-50vh)] flex-col px-4 pt-10">
    <div className="flex items-center justify-center  flex-col px-4 pt-10 pb-20">
      <IllustrationHome className="w-1/2 " />
      <h1 className="text-3xl text-center p-6 font-light italic">
        Organize Your Creativity with
        <strong className="text-white italic text-3xl"> Quick Notes!</strong>
      </h1>
      <p className="max-w-md text-center">
        <b className="text-white">Quick Notes</b> is your essential tool for
        staying organized and productive. Access your notes anytime, anywhere
        with our intuitive and user-friendly app. Streamline your life and focus
        on what truly matters. <br />
        <h1 className="text-white text-2xl font-semibold pt-4">
          Start organizing with Quick Notes today!
        </h1>
      </p>
    </div>
  );
};
export default HomePage;

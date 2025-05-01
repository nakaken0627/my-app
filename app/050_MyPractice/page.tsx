import SearchFilter from "./components/SearchFilter";
import TextForm from "./components/TextForm";
import GenderForm from "./components/GenderForm";
import DarkModeToggle from "./components/DarkModeToggle";
// import ImageSwitcher from "./components/ImageSwitcher";

const MyPractice: React.FC = () => {
  return (
    <>
      <SearchFilter />
      <hr />
      <TextForm />
      <hr />
      <GenderForm />
      <hr />
      {/* <ImageSwitcher /> */}
      <hr />
      <DarkModeToggle />
      <hr />
    </>
  );
};

export default MyPractice;

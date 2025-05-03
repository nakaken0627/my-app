import SearchFilter from "./components/SearchFilter";
import TextForm from "./components/TextForm";
import GenderForm from "./components/GenderForm";
import DarkModeToggle from "./components/DarkModeToggle";
import DoubleNumber from "./components/DoubleNumber";

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
      <br />
      <hr />
      <DoubleNumber />
    </>
  );
};

export default MyPractice;

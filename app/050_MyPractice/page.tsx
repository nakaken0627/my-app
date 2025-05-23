import SearchFilter from "./components/SearchFilter";
import TextForm from "./components/TextForm";
import GenderForm from "./components/GenderForm";
import DarkModeToggle from "./components/DarkModeToggle";
import DoubleNumber from "./components/DoubleNumber";
import EmojiRandomizer from "./components/EmojiRandomaizer";
import DynamicTags from "./components/×-DynamicTags";
import FavoriteAnimal from "./components/FavoriteAnimal";
import ErrorDisplay from "./components/ErrorDisplay";
import WorkoutSelector from "./components/WorkoutSelector";
import TextPreview from "./components/TextPreview";
import StarRating from "./components/×-StarRating";
import LoginForm from "./components/LoginForm";
import InputToggle from "./components/InputToggle";
import LikeButton from "./components/LikeButton";
import MuscleTrainingApp from "./components/MuscleTrainingApp";
import ZipcodeForm from "./components/ZipcodeForm";
import ProductSearch from "./components/Sample";
import ColorDisplay from "./components/ ColorDisplay";
import ColorPicker from "./components/ColorPicker";

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
      <hr />
      <EmojiRandomizer />
      <hr />
      <DynamicTags />
      <hr />
      <FavoriteAnimal />
      <hr />
      <ErrorDisplay />
      <hr />
      <WorkoutSelector />
      <hr />
      <TextPreview />
      <hr />
      <StarRating />
      <hr />
      <LoginForm />
      <hr />
      <InputToggle />
      <hr />
      <LikeButton />
      <hr />
      <MuscleTrainingApp />
      <hr />
      <ZipcodeForm />
      <hr />
      <ProductSearch />
      <hr />
      <ColorDisplay />
      <hr />
      <ColorPicker />
    </>
  );
};

export default MyPractice;

export const Algorithm = () => {
  const handleSplit = (texts: string, separator: string) => {
    return texts.split(separator);
  };
  console.log(handleSplit("Apple,Banana,Cherry", ","));
  return <div></div>;
};

import Card from "./Card";

const Notes = () => {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl w-max font-semibold h-max md:mt-3 text-center md:text-left">
        Your Notes
      </h1>
      <div className="mt-10 flex flex-wrap gap-10 w-full h-max items-center justify-center md:items-start md:justify-start">
        <Card/>      
      </div>
    </div>
  );
};

export default Notes;

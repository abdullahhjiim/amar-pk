import { ReactTyped } from "react-typed";

const SearchCm = () => {
  return (
    <div className="w-[400px]">
      <ReactTyped
        strings={[
          "এখানে খুঁজুন ... পাকুন্দিয়া সম্পর্কে ",
          "এখানে খুঁজুন ... রক্তদাতা ",
          "এখানে খুঁজুন ... শিক্ষা ",
          "এখানে খুঁজুন ... চিকিৎসা ",
        ]}
        typeSpeed={100}
        backSpeed={80}
        attr="placeholder"
        loop
      >
        <input
          type="text"
          placeholder="এখানে খুঁজুন ... "
          className="py-2 pl-10 pr-4  block w-full rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
        />
      </ReactTyped>
    </div>
  );
};

export default SearchCm;

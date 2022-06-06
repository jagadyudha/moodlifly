const RadioButton = ({ onChange }) => {
  return (
    <>
      <form
        className="flex items-center md:justify-center justify-between md:space-x-7"
        onChange={onChange}
      >
        <p className="text-primary font-bold">IYA</p>
        <input
          className="w-12 h-12 accent-primary"
          type="radio"
          value="1"
          name="gender"
        />
        <input
          className="w-10 h-10 accent-primary"
          type="radio"
          value="2"
          name="gender"
        />
        <input className="w-8 h-8" type="radio" value="3" name="gender" />
        <input
          className="w-10 h-10 accent-purple-600"
          type="radio"
          value="5"
          name="gender"
        />
        <input
          className="w-12 h-12 accent-purple-600"
          type="radio"
          value="5"
          name="gender"
        />
        <p className=" text-purple-600 font-bold">TIDAK</p>
      </form>

      <div className="flex md:hidden justify-between mt-2 mx-2">
        <p className="text-primary font-bold">IYA</p>
        <p className=" text-purple-600 font-bold">TIDAK</p>
      </div>
    </>
  );
};

export default RadioButton;

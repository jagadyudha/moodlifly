const RadioButton = ({ onChange }) => {
  return (
    <form
      className="flex items-center justify-center space-x-7 accent-primary"
      onChange={onChange}
    >
      <p>Mengalami</p>
      <input className="w-12 h-12 " type="radio" value="1" name="gender" />
      <input className="w-10 h-10" type="radio" value="2" name="gender" />
      <input className="w-8 h-8" type="radio" value="3" name="gender" />
      <input className="w-10 h-10" type="radio" value="5" name="gender" />
      <input className="w-12 h-12" type="radio" value="5" name="gender" />
      <p>Tidak Mengalami</p>
    </form>
  );
};

export default RadioButton;

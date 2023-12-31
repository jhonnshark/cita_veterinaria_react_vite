/* eslint-disable react/prop-types */
const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold rounded-md mb-5">
      {children}
    </div>
  );
};

export default Error;

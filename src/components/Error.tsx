import { Button } from "./ui/button";

const Error = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 w-[55%] h-30 mt-7 p-5 rounded-md">
      <div className="text-center">
         <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Not Found</h1>
         <p className="text-lg text-gray-600">
         The page you are looking for might be in another castle.
         </p>
        {/* You can add a link to the home page or any other relevant page */}
         <p className="mt-4">
          <Button className="text-xl hover:bg-blue-800 hover:text-white rounded-[10px] font-senserif" type = "submit" onClick= {()=>window.location.href = "/"} >Go to Home</Button>
       </p>
      </div>
    </div>
  );
};

export default Error;

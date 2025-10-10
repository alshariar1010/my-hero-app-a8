import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
    <div className="max-w-md w-full px-4 text-center">
      <img src="/error.png" alt="" />
      <h1 className="text-3xl font-bold mb-4 text-[#001931] inter">Oops, page not found!</h1>
      <p className="text-[#627382] mb-8 inter">The page you are looking for is not available.</p>
      <Link to="/" className="bg-gradient-to-r from-[#6d37e5] to-[#9f62f2] text-white px-8 py-2 rounded-sm hover:bg-purple-700">Go Back!</Link>
    </div>
  </div>
);

export default NotFound;
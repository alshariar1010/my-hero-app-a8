import { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appsData } from '../data/appsData';
import AppCard from '../components/AppCard';
import LoadingSpinner from '../components/LoadingSpinner';

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApps, setFilteredApps] = useState(appsData);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  const handleSearch = useCallback((e) => {
    const term = e.target.value;
    setLoading(true);

    // previous timeout
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // new debounce
    debounceRef.current = setTimeout(() => {
      const filtered = appsData.filter(app => 
        app.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchTerm(term);
      setFilteredApps(filtered);
      setLoading(false);
    }, 300);
  }, []);  // Empty deps for stability

  // timeout on unmount cl
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);  // Empty deps for unmount

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2 text-[#001931] text-center inter">Our All Applications</h1>
        <p className="text-[#627382] mb-8 text-center inter">Explore All Apps on the Market developed by us. We code for Millions</p>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <span className="text-[#001931] font-semibold text-2xl">({filteredApps.length}) Apps Found</span>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search Apps"
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border border-[#D2D2D2] rounded-sm w-full focus:outline-none focus:ring-2 focus:ring-[#D2D2D2]"
            />

            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#627382]"><i class="fa-solid fa-magnifying-glass"></i></span>
          </div>
        </div>
        {loading ? (
          <LoadingSpinner />



          // app not found
        ) : filteredApps.length === 0 ? (
          <div className="flex flex-col justify-center items-center text-center py-12">
            <span className="text-6xl mb-4">
              <img src="/Appe.png" alt="" />
            </span>
            <p className="text-gray-500 text-xl inter">No App Found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {filteredApps.map(app => <AppCard key={app.id} app={app} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
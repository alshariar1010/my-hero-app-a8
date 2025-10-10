import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { appsData } from '../data/appsData';
import AppCard from '../components/AppCard';
import LoadingSpinner from '../components/LoadingSpinner';


// my installation
const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('High-Low');
  const [loading, setLoading] = useState(false);

  //effect
  useEffect(() => {
    let apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    if (apps.length === 0) {
      const sample = appsData[0];
      localStorage.setItem('installedApps', JSON.stringify([sample]));
      apps = [sample];
    }
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    let apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    apps = apps.filter(a => a.id !== id);
    localStorage.setItem('installedApps', JSON.stringify(apps));
    setInstalledApps(apps);
    toast.success('App uninstalled successfully!');
  };

  const handleSort = (e) => {
    setLoading(true);
    const order = e.target.value;
    setSortOrder(order);
    setTimeout(() => {
      let apps = [...installedApps];
      apps.sort((a, b) => {
        if (order === 'High-Low') return b.downloads - a.downloads;
        return a.downloads - b.downloads;
      });
      setInstalledApps(apps);
      setLoading(false);
    }, 500);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-center inter">Your Installed Apps</h1>
        <p className="text-[#627382] mb-8 text-center inter">Explore All Trending Apps on the Market developed by us</p>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <span className="text-[#001931] font-bold text-2xl inter">{installedApps.length} Apps Found</span>
          <select 
            value={sortOrder} 
            onChange={handleSort} 
            className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#627382]"
          >
            <option value="High-Low inter">High-Low (Downloads)</option>
            <option value="Low-High inter">Low-High (Downloads)</option>
          </select>
        </div>
        {installedApps.length === 0 ? (
          <p className="text-center text-gray-500 inter">No apps installed yet.</p>
        ) : (
          <div className="w-full">
            {installedApps.map(app => (
              <AppCard key={app.id} app={app} showUninstall={true} onUninstall={handleUninstall} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInstallation;
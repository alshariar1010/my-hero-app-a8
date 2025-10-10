import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { toast } from 'react-hot-toast';
import { appsData } from '../data/appsData';
import LoadingSpinner from '../components/LoadingSpinner';

const AppNotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
    <div className="max-w-md w-full px-4 text-center">
      <div className="p-8 mx-auto mb-8 flex items-center justify-center">
        <div>
          <img src="/Appe.png" alt="" />
        </div>
        <div className="ml-4">
        </div>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">OPPS!! APP NOT FOUND</h1>
      <p className="text-gray-600 mb-4">TThe App you are requesting is not found on our system.  please try another apps</p>
      <Link to="/apps" className="bg-gradient-to-r from-[#6d37e5] to-[#9f62f2] text-white px-8 py-2 rounded-sm hover:bg-purple-700">Go Back!</Link>
    </div>
  </div>
);

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const appData = appsData.find(a => a.id === parseInt(id));
      if (!appData) {
        setApp(null);
      } else {
        setApp(appData);
        const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
        setInstalled(installedApps.some(a => a.id === appData.id));
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    if (installedApps.some(a => a.id === parseInt(id))) {
      toast.error('Already installed!');
      return;
    }
    const appData = appsData.find(a => a.id === parseInt(id));
    if (appData) {
      installedApps.push(appData);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      setInstalled(true);
      toast.success('App installed successfully!');
    }
  };

  const handleUninstall = () => {
    let installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    installedApps = installedApps.filter(a => a.id !== parseInt(id));
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
    setInstalled(false);
    toast.success('App uninstalled!');
  };

  if (loading) return <LoadingSpinner />;

  if (!app) return <AppNotFound />;

  const chartData = app.ratings.map(rating => ({ name: rating.name, count: rating.count }));

  return (
    <div className="py-16  min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className=" rounded-xl  overflow-hidden">
          <div className="flex flex-col md:flex-row p-6 md:p-8 gap-8">
            <img src={app.image} alt={app.title} className="w-full md:w-1/3 h-full md:h-64 object-cover rounded-lg" />
            <div className="md:w-2/3 space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">{app.title}</h1>
              <p className="text-gray-600">Developed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8452e9] to-[#9b66f0] font-bold">{app.companyName}</span></p>
              <hr className="text-[#d2d2d2]" />
              <div className="flex flex-wrap items-center gap-2 md:gap-10 text-lg">

                <div className="ch1">
                  <img className="h-8 w-8" src="/downloads.png" alt="" />
                  <p className="text-sm text-gray-500 py-0.5">downloads</p>
                  <h2 className="font-bold md:text-3xl"><span className="text-green-600">{app.downloads.toLocaleString()}K</span></h2>
                </div>
                <div className="ch1">
                  <img className="h-8 w-8" src="/ratings.png" alt="" />
                  <p>Average Ratings</p>
                  <h2 className="font-bold md:text-3xl"><span className="text-yellow-500">{app.ratingAvg}</span></h2>
                </div>
                <div className="ch1">
                  <img className="h-8 w-8" src="/review.png" alt="" />
                  <p>Totall Reviews</p>
                  <h2 className="font-bold md:text-3xl"><span className="text-gray-600">{app.reviews.toLocaleString()}K</span></h2>
                </div>
              </div>

              <button
                onClick={installed ? handleUninstall : handleInstall}
                disabled={installed}
                className={`w-auto py-3 rounded-sm font-semibold px-4 text-white ${installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] hover:bg-green-600'}`}
              >
                {installed ? `Installed (${app.size}MB)` : `Install Now (${app.size}MB)`}
              </button>
            </div>
          </div>
          <hr className="text-[#d2d2d2]" />
          <div className="p-6 bg-gray-50">
            <h2 className="text-xl font-bold mb-4">Ratings</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Bar dataKey="count" radius={[4, 0, 0, 4]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#f59e0b" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <div className="text-gray-700 leading-relaxed text-base space-y-4">
              {app.description.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
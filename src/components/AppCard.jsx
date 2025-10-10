import { Link } from 'react-router-dom';

const AppCard = ({ app, showUninstall = false, onUninstall }) => (
  <div className="relative bg-white rounded-lg  overflow-hidden hover:shadow-lg transition-shadow">
    {showUninstall && (
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onUninstall(app.id); }}
        className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded text-xl hover:bg-green-600 z-10"
      >
        Uninstall
      </button>
    )}
    {!showUninstall ? (
      <Link to={`/app/${app.id}`} className="block">
        <img src={app.image} alt={app.title} className="w-full h-full object-cover items-center justify-center rounded-lg" />
        <div className="p-4">
          <h3 className="font-semibold text-[#001931] text-sm mb-1 line-clamp-2">{app.title}</h3>
          <div className="flex justify-between">
            {/* star and download */}
          <p className="text-xs text-[#00D390] font-semibold bg-[#F1F5E8] p-2 rounded-sm"><i class="fa-solid fa-download"></i>{app.downloads.toLocaleString()}K</p>
          <p className="text-xs text-[#FF8811] font-semibold bg-[#FFF0E1] p-2 rounded-sm"><i class="fa-solid fa-star"></i> {app.ratingAvg}</p> </div>
        </div>
      </Link>
    ) : (
      <>
      <div className="flex">
        <img src={app.image} alt={app.title} className="w-20 h-20 object-cover items-center justify-center rounded-lg" />
        <div className="p-4">
          <h3 className="font-semibold text-[#001931] text-xl mb-1 line-clamp-2 mb-1">{app.title}</h3>
          <p className="text-xs text-[#627382]"><span className='text-[#FF8811] mr-3'><i class="fa-solid fa-star"></i> {app.ratingAvg}</span>  {app.size}MB</p>
        </div></div>
      </>
    )}
  </div>
);

export default AppCard;
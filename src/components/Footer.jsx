const Footer = () => (
  <footer className="bg-gray-900 text-white py-6 mt-auto">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <span className="mr-2">
          <img className="w-8 h-8" src="/logo.png" alt="" />
        </span>
        <span className="text-1xl font-bold">HERO.IO</span>
      </div>

    </div>
    <div className="flex justify-around items-center py-3">
      <div className="comph">
        <ul>
          <li><a href="#" ><i class="fa-solid fa-house"></i> Home</a></li>
          <li><a href="#" ><i class="fa-solid fa-address-card"></i> About US</a></li>
          <li><a href="#" ><i class="fa-solid fa-taxi"></i> Services</a></li>
          <li><a href="#" ><i class="fa-solid fa-address-book"></i> Contact</a></li>
        </ul>
      </div>
      <div className="quick-links">
        <ul>
          <li><a href="#"><i class="fa-brands fa-facebook"></i> Fackbook</a></li>
          <li><a href="#"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
          <li><a href="#"><i class="fa-brands fa-x-twitter"></i> Twitter/X</a></li>
          <li><a href="#"><i class="fa-brands fa-youtube"></i> YouTube</a></li>
        </ul>
      </div>
    </div>
    <hr className="text-white py-1" />
    <p className="text-sm text-gray-400 text-center">Copyright © 2025 - All right reserved</p>
  </footer>
);

export default Footer;
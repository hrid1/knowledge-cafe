import profile from '../../assets/images/profile.png'


const Header = () => {
  return (
    <div className="flex items-center justify-between border-b-2 p-4 shadow-md">
      <h1 className="text-6xl font-semibold">Knowledge Cafe</h1>
    
      {/* <p className="font-bold text-3xl">HRiDOY</p> */}
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;

export default function NavItem({ label, icon }) {
    return (
      <li className="mb-4 flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded-md">
        <i className={`${icon} text-lg mr-3`}></i>
        <span className="text-sm">{label}</span>
      </li>
    );
  }
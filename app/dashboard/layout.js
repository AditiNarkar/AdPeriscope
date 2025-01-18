import { Header } from "@/components/Header";
import NavItem from "@/components/NavItem";

export default function Dashboard({ children }) {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <div className="w-1/5 bg-gray-800 bg-opacity-50 text-white p-4 fixed h-full backdrop-blur-lg shadow-lg">
          <ul>
            <NavItem label="Overview" icon="fas fa-home" />

            <NavItem label="Insights Section" icon="fas fa-users" />

            <NavItem label="Competitor Analysis" icon="fas fa-search" />

            <NavItem label="Trend Analysis" icon="fas fa-fire" />

            <NavItem label="Sentiment Analysis" icon="fas fa-smile" />

            <NavItem label="Content Recommendations" icon="fas fa-clipboard-list" />

            <NavItem label="Suggested Reels" icon="fas fa-video" link="/dashboard/content-generator" >
            </NavItem>
            {/* Suggested video ideas based on user pain points and trends */}

          </ul>
        </div>

        <div style={{ marginLeft: '20%' }} className=" w-4/5 p-4 overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
}

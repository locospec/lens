import React from "react";
import {
  BookOpen,
  Clock,
  User,
  Share2,
  Award,
  Target,
  Heart,
  Star,
} from "lucide-react";

const ContainerQueryCard = () => {
  return (
    <div className="w-full border rounded max-w-7xl">
      <div className="@container">
        <div
          className="flex flex-col p-4 bg-slate-50 
          @xs:bg-red-50 
          @sm:bg-orange-50 
          @md:bg-yellow-50 
          @lg:bg-green-50 
          @xl:bg-teal-50 
          @2xl:bg-cyan-50 
          @3xl:bg-blue-50 
          @4xl:bg-indigo-50 
          @5xl:bg-purple-50 
          @6xl:bg-pink-50 
          @7xl:bg-rose-50"
        >
          {/* Header Section */}
          <div
            className="flex flex-col gap-2 
            @xs:flex-row @xs:items-center @xs:justify-between
            @2xl:gap-4"
          >
            <h2
              className="font-bold 
              text-base
              @xs:text-lg 
              @sm:text-xl
              @md:text-2xl
              @lg:text-3xl
              @xl:text-4xl"
            >
              Reading Progress Dashboard
            </h2>
            <p
              className="text-gray-600 
              text-xs
              @sm:text-sm
              @md:text-base
              @lg:text-lg"
            >
              Track your reading journey
            </p>
          </div>

          {/* Stats Grid */}
          <div
            className="mt-4 grid gap-4
            grid-cols-1
            @xs:grid-cols-2
            @md:grid-cols-3
            @xl:grid-cols-4
            @3xl:grid-cols-6
            @5xl:grid-cols-8"
          >
            <StatCard icon={BookOpen} label="Pages Read" value="127" />
            <StatCard icon={Clock} label="Time Spent" value="2.5h" />
            <StatCard icon={User} label="Streak" value="7 days" />
            <StatCard icon={Share2} label="Shares" value="12" />
            <StatCard icon={Award} label="Achievements" value="5" />
            <StatCard icon={Target} label="Goals Met" value="3/5" />
            <StatCard icon={Heart} label="Favorites" value="15" />
            <StatCard icon={Star} label="Rating" value="4.8" />
          </div>

          {/* Additional Content that appears at larger sizes */}
          <div className="hidden @4xl:block mt-6">
            <div
              className="grid gap-4
              @4xl:grid-cols-2
              @5xl:grid-cols-3
              @6xl:grid-cols-4"
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="p-4 rounded bg-white/50">
                  <h3 className="mb-2 font-semibold">
                    Recent Activity {i + 1}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Completed chapter {i + 1} of your current book
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer that changes with container size */}
          <div className="pt-4 mt-6 border-t border-gray-200">
            <p className="text-xs @sm:text-sm @md:text-base text-gray-500">
              Container width classes:
              <span className="@xs:hidden">Default (&#x3C;320px)</span>
              <span className="hidden @xs:inline @sm:hidden">@xs (≥320px)</span>
              <span className="hidden @sm:inline @md:hidden">@sm (≥384px)</span>
              <span className="hidden @md:inline @lg:hidden">@md (≥448px)</span>
              <span className="hidden @lg:inline @xl:hidden">@lg (≥512px)</span>
              <span className="hidden @xl:inline @2xl:hidden">
                @xl (≥576px)
              </span>
              <span className="hidden @2xl:inline @3xl:hidden">
                @2xl (≥672px)
              </span>
              <span className="hidden @3xl:inline @4xl:hidden">
                @3xl (≥768px)
              </span>
              <span className="hidden @4xl:inline @5xl:hidden">
                @4xl (≥896px)
              </span>
              <span className="hidden @5xl:inline @6xl:hidden">
                @5xl (≥1024px)
              </span>
              <span className="hidden @6xl:inline @7xl:hidden">
                @6xl (≥1152px)
              </span>
              <span className="hidden @7xl:inline">@7xl (≥1280px)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value }) => (
  <div
    className="p-3 rounded bg-white/50 transition-all duration-200
    @xs:p-4
    @lg:p-5
    @4xl:p-6"
  >
    <div
      className="flex items-center gap-2 
      @2xl:gap-3"
    >
      <Icon
        className="w-4 h-4 
        @sm:w-5 @sm:h-5
        @xl:w-6 @xl:h-6"
      />
      <span
        className="text-xs font-medium
        @sm:text-sm
        @xl:text-base"
      >
        {label}
      </span>
    </div>
    <p
      className="mt-2 font-bold
      text-lg
      @sm:text-xl
      @xl:text-2xl
      @4xl:text-3xl"
    >
      {value}
    </p>
  </div>
);

export default ContainerQueryCard;

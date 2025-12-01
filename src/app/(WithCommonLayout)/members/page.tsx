import Card from "@/components/modules/member/Card";
import { Member } from "@/types/member";

export default function Page() {
  const members: Member[] = [
    {
      name: "Sarah Chen",
      email: "sarah.chen@university.edu",
      address: "123 Astronomy Drive, Cosmic City, CC 12345",
      phone_number: "+1 (555) 123-4567",
      role: "Senior Astrophysicist",
      institute: "International Space Research Institute",
      profession: "Astrophysicist & Researcher",
      bio: "Passionate about exoplanet research and stellar evolution. Leads research on habitable zone planets orbiting M-dwarf stars.",
      qualifications:
        "PhD in Astrophysics\nMSc in Astronomy\nBSc in Physics",
      experience: "8 years in exoplanet research",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
    {
      name: "Dr. Leo Martinez",
      email: "leo.martinez@astrocenter.org",
      address: "89 Nebula Street, Orion Valley, OV 98765",
      phone_number: "+1 (555) 987-6543",
      role: "Telescope Operations Lead",
      institute: "Orion Valley Space Observatory",
      profession: "Observational Astronomer",
      bio: "Expert in deep-sky imaging and telescope automation. Works on improving long-exposure astrophotography systems.",
      qualifications:
        "PhD in Observational Astronomy\nMSc in Space Science\nCertified Telescope Instructor",
      experience: "5 years in deep-sky imaging research",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      name: "Ava Thompson",
      email: "ava.thompson@cosmoslab.com",
      address: "225 Galaxy Boulevard, Starview, ST 54321",
      phone_number: "+1 (555) 222-3333",
      role: "Planetarium Presenter",
      institute: "Starview Planetarium",
      profession: "Astronomy Educator",
      bio: "Dedicated to making astronomy accessible to everyone. Specializes in presenting interactive shows about galaxies and black holes.",
      qualifications:
        "MSc in Science Communication\nBSc in Physics\nNational Planetarium Association Member",
      experience: "4 years in astronomy outreach",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    }
  ];

  return (
    <div className="min-h-screen py-30 bg-slate-900 px-4">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-2 h-8 bg-cyan-400 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Our{" "}
            <span className="font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
        </div>
        <p className="text-slate-400 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
          Passionate astronomers and researchers dedicated to exploring the
          cosmos and sharing our discoveries with the world.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-slate-700/50">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 w-full">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
            <input
              type="text"
              placeholder="Search member by name, designation..."
              className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {members?.map((member, index) => (
        <Card key={index} user={member} />
      ))}</div>
    </div>
  );
}

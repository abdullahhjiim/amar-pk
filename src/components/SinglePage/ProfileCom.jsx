import Link from "next/link";

const ProfileCom = ({ id }) => {
  const profile = {
    id: 1,
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg",
    occupation: "Software Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante nec ex consequat commodo.",
    email: "john@example.com",
    phone: "+1234567890",
    // Add more profile fields as needed
    links: [
      { id: 1, title: "pk hospital", url: "/main/hospitals/1" },
      { id: 2, title: "pk institute", url: "/main/institutes/2" },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            {profile.name}
          </h1>
          <p className="text-gray-600">{profile.occupation}</p>
        </div>
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div className="border-t border-gray-200 mt-8 pt-8">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">{profile.bio}</p>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-8">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li>
            <span className="font-semibold">Email:</span> {profile.email}
          </li>
          <li>
            <span className="font-semibold">Phone:</span> {profile.phone}
          </li>
          {/* Add more contact information fields as needed */}
        </ul>
      </div>
      {profile.links?.length > 0 && (
        <div className="border-t border-gray-200 mt-8 pt-8">
          <h2 className="text-xl font-semibold mb-4">More Information Links</h2>
          <p>
            {profile.links.map((link) => {
              return (
                <span
                  key={link.id}
                  className="inline-block px-3 py-1 text-sm font-semibold leading-none text-black bg-blue-300 rounded-full m-1"
                >
                  <Link href={link.url}> {link.title} </Link>
                </span>
              );
            })}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileCom;

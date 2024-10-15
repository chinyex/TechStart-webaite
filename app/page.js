import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building modern, responsive, and scalable web applications using the latest technologies.",
    icon: "/icons/web-development.svg", // Update with your icon URL or path
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications that deliver seamless user experiences.",
    icon: "/icons/mobile-app.svg", // Update with your icon URL or path
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "Leveraging cloud technologies to optimize your business operations and infrastructure.",
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description:
      "Implementing AI-driven solutions to automate processes and enhance decision-making.",
  },
  {
    id: 5,
    title: "Cybersecurity",
    description:
      "Ensuring your digital assets are secure with robust security protocols and strategies.",
  },
  {
    id: 6,
    title: "IoT Solutions",
    description:
      "Connecting devices and systems for smarter, more efficient operations.",
  },
];

const footerData = {
  address: "NO 50 Ifediora street, awka",
  phone: "09089766654",
  email: "info@techcompany.com",
  socialMedia: [
    {
      id: 1,
      platform: "Facebook",
    },
    {
      id: 2,
      platform: "Twitter",
    },
    {
      id: 3,
      platform: "LinkedIn",
    },
    {
      id: 4,
      platform: "Instagram",
    },
  ],
};

export default function Home() {
  return (
    <div>
      <h1 className="uppercase text-3xl text-lime-800 p-6 flex justify-center text-center font-extrabold ">
        TechStart company
      </h1>
      {/* NAVBAR */}
      <div className="bg-green-400 h-36 gap-4 md:gap-10  flex flex-col md:flex-row  text-center items-center justify-center ">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Services</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* HERO SECTION */}
      <div className="pt-5">
        <h1 className="text-center p-6 text-lime-600 font-bold text-3xl md:text-5xl">
          WELCOME TO TECHSTARTs
        </h1>
        <h3 className="uppercase pt-4 font-semibold text-2xl md:text-5xl text-center">
          What we do ?
        </h3>
        <p className="bg-lime-100 p-4">
          Introducing TechStart, a forward-thinking technology company dedicated
          to shaping the future with cutting-edge solutions. Our mission is to
          harness the power of innovation to solve real-world problems, making
          lives easier and businesses more efficient. From advanced software
          development to next-gen hardware, we focus on delivering products and
          services that push the boundaries of technology. With a team of
          experts in AI, cloud computing, IoT, and cybersecurity, we're
          committed to creating sustainable, scalable, and secure solutions for
          industries across the globe. Join us on our journey as we redefine
          what's possible in the tech world.
        </p>
        <div className="flex items-center justify-center p-4">
          <button className="bg-green-600  p-3 rounded-md cursor-pointer text-sm text-white">
            GET STARTED
          </button>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div>
        <h2 className="p-4 py-3 flex justify-center items-center text-center font-bold text-2xl">
          SERVICES
        </h2>
        <div className="flex flex-col md:flex-row w-full bg-lime-100 gap-4">
          {services.map((service) => (
            <div className="p-4">
              <h3 className="flex font-bold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div>
        <footer className="bg-black text-white py-10">
          <div className="container mx-auto text-center">
            {/* Address, Phone, Email */}
            <div className="mb-6">
              <p className="mb-2">{footerData.address}</p>
              <p className="mb-2">Phone: {footerData.phone}</p>
              <p>
                Email:
                <a href={`mailto:${footerData.email}`} className="underline">
                  {footerData.email}
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

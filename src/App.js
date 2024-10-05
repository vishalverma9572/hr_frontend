import { useState } from "react";
import { Home, Bolt, BookOpen, Calendar, Utensils, Bed, Ambulance, GraduationCap, MailWarning, Handshake, FolderKey, Dumbbell, Hotel, MessageSquareMore, CircleHelp, UserRoundPen } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/general/Sidebar"

export default function App() {
    const [authority, setAuthority] = useState('');

    const handleAuthorityChange = (event) => {
        setAuthority(event.target.value);
    };
    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-900">
            <div className="flex">
                <Sidebar>
                    <SidebarItem icon={<Home size={24} />} text="Home" alert/>
                    <SidebarItem icon={<BookOpen size={24} />} text="Academics" />
                    <SidebarItem icon={<Calendar size={24} />} text="Curriculum" />
                    <SidebarItem icon={<Utensils size={24} />} text="Mess" />
                    <SidebarItem icon={<Bed size={24} />} text="Guest" />
                    <SidebarItem icon={<Ambulance size={24} />} text="Health" />
                    <SidebarItem icon={<GraduationCap size={24} />} text="Schlorship" />
                    <SidebarItem icon={<MailWarning size={24} />} text="Complain" />
                    <SidebarItem icon={<Handshake size={24} />} text="Placement" />
                    <SidebarItem icon={<FolderKey size={24} />} text="Department" />
                    <SidebarItem icon={<Dumbbell size={24} />} text="Gymkhana" />
                    <SidebarItem icon={<Hotel size={24} />} text="Hostel" />
                    <SidebarItem icon={<MessageSquareMore size={24} />} text="Other" />
                    <hr className="my-3" />
                    <SidebarItem icon={<UserRoundPen size={24} />} text="Profile" />
                    <SidebarItem icon={<Bolt size={24} />} text="Settings" />
                    <SidebarItem icon={<CircleHelp size={24} />} text="Help" />
                </Sidebar>
            </div>
            {/* Main Content */}
            <div className="flex-1 flex flex-col p-6 space-y-6">
                {/* Header */}
                <header className="flex justify-between items-center bg-blue-50 p-0 rounded-lg shadow-lg">
                    <section className="m-4 ">
                        <select
                            id="authority"
                            name="authority"
                            value={authority}
                            onChange={handleAuthorityChange}
                            className=" inline-block w-full pl-4 pr-4 py-2 pb-2shadow-sm sm:text-sm rounded-md font-semibold "
                        >
                            <option className="text-sm font-semibold" value="Student">Student</option>
                            <option className="text-sm font-semibold" value="Faculty">Faculty</option>
                            <option className="text-sm font-semibold" value="Staff">Staff</option>
                        </select>
                    </section>
                    <button className="text-sm hover:text-base bg-blue-500 hover:bg-blue-600 hover:shadow-xl  md:duration-500 text-white py-2 px-4 mr-8 shadow-lg rounded flex items-center">
                        <i className="fas fa-user-circle mr-2 hover:font-bold "></i> MAITREK PATEL
                    </button>
                </header>

                {/* Announcements Section */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">
                        Announcements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <h3 className="font-semibold">Prof. Atul Gupta</h3>
                            <p className="text-sm text-gray-500">
                                Posted on: Oct 15
                            </p>
                            <p className="mt-2 text-sm">
                                New research guidelines released. Check the
                                portal for details.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <h3 className="font-semibold">
                                Prof. Kaushik Dutta
                            </h3>
                            <p className="text-sm text-gray-500">
                                Posted on: Oct 20
                            </p>
                            <p className="mt-2 text-sm">
                                Campus event postponed to next week due to
                                weather conditions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Notifications Section */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">
                        Notifications
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg flex justify-between items-center shadow-lg">
                            <div>
                                <h3 className="font-semibold">Course Update</h3>
                                <p className="text-sm text-gray-500">
                                    Posted on: 2023-10-02
                                </p>
                                <p className="mt-2 text-sm">
                                    The syllabus for Data Structures has been
                                    updated. Please review the changes before
                                    next class.
                                </p>
                            </div>
                            <button className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">
                                Unread
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-lg flex justify-between items-center shadow-lg">
                            <div>
                                <h3 className="font-semibold">Exam Results</h3>
                                <p className="text-sm text-gray-500">
                                    Posted on: 2023-10-01
                                </p>
                                <p className="mt-2 text-sm">
                                    Midterm exam results for Calculus are now
                                    available in your student portal.
                                </p>
                            </div>
                            <button className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">
                                Read
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center ">
                            <div>
                                <h3 className="font-semibold">
                                    Library Notice
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Posted on: 2023-09-30
                                </p>
                                <p className="mt-2 text-sm">
                                    The library will be closed for maintenance
                                    on 2023-10-05. Plan your visits accordingly.
                                </p>
                            </div>
                            <button className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">
                                Read
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold">
                                    Workshop Alert
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Posted on: 2023-09-28
                                </p>
                                <p className="mt-2 text-sm">
                                    A workshop on Artificial Intelligence is
                                    scheduled for 2023-10-10. Register now!
                                </p>
                            </div>
                            <button className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">
                                Read
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    );
};

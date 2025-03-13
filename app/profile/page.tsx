"use client"; // 👈 Mark this as a client component

// Dependencies
import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/modal";
import { Button, ButtonGroup } from "@heroui/button";
import { useState } from "react";

// Components
import Navbar from "./../components/Navbar";

// Assets
import headshot from "@/assets/images/headshot.jpg";
import bg from "@/assets/images/blue-abstract-shapes.jpg";

// Select Values
// Gender options
const genders = [
  "Male",
  "Female",
  "Non-binary",
  "Transgender",
  "Intersex",
  "Other",
  "Prefer not to say",
];

// Full list of countries
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// Full list of languages
const languages = [
  "Afrikaans",
  "Albanian",
  "Amharic",
  "Arabic",
  "Armenian",
  "Azerbaijani",
  "Basque",
  "Belarusian",
  "Bengali",
  "Bosnian",
  "Bulgarian",
  "Catalan",
  "Cebuano",
  "Chichewa",
  "Chinese (Simplified)",
  "Chinese (Traditional)",
  "Corsican",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "English",
  "Esperanto",
  "Estonian",
  "Filipino",
  "Finnish",
  "French",
  "Frisian",
  "Galician",
  "Georgian",
  "German",
  "Greek",
  "Gujarati",
  "Haitian Creole",
  "Hausa",
  "Hawaiian",
  "Hebrew",
  "Hindi",
  "Hmong",
  "Hungarian",
  "Icelandic",
  "Igbo",
  "Indonesian",
  "Irish",
  "Italian",
  "Japanese",
  "Javanese",
  "Kannada",
  "Kazakh",
  "Khmer",
  "Kinyarwanda",
  "Korean",
  "Kurdish",
  "Kyrgyz",
  "Lao",
  "Latin",
  "Latvian",
  "Lithuanian",
  "Luxembourgish",
  "Macedonian",
  "Malagasy",
  "Malay",
  "Malayalam",
  "Maltese",
  "Maori",
  "Marathi",
  "Mongolian",
  "Myanmar (Burmese)",
  "Nepali",
  "Norwegian",
  "Odia (Oriya)",
  "Pashto",
  "Persian",
  "Polish",
  "Portuguese",
  "Punjabi",
  "Romanian",
  "Russian",
  "Samoan",
  "Scots Gaelic",
  "Serbian",
  "Sesotho",
  "Shona",
  "Sindhi",
  "Sinhala",
  "Slovak",
  "Slovenian",
  "Somali",
  "Spanish",
  "Sundanese",
  "Swahili",
  "Swedish",
  "Tajik",
  "Tamil",
  "Tatar",
  "Telugu",
  "Thai",
  "Turkish",
  "Turkmen",
  "Ukrainian",
  "Urdu",
  "Uyghur",
  "Uzbek",
  "Vietnamese",
  "Welsh",
  "Xhosa",
  "Yiddish",
  "Yoruba",
  "Zulu",
];

const Profile = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [size, setSize] = React.useState<
    "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full"
  >("4xl");

  interface DisclosureProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
  }

  const handleOpen = (
    size:
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "full"
  ) => {
    setSize(size);
    onOpen();
  };

  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");

  return (
    <div className="">
      <div className="border-b pb-7">
        <Navbar />
      </div>
      <div className="flex gap-10 mt-8 mb-8">
        <aside
          className="w-[25rem] flex p-3 shadow-[r] ml-10 rounded-lg"
          style={{
            boxShadow: "0px 0px 12.1px 5px rgba(0, 0, 0, 0.06)", // Applying shadow to the profile image
          }}
        >
          <div>
            <div className=" relative">
              <div className="relative">
                <Image
                  src={bg}
                  alt="White Abstract Background"
                  className="h-24 w-full rounded-md object-cover"
                />
                <Button
                  onPress={onOpen}
                  className="absolute top-0 right-0 m-2 bg-white text-black font-semibold px-3 rounded"
                >
                  Edit Profile
                </Button>
              </div>

              <div className="absolute bottom-0 transform translate-y-1/2 translate-x-2">
                <Image
                  src={headshot}
                  alt="User Profile"
                  className="h-24 w-24 object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <div className="h-7 w-7 bg-gray-200 rounded-lg"></div>
              <div className="h-7 w-7 bg-gray-200 rounded-lg"></div>
              <div className="h-7 w-7 bg-gray-200 rounded-lg"></div>
            </div>

            <div className="mt-6 font-display mb-2">
              <h3 className="text-3xl font-semibold">Caitlyn King</h3>
              <p className="opacity-[57%] text-xs font-semibold">
                caitlyking@gmail.com
              </p>
            </div>

            <div className="font-display font-semibold border-[0.5px] border-black/10 inline-flex px-2 rounded-md mb-4">
              <p>Founder @ Banner AI</p>
            </div>

            <div className="flex justify-center gap-4">
              <div>
                <h4 className="font-semibold">Joined</h4>
                <p>4 Mar, 2025</p>
              </div>
              <div className="border-[0.5px] rounded-full border-l-black/10 "></div>
              <div>
                <h4 className="font-semibold">No. Startups</h4>
                <p>4</p>
              </div>
              <div className="border-[0.5px] rounded-full border-l-black/10 "></div>
              <div>
                <h4 className="font-semibold">No. Employees</h4>
                <p>0</p>
              </div>
            </div>

            <div className="border-t-[1px] rounded-full mt-5 mb-3"></div>

            <div>
              <h4 className="font-display font-semibold">About</h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </p>
            </div>

            <div className="border-t-[1px] rounded-full my-3"></div>

            <div>
              <h4 className="font-display font-semibold">
                Why did you want to start a startup
              </h4>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
              </p>
            </div>

            <div className="border-t-[1px] rounded-full my-3"></div>

            <div>
              <h4 className="font-display font-semibold mb-2">
                Skills & Expertise
              </h4>
              <div>
                <div className="border inline-flex rounded-md p-1">
                  <p className="text-sm font-semibold">Frontend Development</p>
                </div>
              </div>
            </div>

            <div className="border-t-[1px] rounded-full my-3"></div>

            <div>
              <h4 className="font-display font-semibold mb-2">Languages</h4>
              <div>
                <div className="border inline-flex rounded-md p-1">
                  {/* Add flag here */}
                  <p className="text-sm font-semibold">Spanish</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Edit Modal */}
        </aside>

        <div>
          <h2 className="font-semibold font-display text-4xl mb-4">
            All Startups
          </h2>
          <div
            className="border  p-2 rounded-xl w-72"
            // style={{
            //   boxShadow: "0px 0px 12.1px 5px rgba(0, 0, 0, 0.06)", // Applying shadow to the profile image
            // }}
          >
            <div className=" border-3 border-white ">
              <div className="h-20 bg-gray-200 rounded-lg"></div>
              <h3 className="font-semibold font-display my-2 text-xl">
                Startup Name
              </h3>
              <div>
                <div className="w-12 bg-gray-100 h-5 rounded-full"></div>
              </div>
              <p className="my-2">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
            </div>

            <div className="flex justify-between items-center">
              {/* Heart icon goes here */}
              <div className="h-7 w-7 bg-gray-200 rounded-full"></div>
              <div className="rounded-full bg-gray-200 inline-flex font-semibold py-1 px-2">
                <p>See Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Modal
          isOpen={isOpen}
          size={size}
          onClose={onClose}
          className="fixed top-0"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Edit your Profile</ModalHeader>
                <ModalBody>
                  <div className="relative">
                    <div className="relative -my-2">
                      <Image
                        src={bg}
                        alt="White Abstract Background"
                        className="h-24 w-full rounded-md object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 transform translate-y-1/2 translate-x-2">
                      <Image
                        src={headshot}
                        alt="User Profile"
                        className="h-24 w-24 object-cover rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                  </div>

                  <div className=" font-display mb-2 ml-28 mt-2">
                    <h3 className="text-3xl font-semibold">Caitlyn King</h3>
                    <p className="opacity-[57%] text-xs font-semibold">
                      caitlyking@gmail.com
                    </p>
                  </div>

                  <form className="max-w-3xl mx-auto">
                    {/* Personal Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full mt-1 profile-form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full mt-1 profile-form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full mt-1 profile-form-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Gender
                        </label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="w-full mt-1 profile-form-input"
                        >
                          <option value="" disabled>
                            Select gender
                          </option>
                          {genders.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Country
                        </label>
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full mt-1 profile-form-input"
                        >
                          <option value="" disabled>
                            Select country
                          </option>
                          {countries.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Languages
                        </label>
                        <select
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          className="w-full mt-1 profile-form-input"
                        >
                          <option value="" disabled>
                            Select language
                          </option>
                          {languages.map((l) => (
                            <option key={l} value={l}>
                              {l}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          About
                        </label>
                        <textarea
                          rows={2}
                          className="w-full mt-1 profile-form-input"
                        ></textarea>
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          About
                        </label>
                        <textarea
                          rows={2}
                          className="w-full mt-1 profile-form-input"
                        ></textarea>
                      </div>
                    </div>

                    {/* Socials */}
                    <div className="border-t-[1px] rounded-full mt-5 mb-3"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Socials</h3>
                      <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-gray-200 rounded-md"
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t-[1px] rounded-full mt-5 mb-3"></div>

                    {/* Skills */}
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Skills</h3>
                      <input
                        type="text"
                        className="w-1/3 mt-1 profile-form-input mb-2"
                      />

                      <div className="grid grid-cols-4 gap-2">
                        <input
                          type="text"
                          className="col-span-2 profile-form-input border bg-white"
                        />
                        <input
                          type="text"
                          className="profile-form-input border bg-white"
                        />
                        <input
                          type="text"
                          className="profile-form-input border bg-white"
                        />
                      </div>
                    </div>

                    <div className="border-t-[1px] rounded-full mt-5 mb-3"></div>
                    {/* Startup */}
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Startups</h3>
                      <div className="text-sm font-semibold">Code.ai</div>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Role
                          </label>
                          <input
                            type="text"
                            className="w-full mt-1 profile-form-input"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Company Email
                          </label>
                          <input
                            type="email"
                            className="w-full mt-1 profile-form-input"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                    className="font-medium"
                  >
                    Discard
                  </Button>
                  <Button
                    color="primary"
                    onPress={onClose}
                    className="bg-custom-purple font-semibold"
                  >
                    Save
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;

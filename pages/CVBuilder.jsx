import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import LinearProgress from "@mui/material/LinearProgress";
import { useState, useEffect } from "react";
import PersonalDetails from "../components/FormComponents/PersonalDetails";
import Education from "../components/FormComponents/Education";
import SocialLinks from "../components/FormComponents/SocialLinks";
import Employment from "../components/FormComponents/Employment";
import ProfessionalSummary from "../components/FormComponents/ProfessionalSummary";
import Skills from "../components/FormComponents/Skills";
import AddSection from "../components/FormComponents/AddSection";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PDFView from "./PDFSection";
import Practice from "./Practice";

export const DataContext = React.createContext();

export default function CVBuilder() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [personalDetails, setPersonalDetails] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      occupation: "",
      address: "",
      postalcode: "",
      nationality: "",
      placeofbirth: "",
      dateofbirth: "",
    },
  ]);
  const [professionalSummary, setProfessionalSummary] = useState([
    {
      summary: "",
    },
  ]);
  const [employmentDetails, setEmploymentDetails] = useState([
    {
      jobtitle: "",
      employer: "",
      startdate: "",
      enddate: "",
      city: "",
      description: "",
    },
  ]);
  const [educationDetails, setEducationDetails] = useState([
    {
      institution: "",
      degree: "",
      startdate: "",
      enddate: "",
      institutioncity: "",
      description: "",
    },
  ]);
  const [socialLinksDetails, setSocialLinksDetails] = useState([
    {
      label: "",
      linkurl: "",
    },
  ]);
  const [skillDetails, setSkillDetails] = useState([
    {
      skill: "",
      level: "",
    },
  ]);
  const [courseDetails, setCourseDetails] = useState([
    {
      course: "",
      institution: "",
      startdate: "",
      enddate: "",
    },
  ]);
  const [extraCurricularDetails, setExtraCurricularDetails] = useState([
    {
      activity: "",
      employer: "",
      startdate: "",
      enddate: "",
      city: "",
      description: "",
    },
  ]);
  const [languageDetails, setLanguageDetails] = useState([
    {
      language: "",
      level: "",
    },
  ]);
  const [hobbiesDetails, setHobbiesDetails] = useState({ hobbies: "" });

  const [allSections, setAllSections] = useState([
    {
      id: 1,
      name: <Employment />,
    },
    {
      id: 2,
      name: <Education />,
    },
    {
      id: 3,
      name: <SocialLinks />,
    },
    {
      id: 4,
      name: <Skills />,
    },
  ]);

  const deleteCustomSection = (id) => {
    const result = allSections.filter((item) => {
      if (item.id != id) {
        return item.id;
      }
    });
    setAllSections(result);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <DataContext.Provider
        value={{
          image: [images, setImages],
          imageUrls: [imageURLs, setImageURLs],
          value1: [personalDetails, setPersonalDetails],
          value2: [professionalSummary, setProfessionalSummary],
          value3: [employmentDetails, setEmploymentDetails],
          value4: [educationDetails, setEducationDetails],
          value5: [socialLinksDetails, setSocialLinksDetails],
          value6: [skillDetails, setSkillDetails],
          value7: [courseDetails, setCourseDetails],
          value8: [extraCurricularDetails, setExtraCurricularDetails],
          value9: [languageDetails, setLanguageDetails],
          value10: [hobbiesDetails, setHobbiesDetails],
        }}
      >
        <Box
          sx={{
            width: "50%",
            padding: "5%",
            backgroundColor: "white",
          }}
        >
          {/* <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              marginTop: "10px",
              width: "93%",
            }}
          /> */}
          <Box sx={{ marginTop: "4rem", width: "100%", height: "100vh" }}>
            <Practice />
            <PersonalDetails />
            <ProfessionalSummary />
            {allSections.map((item) => (
              <List key={item.id}> {item.name}</List>
            ))}
            <AddSection
              allSections={allSections}
              setAllSections={setAllSections}
              deleteCustomSection={deleteCustomSection}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            position: "fixed",
            right: 0,
          }}
        >
          <PDFView />
        </Box>
      </DataContext.Provider>
    </Box>
  );
}

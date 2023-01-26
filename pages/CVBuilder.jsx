import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { useState, useRef } from "react";
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
import ImageUpload from "../components/FormComponents/ImageUpload";

export const DataContext = React.createContext();

export default function CVBuilder() {
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  let totalFormField = 11;

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
      <Head>
        <title>CV Builder</title>
      </Head>
      <DataContext.Provider
        value={{
          progressState: [progress, setProgress],
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
          <Box sx={{ marginTop: "1rem", width: "100%", height: "100vh" }}>
            <ImageUpload />
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

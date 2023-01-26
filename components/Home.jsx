import React from "react";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            paddingBottom: "20px",
            fontWeight: "700",
            fontSize: "40px",
            textAlign: "center",
          }}
        >
          Build a professional resume for free
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "400" }}>
          Create your resume easily with this free builder
        </Typography>
        <a href="/CVBuilder" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            component="span"
            sx={{
              marginTop: "25px",
              background: "#34c09e",
              ":hover": {
                background: "#2eac8e",
              },
            }}
          >
            <Typography>Create Resume</Typography>
          </Button>
        </a>
      </Box>
      {/*  */}
      <Box
        style={{
          background: "#f5f7fd",
          display: "flex",
          flexDirection: "row",
          marginTop: "200px",
          flexWrap: "wrap",
        }}
      >
        <img
          src="/images/sample.jpg"
          style={{ marginLeft: "100px", marginTop: "100px", padding: "20px" }}
        />
        <Box
          style={{
            marginTop: "100px",
            padding: "20px",
            marginLeft: "50px",
            fontSize: "25px",
            fontFamily: "Segoe UI",
          }}
        >
          <Box
            style={{ display: "flex", flexDirection: "row", marginTop: "30px" }}
          >
            <img src="/images/feature.png" width="35px" height="35px" />
            <Typography
              style={{
                marginLeft: "15px",
                fontWeight: "600",
                fontSize: "25px",
              }}
            >
              Build your resume easily with step by step
            </Typography>
          </Box>
          <Box
            style={{ display: "flex", flexDirection: "row", marginTop: "30px" }}
          >
            <PictureAsPdfIcon
              style={{ width: "32px", height: "32px", opacity: "0.6" }}
            />
            <Typography
              style={{
                marginLeft: "19px",
                fontWeight: "600",
                fontSize: "25px",
              }}
            >
              Live PDF Viewer
            </Typography>
          </Box>
          <Box
            style={{ display: "flex", flexDirection: "row", marginTop: "30px" }}
          >
            <img
              src="/images/download_icon.png"
              width="35px"
              height="35px"
              style={{ opacity: "0.6" }}
            />
            <Typography
              style={{
                marginLeft: "15px",
                fontWeight: "600",
                fontSize: "25px",
              }}
            >
              Free Download
            </Typography>
          </Box>
        </Box>
      </Box>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100px",
          background: "#1976d2",
          fontFamily: "Segoe UI",
        }}
      >
        <p style={{ textAlign: "center", color: "white" }}>
          &copy; 2023 CV Builder. All rights reserved
        </p>
      </footer>
    </Box>
  );
}

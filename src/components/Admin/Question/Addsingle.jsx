import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Container, Paper, Button } from "@mui/material";
import TextEditor from "./TextEditor"; // Ensure this is a controlled component
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import axios from "axios"; // Ensure axios is installed or use fetch

function AddSingleQuestion() {
  const OPTIONS_API_URL = "YOUR_BACKEND_ENDPOINT_FOR_OPTIONS";
  const SUBMIT_QUESTION_API_URL = "YOUR_BACKEND_ENDPOINT_FOR_SUBMITTING_QUESTIONS";

  const [sectionOptions, setSectionOptions] = useState([]);
  const [topicOptions, setTopicOptions] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);
  const [levelOptions, setLevelOptions] = useState([]);
  const [section, setSection] = useState("");
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  const [questionDetails, setQuestionDetails] = useState(""); // For storing text from TextEditor
  const [options, setOptions] = useState({ A: "", B: "", C: "", D: "" });
  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/admin/questionfilters");
        const data = response.data;
        console.log(data);
        setSectionOptions(data.domains || []);
        setTopicOptions(data.domains || []);
        setTypeOptions(data.types || []);
        setLevelOptions(data.levels || []);
      } catch (error) {
        console.error("Failed to fetch options:", error);
        setSectionOptions([]);
        setTopicOptions([]);
        setTypeOptions([]);
        setLevelOptions([]);
      }
    };

    fetchOptions();
  }, []);

  const handleOptionChange = (option, value) => {
    setOptions({ ...options, [option]: value });
  };

  const handleRadioChange = (event) => {
    setCorrectAnswer(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      section,
      topic,
      type,
      level,
      questionDetails,
      options,
      correctAnswer,
    };
    console.log(formData);
  
    try {
      const response= await axios.post("http://localhost:8800/api/admin/question", formData);
      // Reset form state to initial values instead of refreshing the page
      setSection("");
      setTopic("");
      setType("");
      setLevel("");
      setQuestionDetails("");
      setOptions({ A: "", B: "", C: "", D: "" });
      setCorrectAnswer("");
      console.log(response.data)
      // Optionally, show a success message to the user
    } catch (error) {
      console.error("Failed to submit question:", error);
      // Handle submission error here
    }
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="xl">
      <Grid
        item
        xs={12}
        style={{
          textAlign: "left",
          marginLeft: isSmallScreen ? "25%" : "25%",
          marginTop: isSmallScreen ? "12%" : "6%",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          style={{ marginTop: "7%" }}
        >
          Add Single Question
        </Typography>
      </Grid>
      <Paper
        elevation={3}
        sx={{ marginLeft: "25%", padding: "2%", marginTop: "1%" }}
      >
        <Grid container spacing={3} alignItems="center">
          {/* Repeat for each dropdown, replacing `sectionOptions` with the appropriate state */}
          {/* {[
            { label: "Section", value: section, setValue: setSection, options: sectionOptions },
            { label: "Topic", value: topic, setValue: setTopic, options: topicOptions },
            { label: "Type", value: type, setValue: setType, options: typeOptions },
            { label: "Level", value: level, setValue: setLevel, options: levelOptions },
          ].map(({ label, value, setValue, options }, index) => (
            <Grid item xs={3} key={index}>
              <Box>
                <select
                  className="form-select form-select-sm"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  <option value="" disabled>Select {label}</option>
                  {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </Box>
            </Grid>
          ))} */}
          <Grid item xs={3}>
  <Box>
    <select
      className="form-select form-select-sm"
      value={section}
      onChange={(e) => setSection(e.target.value)}
    >
      <option value="" disabled>Select Section</option>
      {sectionOptions.map((option, index) => (
        <option key={index} value={option.Domain}>{option.Domain}</option>
      ))}
    </select>
  </Box>
</Grid>

<Grid item xs={3}>
  <Box>
    <select
      className="form-select form-select-sm"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
    >
      <option value="" disabled>Select Topic</option>
      {section ? (
        sectionOptions.find(option => option.Domain === section)?.Topics.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))
      ) : (
        <option value="" disabled>Please select a Section first</option>
      )}
    </select>
  </Box>
</Grid>

<Grid item xs={3}>
  <Box>
    <select
      className="form-select form-select-sm"
      value={type}
      onChange={(e) => setType(e.target.value)}
    >
      <option value="" disabled>Select Type</option>
{typeOptions.map((option, index) => (
  <option key={index} value={option.Type}>{option.Type}</option>
))}
    </select>
  </Box>
</Grid>

<Grid item xs={3}>
  <Box>
    <select
      className="form-select form-select-sm"
      value={level}
      onChange={(e) => setLevel(e.target.value)}
    >
      <option value="" disabled>Select Level</option>
      {levelOptions.map((option, index) => (
        <option key={index} value={option.Level}>{option.Level}</option>
      ))}
    </select>
  </Box>
</Grid>
        </Grid>

        <Typography variant="body1" gutterBottom style={{ marginTop: "2%" }}>
          Question Details
        </Typography>
        <Box
          sx={{
            my: 2,
            overflow: "auto",
            maxHeight: "15vh",
          }}
        >
          <TextEditor value={questionDetails} setValue={setQuestionDetails} />
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={2}>
              <Typography variant="subtitle1" gutterBottom>
                Correct Answer
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle1" gutterBottom>
                Question Options
              </Typography>
            </Grid>
            {/* Radio buttons and Text fields for options */}
            {["A", "B", "C", "D"].map((option) => (
              <React.Fragment key={option}>
                <Grid item xs={2}>
                  <div className="form-check" style={{ position: "relative" }}>
                    <input
                      style={{
                        opacity: 0,
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: 1,
                      }}
                      className="form-check-input"
                      type="radio"
                      name="correct-answer"
                      id={`correct-answer-${option}`}
                      value={option}
                      checked={correctAnswer === option}
                      onChange={handleRadioChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`correct-answer-${option}`}
                      style={{
                        display: "block",
                        width: "16px",
                        height: "16px",
                        backgroundColor:
                          correctAnswer === option ? "#012970" : "transparent",
                        border: `2px solid ${
                          correctAnswer === option ? "#012970" : "#012970"
                        }`,
                        borderRadius: "50%",
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    ></label>
                    <span style={{ marginLeft: "24px" }}>{option}</span>
                  </div>
                </Grid>
                <Grid item xs={10}>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id={`option-${option}`}
                    value={options[option]}
                    onChange={(e) => handleOptionChange(option, e.target.value)}
                    placeholder={`Option ${option}`}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Button variant="contained" type="submit" size="small">
              Add Question{" "}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
export default AddSingleQuestion;

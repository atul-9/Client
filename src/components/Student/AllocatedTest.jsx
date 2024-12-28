import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  CardHeader,
  Avatar,
  Box,
  Button,
} from "@mui/material";

const AllocatedTest = () => {
  return (
    <Container maxWidth="xl" style={{ backgroundColor: "#F0F4FB" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            style={{ marginTop: "1%", marginLeft: "3%", padding: "1%" }}
          >
            View Allocated Test
          </Typography>
        </Grid>
        {[1, 2, 3, 4].map((item) => (
          <Grid item xs={12} sm={4} key={item}>
            <Card
              style={{
                width: "90%",
                height: "95%",
                marginInlineStart: "5%",
                backgroundColor: "#FFFFFF",
                borderRadius: "10%",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Box
                style={{
                  height: "22%",
                  backgroundColor: "#012970",
                  display: "flex",
                  alignItems: "bottom",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "5%",
                    border: "1px solid black", // Outer black border
                    boxShadow: "0 0 0 3px white, 0 0 0 4px black", // Inner white and black borders
                  }}
                />
              </Box>
              <Card
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                  marginLeft: "5%",
                  marginRight: "5%",
                  backgroundColor: "#F0F4FB",
                  // borderBottomLeftRadius: "12%",
                  // borderBottomRightRadius: "12%",
                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="body1"
                  align="center"
                  style={{
                    paddingTop: "3%",
                    paddingBottom: "2%",
                    marginTop: "5%",
                  }}
                >
                  Test Title
                </Typography>

                <Typography
                  variant="body2"
                  align="center"
                  style={{
                    fontSize: 14,
                    lineHeight: "1.2",
                    marginBottom: "1%",
                  }}
                >
                  Scheduled Date : 20-09-2024
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  style={{
                    fontSize: 14,
                    lineHeight: "1.2",
                    marginBottom: "1%",
                  }}
                >
                  Scheduled Time : 16:00:00{" "}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  style={{
                    fontSize: 14,
                    lineHeight: "1.2",
                    marginBottom: "3%",
                  }}
                >
                  Test Duration : 90 Minutes
                </Typography>
              </Card>
              <Button
                variant="contained"
                size="small"
                style={{
                  margin: "1% auto",
                  display: "block",
                  backgroundColor: "rgba(33, 63, 177, 0.7)", // Adjust this line
                  color: "white", //text color
                  fontSize: "12px"
                }}
                onClick={() => {
                  console.log("Button clicked!");
                  // Add your logic here
                }}
              >
                View Instruction and Details
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllocatedTest;

{
  ////////////////////////////////////// First Design ///////////////////////////////////
  /* <CardHeader
                title={
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ paddingBottom: "0" }}
                  >
                    Test Title
                  </Typography>
                }
                style={{ paddingTop: "0", paddingBottom: "0" }}
              />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ paddingTop: "1%" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  style={{ marginRight: "2%", width: "90px", height: "90px" }}
                />
                <Box
                  style={{
                    height: "4em",
                    width: "60%",
                    border: "1px solid black",
                    padding: "1%",
                    marginRight: "2%",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    This is some sample card content. This is some sample card
                    content.
                  </Typography>
                </Box>
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Line 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Line 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Line 3
                </Typography>
                </CardContent> */
}

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  CardHeader,
  Avatar,
  Box,
} from "@mui/material";

const PastTest = () => {
  return (
    <Container maxWidth="xl" style={{ backgroundColor: "#F0F4FB" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            style={{ marginTop: "1%", marginLeft: "3%", padding: "1%" }}
          >
            View Past Test
          </Typography>
        </Grid>
        {[1, 2, 3, 4].map((item) => (
          <Grid item xs={12} sm={4} key={item}>
            <Card
              style={{
                width: "90%",
                height: "90%",
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
                  borderBottomLeftRadius: "12%",
                  borderBottomRightRadius: "12%",
                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="subtitle1"
                  align="center"
                  style={{
                    paddingTop: "3%",
                    paddingBottom: "2%",
                    marginTop: "2%",
                  }}
                >
                  Test Title
                </Typography>
                
                <Typography
                  variant="body2"
                  align="center"
                  style={{
                    fontSize: 13,
                    lineHeight: "1.2",
                    marginBottom: "1%",
                  }}
                >
                  Attempted Date : 20-09-2024
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  style={{
                    fontSize: 13,
                    lineHeight: "1.2",
                    marginBottom: "1%",
                  }}
                >
                  Attempted Time : 16:00:00{" "}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  style={{
                    fontSize: 13,
                    lineHeight: "1.2",
                    marginBottom: "1%",
                  }}
                >
                  Test Duration : 90 Minutes
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  style={{ fontSize: 14 }}
                >
                  Result : 67 Marks
                </Typography>{" "}
              </Card>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PastTest;

import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import CenteredTopbar from "./Layouts/CenteredTopbar";
import HomeComponent from "../Components/HomeComponent";
// import Copyright from "react-copyright";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "../Assets/Icons/Twitter";
import TelegramIcon from "../Assets/Icons/Telegram";
import LinkedinIcon from "../Assets/Icons/Linkedin";
import GithubIcon from "../Assets/Icons/Github";
import MediumIcon from "../Assets/Icons/Medium";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { trackPage } from "../Modules/analytics";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(12, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 6, 6, 6),
    textAlign: "center"
  },
  buttonJoin: {
    margin: "auto"
  },
  subscriptionField: {
    width: 200
  },
  buttonSubscribe: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(3)
  },
  subscriptionContainer: {
    marginBottom: theme.spacing(3)
  },
  socialNetworkIcon: {
    marginTop: 3,
    marginLeft: theme.spacing(2),
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer"
    }
  }
}));

const HomePage = () => {
  const classes = useStyles();
  // const [newsletterEmail, setNewsletterEmail] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    trackPage("Home");
  }, []);

  // const handleSubscribeNewsletter = () => {
  //   if (newsletterEmail.trim() !== "") {
  //     subscribeNewsletter(newsletterEmail);
  //     setSubmitted(true);
  //   }
  // };
  return (
    <React.Fragment>
      <CssBaseline />
      <CenteredTopbar />
      <main>
        <HomeComponent />
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        {/* <Container maxWidth="xs" className={classes.subscriptionContainer}>
          <Grid container direction="row" justify="center" alignItems="center">
            {!submitted && (
              <React.Fragment>
                <TextField
                  id="email"
                  label="Email address"
                  className={classes.subscriptionField}
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  margin="normal"
                  autoFocus={false}
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  className={classes.buttonSubscribe}
                  onClick={handleSubscribeNewsletter}
                >
                  Subscribe
                </Button>
              </React.Fragment>
            )}
            {submitted && (
              <Typography className={classes.hintText} variant="caption">
                Thank you, you have been registered successfully
              </Typography>
            )}
          </Grid>
        </Container> */}

        <a href="https://t.me/Veertly" target="_blank"></a>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          &copy; Copyright 2021 Powered By Veertly & Jitsi
        </Typography>
        {/* <Copyright>Jason Bellamy</Copyright> */}
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default HomePage;

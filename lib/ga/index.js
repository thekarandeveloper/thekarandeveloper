import ReactGA from "react-ga4";

export const GA_MEASUREMENT_ID = "G-WFJ73SVMKG"; // your ID

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};

export const logEvent = ({ category, action, label }) => {
  ReactGA.event({ category, action, label });
};
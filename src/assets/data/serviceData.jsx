import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RefreshIcon from "@mui/icons-material/Refresh";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const serviceData = [
  {
    icon: <LocalShippingIcon />,
    title: "Free Shipping",
    subtitle: "Guaranteed between 3-5 working days.",
    bg: "#fdefe6",
  },
  {
    icon: <RefreshIcon />,
    title: "Easy Returns",
    subtitle: "Contact us by email. Returns take 5-10 working days.",
    bg: "#ceebe9",
  },
  {
    icon: <LockOpenIcon />,
    title: "Secure Payment",
    subtitle: "Secure Payments powered by Stripe.",
    bg: "#e2f2b2",
  },
  {
    icon: <CurrencyExchangeIcon />,
    title: "Money Back Guarantee",
    subtitle: "Refunds guaranteed 2-3 working days.",
    bg: "#d6e5fb",
  },
];

export default serviceData;

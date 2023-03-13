import Footer from "./Footer";
import MeetOurInstructors from "./MeetOurInstructors";
import { Box } from "@mui/material";
import Reviews from "./Reviews";
import WBTGETL from "./WBTGETL";
import LANSITH from "./LANSITH";

export default function Index() {
  return (
    <Box sx={{ width: "80rem" }}>
      <LANSITH />

      <WBTGETL />

      <Reviews />

      <MeetOurInstructors />

      <Footer />
    </Box>
  );
}

import { colors } from "@mui/material";

const buildGradient = (start, end) =>
  `linear-gradient(180deg, ${start} 0%, ${end} 100%)`;

const grey = buildGradient(colors.grey[400], colors.grey[600]);
const blue = buildGradient(colors.blue[700], colors.blue[900]);
const indigo = buildGradient(colors.indigo[400], colors.indigo[600]);
const green = buildGradient(colors.green[400], colors.green[600]);
const orange = buildGradient(colors.orange[400], colors.orange[700]);
const red = buildGradient(colors.red[500], colors.red[700]);
const pink = buildGradient(colors.pink[500], colors.pink[700]);
const yellow = buildGradient(colors.yellow[500], colors.yellow[700]);
const Custom = buildGradient('#F7F8FA', '#becdd6');


export default {
  grey,
  blue,
  indigo,
  green,
  orange,
  red,
  pink,
  yellow,
  Custom
};
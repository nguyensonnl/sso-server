require("dotenv").config();
import { app } from "./src/app";

const PORT = process.env.PORT || 8383;

app.listen(PORT, () => {
  console.log(`Server is running on the port: ${PORT}`);
});

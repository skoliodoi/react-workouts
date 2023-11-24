import { BrowserRouter, Route, Routes } from "react-router-dom";

import WorkoutPage from "./pages/WorkoutPage";
import Homepage from "./pages/Homepage";

function App() {
  // const [video, setVideo] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="workout" element={<WorkoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

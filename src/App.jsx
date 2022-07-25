import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ResultPage from "./pages/ResultPage";
import NotFound from "./pages/NotFound";

import { AnswersContextProvider } from "./context/AnswersProvider";

function App() {
  return (
    <AnswersContextProvider>
      <BrowserRouter basename="/Lopez-test">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AnswersContextProvider>
  );
}

export default App;

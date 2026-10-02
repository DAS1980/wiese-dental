import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


// Visual editor inspector (handles element selection in iframe)
import "./lib/inspector";

createRoot(document.getElementById("root")!).render(<App />);

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Load custom embeddings (analytics, tracking pixels, etc.)
// Must be imported before App to ensure scripts run early
import "./lib/EmbeddingsLoader";

// Visual editor inspector (handles element selection in iframe)
import "./lib/inspector";

createRoot(document.getElementById("root")!).render(<App />);

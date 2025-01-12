import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <img src="../assets/logo.png" alt="Relai DAO Logo" width={200} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
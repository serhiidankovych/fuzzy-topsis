import Dashboard from "./components/Dashboard/Dashboard";
import ThemeContainer from "./containers/ThemeContainer";

function App() {
  return <ThemeContainer dashboard={<Dashboard />} />;
}

export default App;

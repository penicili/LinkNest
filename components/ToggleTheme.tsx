import { useTheme } from "@/components/ThemeProvider";
import MainButton from "@/components/MainButton";

const ToggleTheme = () => {
  const { toggleTheme } = useTheme();
  return (
      <MainButton text="Toggle Theme" onClick={toggleTheme} />
  )
};
export default ToggleTheme
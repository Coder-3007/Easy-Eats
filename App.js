import { View, SafeAreaView } from "react-native";
import HeaderTabs from "./Components/HeaderTabs";
import Home from "./Screens/Home";

export default function App() {
  return (
    <SafeAreaView>
      <HeaderTabs />
    </SafeAreaView>
  );
}

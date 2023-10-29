import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: "1", name: "Living Room", isOn: false },
  { id: "2", name: "Kitchen", isOn: false },
  { id: "3", name: "Bedroom", isOn: false },
  { id: "4", name: "Bathroom", isOn: false },
  { id: "5", name: "Garage", isOn: false },
  { id: "6", name: "Porch", isOn: false },
  { id: "7", name: "Garden", isOn: false },
  { id: "8", name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  //const [isOn, setIsOn] = useState(false);

  const [lights, setLights] = useState(initialLights);

  function toggleLight(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleTurnOnAll() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleTurnOffAll() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  const countTurnedOn = lights.filter((light) => light.isOn).length;
  console.log("TEST", countTurnedOn <= 0);
  return (
    <Layout isDimmed={countTurnedOn <= 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        countTurnedOn={countTurnedOn}
        handleTurnOnAll={handleTurnOnAll}
        handleTurnOffAll={handleTurnOffAll}
      />
    </Layout>
  );
}

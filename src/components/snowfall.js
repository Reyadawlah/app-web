import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Snowfall = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 100,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: { min: 1, max: 4 },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            outModes: {
              default: "out",
            },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default Snowfall;

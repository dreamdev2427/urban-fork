import React from "react";
import Particles from "react-tsparticles";
import "./snowingstyles.css";

export default function Snowing({ height }) {
  return (
    <Particles
      height={height} 
      options={{
        backgroundMode: {
          enable: false,
          zIndex: 5
        },
        fullScreen: {
            enable: false,
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: { enable: true, mode: "repulse" },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: { enable: false, force: 2, smooth: 10 }
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 0.3,
              opacity: 1,
              size: 4,
              speed: 3
            },
            grab: { distance: 200, line_linked: { opacity: 0.8 } },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
            repulse: { distance: 200, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#fff" },
          links: {
            color: "#ffffff",
            distance: 500,
            enable: false,
            opacity: 0.4,
            width: 2
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            direction: "bottom",
            enable: true,
            outMode: "out",
            random: false,
            size: true,
            speed: 4,
            straight: false
          },
          number: { density: { enable: true, area: 800 }, value: 100 },
          opacity: {
            random: true,
            value: 1
          },
          shape: {
            type: "circle"
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }}
    />
  );
}

import {Particles} from "react-tsparticles";
import { loadFull } from "tsparticles";
import React,{useCallback} from 'react';

const ParticlesContainer = () => {

  const particlesInit= useCallback(async(engine) => {
await loadFull (engine);
  }, []);

  const particlesLoaded=useCallback(async()=>{},[]);

  return(
  <Particles 
  className="w-full h-full absolute translate-z-0"
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fullscreen: {enable: false},
      background: {
        color: {
          value:"",
        },
      },
      fpsLimit:220,
      interactivity: {
        events: {
          onclick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize:true,
        },
        modes:{
          push: {
            quantity: 190
          },
          repulse: {
            distance:100,
            duration: 0.4,
          }
        }
      },
      particles: {
        color: {
          value: "#f64e3e",
        },
        links: {
          color:"#fff5f544",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true,
        },
        move: {
          directions:"none",
          enable:true,
          outModes: {
            default:"bounce"
          },
          random:false,
          speed:1,
          straight:false
        },
        number: {
          density: {
            enable:true,
            area:800
          },
          value:80
        },
        opacity: {
          value:0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max:5},
        },
      },
      detectRetina: true,
    }}
  />
  );
};

export default ParticlesContainer;

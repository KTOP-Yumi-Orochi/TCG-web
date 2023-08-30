export const particlesOptions = {
    fsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "bubble",
            }
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "random",
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.8,
        },
        shape: {
            type: "star",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
};
  
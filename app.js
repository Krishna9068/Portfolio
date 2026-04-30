particlesJS("particles-js", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1
      }
    },
    size: {
      value: 2,
      random: true
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: false
      }
    }
  },
  retina_detect: true
});

const texts = ["Open Source Contributor", "Software Developer", "Freelancer"];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = texts[count];

    if (isDeleting) {
        index--;
    } else {
        index++;
    }

    document.getElementById("typing").innerHTML = currentText.slice(0, index);

    if (!isDeleting && index === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1500); // pause before deleting
        return;
    }

    if (isDeleting && index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();


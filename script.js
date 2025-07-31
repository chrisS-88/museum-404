document.addEventListener("DOMContentLoaded", () => {
  const updateTime = () => {
    const timeEl = document.getElementById("current-time");
    if (!timeEl) {
      return;
    }

    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toDateString();
    timeEl.textContent = `_>${date}-${time}`;
    // document.getElementById("current-time").textContent = `_>${date}-${time}`;
  };
  updateTime();
  setInterval(updateTime, 1000);

  const glitchedText = (elId) => {
    const element = document.getElementById(elId);
    if (!element) {
      return;
    }

    const originalText = element.textContent;
    console.log(originalText);

    const settings = {
      duration: 600,
      interval: 70,
      glitchChance: 0.3,
      chars: "@#$%&*_-+=<>?/dhskeuex£",
    };
    const getRandomChar = () => {
      const randomIndex = Math.floor(Math.random() * settings.chars.length);
      const randomChar = settings.chars[randomIndex];
      return randomChar;
    };

    const glitchEffect = () => {
      let elapsed = 0;

      const interval = setInterval(() => {
        const glitched = originalText
          .split("")
          .map((char) => {
            if (Math.random() < settings.glitchChance) {
              return getRandomChar();
            } else {
              return char;
            }
          })
          .join("");
        element.textContent = glitched;

        elapsed += settings.interval;
        if (elapsed >= settings.duration) {
          clearInterval(interval);

          element.textContent = originalText;
        }
      }, settings.interval);
    };
    element.addEventListener("mouseenter", () => {
      console.log("Mouse entered, glitch effect starting");
      glitchEffect();
    });
  };

  glitchedText("nav-shuffle");
  glitchedText("shuffle-home");
  glitchedText("shuffle-exhibits");
  glitchedText("shuffle-contact");
  glitchedText("form-submit");
});

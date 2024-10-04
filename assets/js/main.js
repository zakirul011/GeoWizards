// HERO BUTTON TO FEATURES
const homeBtn = document.querySelector(".home-button");

const hero = document.querySelector(".hero-content");
const features = hero.querySelectorAll(".feature-item");
const expBtn = hero.querySelector(".explore-btn");
const climateBtn = hero.querySelector(".climate-btn");
const climateWrap = hero.querySelector(".climate-change");
const featureArrow = hero.querySelector(".feature-arrow");
const activitiesArrow = hero.querySelector(".activities-arrow");
const systemItem = hero.querySelectorAll(".system-list-item");
const activitiesItem = hero.querySelectorAll(".activities-item");
const systemTabs = hero.querySelectorAll(".system-tab");
const activitiesTabs = hero.querySelectorAll(".activities-tab");
const featureTabs = hero.querySelectorAll(".feature-tab");

expBtn.addEventListener("click", () => {
  hero.classList.add("animation-1");
});
climateBtn.addEventListener("click", () => {
  climateWrap.classList.add("active");
});
homeBtn.addEventListener("click", () => {
  hero.classList.remove("animation-1");
  resetWebAnimation();
});
featureArrow.addEventListener("click", () => {
  resetWebAnimation();
});
function resetWebAnimation() {
  hero.classList.remove("animation-2");
  hero.classList.remove("animation-3");
  hero.classList.remove("animation-earth");
  hero.classList.remove("animation-system");
  hero.classList.remove("animation-connection");
  hero.classList.remove("animation-climate");
  hero.classList.remove("animation-climate-feature");
  hero.classList.remove("animation-activities");
  hero.classList.remove("animation-act-expand");
  hero.classList.remove("animation-nasa");
  hero.classList.remove("animation-nasa-tab");
  climateWrap.classList.remove("active");
  for (let i = 0; i < systemItem.length; i++) {
    systemItem[i].classList.remove("active");
  }
  for (let i = 0; i < activitiesItem.length; i++) {
    activitiesItem[i].classList.remove("active");
  }
  for (let i = 0; i < featureTabs.length; i++) {
    featureTabs[i].classList.remove("active");
  }
}

activitiesArrow.addEventListener("click", () => {
  hero.classList.remove("animation-act-expand");
});

// FEATURE EXPAND
features.forEach((feature, index) => {
  feature.style.transitionDuration = 0.4 + index / 10 + "s";
  feature.addEventListener("click", () => {
    for (let i = 0; i < features.length; i++) {
      features[i].classList.remove("active");
    }
    for (let i = 0; i < featureTabs.length; i++) {
      featureTabs[i].classList.remove("active");
    }
    featureTabs[index].classList.add("active");
    feature.classList.add("active");
    if (index == 0) {
      hero.classList.add("animation-2");
      hero.classList.add("animation-earth");
    } else if (index == 1) {
      hero.classList.add("animation-2");
      hero.classList.add("animation-connection");
    } else if (index == 2) {
      hero.classList.add("animation-2");
      hero.classList.add("animation-climate");
    } else if (index == 3) {
      hero.classList.add("animation-2");
      hero.classList.add("animation-activities");
    } else if (index == 4) {
      hero.classList.add("animation-nasa");
    }
  });
});

// SYSTEM EXPAND
systemItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < systemItem.length; i++) {
      systemItem[i].classList.remove("active");
    }
    for (let i = 0; i < systemTabs.length; i++) {
      systemTabs[i].classList.remove("active");
    }
    systemTabs[index].classList.add("active");
    item.classList.add("active");
    hero.classList.add("animation-system");
  });
});

// ACTIVITIES EXPAND
activitiesItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < activitiesItem.length; i++) {
      activitiesItem[i].classList.remove("active");
    }
    for (let i = 0; i < activitiesTabs.length; i++) {
      activitiesTabs[i].classList.remove("active");
    }
    activitiesTabs[index].classList.add("active");
    item.classList.add("active");
    hero.classList.add("animation-act-expand");
  });
});

// CLIMATE EXPAND
const climateContent = hero.querySelectorAll(".climate-content");
climateContent.forEach((wrap) => {
  let features = wrap.querySelectorAll(".climate-features .card-box");
  let close = wrap.querySelector(".climate-feature-close");
  features.forEach((feature) => {
    feature.addEventListener("click", () => {
      hero.classList.add("animation-climate-feature");
    });
  });
  close.addEventListener("click", () => {
    hero.classList.remove("animation-climate-feature");
  });
});

const climateWarming = hero.querySelectorAll(".temperature-globe-wrap");
climateWarming.forEach((wrap) => {
  let imgs = wrap.querySelectorAll(".temperature-globe-img .image");
  let input = wrap.querySelector("input");
  let value = input.value - input.min;

  update();

  input.addEventListener("input", () => {
    value = input.value - input.min;
    update();
  });

  function update() {
    input.previousElementSibling.textContent = input.value;
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove("active");
    }
    imgs[value].classList.add("active");
  }
});

// custom tab
tabFunc(
  document.querySelectorAll(".bioscope-btn"),
  document.querySelectorAll(".bioscope-tab")
);
tabFunc(
  document.querySelectorAll(".connection-statistics-link"),
  document.querySelectorAll(".connection-statistics-tab")
);
tabFunc(
  document.querySelectorAll(".connection-statistics-nav li"),
  document.querySelectorAll(".conn-statictics-inner-tab")
);

tabFunc(
  document.querySelectorAll(".nasa-tab-link"),
  document.querySelectorAll(".nasa-tab")
);
tabFunc(
  document.querySelectorAll(".climate-features button"),
  document.querySelectorAll(".climate-tab")
);
systemTabs.forEach((wrap) => {
  tabFunc(
    wrap.querySelectorAll(".system-inner-tab-links li"),
    wrap.querySelectorAll(".system-inner-tab")
  );
});
document.querySelectorAll(".connection-statistics-tab").forEach((wrap) => {
  tabFunc(
    wrap.querySelectorAll(".connection-statistics-menu li"),
    wrap.querySelectorAll(".conn-statistics-menu-tab")
  );
});
document.querySelectorAll(".climate-tab").forEach((wrap) => {
  tabFunc(
    wrap.querySelectorAll(".climate-element-nav li"),
    wrap.querySelectorAll(".climate-element-tab")
  );
  tabFunc(
    wrap.querySelectorAll(".climate-component-nav li"),
    wrap.querySelectorAll(".climate-component-tab")
  );
});

function tabFunc(tabLinks, tabs) {
  tabLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
        tabs[i].classList.remove("active");
      }
      link.classList.add("active");
      tabs[index].classList.add("active");
    });
  });
}

// NASA INNER TABS
const nasa = document.querySelectorAll(".nasa-resources");
nasa.forEach((wrap) => {
  let tabLink = wrap.querySelectorAll(".nasa-tab-link");
  let tabs = wrap.querySelectorAll(".nasa-tab");

  tabs.forEach((tab) => {
    let tabInnerLink = tab.querySelectorAll(".nasa-inner-tab-link");
    let tabInnertabs = tab.querySelectorAll(".nasa-inner-tab");
    let video = tab.querySelector(".nasa-tab-video");

    tabInnerLink.forEach((link, index) => {
      link.addEventListener("click", () => {
        let x = 0;

        if (link.classList.contains("active")) {
          for (let i = 0; i < tabInnerLink.length; i++) {
            tabInnerLink[i].classList.remove("fade");
          }
          link.classList.remove("active");
          tabInnertabs[index].classList.remove("active");
        } else {
          for (let i = 0; i < tabInnerLink.length; i++) {
            tabInnerLink[i].classList.add("fade");
            tabInnerLink[i].classList.remove("active");
            tabInnertabs[i].classList.remove("active");
          }
          link.classList.add("active");
          link.classList.remove("fade");
          tabInnertabs[index].classList.add("active");
        }

        for (let i = 0; i < tabInnerLink.length; i++) {
          if (!tabInnerLink[i].classList.contains("active")) {
            x++;
          }
        }
        if (x == tabInnerLink.length) {
          video.classList.add("active");
        } else {
          video.classList.remove("active");
        }
      });
    });
  });

  let close = wrap.querySelector(".nasa-tab-close");
  tabLink.forEach((link) => {
    link.addEventListener("click", () => {
      hero.classList.add("animation-nasa-tab");
    });
  });

  close.addEventListener("click", () => {
    hero.classList.remove("animation-nasa-tab");
  });
});

// CONNECTION
const connectionWrap = hero.querySelectorAll(".connection-wrap");
connectionWrap.forEach((wrap) => {
  let introBtn = wrap.querySelector(".connection-intro button");
  let markers = wrap.querySelectorAll(".connection-marker");
  let titleClicked = false;
  let timeline = [];
  let popups = wrap.querySelectorAll(".connection-popup");

  popups.forEach((popup) => {
    let close = popup.querySelector(".connection-popup-close");
    close.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  });

  let standard = {
    min: 0,
    value: 100,
    max: 100,
  };

  let system = {
    atm: {
      temperature: {
        min: 18,
        value: 0,
        max: 52,
      },
    },
    hyd: {
      water: {
        min: 20,
        value: 0,
        max: 150,
      },
    },
    cry: {
      glacier: {
        min: 40,
        value: 0,
        max: 80,
      },
    },
    geo: {
      coastal: {
        min: 0,
        value: 0,
        max: 100,
      },
    },
    bio: {
      trees: {
        min: 0,
        value: 0,
        max: 100,
      },
    },
  };
  // ACTION
  introBtn.addEventListener("click", () => {
    wrap.classList.add("intro");
  });

  // ACTIVE WINDOW FOR INFO BUTTON
  const connStatTabWrap = hero.querySelector(".connection-statistics-tabs");
  const connStatTabClose = connStatTabWrap.querySelector(".close");
  const connStatLink = wrap.querySelectorAll(".connection-statistics-link");

  connStatLink.forEach((link) => {
    link.addEventListener("click", () => {
      connStatTabWrap.classList.add("active");
    });
  });
  connStatTabClose.addEventListener("click", () => {
    connStatTabWrap.classList.remove("active");
  });

  // SHOW HIDE THE CONTROLLER
  let showhideColtrol = wrap.querySelectorAll(".show-markers");
  showhideColtrol.forEach((btn) => {
    let text = btn.querySelector(".text");
    let icon = btn.querySelector("i");
    btn.addEventListener("click", () => {
      if (btn.classList.contains("btn-active")) {
        markers.forEach((marker) => {
          marker.classList.remove("active");
          marker.classList.remove("active-comp");
        });
        btn.classList.remove("btn-active");
        text.textContent = "show";
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
      } else {
        markers.forEach((marker) => {
          marker.classList.add("active");
          marker.classList.add("active-comp");
        });
        btn.classList.add("btn-active");
        text.textContent = "hide";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      }
    });
  });
  // update the system
  updateSystemObejct();
  updateFullSystem();

  markers.forEach((marker) => {
    initComps();

    let connectionComps = marker.querySelectorAll(".connection-comp");
    connectionComps.forEach((comp) => {
      let input = comp.querySelector("input");
      let compKey = comp.getAttribute("data-wrap");
      input.addEventListener("input", () => {
        let d = 1;

        if (
          compKey == "temperature" ||
          compKey == "water" ||
          compKey == "coastal"
        ) {
          d = -1;
        }

        standard.value = getValueReverse(standard, input, d);

        updateSystemObejct();
        updateComps(compKey);
        updateFullSystem();
      });
    });

    // marker indecator action
    let ball = marker.querySelector(".connection-ball");
    let title = marker.querySelector(".connection-title");

    ball.addEventListener("click", () => {
      marker.classList.toggle("active");
      if (!titleClicked) {
        title.classList.add("pulse-btn");
      }
    });
    title.addEventListener("click", () => {
      marker.classList.toggle("active-comp");
      title.classList.remove("pulse-btn");
      titleClicked = true;
    });
  });

  // FUNCTIONS
  function updateFullSystem() {
    updateTrees();
    updateSun();
    updateGlacier();
    updateLava();
    updateWater();
    updatePopup();
  }

  function updatePopup() {
    let percentSystem = {
      temperature: getPercentage(system.atm.temperature),
      water: getPercentage(system.hyd.water),
      glacier: getPercentage(system.cry.glacier),
      coastal: getPercentage(system.geo.coastal),
      trees: getPercentage(system.bio.trees),
    };

    for (let i = 0; i < popups.length; i++) {
      let key = Object.keys(percentSystem)[i];
      let value = percentSystem[key];
      let textUpdate = popups[i].querySelector(".connection-popup-update");

      clearTimeout(timeline[i]);
      popups[i].classList.add("active");
      if (value > 0.5) {
        textUpdate.textContent = "increasing";
      } else if (value > 0) {
        textUpdate.textContent = "Decreasing";
      }

      timeline[i] = setTimeout(() => {
        popups[i].classList.remove("active");
      }, 3000);
    }

    function getPercentage(element) {
      let value = (element.value - element.min) / (element.max - element.min);
      return value;
    }
  }

  function updateSystemObejct() {
    let systemKeysArray = Object.keys(system);

    for (let i = 0; i < systemKeysArray.length; i++) {
      let marker = system[systemKeysArray[i]];
      let markerArray = Object.keys(marker);

      for (let j = 0; j < markerArray.length; j++) {
        let compName = markerArray[j];
        let comp = marker[compName];

        let d = 1;
        if (
          compName == "temperature" ||
          compName == "water" ||
          compName == "coastal"
        ) {
          d = -1;
        }

        if (compName == "temperature" || compName == "water") {
          d = -1;
        }

        comp.value = getValue(comp, standard, d);
      }
    }
  }

  function getValue(y, x, d) {
    let value;
    if (d == -1) {
      value = ((y.max - y.min) / (x.max - x.min)) * x.value * d + y.max;
    } else {
      value = ((y.max - y.min) / (x.max - x.min)) * x.value * d + y.min;
    }
    return Math.round(value);
  }

  function getValueReverse(y, x, d) {
    let value;
    if (d == -1) {
      value = ((y.max - y.min) * (x.value - x.max)) / (d * (x.max - x.min));
    } else {
      value = ((y.max - y.min) * (x.value - x.min)) / (d * (x.max - x.min));
    }
    return Math.round(value);
  }

  function initComps() {
    markers.forEach((marker) => {
      let connectionComps = marker.querySelectorAll(".connection-comp");
      let markerKey = marker.getAttribute("data-wrap");
      if (markerKey) {
        connectionComps.forEach((comp) => {
          let currents = comp.querySelectorAll(".control-current");
          let input = comp.querySelector("input");
          let minHolder = comp.querySelector(".min");
          let maxHolder = comp.querySelector(".max");
          let compKey = comp.getAttribute("data-wrap");
          if (compKey) {
            let { min, value, max } = system[markerKey][compKey];

            input.min = min;
            input.max = max;
            minHolder.textContent = min;
            maxHolder.textContent = max;

            input.value = value;

            currents.forEach((current) => {
              current.textContent = value;
            });
          }
        });
      }
    });
  }

  function updateComps(compName) {
    markers.forEach((marker) => {
      let connectionComps = marker.querySelectorAll(".connection-comp");
      let markerKey = marker.getAttribute("data-wrap");
      if (markerKey) {
        connectionComps.forEach((comp) => {
          let currents = comp.querySelectorAll(".control-current");
          let input = comp.querySelector("input");
          let compKey = comp.getAttribute("data-wrap");
          if (compKey) {
            let { value } = system[markerKey][compKey];
            if (compName != compKey) {
              input.value = value;
            }
            currents.forEach((current) => {
              current.textContent = value;
            });
          }
        });
      }
    });
  }

  function updateTrees() {
    let {
      bio: { trees },
    } = system;
    let treeImgs = wrap.querySelectorAll(".connection-trees img");
    let currentTreesCount = Math.round(
      (treeImgs.length * (trees.value - trees.min)) / (trees.max - trees.min)
    );
    for (let i = 0; i < treeImgs.length; i++) {
      treeImgs[i].classList.remove("active");
    }
    for (let i = 0; i < currentTreesCount; i++) {
      treeImgs[i].classList.add("active");
    }
  }

  function updateSun() {
    let {
      atm: { temperature },
    } = system;
    let sun = wrap.querySelector(".sun");
    let content = wrap.querySelector(".connection-content");
    sun.style.opacity = temperature.value / temperature.max;
    content.style.backgroundColor = `rgba(255, 174, 0, ${
      (temperature.value / temperature.max) * 0.3
    })`;
  }

  function updateGlacier() {
    let {
      cry: { glacier },
    } = system;
    let itemImg = wrap.querySelectorAll(".connection-glaciers img");
    let currentItemCount = Math.ceil(
      (itemImg.length * (glacier.value - glacier.min)) /
        (glacier.max - glacier.min)
    );

    for (let i = 0; i < itemImg.length; i++) {
      itemImg[i].classList.remove("active");
    }
    for (let i = 0; i < currentItemCount; i++) {
      itemImg[i].classList.add("active");
    }
  }
  function updateLava() {
    let {
      geo: { coastal },
    } = system;
    let itemImg = wrap.querySelectorAll(".connection-lava img");
    let currentItemCount = Math.ceil(
      (itemImg.length * (coastal.value - coastal.min)) /
        (coastal.max - coastal.min)
    );

    for (let i = 0; i < itemImg.length; i++) {
      itemImg[i].classList.remove("active");
    }
    for (let i = 0; i < currentItemCount; i++) {
      itemImg[i].classList.add("active");
    }
  }
  function updateWater() {
    let {
      hyd: { water },
    } = system;
    let itemImg = wrap.querySelectorAll(".connection-water img");
    let currentItemCount = Math.ceil(
      (itemImg.length * (water.value - water.min)) / (water.max - water.min)
    );

    for (let i = 0; i < itemImg.length; i++) {
      itemImg[i].classList.remove("active");
    }
    for (let i = 0; i < currentItemCount; i++) {
      itemImg[i].classList.add("active");
    }
  }
});

// ACTIVITIES
// bioscope
const bioscopeWrap = hero.querySelectorAll(".bioscope-wrap");
bioscopeWrap.forEach((wrap) => {
  let btnClicked = false;

  let btns = wrap.querySelectorAll(".bioscope-btn");
  let tabs = wrap.querySelectorAll(".bioscope-tab");
  let close = wrap.querySelector(".bioscope-close");
  let videos = wrap.querySelectorAll("video");
  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      wrap.classList.add("active");
      videos[index].currentTime = 0;
      videos[index].play();
      if (!btnClicked) {
        btnClicked = true;
        for (let i = 0; i < btns.length; i++) {
          btns[i].classList.remove("pulse-btn");
        }
      }
    });
  });
  close.addEventListener("click", () => {
    wrap.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  });
});

//========== PRELOADER ==========>
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
//========== PRELOADER// ==========>

//========== STICKY HEADER, BACK TO TOP ==========>
const headerArea = document.querySelectorAll(".header-area");
headerArea.forEach((area) => {
  let height;
  window.addEventListener("resize", () => {
    addHeaderHeight();
  });
  window.addEventListener("load", () => {
    addHeaderHeight();
  });
  function addHeaderHeight() {
    height = area.clientHeight;
    document.documentElement.style.setProperty("--header-h", height + "px");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > height) {
      area.classList.add("sticky");
    } else {
      area.classList.remove("sticky");
    }
  });
});
//========== STICKY HEADER, BACK TO TOP// ==========>

(function ($) {
  "use strict";

  //========== CLIMATE SLIDER ==========>

  // debounce from underscore.js
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // use x and y mousewheel event data to navigate flickity
  function slick_handle_wheel_event(e, slick_instance, slick_is_animating) {
    // do not trigger a slide change if another is being animated
    if (!slick_is_animating) {
      // pick the larger of the two delta magnitudes (x or y) to determine nav direction
      var direction =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      // console.log("wheel scroll ", e.deltaX, e.deltaY, direction);

      if (direction > 0) {
        // next slide
        slick_instance.slick("slickNext");
      } else {
        // prev slide
        slick_instance.slick("slickPrev");
      }
    }
  }

  // debounce the wheel event handling since trackpads can have a lot of inertia
  var slick_handle_wheel_event_debounced = debounce(
    slick_handle_wheel_event,
    100,
    true
  );

  // init slider
  const climateSlider = $(".climate-slider");
  climateSlider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    swipeToSlide: true,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    appendDots: ".climate-slider-control",
    appendArrows: ".climate-slider-control",
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fal fa-angle-up"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fal fa-angle-down"></i></button>',

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  var climateSlider_is_animating = false;

  climateSlider.on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      climateSlider_is_animating = false;
    }
  );

  climateSlider.on("beforeChange", function () {
    climateSlider_is_animating = true;
  });

  climateSlider.on("wheel", function (e) {
    e.preventDefault();
    slick_handle_wheel_event_debounced(
      e.originalEvent,
      climateSlider,
      climateSlider_is_animating
    );
  });

  //========== CLIMATE SLIDER// ==========>

  //========== img SLIDER ==========>
  $(".img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
  });
  //========== img SLIDER// ==========>

  //========== NASA SLIDER// ==========>
})(jQuery);

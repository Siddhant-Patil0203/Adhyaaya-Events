// //?Page Scroll
// new fullpage("#fullpage", {
//   sectionsColor: ["#000", "#000"],
// });

//?GSAP Code
window.onresize = window.onload = function () {
  gsap.set(".m1_stage", { x: "50vw", opacity: 1 });
};

gsap
  .timeline({ defaults: { duration: 45 } })
  .from(".main1", { duration: 1, autoAlpha: 0, ease: "power1.inOut" }, 0)
  .fromTo(
    ".m1_cGroup",
    { opacity: 0 },
    { duration: 0.3, opacity: 1, stagger: -0.1 },
    0
  )
  .from(
    ".m1_cGroup",
    {
      duration: 2.5,
      scale: -0.3,
      transformOrigin: "50% 50%",
      stagger: -0.05,
      ease: "elastic",
    },
    0
  )
  .fromTo(
    ".m1Bg",
    { opacity: 0 },
    { duration: 1, opacity: 1, ease: "power2.inOut" },
    0.2
  )

  .add("orbs", 1.2)
  .add(function () {
    $(".main1").on("mousemove", function (e) {
      gsap.to(".m1_cGroup", {
        duration: 1,
        x: function (i) {
          return (e.clientX / window.innerWidth / (i + 1)) * 150;
        },
        y: function (i) {
          return i * -20 * (e.clientY / window.innerHeight);
        },
        rotation: Math.random() * 0.1,
        overwrite: "auto",
      });
      gsap.to(".c1_solid, .c1_line", {
        duration: 1,
        attr: { opacity: 1.1 - 0.75 * (e.clientY / window.innerHeight) },
      });
      gsap.to(".m1OrbBlank", {
        duration: 1,
        opacity: 0.2 + 0.55 * (e.clientY / window.innerHeight),
      });
      gsap.to(".m1OrbBlank11", {
        duration: 1,
        opacity: 0.2 + 0.55 * (e.clientY / window.innerHeight),
      });
    });

    $(".main1").on("click", function (e) {
      if (gsap.getProperty(".m1_cGroup", "scale") != 1) return; //prevent overlapping bouncy tweens
      for (var i = 0; i < $(".m1_cGroup").length; i++) {
        gsap.fromTo(
          $(".m1_cGroup")[i],
          { transformOrigin: "50% 50%", scale: 1 },
          {
            duration: 0.7 - i / 25,
            scale: 0.9,
            ease: "back.in(10)",
            yoyo: true,
            repeat: 1,
          }
        );
      }
    });
  }, "orbs+=0.5")

  .fromTo(
    ".orb1",
    { xPercent: -65, yPercent: 5 },
    {
      motionPath: {
        path: function () {
          return MotionPathPlugin.convertToPath(".c1_line1", false)[0];
        },
        start: 1.03,
        end: 1.22,
      },
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
    "orbs"
  )

  // Codeventure
  .fromTo(
    ".orb11",
    { xPercent: -35, yPercent: -55 },
    {
      motionPath: {
        path: function () {
          return MotionPathPlugin.convertToPath(".c1_line1", false)[0];
        },
        start: 1.2,
        end: 1.5,
      },
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
    "orbs"
  )

  .fromTo(
    ".orb2",
    { xPercent: -45, yPercent: -10 },
    {
      motionPath: {
        path: function () {
          return MotionPathPlugin.convertToPath(".c1_line2", false)[0];
        },
        start: 0.98,
        end: 1.2,
      },
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
    "orbs"
  )

  // Virtual Placements
  .fromTo(
    ".orb21",
    { xPercent: -45, yPercent: -10 },
    {
      motionPath: {
        path: function () {
          return MotionPathPlugin.convertToPath(".c1_line2", false)[0];
        },
        start: 1.29,
        end: 1.6,
      },
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
    "orbs"
  )

  .fromTo(
    ".orb3",
    { xPercent: -50, yPercent: -15 },
    {
      motionPath: {
        path: function () {
          return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
        },
        start: 1.06,
        end: 1.31,
      },
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
    "orbs"
  )

  //  Vaad Vivad
  .fromTo(
    ".orb31",
    { xPercent: -50, yPercent: -15 },
    {
      motionPath: {
        path: function () {
          return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
        },
        start: 1.33,
        end: 1.6,
      },
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
    "orbs"
  )

  .fromTo(
    ".orb3b",
    { xPercent: -50, yPercent: -25 },
    {
      motionPath: {
        path: function () {
          return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
        },
        start: 1.49,
        end: 1.65,
      },
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
    "orbs"
  )

  .fromTo(
    ".orb3c",
    { xPercent: -45, yPercent: -15 },
    {
      motionPath: {
        path: function () {
          return MotionPathPlugin.convertToPath(".c1_line3", false)[0];
        },
        start: 0.95,
        end: 1.2,
      },
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
    "orbs"
  )

  .fromTo(
    ".orb4",
    { xPercent: -50, yPercent: -25 },
    {
      motionPath: {
        path: function () {
          return MotionPathPlugin.convertToPath(".c1_line4", false)[0];
        },
        start: 1.14,
        end: 1.4,
      },
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
    "orbs"
  )

  // COMSA webinar
  .fromTo(
    ".orb41",
    { xPercent: -50, yPercent: -55 },
    {
      motionPath: {
        path: function () {
          return MotionPathPlugin.convertToPath(".c1_line4", false)[0];
        },
        start: 1.25,
        end: 1.5,
      },
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
    "orbs"
  )

  .fromTo(
    ".orb4b",
    { xPercent: -50, yPercent: -25 },
    {
      motionPath: {
        path: function () {
          return MotionPathPlugin.convertToPath(".c1_line4", false)[0];
        },
        start: 1.41,
        end: 1.6,
      },
      ease: "none",
      yoyo: true,
      repeat: -1,
    },
    "orbs"
  )

  .fromTo(
    ".m1Orb",
    { scale: 0, transformOrigin: "50% 50%" },
    {
      duration: 0.8,
      scale: 1.5,
      ease: "back.out(3)",
      stagger: 0.15,
      overwrite: "auto",
    },
    "orbs"
  )
  .fromTo(
    ".m1OrbBlank",
    { opacity: 0 },
    {
      duration: 0.8,
      opacity: function (i) {
        return 0.2 + i / 7;
      },
      stagger: 0.1,
      overwrite: "auto",
    },
    "orbs"
  )
  .fromTo(
    ".m1OrbBlank",
    {
      x: function (i) {
        return 620 - (i / 4) * 380;
      },
      transformOrigin: function (i) {
        return -(620 - (i / 4) * 380) + "px 0px";
      },
      rotation: function (i) {
        return [99, -10, 55, 110, 120][i];
      },
    },
    { rotation: "+= 75", yoyo: true, repeat: -1 },
    "orbs"
  )

  .fromTo(
    ".m1OrbBlank11",
    { opacity: 0 },
    {
      duration: 0.8,
      opacity: function (i) {
        return 0.2 + i / 7;
      },
      stagger: 0.1,
      overwrite: "auto",
    },
    "orbs"
  )
  .fromTo(
    ".m1OrbBlank11",
    {
      x: function (i) {
        return 620 - (i / 4) * 380;
      },
      transformOrigin: function (i) {
        return -(620 - (i / 4) * 380) + "px 0px";
      },
      rotation: function (i) {
        return [10, -1, 1, 1, 1][i];
      },
    },
    { rotation: "+= 75", yoyo: true, repeat: -1 },
    "orbs"
  );

//?Specific events onclick cover code
// listing vars here so they're in the global scope
var cards,
  nCards,
  cover,
  cover2,
  cover3,
  openContent,
  openContentText,
  pageIsOpen = false,
  openContentImage,
  closeContent,
  openContent2,
  openContentText2,
  openContentImage2,
  closeContent2,
  openContent3,
  openContentText3,
  openContentImage3,
  closeContent3,
  windowWidth,
  windowHeight,
  currentCard;

// initiate the process
init();

function init() {
  resize();
  selectElements();
  attachListeners();
}

// select all the elements in the DOM that are going to be used
function selectElements() {
  (cards = document.getElementsByClassName("card")),
    (nCards = cards.length),
    (cover = document.getElementById("cover11")),
    (cover2 = document.getElementById("cover12")),
    (cover3 = document.getElementById("cover13")),
    (openContent = document.getElementById("open-content")),
    (openContentText = document.getElementById("open-content-text")),
    (openContentImage = document.getElementById("open-content-image")),
    (openContent2 = document.getElementById("open-content2")),
    (openContentText2 = document.getElementById("open-content-text2")),
    (openContentImage2 = document.getElementById("open-content-image2")),
    (openContent3 = document.getElementById("open-content3")),
    (openContentText3 = document.getElementById("open-content-text3")),
    (openContentImage3 = document.getElementById("open-content-image3")),
    (closeContent = document.getElementById("close-content")),
    (closeContent2 = document.getElementById("close-content2")),
    (closeContent3 = document.getElementById("close-content3"));
}

/* Attaching three event listeners here:
  - a click event listener for each card
  - a click event listener to the close button
  - a resize event listener on the window
*/
function attachListeners() {
  for (var i = 0; i < nCards; i++) {
    attachListenerToCard(i);
  }
  closeContent.addEventListener("click", onCloseClick);
  closeContent2.addEventListener("click", onCloseClick);
  closeContent3.addEventListener("click", onCloseClick);
  window.addEventListener("resize", resize);
}

function attachListenerToCard(i) {
  cards[i].addEventListener("click", function (e) {
    var card = getCardElement(e.target);
    onCardClick(card, i);
  });
}

/* When a card is clicked */
function onCardClick(card, i) {
  // set the current card
  currentCard = card;
  // add the 'clicked' class to the card, so it animates out
  currentCard.className += " clicked";
  // animate the card 'cover' after a 500ms delay
  setTimeout(function () {
    animateCoverUp(currentCard, i);
  }, 500);
  // animate out the other cards
  animateOtherCards(currentCard, true);
  // add the open class to the page content
  if (i < 4) {
    openContent.className += " open";
    // document.getElementById("first_page").style.display = "none";
    // document.getElementById("all_events").style.display = "none";
    // document.getElementById("non_technical_events").style.display = "none";
    // document.getElementById("workshops").style.display = "none";
  } else if (i >= 4 && i <= 11) openContent2.className += " open";
  else openContent3.className += " open";

  body.style.overflow = "hidden";
}

/*
 * This effect is created by taking a separate 'cover' div, placing
 * it in the same position as the clicked card, and animating it to
 * become the background of the opened 'page'.
 * It looks like the card itself is animating in to the background,
 * but doing it this way is more performant (because the cover div is
 * absolutely positioned and has no children), and there's just less
 * having to deal with z-index and other elements in the card
 */

function animateCoverUp(card, i) {
  // get the position of the clicked card
  var cardPosition = card.getBoundingClientRect();
  // get the style of the clicked card
  var cardStyle = getComputedStyle(card);
  setCoverPosition(cardPosition, i);
  setCoverColor(cardStyle);
  scaleCoverToFillWindow(cardPosition, i);
  // update the content of the opened page
  openContentText.innerHTML =
    "<h1>" +
    card.children[2].textContent +
    "</h1>" +
    "<p>" +
    card.children[4].textContent +
    "</p>" +
    "<a href='#'>Register</a>";
  openContentImage.src = card.children[1].src;
  openContentText2.innerHTML =
    "<h1>" +
    card.children[2].textContent +
    "</h1>" +
    "<p>" +
    card.children[4].textContent +
    "</p>" +
    "<a href='#'>Register</a>";
  openContentImage2.src = card.children[1].src;
  openContentText3.innerHTML =
    "<h1>" +
    card.children[2].textContent +
    "</h1>" +
    "<p>" +
    card.children[4].textContent +
    "</p>" +
    "<a href='#'>Register</a>";
  openContentImage3.src = card.children[1].src;
  setTimeout(function () {
    // update the scroll position to 0 (so it is at the top of the 'opened' page)
    window.scroll(0, 0);
    // set page to open
    pageIsOpen = true;
  }, 300);
}

function animateCoverBack(card) {
  var cardPosition = card.getBoundingClientRect();
  // the original card may be in a different position, because of scrolling, so the cover position needs to be reset before scaling back down
  setCoverPosition(cardPosition);
  scaleCoverToFillWindow(cardPosition);
  // animate scale back to the card size and position
  cover.style.transform =
    "scaleX(" +
    1 +
    ") scaleY(" +
    1 +
    ") translate3d(" +
    0 +
    "px, " +
    0 +
    "px, 0px)";
  cover2.style.transform =
    "scaleX(" +
    1 +
    ") scaleY(" +
    1 +
    ") translate3d(" +
    0 +
    "px, " +
    0 +
    "px, 0px)";
  cover3.style.transform =
    "scaleX(" +
    1 +
    ") scaleY(" +
    1 +
    ") translate3d(" +
    0 +
    "px, " +
    0 +
    "px, 0px)";
  setTimeout(function () {
    // set content back to empty
    openContentText.innerHTML = "";
    openContentImage.src = "";
    openContentText2.innerHTML = "";
    openContentImage2.src = "";
    openContentText3.innerHTML = "";
    openContentImage3.src = "";
    // style the cover to 0x0 so it is hidden
    cover.style.width = "0px";
    cover.style.height = "0px";

    cover2.style.width = "0px";
    cover2.style.height = "0px";

    cover3.style.width = "0px";
    cover3.style.height = "0px";
    pageIsOpen = false;
    // remove the clicked class so the card animates back in
    currentCard.className = currentCard.className.replace(" clicked", "");
  }, 301);
}

function setCoverPosition(cardPosition, i) {
  // style the cover so it is in exactly the same position as the card
  if (i < 4) {
    cover.style.left = cardPosition.left + "px";
    cover.style.top = cardPosition.top + "px";
    cover.style.width = cardPosition.width + "px";
    cover.style.height = cardPosition.height + "px";
  } else if (i >= 4 && i <= 11) {
    cover2.style.left = cardPosition.left + "px";
    cover2.style.top = cardPosition.top + "px";
    cover2.style.width = cardPosition.width + "px";
    cover2.style.height = cardPosition.height + "px";
  } else {
    cover3.style.left = cardPosition.left + "px";
    cover3.style.top = cardPosition.top + "px";
    cover3.style.width = cardPosition.width + "px";
    cover3.style.height = cardPosition.height + "px";
  }
}

function setCoverColor(cardStyle) {
  // style the cover to be the same color as the card
  cover.style.backgroundColor = cardStyle.backgroundColor;

  cover2.style.backgroundColor = cardStyle.backgroundColor;

  cover3.style.backgroundColor = cardStyle.backgroundColor;
}

function scaleCoverToFillWindow(cardPosition, i) {
  // calculate the scale and position for the card to fill the page,
  var scaleX = windowWidth / cardPosition.width;
  var scaleY = windowHeight / cardPosition.height;
  var offsetX =
    (windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
  var offsetY =
    (windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
  // set the transform on the cover - it will animate because of the transition set on it in the CSS
  if (i < 4) {
    cover.style.transform =
      "scaleX(" +
      scaleX +
      ") scaleY(" +
      scaleY +
      ") translate3d(" +
      offsetX +
      "px, " +
      offsetY +
      "px, 0px)";
  } else if (i >= 4 && i <= 11) {
    cover2.style.transform =
      "scaleX(" +
      scaleX +
      ") scaleY(" +
      scaleY +
      ") translate3d(" +
      offsetX +
      "px, " +
      offsetY +
      "px, 0px)";
  } else {
    cover3.style.transform =
      "scaleX(" +
      scaleX +
      ") scaleY(" +
      scaleY +
      ") translate3d(" +
      offsetX +
      "px, " +
      offsetY +
      "px, 0px)";
  }
}

/* When the close is clicked */
function onCloseClick() {
  // remove the open class so the page content animates out
  openContent.className = openContent.className.replace(" open", "");
  openContent2.className = openContent2.className.replace(" open", "");
  openContent3.className = openContent3.className.replace(" open", "");
  // document.getElementById("first_page").style.display = "block";
  // document.getElementById("all_events").style.display = "block";
  // document.getElementById("non_technical_events").style.display = "block";
  // document.getElementById("workshops").style.display = "block";
  // animate the cover back to the original position card and size
  animateCoverBack(currentCard);
  // animate in other cards
  animateOtherCards(currentCard, false);

  body.style.overflow = "scroll";
}

function animateOtherCards(card, out) {
  var delay = 100;
  for (var i = 0; i < nCards; i++) {
    // animate cards on a stagger, 1 each 100ms
    if (cards[i] === card) continue;
    if (out) animateOutCard(cards[i], delay);
    else animateInCard(cards[i], delay);
    delay += 100;
  }
}

// animations on individual cards (by adding/removing card names)
function animateOutCard(card, delay) {
  setTimeout(function () {
    card.className += " out";
  }, delay);
}

function animateInCard(card, delay) {
  setTimeout(function () {
    card.className = card.className.replace(" out", "");
  }, delay);
}

// this function searches up the DOM tree until it reaches the card element that has been clicked
function getCardElement(el) {
  if (el.className.indexOf("card ") > -1) return el;
  else return getCardElement(el.parentElement);
}

// resize function - records the window width and height
function resize() {
  if (pageIsOpen) {
    // update position of cover
    var cardPosition = currentCard.getBoundingClientRect();
    setCoverPosition(cardPosition);
    // scaleCoverToFillWindow(cardPosition);
  }
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

//? On Card Navigation Open
function cardOpenEvent(i) {
  cards[i].className += " clicked";
  setTimeout(function () {
    animateCoverUp(cards[i], i);
  }, 500);
  // animate out the other cards
  animateOtherCards(cards[i], true);
  // add the open class to the page content
  if (i < 4) openContent.className += " open";
  else if (i >= 4 && i <= 11) openContent2.className += " open";
  else openContent3.className += " open";

  body.style.overflow = "hidden";
  closeContent.addEventListener("click", function () {
    openContent.className = openContent.className.replace(" open", "");
    // animate the cover back to the original position card and size
    var cardPosition = cards[i].getBoundingClientRect();
    // the original card may be in a different position, because of scrolling, so the cover position needs to be reset before scaling back down
    setCoverPosition(cardPosition);
    scaleCoverToFillWindow(cardPosition);
    // animate scale back to the card size and position
    cover.style.transform =
      "scaleX(" +
      1 +
      ") scaleY(" +
      1 +
      ") translate3d(" +
      0 +
      "px, " +
      0 +
      "px, 0px)";
    setTimeout(function () {
      // set content back to empty
      openContentText.innerHTML = "";
      openContentImage.src = "";
      // style the cover to 0x0 so it is hidden
      cover.style.width = "0px";
      cover.style.height = "0px";
      pageIsOpen = false;
      // remove the clicked class so the card animates back in
      cards[i].className = cards[i].className.replace(" clicked", "");
    }, 301);

    // animate in other cards
    animateOtherCards(cards[i], false);
    body.style.overflow = "scroll";
  });
  closeContent2.addEventListener("click", function () {
    openContent2.className = openContent2.className.replace(" open", "");
    // animate the cover back to the original position card and size
    var cardPosition = cards[i].getBoundingClientRect();
    // the original card may be in a different position, because of scrolling, so the cover position needs to be reset before scaling back down
    setCoverPosition(cardPosition);
    scaleCoverToFillWindow(cardPosition);
    // animate scale back to the card size and position
    cover2.style.transform =
      "scaleX(" +
      1 +
      ") scaleY(" +
      1 +
      ") translate3d(" +
      0 +
      "px, " +
      0 +
      "px, 0px)";
    setTimeout(function () {
      // set content back to empty
      openContentText2.innerHTML = "";
      openContentImage2.src = "";
      // style the cover to 0x0 so it is hidden
      cover2.style.width = "0px";
      cover2.style.height = "0px";
      pageIsOpen = false;
      // remove the clicked class so the card animates back in
      cards[i].className = cards[i].className.replace(" clicked", "");
    }, 301);

    // animate in other cards
    animateOtherCards(cards[i], false);
    body.style.overflow = "scroll";
  });
  closeContent3.addEventListener("click", function () {
    openContent3.className = openContent3.className.replace(" open", "");
    // animate the cover back to the original position card and size
    var cardPosition = cards[i].getBoundingClientRect();
    // the original card may be in a different position, because of scrolling, so the cover position needs to be reset before scaling back down
    setCoverPosition(cardPosition);
    scaleCoverToFillWindow(cardPosition);
    // animate scale back to the card size and position
    cover3.style.transform =
      "scaleX(" +
      1 +
      ") scaleY(" +
      1 +
      ") translate3d(" +
      0 +
      "px, " +
      0 +
      "px, 0px)";
    setTimeout(function () {
      // set content back to empty
      openContentText3.innerHTML = "";
      openContentImage3.src = "";
      // style the cover to 0x0 so it is hidden
      cover3.style.width = "0px";
      cover3.style.height = "0px";
      pageIsOpen = false;
      // remove the clicked class so the card animates back in
      cards[i].className = cards[i].className.replace(" clicked", "");
    }, 301);

    // animate in other cards
    animateOtherCards(cards[i], false);
    body.style.overflow = "scroll";
  });
}

$(".content").magnificPopup({
  delegate: "a",
  type: "image",
  zoom: {
    enabled: true,
    duration: 300,
    easing: "ease-in-out",

    opener: function (openerElement) {
      return openerElement.is("img")
        ? openerElement
        : openerElement.find("img");
    },
  },
});

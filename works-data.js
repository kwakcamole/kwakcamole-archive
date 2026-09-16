/* =========================================
   KWAKCAMOLE.ARCHIVE — WORKS DATA

   앞으로 새 작품은 여기만 수정하면 됩니다.
   새 작품을 맨 위에 추가하면 Works에서도
   가장 먼저 보입니다.
========================================= */


window.worksData = [

  {
    category: "soft-spaces",
    image: "images/doll house.jpg",
    title: "Doll House : Soft Structure",
    alt: "Doll House Soft Structure"
  },

  {
    category: "soft-spaces",
    image: "images/딸기.jpg",
    title: "Strawberry House : Soft Architecture",
    alt: "Strawberry House Soft Architecture"
  },

  {
    category: "soft-spaces",
    image: "images/gelee-house.png",
    title: "Gelée House",
    alt: "Gelée House"
  },

  {
    category: "soft-spaces",
    image: "images/petal-construction.png",
    title: "Petal Construction",
    alt: "Petal Construction"
  },

  {
    category: "soft-spaces",
    image: "images/shirring-hills.png",
    title: "Shirring Hills",
    alt: "Shirring Hills"
  },

  {
    category: "soft-spaces",
    image: "images/soft-landscape.png",
    title: "A Landscape Made to Wander",
    alt: "A Landscape Made to Wander"
  },

  {
    category: "soft-spaces",
    image: "images/cloud-architecture.png",
    title: "Cloud Architecture",
    alt: "Cloud Architecture"
  },

  {
    category: "soft-spaces",
    image: "images/cake-architecture.png",
    title: "Cake Architecture",
    alt: "Cake Architecture"
  },

  {
    category: "soft-objects",
    image: "images/cup.jpg",
    title: "A Soft Sculptural Cup",
    alt: "A Soft Sculptural Cup"
  },

  {
    category: "soft-objects",
    image: "images/A cup.jpg",
    title: "A Cup as Soft Object",
    alt: "A Cup as Soft Object"
  },

  {
    category: "soft-objects",
    image: "images/granulated-fantasy.png",
    title: "Granulated Fantasy",
    alt: "Granulated Fantasy"
  },

  {
    category: "soft-objects",
    image: "images/sugar-dream-room.png",
    title: "A Tiny Room for Sugar Dreams",
    alt: "A Tiny Room for Sugar Dreams"
  },

  {
    category: "soft-objects",
    image: "images/sweetness-without-sugar.png",
    title: "˚₊‧꒰ა Sweetness Without Sugar ໒꒱ ‧₊˚",
    alt: "˚₊‧꒰ა Sweetness Without Sugar ໒꒱ ‧₊˚"
  },

  {
    category: "soft-objects",
    image: "images/textile-course.png",
    title: "Today's Textile Course 🍽️",
    alt: "Today's Textile Course 🍽️"
  },

  {
    category: "soft-objects",
    image: "images/gelee.png",
    title: "Gelée 🍮",
    alt: "Gelée 🍮"
  },

  {
    category: "soft-objects",
    image: "images/bread-friends.png",
    title: "Fuwafuwa Bread friends 🍞",
    alt: "Fuwafuwa Bread friends 🍞"
  },

  {
    category: "soft-objects",
    image: "images/parfait.png",
    title: "Choose your vibe 🍧",
    alt: "Choose your vibe 🍧"
  },

  {
    category: "soft-spaces",
    image: "images/cute.jpg",
    title: "A Soft Dwelling I",
    alt: "A Soft Dwelling I"
  },

  {
    category: "soft-spaces",
    image: "images/cutie.jpg",
    title: "A Soft Dwelling II",
    alt: "A Soft Dwelling II"
  },

  {
    category: "visual-stories",
    image: "images/젤리곰.jpg",
    title: "Gummy Bloom",
    alt: "Gummy Bloom"
  },

  {
    category: "visual-stories",
    image: "images/하리보.jpg",
    title: "Gummy Candy Lab",
    alt: "Gummy Candy Lab"
  },

  {
    category: "visual-stories",
    image: "images/mushroom1.jpg",
    title: "Be My Valentine ♡‧₊˚",
    alt: "Be My Valentine"
  },

  {
    category: "visual-stories",
    image: "images/fuzzy-peach-01.png",
    title: "Fuzzy Peach Objects",
    alt: "Fuzzy Peach Objects"
  },

  {
    category: "visual-stories",
    image: "images/fuzzy-peach-02.png",
    title: "Fuzzy Peach Objects",
    alt: "Fuzzy Peach Objects"
  },

  {
    category: "visual-stories",
    image: "images/cake-cushion.png",
    title: "Cake Cushion",
    alt: "Cake Cushion"
  },

  {
    category: "visual-stories",
    image: "images/textile-pieces.png",
    title: "Textile Pieces",
    alt: "Textile Pieces"
  },

  {
    category: "soft-objects",
    image: "images/sofa1.jpg",
    title: "Sugarcoat Sofa",
    alt: "Sugarcoat Sofa"
  },

  {
    category: "soft-objects",
    image: "images/모빌.jpg",
    title: "For Those Who Need Rest",
    alt: "For Those Who Need Rest"
  },

  {
    category: "visual-stories",
    image: "images/앨범.png",
    title: "A Sugar-lit Carnival ⋆｡°✩",
    alt: "A Sugar-lit Carnival"
  },

  {
    category: "soft-spaces",
    image: "images/스노우볼1.png",
    title: "A Little House to Rest ˚✧",
    alt: "A Little House to Rest 1"
  },

  {
    category: "soft-spaces",
    image: "images/스노우볼2.png",
    title: "A Little House to Rest ˚✧",
    alt: "A Little House to Rest 2"
  }

];



/* =========================================
   WORKS RENDERER
   여기 아래는 수정하지 않아도 됩니다.
========================================= */

(function () {

  const DEFAULT_DESCRIPTION =
    "AI-generated digital image, 2026";


  const grid =
    document.getElementById("worksGrid");


  if (!grid) return;



  function createWorkCard(work) {

    const article =
      document.createElement("article");

    article.className =
      "work-card";

    article.dataset.category =
      work.category;



    const image =
      document.createElement("img");

    image.className =
      "work-img";

    image.src =
      work.image;

    image.alt =
      work.alt ||
      work.title ||
      "Kwakcamole archive work";

    image.loading =
      "lazy";



    const title =
      document.createElement("h3");

    title.className =
      "work-title";

    title.textContent =
      work.title || "Untitled";



    const description =
      document.createElement("p");

    description.className =
      "work-sub";

    description.textContent =
      work.description ||
      DEFAULT_DESCRIPTION;



    article.appendChild(image);

    article.appendChild(title);

    article.appendChild(description);


    return article;
  }



  window.worksData.forEach(
    function (work) {

      grid.appendChild(
        createWorkCard(work)
      );

    }
  );



  /* =========================================
     CATEGORY FILTER
  ========================================= */

  const filterButtons =
    document.querySelectorAll(
      ".filter-button"
    );


  const workCards =
    document.querySelectorAll(
      "#worksGrid .work-card"
    );


  filterButtons.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          const selectedCategory =
            button.dataset.filter;



          filterButtons.forEach(
            function (item) {

              item.classList.remove(
                "is-active"
              );

              item.setAttribute(
                "aria-pressed",
                "false"
              );

            }
          );



          button.classList.add(
            "is-active"
          );

          button.setAttribute(
            "aria-pressed",
            "true"
          );



          workCards.forEach(
            function (card) {

              const shouldShow =

                selectedCategory === "all"

                ||

                card.dataset.category ===
                selectedCategory;



              card.classList.toggle(
                "is-hidden",
                !shouldShow
              );


              card.setAttribute(
                "aria-hidden",
                String(!shouldShow)
              );

            }
          );

        }
      );

    }
  );

})();

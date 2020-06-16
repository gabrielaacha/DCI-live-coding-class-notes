// Module Basics:

//  Using modules in the browser: <script type="module" src="...">

//  Connecting files: The `import` and `export` keywords

//  defer attribute
// tells the browser that it should go on working with the page, and load the script “in background”, then run the script when it loads.
// https://javascript.info/script-async-defer#defer

// https://docs.npmjs.com/creating-a-package-json-file

//JavaScript Object Notation (JSON)
// It's a file format, and data interchange format, that uses human-readable text to store and transmit data objects
// JSON (js object notation)
// way to store data with human readable language
// it's a  file format: and data interchange format, that uses human readable text to store and transmit data objects

const recipes = [
  {
    id: 1,
    title: "Sourdough",
    ingredients: ["water", "flour", "salt", "yeast"],
    image:
      "https://amyinthekitchen.com/wp-content/uploads/2018/11/Beginners-Sourdough-Bread-AITK.jpg",
  },
  {
    id: 2,
    title: "Baguettes",
    ingredients: ["water", "flour", "salt", "yeast"],
    image:
      "https://www.thespruceeats.com/thmb/mCTU2pQ6A-WZ7qQqxH4C8gSbR9E=/1428x1428/smart/filters:no_upscale()/GettyImages-636741221-e5442b2f0b3a4d33a26ebf7deb237fed.jpg",
  },
  //   {
  //     id: 3,
  //     title: "Sliced bread",
  //     ingredients: ["water", "flour"],
  //     image: "./img/bg.jpeg",
  //   },
];

let data = JSON.stringify(recipes); // this will convert my file into JSon
export { data };
// export is a preserved word from js in order to export the data

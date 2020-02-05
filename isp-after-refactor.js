const interfaceTaxonomy = require('./4. ISP/interface-taxonomy.js');
const interfaceMap = require('./4. ISP/interface-map.js');
const interfaceUser = require('./4. ISP/interface-user.js');
const interfaceArticle = require('./4. ISP/interface-article.js');


console.log('\ninterfaceTaxonomy: ', interfaceTaxonomy);
console.log('\ninterfaceMap: ', interfaceMap);
console.log('\ninterfaceUser: ', interfaceUser);
console.log('\ninterfaceArticle: ', interfaceArticle);


// Interface segregation principle states that no client should be forced to depend on methods it does not use.

// Many client-specific interfaces are better than one general-purpose interface.

// basically by breaking up your interfaces, parts of your program will not be forced to take more functionality than they need.
  // it will be easier to see the intent of your code by what interface it takes.

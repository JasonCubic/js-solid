
// The mssql interface and the redis interface can be used the same way

const interfaceAdminRoles = require('./3. LSP/mssql/interface-admin-roles.js');
// const interfaceAdminRoles = require('./3. LSP/redis/interface-admin-roles.js');

const userName = 'Peter Gibbons';
const roleName = 'Worker Drone';

console.log('\nsaving an admin role');
interfaceAdminRoles.saveAdminRole(userName, roleName);

console.log('getting admin roles');
interfaceAdminRoles.getAdminRoles();


// Liskov substitution principle (AKA: Substitutability)
// if S is a subtype of T, then objects of type T may be replaced with objects of type S

// to explain Liskov substitution principle without getting all mathy
// If a specific thing is a type of a general thing.  Then however you use the general thing should work on the specific thing.

  // If an iPhone is a type of a phone then you should be able to make a telephone call on an iPhone.
  // If MS Word is a type of word processor then you should be able to create documents using MS Word.


// in the above case interfaceAdminRoles is the way to interact with the admin roles storage.
  // no matter what interfaceAdminRoles you use you should be able to interact with the admin roles storage.
    // so:
      // even if the interfaceAdminRoles entirely changes how it transforms the data for storage
        // it provides the same functionality and can be used the same way


// potential problems
  // consider: A tesla is a type of car therefore you should be able to do all car actives on the car.

  // this works for driving, but what about getting gas?
  // You sometimes have to really think and plan for these paradigm differences between specific types of things

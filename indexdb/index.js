// Open (or create) a database
let request = indexedDB.open("myDatabase", 1);

// This event is only implemented in recent browsers
request.onerror = function (event) {
  console.log("Database error: " + event.target.errorCode);
};

request.onupgradeneeded = function (event) {
  // Save the IDBDatabase interface
  let db = event.target.result;

  // Create an object store named "customers" using auto-incrementing key
  let objectStore = db.createObjectStore("customers", { autoIncrement: true });

  // Define what data items the objectStore will contain
  objectStore.createIndex("name", "name", { unique: false });
  objectStore.createIndex("email", "email", { unique: true });
};

request.onsuccess = function (event) {
  // Save the IDBDatabase interface
  let db = event.target.result;

  // Start a new transaction
  let transaction = db.transaction(["customers"], "readwrite");

  // Get the object store
  let objectStore = transaction.objectStore("customers");

  // Add some data
  objectStore.add({ name: "Jitul Doe", email: "john@example.com" });
  objectStore.add({ name: "Jane Doe", email: "jane@example.com" });

  // Query the data
  let getRequest = objectStore.get(1);

  getRequest.onsuccess = function () {
    console.log(getRequest.result);
  };

  // Close the transaction
  transaction.oncomplete = function () {
    db.close();
  };
};

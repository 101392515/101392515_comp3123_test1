// resolves a message after a timeout of 500ms.
function resolvedPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "delayed success!" });
      }, 500);
    });
  }
  
  // rejects an error message after a timeout of 500ms.
  function rejectedPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject({ error: "delayed exception!" });
      }, 500);
    });
  }
  
  // Call both promises separately
  resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
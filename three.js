// write an implementation of getElementById, which performs the same basic task as that of actual getElemById, (don't use shortcuts like querySelector).

function getElementById(id) {
    const elements = document.getElementsByTagName("*");
  
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].id === id) {
        return elements[i];
      }
    }
  
    return null;
  }

// Here the function takes an id parameter, which is the ID of the element we want to retrieve. 
// It then calls document.getElementsByTagName("*") to get all elements in the document. 
// It loops through these elements and checks if the current element's ID matches the id parameter. 
// If it finds a match, it returns the element. If it doesn't find a match, it returns null.

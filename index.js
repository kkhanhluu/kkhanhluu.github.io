function pairElement(str) {
    return str.split('').reduce((prev, curr) => {
      if (curr == 'A') {
        prev.push([curr, 'T']);
      }
      if (curr == 'T') {
        prev.push([curr, 'A']);
      }
      if (curr == 'C') {
        prev.push([curr, 'G']);
      }
      if (curr == 'G') {
        prev.push([curr, 'C']);
      }
      return prev;
    }, []);
  }
  console.log(pairElement("GCG"));
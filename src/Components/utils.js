export const generateID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const getStringDate = (receivedDate) => {
  const date = new Date(receivedDate);
  let month = "";

  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      break;
  }

  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};

export const sortSets = (array) => {
  return array.sort((a, b) => {
    const x = new Date(a.date);
    const y = new Date(b.date);
    return y - x;
  });
};

export const expandSet = (id, length) => {
  const item = document.getElementById("item-" + id);
  const plusSymbol = document.getElementById("expand1-" + id);

  const currentHeight = item.offsetHeight;
  const expandMultiplier = Math.floor((length + 1) / 4);
  const expandHeight = 600 * (expandMultiplier + 1);

  if (item.classList.contains("expanded")) {
    item.style.height = `${currentHeight}px`;
    item.classList.remove("expanded");
    setTimeout(() => {
      if (window.innerWidth < 992) {
        item.style.height = "75px";
      } else {
        item.style.height = "48px";
      }
      plusSymbol.style.transform = "rotate(0)";
    }, 100);
  } else {
    item.classList.add("expanded");
    item.style.height = `${expandHeight + 30}px`;
    plusSymbol.style.transform = "rotate(90deg)";

    setTimeout(() => {
      item.style.height = "fit-content";
    }, 400);
  }
};

export const adjustHeight = (id, length) => {
  const item = document.getElementById("item-" + id);

  // const expandMultiplier = Math.floor(length / 4);
  // const expandHeight = 600 * (expandMultiplier + 1);

  // item.classList.add("expanded");
  // item.style.height = `${expandHeight + 30}px`;

  item.style.height = "fit-content";
};

export const handleUpload = (e, setDocument, setDocumentName) => {
  setDocument([]);
  setDocumentName("");
  const files = e.target.files;
  Array.from(files).forEach((file) => {
    let reader = new FileReader();
    // eslint-disable-next-line
    let url = reader.readAsDataURL(file);

    // eslint-disable-next-line
    reader.onloadend = (e) => {
      setDocument([reader.result]);
      setDocumentName(file.name);
    };
  });
};

export const percentReviewed = (arr) => {
  let reviewed = 0;

  if (!arr.length) {
    return 0;
  }

  arr.forEach((item) => {
    if (item.reviewed) {
      reviewed++;
    }
  });

  return Math.floor((reviewed / arr.length) * 100);
};

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

export const expandSet = (id) => {
  const item = document.getElementById("item-" + id);
  const plusSymbol = document.getElementById("expand1-" + id);

  if (item.classList.contains("expanded")) {
    item.classList.remove("expanded");
    item.style.height = "48px";
    plusSymbol.style.transform = "rotate(0)";
  } else {
    item.classList.add("expanded");
    item.style.height = `${item.scrollHeight + 5}px`;
    plusSymbol.style.transform = "rotate(90deg)";
  }
};

export const adjustHeight = (id) => {
  const item = document.getElementById("item-" + id);
  item.style.height = `${item.scrollHeight + 5}px`;
};

export const handleUpload = (e, setDocument, setDocumentName) => {
  setDocument([]);
  setDocumentName("");
  const files = e.target.files;
  Array.from(files).forEach((file) => {
    let reader = new FileReader();
    // eslint-disable-next-line
    let url = reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      setDocument([reader.result]);
      setDocumentName(file.name);
    };
  });
};

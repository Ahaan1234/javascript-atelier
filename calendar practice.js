const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  switch (month) {
	case "January": 
		days = 31;
		break;
	case "February": 
		days = 28;
		break;
	case "March": 
		days = 31;
		break; 
	case "April": 
		days = 30;
		break; 
	case "May": 
		days = 31;
		break; 
	case "June": 
		days = 30;
		break; 
	case "July": 
		days = 31;
		break; 
	case "August": 
		days = 31;
		break; 
	case "September": 
		days = 30;
		break; 
	case "October":  
		days = 31;
	case "November": 
		days = 30;
		break; 
	case "December": 
		days = 31;
		break;
	default: 
		break; 
	};

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");

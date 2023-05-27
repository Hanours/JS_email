

  const renderParts = (emails, elementId) => {
    document.getElementById(elementId).innerHTML = emails.map((email) => {
        let icon = "closed";
        if (elementId === "prectene") {
          icon = "opened";}
  
        return `
          <div class="email">
            <div class="email__head">
              <div class="email__icon email__icon--${icon}"></div>
              <div class="email__info">
                <div class="email__sender">${email.sender.name}</div>
                <div class="email__subject">${email.subject}</div>
              </div>
              <div class="email__time">${email.time}</div>
            </div>
            <div class="email__body"></div>
          </div>
        `;
      }).join("");
  };
  
  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
    .then((response) => response.json())
    .then((data) => renderParts(data.emails, "nectene"));
  
  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
    .then((response) => response.json())
    .then((data) => renderParts(data.emails, "prectene"));

  const emails = (emails) => {
    const inboxElm = document.querySelector("#inbox");
    inboxElm.innerHTML = emails.map((email) => 
    `
          <div class="email">
            <div class="email__head">
              <div class="email__icon email__icon--closed"></div>
              <div class="email__info">
                <div class="email__sender">${email.sender.name}</div>
                <div class="email__subject">${email.subject}</div>
              </div>
              <div class="email__time">${email.time}</div>
            </div>
            <div class="email__body"></div>
          </div>
        `
      ).join("");
  };
  
  fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails")
    .then((response) => response.json())
    .then((data) => emails(data.emails));
  
// script.js

// API base URL
// const API_URL = "/api/emails";

// // Handle form submission
// document.getElementById("emailForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const sender = document.getElementById("sender").value;
//   const subject = document.getElementById("subject").value;
//   const body = document.getElementById("body").value;

//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ sender, subject, body }),
//   });

//   const data = await res.json();
//   console.log("Created:", data);
//   loadEmails();
// });

// // Load all emails
// async function loadEmails() {
//   const res = await fetch(API_URL);
//   const emails = await res.json();

//   const container = document.getElementById("emails");
//   container.innerHTML = "";

//   emails.forEach((email) => {
//     const div = document.createElement("div");
//     div.className = "email";
//     div.innerHTML = `
//       <strong>From:</strong> ${email.sender} <br>
//       <strong>Subject:</strong> ${email.subject} <br>
//       <strong>Body:</strong> ${email.body} <br>
//       <strong>AI Reply:</strong> <pre>${email.aiReply || "Pending..."}</pre>
//     `;
//     container.appendChild(div);
//   });
// }

// // Load on page open
// loadEmails();







// const API_URL = "http://localhost:5000/api/emails";

// // Load all emails into sidebar
// async function loadEmails() {
//   const res = await fetch(API_URL);
//   const emails = await res.json();

//   const emailList = document.getElementById("emailList");
//   emailList.innerHTML = "";

//   emails.forEach((email) => {
//     const li = document.createElement("li");
//     li.textContent = `${email.sender} - ${email.subject}`;
//     li.onclick = () => showEmailDetails(email);
//     emailList.appendChild(li);
//   });
// }

// // Show details of a selected email
// function showEmailDetails(email) {
//   const details = document.getElementById("emailDetails");
//   details.innerHTML = `
//     <h3>From: ${email.sender}</h3>
//     <h4>Subject: ${email.subject}</h4>
//     <p><strong>Body:</strong><br>${email.body}</p>
//     <p><strong>AI Reply:</strong><br>${email.aiReply}</p>
//     <small>📅 ${new Date(email.createdAt).toLocaleString()}</small>
//   `;
// }

// // Handle form submission (send email)
// document.getElementById("emailForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const sender = document.getElementById("sender").value;
//   const subject = document.getElementById("subject").value;
//   const body = document.getElementById("body").value;

//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ sender, subject, body }),
//   });

//   if (res.ok) {
//     alert("✅ Email sent and AI reply generated!");
//     document.getElementById("emailForm").reset();
//     loadEmails(); // reload inbox
//   } else {
//     alert("❌ Failed to send email. Check server logs.");
//   }
// });

// // Load inbox on page load
// window.onload = loadEmails;






// const API_URL = "http://localhost:5000/api/emails";

// // Function to generate avatar initials or emoji
// function generateAvatar(sender) {
//   if (!sender) return "✉️";
//   const namePart = sender.split("@")[0];
//   const initials = namePart.slice(0, 2).toUpperCase();
//   return initials;
// }

// // Load all emails into sidebar
// async function loadEmails() {
//   const res = await fetch(API_URL);
//   const emails = await res.json();

//   const emailList = document.getElementById("emailList");
//   emailList.innerHTML = "";

//   emails.forEach((email) => {
//     const li = document.createElement("li");

//     // Avatar
//     const avatar = document.createElement("div");
//     avatar.className = "avatar";
//     avatar.textContent = generateAvatar(email.sender);

//     // Text
//     const text = document.createElement("div");
//     text.innerHTML = `<strong>${email.sender}</strong><br><small>${email.subject}</small>`;

//     li.appendChild(avatar);
//     li.appendChild(text);

//     li.onclick = () => showEmailDetails(email);
//     emailList.appendChild(li);
//   });
// }

// // Show details of a selected email
// function showEmailDetails(email) {
//   const details = document.getElementById("emailDetails");
//   details.innerHTML = `
//     <h3>From: ${email.sender}</h3>
//     <h4>Subject: ${email.subject}</h4>
//     <p><strong>Body:</strong><br>${email.body}</p>
//     <p><strong>AI Reply:</strong><br>${email.aiReply}</p>
//     <small>📅 ${new Date(email.createdAt).toLocaleString()}</small>
//   `;
// }

// // Handle form submission (send email)
// document.getElementById("emailForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const sender = document.getElementById("sender").value;
//   const subject = document.getElementById("subject").value;
//   const body = document.getElementById("body").value;

//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ sender, subject, body }),
//   });

//   if (res.ok) {
//     alert("✅ Email sent and AI reply generated!");
//     document.getElementById("emailForm").reset();
//     loadEmails(); // reload inbox
//   } else {
//     alert("❌ Failed to send email. Check server logs.");
//   }
// });

// // Load inbox on page load
// window.onload = loadEmails;






// const API_URL = "http://localhost:5000/api/emails";

// // Function to generate avatar initials
// function generateAvatar(sender) {
//   if (!sender) return "✉️";
//   const namePart = sender.split("@")[0];
//   const initials = namePart.slice(0, 2).toUpperCase();
//   return initials;
// }

// // Load all emails into sidebar
// async function loadEmails() {
//   const res = await fetch(API_URL);
//   const emails = await res.json();

//   const emailList = document.getElementById("emailList");
//   emailList.innerHTML = "";

//   emails.forEach((email) => {
//     const li = document.createElement("li");

//     // Avatar
//     const avatar = document.createElement("div");
//     avatar.className = "avatar";
//     avatar.textContent = generateAvatar(email.sender);

//     // Text
//     const text = document.createElement("div");
//     text.className = "email-text";
//     text.innerHTML = `<strong>${email.sender}</strong><br><small>${email.subject}</small>`;

//     // Delete button
//     const delBtn = document.createElement("button");
//     delBtn.className = "delete-btn";
//     delBtn.innerHTML = "🗑️";
//     delBtn.onclick = async (e) => {
//       e.stopPropagation();
//       if (confirm("Are you sure you want to delete this email?")) {
//         const res = await fetch(`${API_URL}/${email._id}`, { method: "DELETE" });
//         if (res.ok) {
//           loadEmails();
//           document.getElementById("emailDetails").innerHTML =
//             `<p class="placeholder">Select an email to view details.</p>`;
//         } else {
//           alert("❌ Failed to delete email");
//         }
//       }
//     };

//     li.appendChild(avatar);
//     li.appendChild(text);
//     li.appendChild(delBtn);

//     li.onclick = () => showEmailDetails(email);
//     emailList.appendChild(li);
//   });
// }

// // Show details of a selected email
// function showEmailDetails(email) {
//   const details = document.getElementById("emailDetails");
//   details.innerHTML = `
//     <h3>From: <span>${email.sender}</span></h3>
//     <h4>Subject: <span>${email.subject}</span></h4>
//     <p><strong>Body:</strong><br>${email.body}</p>
//     <p><strong>AI Reply:</strong><br>${email.aiReply}</p>
//     <small>📅 ${new Date(email.createdAt).toLocaleString()}</small>
//   `;
// }

// // Handle form submission (send email)
// document.getElementById("emailForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const sender = document.getElementById("sender").value;
//   const subject = document.getElementById("subject").value;
//   const body = document.getElementById("body").value;

//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ sender, subject, body }),
//   });

//   if (res.ok) {
//     alert("✅ Email sent and AI reply generated!");
//     document.getElementById("emailForm").reset();
//     loadEmails(); // reload inbox
//   } else {
//     alert("❌ Failed to send email. Check server logs.");
//   }
// });

// // Load inbox on page load
// window.onload = loadEmails;






// const API_URL = "http://localhost:5000/api/emails";

// // Function to generate avatar initials
// function generateAvatar(sender) {
//   if (!sender) return "✉️";
//   const namePart = sender.split("@")[0];
//   const initials = namePart.slice(0, 2).toUpperCase();
//   return initials;
// }

// // Load all emails into sidebar
// async function loadEmails() {
//   const res = await fetch(API_URL);
//   const emails = await res.json();

//   const emailList = document.getElementById("emailList");
//   emailList.innerHTML = "";

//   emails.forEach((email) => {
//     const li = document.createElement("li");

//     // Avatar
//     const avatar = document.createElement("div");
//     avatar.className = "avatar";
//     avatar.textContent = generateAvatar(email.sender);

//     // Text
//     const text = document.createElement("div");
//     text.className = "email-text";
//     text.innerHTML = `<strong>${email.sender}</strong><br><small>${email.subject}</small>`;

//     // Delete button
//     const delBtn = document.createElement("button");
//     delBtn.className = "delete-btn";
//     delBtn.innerHTML = "🗑️";
//     delBtn.onclick = async (e) => {
//       e.stopPropagation();
//       if (confirm("Are you sure you want to delete this email?")) {
//         const res = await fetch(`${API_URL}/${email._id}`, { method: "DELETE" });
//         if (res.ok) {
//           loadEmails();
//           document.getElementById("emailDetails").innerHTML = ``;
//         } else {
//           alert("❌ Failed to delete email");
//         }
//       }
//     };

//     li.appendChild(avatar);
//     li.appendChild(text);
//     li.appendChild(delBtn);

//     li.onclick = () => showEmailDetails(email);
//     emailList.appendChild(li);
//   });
// }

// // Show details of a selected email
// function showEmailDetails(email) {
//   const details = document.getElementById("emailDetails");

//   // Format AI reply as block-style email with preserved newlines
//   const formattedReply = email.aiReply
//     ? `<div class="ai-reply-box"><pre>${email.aiReply}</pre></div>`
//     : `<em>No AI reply generated.</em>`;

//   details.innerHTML = `
//     <div class="email-view">
//       <p><strong>From:</strong> ${email.sender}</p>
//       <p><strong>Subject:</strong> ${email.subject}</p>
//       <div class="email-body">
//         <h4>Message:</h4>
//         <p>${email.body.replace(/\n/g, "<br>")}</p>
//       </div>
//       <div class="email-ai-reply">
//         <h4>AI Reply:</h4>
//         ${formattedReply}
//       </div>
//       <small class="timestamp">📅 ${new Date(email.createdAt).toLocaleString()}</small>
//     </div>
//   `;
// }

// // Handle form submission (send email)
// document.getElementById("emailForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const sender = document.getElementById("sender").value;
//   const subject = document.getElementById("subject").value;
//   const body = document.getElementById("body").value;

//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ sender, subject, body }),
//   });

//   if (res.ok) {
//     alert("✅ Email sent and AI reply generated!");
//     document.getElementById("emailForm").reset();
//     loadEmails(); // reload inbox
//   } else {
//     alert("❌ Failed to send email. Check server logs.");
//   }
// });

// // Load inbox on page load
// window.onload = loadEmails;






// const API_URL = "http://localhost:5000/api/emails";

// // Function to generate avatar initials
// function generateAvatar(sender) {
//   if (!sender) return "✉️";
//   const namePart = sender.split("@")[0];
//   const initials = namePart.slice(0, 2).toUpperCase();
//   return initials;
// }

// // Load all emails into sidebar
// async function loadEmails() {
//   const res = await fetch(API_URL);
//   const emails = await res.json();

//   const emailList = document.getElementById("emailList");
//   emailList.innerHTML = "";

//   emails.forEach((email) => {
//     const li = document.createElement("li");

//     // Avatar
//     const avatar = document.createElement("div");
//     avatar.className = "avatar";
//     avatar.textContent = generateAvatar(email.sender);

//     // Text
//     const text = document.createElement("div");
//     text.className = "email-text";
//     text.innerHTML = `<strong>${email.sender}</strong><br><small>${email.subject}</small>`;

//     // Delete button
//     const delBtn = document.createElement("button");
//     delBtn.className = "delete-btn";
//     delBtn.innerHTML = "🗑️";
//     delBtn.onclick = async (e) => {
//       e.stopPropagation();
//       if (confirm("Are you sure you want to delete this email?")) {
//         // ✅ FIX: use email.id (not email._id)
//         const res = await fetch(`${API_URL}/${email.id}`, { method: "DELETE" });
//         if (res.ok) {
//           loadEmails();
//           document.getElementById("emailDetails").innerHTML = ``;
//         } else {
//           alert("❌ Failed to delete email");
//         }
//       }
//     };

//     li.appendChild(avatar);
//     li.appendChild(text);
//     li.appendChild(delBtn);

//     li.onclick = () => showEmailDetails(email);
//     emailList.appendChild(li);
//   });
// }

// // Show details of a selected email
// function showEmailDetails(email) {
//   const details = document.getElementById("emailDetails");

//   // Format AI reply as block-style email with preserved newlines
//   const formattedReply = email.aiReply
//     ? `<div class="ai-reply-box"><pre>${email.aiReply}</pre></div>`
//     : `<em>No AI reply generated.</em>`;

//   details.innerHTML = `
//     <div class="email-view">
//       <p><strong>From:</strong> ${email.sender}</p>
//       <p><strong>Subject:</strong> ${email.subject}</p>
//       <div class="email-body">
//         <h4>Message:</h4>
//         <p>${email.body.replace(/\n/g, "<br>")}</p>
//       </div>
//       <div class="email-ai-reply">
//         <h4>AI Reply:</h4>
//         ${formattedReply}
//       </div>
//       <small class="timestamp">📅 ${new Date(email.createdAt).toLocaleString()}</small>
//     </div>
//   `;
// }

// // Handle form submission (send email)
// document.getElementById("emailForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const sender = document.getElementById("sender").value;
//   const subject = document.getElementById("subject").value;
//   const body = document.getElementById("body").value;

//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ sender, subject, body }),
//   });

//   if (res.ok) {
//     alert("✅ Email sent and AI reply generated!");
//     document.getElementById("emailForm").reset();
//     loadEmails(); // reload inbox
//   } else {
//     alert("❌ Failed to send email. Check server logs.");
//   }
// });

// // Load inbox on page load
// window.onload = loadEmails;






// const API_URL = "https://ai-email-assistant-mzph.onrender.com/api/emails";

// // 🔑 Helper to get Clerk token
// async function getToken() {
//   if (!window.Clerk || !window.Clerk.session) return null;
//   return await window.Clerk.session.getToken({ template: "default" });
// }

// // Function to generate avatar initials
// function generateAvatar(sender) {
//   if (!sender) return "✉️";
//   const namePart = sender.split("@")[0];
//   return namePart.slice(0, 2).toUpperCase();
// }

// // Load all emails
// async function loadEmails() {
//   const token = await getToken();
//   const res = await fetch(API_URL, {
//     headers: { Authorization: `Bearer ${token}` }
//   });

//   if (!res.ok) {
//     document.getElementById("emailList").innerHTML = "<li>❌ Unauthorized</li>";
//     return;
//   }

//   const emails = await res.json();
//   const emailList = document.getElementById("emailList");
//   emailList.innerHTML = "";

//   emails.forEach((email) => {
//     const li = document.createElement("li");

//     const avatar = document.createElement("div");
//     avatar.className = "avatar";
//     avatar.textContent = generateAvatar(email.sender);

//     const text = document.createElement("div");
//     text.className = "email-text";
//     text.innerHTML = `<strong>${email.sender}</strong><br><small>${email.subject}</small>`;

//     const delBtn = document.createElement("button");
//     delBtn.className = "delete-btn";
//     delBtn.innerHTML = "🗑️";
//     delBtn.onclick = async (e) => {
//       e.stopPropagation();
//       if (confirm("Delete this email?")) {
//         const res = await fetch(`${API_URL}/${email.id}`, {
//           method: "DELETE",
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         if (res.ok) {
//           loadEmails();
//           document.getElementById("emailDetails").innerHTML = ``;
//         } else {
//           alert("❌ Failed to delete email");
//         }
//       }
//     };

//     li.appendChild(avatar);
//     li.appendChild(text);
//     li.appendChild(delBtn);

//     li.onclick = () => showEmailDetails(email);
//     emailList.appendChild(li);
//   });
// }

// function showEmailDetails(email) {
//   const details = document.getElementById("emailDetails");
//   const formattedReply = email.aiReply
//     ? `<div class="ai-reply-box"><pre>${email.aiReply}</pre></div>`
//     : `<em>No AI reply generated.</em>`;
//   details.innerHTML = `
//     <div class="email-view">
//       <p><strong>From:</strong> ${email.sender}</p>
//       <p><strong>Subject:</strong> ${email.subject}</p>
//       <div class="email-body"><h4>Message:</h4><p>${email.body.replace(/\n/g, "<br>")}</p></div>
//       <div class="email-ai-reply"><h4>AI Reply:</h4>${formattedReply}</div>
//       <small class="timestamp">📅 ${new Date(email.createdAt).toLocaleString()}</small>
//     </div>
//   `;
// }

// // Handle form submission
// document.getElementById("emailForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const sender = document.getElementById("sender").value;
//   const subject = document.getElementById("subject").value;
//   const body = document.getElementById("body").value;
//   const token = await getToken();

//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: { 
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}` 
//     },
//     body: JSON.stringify({ sender, subject, body }),
//   });

//   if (res.ok) {
//     alert("✅ Email sent and AI reply generated!");
//     document.getElementById("emailForm").reset();
//     loadEmails();
//   } else {
//     alert("❌ Failed to send email. Check server logs.");
//   }
// });

// // Load inbox on page load
// window.onload = loadEmails;









// 🌍 Auto-detect API URL (local vs deployed)
const API_URL =
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000/api/emails"
    : "https://ai-email-assistant-mzph.onrender.com/api/emails";

// 🔑 Helper to get Clerk token
async function getToken() {
  if (!window.Clerk || !window.Clerk.session) return null;
  return await window.Clerk.session.getToken({ template: "default" });
}

// Function to generate avatar initials
function generateAvatar(sender) {
  if (!sender) return "✉️";
  const namePart = sender.split("@")[0];
  return namePart.slice(0, 2).toUpperCase();
}

// Load all emails
async function loadEmails() {
  const token = await getToken();
  const res = await fetch(API_URL, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) {
    document.getElementById("emailList").innerHTML = "<li>❌ Unauthorized</li>";
    return;
  }

  const emails = await res.json();
  const emailList = document.getElementById("emailList");
  emailList.innerHTML = "";

  emails.forEach((email) => {
    const li = document.createElement("li");

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = generateAvatar(email.sender);

    const text = document.createElement("div");
    text.className = "email-text";
    text.innerHTML = `<strong>${email.sender}</strong><br><small>${email.subject}</small>`;

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.innerHTML = "🗑️";
    delBtn.onclick = async (e) => {
      e.stopPropagation();
      if (confirm("Delete this email?")) {
        const res = await fetch(`${API_URL}/${email.id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          loadEmails();
          document.getElementById("emailDetails").innerHTML = ``;
        } else {
          alert("❌ Failed to delete email");
        }
      }
    };

    li.appendChild(avatar);
    li.appendChild(text);
    li.appendChild(delBtn);

    li.onclick = () => showEmailDetails(email);
    emailList.appendChild(li);
  });
}

function showEmailDetails(email) {
  const details = document.getElementById("emailDetails");
  const formattedReply = email.aiReply
    ? `<div class="ai-reply-box"><pre>${email.aiReply}</pre></div>`
    : `<em>No AI reply generated.</em>`;
  details.innerHTML = `
    <div class="email-view">
      <p><strong>From:</strong> ${email.sender}</p>
      <p><strong>Subject:</strong> ${email.subject}</p>
      <div class="email-body"><h4>Message:</h4><p>${email.body.replace(/\n/g, "<br>")}</p></div>
      <div class="email-ai-reply"><h4>AI Reply:</h4>${formattedReply}</div>
      <small class="timestamp">📅 ${new Date(email.createdAt).toLocaleString()}</small>
    </div>
  `;
}

// Handle form submission
document.getElementById("emailForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const sender = document.getElementById("sender").value;
  const subject = document.getElementById("subject").value;
  const body = document.getElementById("body").value;
  const token = await getToken();

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify({ sender, subject, body }),
  });

  if (res.ok) {
    alert("✅ Email sent and AI reply generated!");
    document.getElementById("emailForm").reset();
    loadEmails();
  } else {
    alert("❌ Failed to send email. Check server logs.");
  }
});

// Load inbox on page load
window.onload = loadEmails;

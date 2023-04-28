const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // hide our user interface that shows our A2HS button
  butInstall.classList.add("hidden");
  // Show the prompt
  window.deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await window.deferredPrompt.userChoice;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  event.preventDefault();
  // Remove the prompt
  window.deferredPrompt = null;
});

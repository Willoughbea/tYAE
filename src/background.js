// This file contains the background script for the extension. It handles events and stuff.

browser.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});

browser.runtime.onStartup.addListener(() => {
    console.log('Extension started');
});

// Define icon paths
const icons = {
    default: {
      "16": "icons/icon-16.png",
      "48": "icons/icon-48.png",
      "128": "icons/icon-128.png"
    },
    green: {
      "16": "icons/icon-16-green.png",
    }
};

// // main funcition to update icon based on tab's title
// browser.runtime.onMessage.addListener((message, sender) => {
//     if (message.action === "setIconForTab" && sender.tab) {
//         const color = message.color === "green" ? "green" : "default";
//         browser.browserAction.setIcon({ path: icons[color], tabId: sender.tab.id });
//     }
// });

// // Update icon when switching tabs
// browser.tabs.onActivated.addListener(activeInfo => {
//     browser.tabs.sendMessage(activeInfo.tabId, { action: "checkTitle" }).catch(() => {});
// });

const AI_SERVER_URL = "http://127.0.0.1:5000/check";

// Handle messages from content script
browser.runtime.onMessage.addListener((message, sender) => {
    if (message.action === "checkAI" && sender.tab) {
      checkWithPythonAI(message.title, message.url, sender.tab.id);
    }
  });
  
  // Fetch Python server to detect AI
  async function checkWithPythonAI(title, url, tabId) {
    try {
      const response = await fetch(AI_SERVER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, url })
      });
      const result = await response.json();
      const color = result.is_ai ? "green" : "default";
      browser.browserAction.setIcon({ path: icons[color], tabId });
    } catch (err) {
      console.error("Error contacting AI server:", err);
      // fallback: default icon
      browser.browserAction.setIcon({ path: icons.default, tabId });
    }
  }
  
  // Update icon on tab switch
  browser.tabs.onActivated.addListener(activeInfo => {
    browser.tabs.sendMessage(activeInfo.tabId, { action: "checkAI" }).catch(() => {});
  });
  
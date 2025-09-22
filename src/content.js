
// // Function to check if current page is a YouTube video page
// function isYouTubeVideoPage() {
//     return window.location.hostname.includes("youtube.com") &&
//            (window.location.pathname === "/watch" || window.location.pathname.startsWith("/shorts/"));
// }
  
// // Function to check the title
// function checkTitle() {
//     if (!isYouTubeVideoPage()) {
//         // Always reset icon to default on non-video pages
//         browser.runtime.sendMessage({ action: "setIconForTab", color: "default" });
//         return;
//     }

//     const color = (document.title || "").toLowerCase().includes("extension")
//                 ? "green" : "default";

//     browser.runtime.sendMessage({ action: "setIconForTab", color });
// }

// // Initial check
// checkTitle();
// window.addEventListener("yt-navigate-finish", checkTitle);

// const titleObserver = new MutationObserver(checkTitle);
// titleObserver.observe(document.querySelector("title"), { childList: true });

// Check if current page is a YouTube video page
function isYouTubeVideoPage() {
    return window.location.hostname.includes("youtube.com") &&
           (window.location.pathname === "/watch" ||
             window.location.pathname.startsWith("/shorts/"));
  }
  
  // Function to send video info to background
  function checkVideo() {
    if (!isYouTubeVideoPage()) {
      browser.runtime.sendMessage({ action: "setIconForTab", color: "default" });
      return;
    }
  
    const videoTitle = document.title || "";
    const videoUrl = window.location.href;
  
    // Send title and URL to background script
    browser.runtime.sendMessage({
      action: "checkAI",
      title: videoTitle,
      url: videoUrl
    });
  }
  
// Initial check on page load
checkVideo();
  
// observe title changes
const titleObserver = new MutationObserver(checkVideo);
titleObserver.observe(document.querySelector("title"), { childList: true });
  
// Detect YouTube SPA navigation
window.addEventListener("yt-navigate-finish", checkVideo);
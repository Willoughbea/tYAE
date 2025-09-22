# Firefox Extension

This is a basic Firefox extension project that includes a background script, content script, and a popup interface.

## Project Structure

```
firefox-extension
├── src
│   ├── background.js        # Background script for handling events and managing the extension's lifecycle
│   ├── content.js          # Content script for interacting with web pages
│   ├── popup
│   │   ├── popup.html      # HTML structure for the popup
│   │   ├── popup.css       # Styles for the popup
│   │   └── popup.js        # JavaScript for handling popup interactions
│   └── manifest.json       # Metadata about the extension
├── package.json            # npm configuration file
└── README.md               # Documentation for the project
```

## Installation

1. Clone the repository or download the project files.
2. Open Firefox and navigate to `about:debugging`.
3. Click on "This Firefox" and then "Load Temporary Add-on".
4. Select the `manifest.json` file from the `src` directory.

## Usage

- Click on the extension icon in the toolbar to open the popup.
- The background script runs in the background and manages the extension's lifecycle.
- The content script interacts with the web pages based on the defined permissions in the manifest.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.
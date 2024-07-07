# InstaSnubSniffer
For keeping tabs on who's not reciprocating your instagram follow

A lightweight, user-friendly web application that helps Instagram users discover which accounts they follow aren't following them back. 

## Features

- **Simple Upload**: Easily upload your Instagram followers and following HTML files.
- **Fast Processing**: Get results in seconds, even with large datasets.
- **User-Friendly Interface**: Clean, intuitive design for a seamless user experience.
- **Privacy-Focused**: All data processing happens locally on your device.
- **Detailed Results**: View a list of accounts that don't follow you back, with direct links to their profiles.
- **Summary Statistics**: Get a quick overview of how many accounts don't follow you back.
- ***Web hosting coming soon***

## How It Works

1. **Data Retrieval**: Users download their Instagram data through Instagram's official process.
2. **File Upload**: Users upload their followers and following HTML files to InstaSnubSniffer.
3. **Data Processing**: The app compares the two lists to identify non-reciprocal follows.
4. **Results Display**: Users see a summary and detailed list of accounts that don't follow them back.

## Getting Started

### Prerequisites

- Node.js 
- npm 

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Haryordeji/InstaSnubSniffer.git
```

2.  Navigate to the project directory:
```bash
cd InstaSnubSniffer
```
3. Install dependencies:
```bash
npm run install
```
### Running the App

1. Start the application:
```bash
npm start
```
2. Open your browser and go to `http://localhost:3000`

## How to Obtain Your Instagram Followers and Following Data

Instagram doesn't provide a direct way to download your followers and following lists, necessitating this somewhat lengthy process. This is part of Instagram's design to protect user privacy and prevent easy mass data collection.

Follow these steps to download your Instagram followers and following information:

1. Go to [Instagram's Account Center](https://accountscenter.instagram.com/info_and_permissions/).

2. Click on "Download your information".

3. Select "Download or transfer your information", then choose your desired Instagram account.

4. On the "How much information do you want" tab:
   - Select "Some of your information"
   - Under the "Connections" section, check "Followers and Following"
   - Click "Continue"

5. On the next page:
   - Select "Download to Device"
   - Choose your desired "Date Range"
   - Enter your email address under "Notify"
   - Leave other pre-selected information as is

6. Submit your request.

You should receive an email from Instagram within an hour containing a download link to your information.

7. Download and unzip the folder.

8. Locate the following files:
   - `following.html`
   - `followers_1.html`

These are the files you'll need to select when running the InstaSnubSniffer app.

## Usage

1. Open the InstaSnubSniffer app in your web browser.
2. Upload your `followers_1.html` and `following.html` files using the provided form.
3. Click the "Compare" button.
4. View the summary and detailed results of accounts that don't follow you back.

## Privacy and Security

InstaSnubSniffer is designed with privacy in mind:
- All data processing occurs locally in your browser.
- No data is stored or transmitted to external servers.
- Your Instagram data files are only used for the comparison process and are not retained.
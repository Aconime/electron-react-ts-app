## Electron App with React & Typescript.
This repository contains a simple "get started" project, which you can clone/download in order to create your own electron application.
In this project you can find all the nessesary libraries inside <ins>**package.json**</ins> to help you get started with React and Typescript, but also additional libraries, for building your project and adding automatic updates.

Furthermore, all personalized configuration has been removed from this project, so that you can add your own. Areas where you need to insert your own details can be found with `UPPERCASE_VALUES_IN_PACKAGE_JSON`.

---

### Features
This electron project comes with the following features:

- React
- Typescript
- CSS Modules
- SASS Styles
- SCSS Styles
- Electron Auto-Reload (Implemented)
- Electron Auto-Update (Implemented / Commented out)
- Electron Build (Structure for configuration / Requires personalized values)
- Production ready

---

### Get Started
Getting started with this project is very simple, simply download this project on your machine and follow the steps below.
1. Run `npm install` or `npm i` inside your project directory.
2. Open <ins>**package.json**</ins> fill in all the missing details (remove fields if not needed)
3. Run `npm run watch` to create the javascrpt bundle from the React code.
4. After the <ins>**bundler.js**</ins> has been created inside <ins>**/public/build/**</ins> run the project with `npm start`.
5. You should see an electron window show up with **"Hello World"** displayed in HTML.

---

### General Configuration
This project comes with a variety of libraries inside <ins>**package.json**</ins>, and other file settings, some of which you may not need to your project. You can simply uninstall them with `npm uninstall <package-name>` or you can remove them from the list before executing `npm install`.

In the project files, you will see there are 2 main files for electron called <ins>**main-dev.json**</ins> and <ins>**main-prod.json**</ins>. These 2 files are configured accordingly for development and production. Inside the development version, you will see that DevTools are enabled, and `electron-reload` library is used for automatically reloading on save. On the other hand, inside the production version, you can see that `electron-reload` is removed from the code, DevTools are disabled and the menu is hidden. There are also methods and flags added for adding update functionality to electron (these are commented out).

---

### Package.json Configuration - Required
Required values that need to be changed, if your are planning on building and adding update functionality to your application. Anything you are not using you can simply remove from the <ins>**package.json**</ins> file.

<table>
  <thead>
    <tr>
      <th>Location</th>
      <th>Name</th>
      <th>Current Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Line 3</td>
      <td>displayName</td>
      <td>DISPLAY_NAME_HERE</td>
      <td>The display name of your application.</td>
    </tr>
    <tr>
      <td>Line 5</td>
      <td>description</td>
      <td>APP_DESCRIPTION_HERE</td>
      <td>The description of your application.</td>
    </tr>
    <tr>
      <td>Line 14</td>
      <td>repository.url</td>
      <td>REPO_URL_HERE</td>
      <td>The repository url of your project (e.g. Github)</td>
    </tr>
    <tr>
      <td>Line 27</td>
      <td>productName</td>
      <td>PRODUCT_NAME_HERE</td>
      <td>The name of your product. This name will be displayed as your application.</td>
    </tr>
    <tr>
      <td>Line 32</td>
      <td>icon</td>
      <td>ICON_PATH_HERE</td>
      <td>The location of your application icon.</td>
    </tr>
    <tr>
      <td>Line 36</td>
      <td>installerIcon</td>
      <td>INSTALLER_ICON_PATH_HERE</td>
      <td>The location of your installer icon.</td>
    </tr>
    <tr>
      <td>Line 37</td>
      <td>uninstallerIcon</td>
      <td>UNINSTALLER_ICON_PATH_HERE</td>
      <td>The location of your uninstaller icon.</td>
    </tr>
    <tr>
      <td>Line 38</td>
      <td>uninstallDisplayName</td>
      <td>UNINSTALLER_NAME_HERE</td>
      <td>The name of your application's uninstaller.</td>
    </tr>
    <tr>
      <td>Line 45</td>
      <td>author</td>
      <td>AUTHOR_NAME_HERE</td>
      <td>Your name or your organization name. (e.g. the developer's name)</td>
    </tr>
    <tr>
      <td>Line 48</td>
      <td>bugs.url</td>
      <td>HTTPS:YOUR_REPO_ISSUES_URL_HERE</td>
      <td>The bug URL for your application (e.g. Github Issues)</td>
    </tr>
    <tr>
      <td>Line 50</td>
      <td>homepage</td>
      <td>YOUR_REPO_README_URL</td>
      <td>The homepage of your application (e.g. Github readme.md)</td>
    </tr>
  </tbody>
</table>

---

### Package.json Configuration - Optional
You can change everything on the package.json, however, if you want to keep the functionality similar here are the main optional values you should change, unique for your application.

<table>
  <thead>
    <tr>
      <th>Location</th>
      <th>Name</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Line 2</td>
      <td>name</td>
      <td>my-app</td>
      <td>The project name.</td>
    </tr>
    <tr>
      <td>Line 4</td>
      <td>version</td>
      <td>1.0.0</td>
      <td>The version of your application.</td>
    </tr>
    <tr>
      <td>Line 6</td>
      <td>main</td>
      <td>main-dev.js</td>
      <td>You can choose `main-dev.js` or `main-prod.js`</td>
    </tr>
    <tr>
      <td>Line 21</td>
      <td>build.appId</td>
      <td>com.example.app</td>
      <td>The application ID of your product.</td>
    </tr>
    <tr>
      <td>Line 22</td>
      <td>build.files</td>
      <td>["main-prod.js", "public/", "config/"]</td>
      <td>The files to be included in the build version.</td>
    </tr>
  </tbody>
</table>

---

### Global Style Configuration
In the <ins>**/public/**</ins> folder there are 2 files by default: <ins>**./index.html**</ins> and <ins>**./style.css**</ins>. It is not recommended to change the HTML file as that is the root of the project, however you can make any changes to the styles file.

By default the styles have `user-select: none !important;` and `-webkit-user-drag: none !important;`. These properties ensure users cannot select text or content on your application nor drag images or text around.

In addition, there are global properties for customizing the scrollbars on your application, if you wish to leave them as default, either remove them completely or leave empty.

---

### Creating New React Components
When creating components, ensure you always add `import React from 'react';` on the top of the file, this will allow you to use JSX. The file should be named with `.tsx` in the end. Everything else is exactly the same as any react project.

---

### Creating CSS Modules
Tutorial: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

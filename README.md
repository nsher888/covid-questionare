# Covid Questionnaire

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Resources](#resources)

#

### Prerequisites

- <img src="readme/assets/npm.png" width="35" style="position: relative; top: 4px" /> _npm@6 and up_

#

### Tech Stack

- <img src="readme/assets/react-icon.svg.png" height="18" style="position: relative; top: 4px" /> [React@18.2.0](https://reactjs.org/) - Front-end framework.
- <img src="readme/assets/vite.png" height="18" style="position: relative; top: 4px" /> [Vite@4.0.0](https://vitejs.dev/guide/) - Helps to bundle application's CSS and JavaScript files into production ready assets.
- <img src="readme/assets/tailwind.svg.png" height="19" style="position: relative; top: 4px" /> [Tailwind CSS@3.2.4](https://tailwindcss.com/) - A utility-first CSS framework.
- <img src="readme/assets/react-router-icon.png" height="18" style="position: relative; top: 4px" /> [React-router@v6.4.5](https://reactrouter.com/en/main) - Standard library for routing in React.
- <img src="readme/assets/react-hook-form.png" height="19" style="position: relative; top: 4px" /> [React hook form@7.41.0](https://react-hook-form.com/) - Package for form validation.

#

### Getting Started

1\. First of all you need to clone Covid Questionary repository from github:

```sh
git clone https://github.com/RedberryInternship/niko-shervashidze-covid-questionare.git
```

2\. Secondly, open the directory that was created.

```sh
cd covid-questionare
```

3\. Next step requires you to run `npm install` in order to install all the dependencies.

```sh
npm install
```

4\. Finally, you can run application locally with:

```sh
npm run dev
```

it builds your js files into executable scripts.
It also watches and generates your tailwind properties in app.css

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

### Project Structure

```bash
├─── readme
├─── src
│   ├─── components
│   ├─── context
│   ├─── assets
│   ├─── pages
│   ├─── App.jsx
│   ├─── App.css
│   ├─── index.css
│   ├─── main.jsx
- index.html
- jsconfig.json
- package.json
- package-lock.json
- postcss.config.cjs
- README.md
- tailwind.config.js
- vite.config.js
```

### Resources

- [Application Design [Figma]](https://www.figma.com/file/56t2BI25FcD0LAIjR4GVkQ/%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%95%E1%83%90%E1%83%A0%E1%83%98?node-id=37%3A3&t=DFt3wUtX8d0xV0cP-0)
- [API Specification](https://covid19.devtest.ge/api-specs)

#

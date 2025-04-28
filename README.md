# LAMBDA Band Website

A modern, responsive website for the rock band LAMBDA, built with React and Vite.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- YouTube video integration
- Photo gallery
- Tour dates and ticket information
- Band member profiles
- Social media integration

## Technologies Used

- React
- Vite
- React Router
- Emotion (Styled Components)
- Framer Motion
- React Icons

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lambda-band.git
cd lambda-band
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
lambda-band/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Music.jsx
│   │   ├── Gallery.jsx
│   │   ├── Tour.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── gallery/
│   ├── members/
│   └── hero-bg.jpg
├── package.json
└── README.md
```

## Customization

1. Replace the YouTube video ID in `Music.jsx` with your band's video
2. Add your band's photos to the `public/gallery` directory
3. Add band member photos to the `public/members` directory
4. Update tour dates and venues in `Tour.jsx`
5. Modify band information and member details in `About.jsx`
6. Update social media links in `Footer.jsx`

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/yourusername/lambda-band

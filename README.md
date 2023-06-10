# Startsys React Speech Recognition v2

A React application demonstrating the usage of the `startsys-react-speech-recognition` npm package. This package allows your React applications to leverage the Web Speech API for speech recognition functionality.

## Installation

First, clone this repository to your local machine using:

\```bash
git clone https://github.com/tulaneadam/startsys-react-speech-recognition-v2.git
\```

Navigate to the directory:

\```bash
cd startsys-react-speech-recognition-v2
\```

Install the required dependencies:

\```bash
npm install
\```

## Usage

To start the application in development mode:

\```bash
npm start
\```

This will start the application and open a new browser tab pointing to `http://localhost:3000` or another open port if 3000 is being used.

The application provides a simple interface with a microphone icon and a text input field. Click on the microphone icon and start speaking. Your speech will be converted to text and populated in the text input field.

## Deployment

To build the application for production, run:

\```bash
npm run build
\```

This will create a `build/` directory with all the compiled files. Your application is now ready for deployment.

## Using the `startsys-react-speech-recognition` npm Package

This application makes use of the `startsys-react-speech-recognition` npm package. If you wish to use this package in your own projects, install it via npm:

\```bash
npm install startsys-react-speech-recognition
\```

Import it in your React component:

\```javascript
import Speech from 'startsys-react-speech-recognition';
\```

And use it in your JSX:

\```javascript
<Speech onSpeech={(text) => console.log(text)} />
\```

This will render a microphone icon that, when clicked, starts the speech recognition process. The recognized text can be logged to the console with the line above added to the react component, or the text can be added to an input element as shown in this demo app.

Please ensure that the users' browser supports the Web Speech API.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

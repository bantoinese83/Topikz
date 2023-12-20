import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WebFont from 'webfontloader';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

WebFont.load({
    google: {
        families: ['Bebas Neue', 'cursive'] // replace 'Roboto' with your font name
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>
);

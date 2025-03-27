import '../css/app.css';
import './bootstrap';
import 'react-toastify/dist/ReactToastify.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';

const appName = import.meta.env.VITE_APP_NAME || 'KostKita';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // Add event listeners for Inertia events
        document.addEventListener('inertia:success', (event) => {
            const { detail } = event;
            if (detail?.page?.props?.flash?.message) {
                toast.success(detail.page.props.flash.message);
            }
            if (detail?.page?.props?.flash?.error) {
                toast.error(detail.page.props.flash.error);
            }
        });

        root.render(
            <>
                <App {...props} />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

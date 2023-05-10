import {useRoutes} from "react-router-dom";
import Template from "../pages/template";
import React, {useMemo} from "react";
import {SimpleParse} from "../pages/parse/simple-parse";
import {SimpleVotes} from "../pages/voites/simple-votes";
import {EmailVotes} from "../pages/voites/email-votes";
import {PhoneVotes} from "../pages/voites/phone-votes";
import {CaptchaVotes} from "../pages/voites/captcha-votes";
import {BrowserVotes} from "../pages/voites/browser-votes";
import {CaptchaParse} from "../pages/parse/captcha-parse";
import {BrowserParse} from "../pages/parse/browser-parse";

const Routing = () => {
    const validateRoutes = useMemo(() => {
        return [
            {
                path: '/',
                element: <Template />,
                children: [
                    {
                        path: '/votes/simple',
                        element: <SimpleVotes/>,
                    },
                    {
                        path: '/votes/email',
                        element: <EmailVotes/>,
                    },
                    {
                        path: '/votes/phone',
                        element: <PhoneVotes/>,
                    },
                    {
                        path: '/votes/captcha',
                        element: <CaptchaVotes/>,
                    },
                    {
                        path: '/votes/browser',
                        element: <BrowserVotes/>,
                    },
                    {
                        path: '/parse/simple',
                        element: <SimpleParse/>,
                    },
                    {
                        path: '/parse/captcha',
                        element: <CaptchaParse/>,
                    },
                    {
                        path: '/parse/browser',
                        element: <BrowserParse/>,
                    },
                    // {
                    //     path: '/resources',
                    //     element: <Resources/>,
                    // },
                    // {
                    //     path: '/resources/dev-by',
                    //     element: <ResourcesList />,
                    // },
                    // {
                    //     path: '/resources/dev-by/:id',
                    //     element: <ResourcesItem />,
                    // },
                    // {
                    //     path: '/users',
                    //     element:  <Users/>,
                    // },
                    // {
                    //     path: '/profile',
                    //     element:  <Profile/>,
                    // },
                ],
            },
            // { path: '*', element: <Navigate to={'/auth/not-found'} /> },
        ];
    }, []);

    return useRoutes(validateRoutes);

};
export default Routing;
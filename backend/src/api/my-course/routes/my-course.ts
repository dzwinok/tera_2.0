export default {
    routes: [
        {
            method: "POST",
            path: "/my-courses/assign",
            handler: "my-course.assign",
            config: {
                policies: [], // auth handled automatically by JWT
                auth: {
                    scope: ["authenticated"],
                },
            },
        },
    ],
};

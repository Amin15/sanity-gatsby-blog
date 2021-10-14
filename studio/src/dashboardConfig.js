export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61687e118dcceb082cd5de23",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-sesgna6c",
                  apiId: "1b64592c-7a16-4d63-bced-61f897bcdb76",
                },
                {
                  buildHookId: "61687e11e9bd570d400f50be",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-f6ca7s7m",
                  apiId: "49dbf899-e6ff-44b3-836e-ff10d303a1aa",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Amin15/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-f6ca7s7m.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

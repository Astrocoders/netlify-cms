# Run this after `yarn build`, so it copies the build to mindfulness-website node_modules. Then run there `yarn patch-package netlify-cms`.

mv -f dist/* ~/path/to/mindfulness-website/node_modules/netlify-cms/dist

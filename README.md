# 100 Days CSS

My personal attempts at https://100dayscss.com/.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deploy

The application is deployed to Cloudflare pages and configured to automatically
deploy on changes to `main` branch.

https://100-days-css.pages.dev/


## 🔧 Improvements

- Implement infinite scroll on index page.
- Configure ESlint, Stylelint and Prettier including pre-commit hooks.
- Add pre-commit for conventional commit messages.
- Read and parse days directory to calculate the days arrays.
- Remove the use of `iframe` in favour of astro importing.

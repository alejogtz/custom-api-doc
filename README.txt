Recursos:
    https://github.com/peaceiris/actions-gh-pages
    gh-pages + CD + Github Actions
    https://www.youtube.com/watch?v=RRh1w8XmtCk


 mkdir -p .github/workflows/
 touch .github/workflows/build-deploy.yml

npm run start


---
ng build --prod --output-path docs --base-href https://alejogtz.github.io/custom-api-doc/
npm i --only=dev
git fetch origin gh-pages
git checkout gh-paes
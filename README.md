# Guide to deploy a STATIC page via Github Pages (No backend) 
1. [Create a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories)
(You guys should know this by now right?)
2. Push to repository
    - git init
    - git commit -m "first commit"
    - git branch -M main
    - git remote add origin https://github.com/your-username-here/github-pages-test.git
    - git push -u origin main
    - (Or with vsc)

## Deploying as pages
You actually have two options: Github action and build from branch
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
For our purposes, just do either one work. Try what you like. In my case, I did publishing via branch. Feel free to use the appropriate action workflow. In the case of a vanilla static site, just do "deploy via "static HTML".

![image info](./Screenshot%202024-10-15%20093957.png)

Also I don't have a domain to demo this but see [this](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) since we have our own domain

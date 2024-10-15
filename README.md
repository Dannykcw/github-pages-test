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
3. [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) 
    - In our case, select branch main and folder /root

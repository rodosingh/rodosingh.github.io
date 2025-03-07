# Table of Contents

- [Table of Contents](#table-of-contents)
- [Installing and Deploying](#installing-and-deploying)
  - [Recommended Approach](#recommended-approach)
  - [Local setup on Windows](#local-setup-on-windows)
  - [Local setup using Docker (Recommended)](#local-setup-using-docker-recommended)
    - [Build your own docker image](#build-your-own-docker-image)
  - [Local Setup with Development Containers](#local-setup-with-development-containers)
  - [Local Setup (Legacy, no longer supported)](#local-setup-legacy-no-longer-supported)
  - [Deployment](#deployment)
    - [For personal and organization webpages](#for-personal-and-organization-webpages)
    - [For project pages](#for-project-pages)
    - [Enabling automatic deployment](#enabling-automatic-deployment)
    - [Manual deployment to GitHub Pages](#manual-deployment-to-github-pages)
    - [Deployment to another hosting server (non GitHub Pages)](#deployment-to-another-hosting-server-non-github-pages)
    - [Deployment to a separate repository (advanced users only)](#deployment-to-a-separate-repository-advanced-users-only)
  - [Upgrading from a previous version](#upgrading-from-a-previous-version)

# Installing and Deploying

## Recommended Approach

The recommended approach for using **al-folio** is to first create your own site using the template with as few changes as possible, and only when it is up and running customize it however you like. This way it is easier to pinpoint what causes a potential issue in case of a bug. The minimum steps required to create your own site are ([video tutorial here](assets/video/tutorial_al_folio.mp4)):

1. Create a new repository using this template. For this, click on [Use this template -> Create a new repository](https://github.com/new?template_name=al-folio&template_owner=alshedivat) above the file list. If you plan to upload your site to `<your-github-username>.github.io`, note that the name of your repository :warning: **MUST BE** :warning: `<your-github-username>.github.io` or `<your-github-orgname>.github.io`, as stated in the [GitHub pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).
2. In this new repository, go to [Settings -> Actions -> General -> Workflow permissions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-default-github_token-permissions) and give `Read and write permissions` to GitHub Actions.
3. Open file `_config.yml`, set `url` to `https://<your-github-username>.github.io` and leave `baseurl` **empty** (do NOT delete it), as `baseurl:`.
4. Wait until the GitHub action with subtitle `Deploy site` finishes (check your repository **Actions** tab), which takes ~4 min. Now, in addition to the `main` branch, your repository has a newly built `gh-pages` branch.
5. Finally, in the repository page go to `Settings -> Pages -> Build and deployment`, make sure that `Source` is set to `Deploy from a branch` and set the branch to `gh-pages` (NOT to main).
6. Wait until the GitHub action `pages-build-deployment` finishes (check your repository **Actions** tab), which takes ~45s, then simply navigate to `https://<your-github-username>.github.io` in your browser. At this point you should see a copy of the theme's [demo website](https://alshedivat.github.io/al-folio/).
   After everything is set up, you can download the repository to your machine and start customizing it. To do so, run the following commands:

```bash
$ git clone git@github.com:<your-username>/<your-repo-name>.git
```

Starting version [v0.3.5](https://github.com/alshedivat/al-folio/releases/tag/v0.3.5), **al-folio** will automatically re-deploy your webpage each time you push new changes to your repository! :sparkles:

## Local setup on Windows

If you are using Windows, it is **highly recommended** to use [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install), which is a compatibility layer for running Linux on top of Windows. You can follow [these instructions](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support) to install WSL and Ubuntu on your machine. You only need to go up to the step 4 of the tutorial (you don't have to enable the optional `systemd` nor the graphical applications), and then you can follow the instructions below to install docker. You can install docker natively on Windows as well, but it has been having some issues as can be seen in [#1540](https://github.com/alshedivat/al-folio/issues/1540), [#2007](https://github.com/alshedivat/al-folio/issues/2007).

## Local setup using Docker (Recommended)

Using Docker to install Jekyll and Ruby dependencies is the easiest way.

You need to take the following steps to get `al-folio` up and running on your local machine:

- First, install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).
- Finally, run the following command that will pull the latest pre-built image from DockerHub and will run your website.

```bash
$ docker compose pull
$ docker compose up
```

Note that when you run it for the first time, it will download a docker image of size 400MB or so. To see the template running, open your browser and go to `http://localhost:8080`. You should see a copy of the theme's demo website.

Now, feel free to customize the theme however you like (don't forget to change the name!). Also, your changes should be automatically rendered in real-time (or maybe after a few seconds).

> Beta: You can also use the slimmed docker image with a size below 100MBs and exact same functionality. Just use `docker compose -f docker-compose-slim.yml up`

### Build your own docker image

> Note: this approach is only necessary if you would like to build an older or very custom version of al-folio.

Build and run a new docker image using:

```bash
$ docker compose up --build
```

> If you want to update jekyll, install new ruby packages, etc., all you have to do is build the image again using `--force-recreate` argument at the end of the previous command! It will download Ruby and Jekyll and install all Ruby packages again from scratch.

If you want to use a specific docker version, you can do so by changing `latest` tag to `your_version` in `docker-compose.yaml`. For example, you might have created your website on `v0.10.0` and you want to stick with that.

## Local Setup with Development Containers

`al-folio` supports [Development Containers](https://containers.dev/supporting).
For example, when you open the repository with Visual Studio Code (VSCode), it prompts you to install the necessary extension and automatically install everything necessary.

## Local Setup (Legacy, no longer supported)

For a hands-on walkthrough of running al-folio locally without using Docker, check out [this cool blog post](https://george-gca.github.io/blog/2022/running-local-al-folio/) by one of the community members!

Assuming you have [Ruby](https://www.ruby-lang.org/en/downloads/) and [Bundler](https://bundler.io/) installed on your system (_hint: for ease of managing ruby gems, consider using [rbenv](https://github.com/rbenv/rbenv)_), and also [Python](https://www.python.org/) and [pip](https://pypi.org/project/pip/) (_hint: for ease of managing python packages, consider using a virtual environment, like [venv](https://docs.python.org/pt-br/3/library/venv.html) or [conda](https://docs.conda.io/en/latest/)_).

```bash
$ bundle install
# assuming pip is your Python package manager
$ pip install jupyter
$ bundle exec jekyll serve
```

To see the template running, open your browser and go to `http://localhost:4000`. You should see a copy of the theme's [demo website](https://alshedivat.github.io/al-folio/). Now, feel free to customize the theme however you like. After you are done, remember to **commit** your final changes.

## Deployment

Deploying your website to [GitHub Pages](https://pages.github.com/) is the most popular option.
Starting version [v0.3.5](https://github.com/alshedivat/al-folio/releases/tag/v0.3.5), **al-folio** will automatically re-deploy your webpage each time you push new changes to your repository **main branch**! :sparkles:

### For personal and organization webpages

1. The name of your repository **MUST BE** `<your-github-username>.github.io` or `<your-github-orgname>.github.io`.
2. In `_config.yml`, set `url` to `https://<your-github-username>.github.io` and leave `baseurl` empty.
3. Set up automatic deployment of your webpage (see instructions below).
4. Make changes to your main branch, commit, and push!
5. After deployment, the webpage will become available at `<your-github-username>.github.io`.

### For project pages

1. In `_config.yml`, set `url` to `https://<your-github-username>.github.io` and `baseurl` to `/<your-repository-name>/`.
2. Set up automatic deployment of your webpage (see instructions below).
3. Make changes to your main branch, commit, and push!
4. After deployment, the webpage will become available at `<your-github-username>.github.io/<your-repository-name>/`.

### Enabling automatic deployment

1. Click on **Actions** tab and **Enable GitHub Actions**; do not worry about creating any workflows as everything has already been set for you.
2. Go to `Settings -> Actions -> General -> Workflow permissions`, and give `Read and write permissions` to GitHub Actions
3. Make any other changes to your webpage, commit, and push to your main branch. This will automatically trigger the **Deploy** action.
4. Wait for a few minutes and let the action complete. You can see the progress in the **Actions** tab. If completed successfully, in addition to the `main` branch, your repository should now have a newly built `gh-pages` branch. **Do NOT touch this branch!**
5. Finally, in the **Settings** of your repository, in the Pages section, set the branch to `gh-pages` (**NOT** to `main`). For more details, see [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source).

If you keep your site on another branch, open `.github/workflows/deploy.yml` **on the branch you keep your website on** and change `on->push->branches` and `on->pull\_request->branches` to the branch you keep your website on. This will trigger the action on pulls/pushes on that branch. The action will then deploy the website on the branch it was triggered from.

### Manual deployment to GitHub Pages

If you need to manually re-deploy your website to GitHub pages, go to Actions, click "Deploy" in the left sidebar, then "Run workflow."

### Deploy on [Netlify](https://www.netlify.com/)

1. [Use this template -> Create a new repository](https://github.com/new?template_name=al-folio&template_owner=alshedivat).
2. Netlify: **Add new site** -> **Import an existing project** -> **GitHub** and give Netlify access to the repository you just created.
3. Netlify: In the deploy settings

   - Set **Branch to deploy** to `main`
   - **Base directory** is empty
   - Set **Build command** to `sed -i "s/^\(baseurl: \).*$/baseurl:/" _config.yml && bundle exec jekyll build`
   - Set **Publish directory** to `_site`

4. Netlify: Add the following two **environment variables**

   - | Key            | Value                                                                                  |
     | -------------- | -------------------------------------------------------------------------------------- |
     | `JEKYLL_ENV`   | `production`                                                                           |
     | `RUBY_VERSION` | set to the Ruby version found in `.github/workflows/deploy.yml` (for example, `3.3.5`) |

5. Netlify: Click **Deploy** and wait for the site to be published. If you want to use your own domain name, follow the steps in [this documentation](https://docs.netlify.com/domains-https/custom-domains/).

### Deployment to another hosting server (non GitHub Pages)

If you decide to not use GitHub Pages and host your page elsewhere, simply run:

```bash
$ bundle exec jekyll build
```

which will (re-)generate the static webpage in the `_site/` folder.
Then simply copy the contents of the `_site/` directory to your hosting server.

If you also want to remove unused css classes from your file, run:

```bash
$ purgecss -c purgecss.config.js
```

which will replace the css files in the `_site/assets/css/` folder with the purged css files.

**Note:** Make sure to correctly set the `url` and `baseurl` fields in `_config.yml` before building the webpage. If you are deploying your webpage to `your-domain.com/your-project/`, you must set `url: your-domain.com` and `baseurl: /your-project/`. If you are deploying directly to `your-domain.com`, leave `baseurl` blank, **do not delete it**.

### Deployment to a separate repository (advanced users only)

**Note:** Do not try using this method unless you know what you are doing (make sure you are familiar with [publishing sources](https://help.github.com/en/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites)). This approach allows to have the website's source code in one repository and the deployment version in a different repository.

Let's assume that your website's publishing source is a `publishing-source` subdirectory of a git-versioned repository cloned under `$HOME/repo/`.
For a user site this could well be something like `$HOME/<user>.github.io`.

Firstly, from the deployment repo dir, checkout the git branch hosting your publishing source.

Then from the website sources dir (commonly your al-folio fork's clone):

```bash
$ bundle exec jekyll build --destination $HOME/repo/publishing-source
```

This will instruct jekyll to deploy the website under `$HOME/repo/publishing-source`.

**Note:** Jekyll will clean `$HOME/repo/publishing-source` before building!

The quote below is taken directly from the [jekyll configuration docs](https://jekyllrb.com/docs/configuration/options/):

> Destination folders are cleaned on site builds
>
> The contents of `<destination>` are automatically cleaned, by default, when the site is built. Files or folders that are not created by your site will be removed. Some files could be retained by specifying them within the `<keep_files>` configuration directive.
>
> Do not use an important location for `<destination>`; instead, use it as a staging area and copy files from there to your web server.

If `$HOME/repo/publishing-source` contains files that you want jekyll to leave untouched, specify them under `keep_files` in `_config.yml`.
In its default configuration, al-folio will copy the top-level `README.md` to the publishing source. If you want to change this behavior, add `README.md` under `exclude` in `_config.yml`.

**Note:** Do _not_ run `jekyll clean` on your publishing source repo as this will result in the entire directory getting deleted, irrespective of the content of `keep_files` in `_config.yml`.

## Upgrading from a previous version

If you installed **al-folio** as described above, you can manually update your code by following the steps below:

```bash
# Assuming the current directory is <your-repo-name>
$ git remote add upstream https://github.com/alshedivat/al-folio.git
$ git fetch upstream
$ git rebase v0.13.4
```

If you have extensively customized a previous version, it might be trickier to upgrade.
You can still follow the steps above, but `git rebase` may result in merge conflicts that must be resolved.
See [git rebase manual](https://help.github.com/en/github/using-git/about-git-rebase) and how to [resolve conflicts](https://help.github.com/en/github/using-git/resolving-merge-conflicts-after-a-git-rebase) for more information.
If rebasing is too complicated, we recommend re-installing the new version of the theme from scratch and port over your content and changes from the previous version manually. You can use tools like [meld](https://meldmerge.org/)
or [winmerge](https://winmerge.org/) to help in this process.

## My Setup [STALE]

#### Local setup using Docker (Recommended on Windows)

You need to take the following steps to get `al-folio` up and running in your local machine:

- First, install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).
- Then, clone this repository to your machine:

```bash
$ git clone git@github.com:<your-username>/<your-repo-name>.git
$ cd <your-repo-name>
```

Finally, run the following command that will pull a pre-built image from DockerHub and will run your website.

```bash
$ docker-compose up
```

Note that when you run it for the first time, it will download a docker image of size 300MB or so.

Now, feel free to customize the theme however you like (don't forget to change the name!). After you are done, you can use the same command (`docker-compose up`) to render the webpage with all you changes. Also, make sure to commit your final changes.

> To change port number, you can edit `docker-compose.yml` file.

<details><summary>(click to expand) <strong>Build your own docker image:</strong></summary>

> Note: this approach is only necessary if you would like to build an older or very custom version of al-folio.

Build and run a new docker image using:

```bash
$ docker-compose -f docker-local.yml up
```

> If you want to update jekyll, install new ruby packages, etc., all you have to do is build the image again using `--force-recreate` argument at the end of previous command! It will download ruby and jekyll and install all ruby packages again from scratch.

</details>

---

#### Local Setup (Standard)

Assuming you have [Ruby](https://www.ruby-lang.org/en/downloads/) and [Bundler](https://bundler.io/) installed on your system (_hint: for ease of managing ruby gems, consider using [rbenv](https://github.com/rbenv/rbenv)_), first [fork](https://guides.github.com/activities/forking/) the theme from `github.com:alshedivat/al-folio` to `github.com:<your-username>/<your-repo-name>` and do the following:

```bash
$ git clone git@github.com:<your-username>/<your-repo-name>.git
$ cd <your-repo-name>
$ bundle install
$ bundle exec jekyll serve
```

_Note: If you are in Ubuntu machine (>=20.04) and facing issues with `bundle install` and getting error message as follows:_

> sass-embedded-1.57.1-x86_64-linux-gnu requires rubygems version >= 3.3.22, which is incompatible with the current version, 3.1.2
> then follow the steps below:

```bash
$ sudo apt-get install ruby-full
# Create a folder by name ~/.rbenv and clone the rbenv repository into it.
$ git clone https://github.com/rbenv/rbenv.git ~/.rbenv
$ echo 'eval "$(~/.rbenv/bin/rbenv init - bash)"' >> ~/.bashrc # visit: https://github.com/rbenv/rbenv for more details
# list the latest stable versions:
$ rbenv install -l
# list all local versions:
$ rbenv install -L
# install a Ruby version (e.g. 3.2.0 the latest stable version as of 2021-09-01):
$ rbenv install 3.2.0
$ rbenv install 3.0.5 # worked for me on Ubuntu 20.04 LTS(2022) as tainted method is deprecated in Ruby 3.2.0 (https://github.com/jekyll/jekyll/issues/9231)
$ rbenv global 3.2.0   # set the default Ruby version for this machine
# Good part: With 3.2.0, we can have latest version of rubygems (3.4.1) and bundler (2.4.1) installed by default.
# or:
$ rbenv local 3.0.5    # set the Ruby version for this directory (preferred)
$ gem install bundler:2.4.1  # install bundler (as bundler is not installed by default with ruby 3.0.5)
# With all that set, if you run `bundle install` again, it should work fine.
# For me the nokogiri gem was failing to install, so I had to install it separately using:
$ gem install nokogiri -- --use-system-libraries --with-xml2-include=$(brew --prefix libxml2)/include/libxml2 #https://nokogiri.org/tutorials/installing_nokogiri.html
# Also for some gems like 'mini_racer' got stuck during installation, but that got resolved after installing standrd Ubuntu libraries as asked in the error message.
```

_Version details for `Ruby` can be found [here](https://www.ruby-lang.org/en/downloads/releases/) and for `rubygems` [here](https://rubygems.org/gems/rubygems-update/versions)._

And to install `mermaid.cli` follow the below steps:

```bash
# If puppeteer version is not compatible with your node version, then install puppeteer with the following command:
$ sudo PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install puppeteer
# Next install mermaid.cli:
$ sudo PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install -g mermaid.cli
```

Now, feel free to customize the theme however you like (don't forget to change the name!).
After you are done, **commit** your final changes.

---

#### Deployment

Deploying your website to [GitHub Pages](https://pages.github.com/) is the most popular option.
Starting version [v0.3.5](https://github.com/alshedivat/al-folio/releases/tag/v0.3.5), **al-folio** will automatically re-deploy your webpage each time you push new changes to your repository! :sparkles:

**For personal and organization webpages:**

1. Rename your repository to `<your-github-username>.github.io` or `<your-github-orgname>.github.io`.
2. In `_config.yml`, set `url` to `https://<your-github-username>.github.io` and leave `baseurl` empty.
3. Set up automatic deployment of your webpage (see instructions below).
4. Make changes, commit, and push!
5. After deployment, the webpage will become available at `<your-github-username>.github.io`.

**For project pages:**

1. In `_config.yml`, set `url` to `https://<your-github-username>.github.io` and `baseurl` to `/<your-repository-name>/`.
2. Set up automatic deployment of your webpage (see instructions below).
3. Make changes, commit, and push!
4. After deployment, the webpage will become available at `<your-github-username>.github.io/<your-repository-name>/`.

**To enable automatic deployment:**

1. Click on **Actions** tab and **Enable GitHub Actions**; do not worry about creating any workflows as everything has already been set for you.
2. Make any other changes to your webpage, commit, and push. This will automatically trigger the **Deploy** action.
3. Wait for a few minutes and let the action complete. You can see the progress in the **Actions** tab. If completed successfully, in addition to the `master` branch, your repository should now have a newly built `gh-pages` branch.
4. Finally, in the **Settings** of your repository, in the Pages section, set the branch to `gh-pages` (**NOT** to `master`). For more details, see [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source).

<details><summary>(click to expand) <strong>Manual deployment to GitHub Pages:</strong></summary>

If you need to manually re-deploy your website to GitHub pages, run the deploy script from the root directory of your repository:

```bash
$ ./bin/deploy
```

uses the `master` branch for the source code and deploys the webpage to `gh-pages`.

</details>

<details><summary>(click to expand) <strong>Deployment to another hosting server (non GitHub Pages):</strong></summary>

If you decide to not use GitHub Pages and host your page elsewhere, simply run:

```bash
$ bundle exec jekyll build
```

which will (re-)generate the static webpage in the `_site/` folder.
Then simply copy the contents of the `_site/` foder to your hosting server.

**Note:** Make sure to correctly set the `url` and `baseurl` fields in `_config.yml` before building the webpage. If you are deploying your webpage to `your-domain.com/your-project/`, you must set `url: your-domain.com` and `baseurl: /your-project/`. If you are deploing directly to `your-domain.com`, leave `baseurl` blank.

</details>

<details><summary>(click to expand) <strong>Deployment to a separate repository (advanced users only):</strong></summary>

**Note:** Do not try using this method unless you know what you are doing (make sure you are familiar with [publishing sources](https://help.github.com/en/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites)). This approach allows to have the website's source code in one repository and the deployment version in a different repository.

Let's assume that your website's publishing source is a `publishing-source` sub-directory of a git-versioned repository cloned under `$HOME/repo/`.
For a user site this could well be something like `$HOME/<user>.github.io`.

Firstly, from the deployment repo dir, checkout the git branch hosting your publishing source.

Then from the website sources dir (commonly your al-folio fork's clone):

```bash
$ bundle exec jekyll build --destination $HOME/repo/publishing-source
```

This will instruct jekyll to deploy the website under `$HOME/repo/publishing-source`.

**Note:** Jekyll will clean `$HOME/repo/publishing-source` before building!

The quote below is taken directly from the [jekyll configuration docs](https://jekyllrb.com/docs/configuration/options/):

> Destination folders are cleaned on site builds
>
> The contents of `<destination>` are automatically cleaned, by default, when the site is built. Files or folders that are not created by your site will be removed. Some files could be retained by specifying them within the `<keep_files>` configuration directive.
>
> Do not use an important location for `<destination>`; instead, use it as a staging area and copy files from there to your web server.

If `$HOME/repo/publishing-source` contains files that you want jekyll to leave untouched, specify them under `keep_files` in `_config.yml`.
In its default configuration, al-folio will copy the top-level `README.md` to the publishing source. If you want to change this behaviour, add `README.md` under `exclude` in `_config.yml`.

**Note:** Do _not_ run `jekyll clean` on your publishing source repo as this will result in the entire directory getting deleted, irrespective of the content of `keep_files` in `_config.yml`.

</details>

---

#### Upgrading from a previous version

If you installed **al-folio** as described above, you can upgrade to the latest version as follows:

```bash
# Assuming the current directory is <your-repo-name>
$ git remote add upstream https://github.com/alshedivat/al-folio.git
$ git fetch upstream
$ git rebase v0.3.5
```

If you have extensively customized a previous version, it might be trickier to upgrade.
You can still follow the steps above, but `git rebase` may result in merge conflicts that must be resolved.
See [git rebase manual](https://help.github.com/en/github/using-git/about-git-rebase) and how to [resolve conflicts](https://help.github.com/en/github/using-git/resolving-merge-conflicts-after-a-git-rebase) for more information.
If rebasing is too complicated, we recommend to re-install the new version of the theme from scratch and port over your content and changes from the previous version manually.

# Installing Node

Before you can start working on your project, you need to install [Node.js](https://nodejs.org/) first. whatsapp-web.js `v2` is requring Node.js `v12` or higher.

::: tip
To check if you already have Node installed on your machine, run `node -v` in your [terminal](/guide/v2/popular-topics/guide-explanations/). If the output is `v12` or higher, then you're good to go! Otherwise you should continue reading this.
:::

## Installation on Windows

Installing Node on Windows works just like any other program. Download any [version above 12+](https://nodejs.org/), open the downloaded file and follow the installer steps.

## Installation on macOS

This also applies to macOS. Download any [version above 12+](https://nodejs.org/), open the downloaded file and follow the installer steps. You may need to use a package manager like [Homebrew](https://brew.sh/) though. Use this with the command `brew install node`.

## Installation on Linux

If you are using Linux, chances are you already have Node installed. Check this with `node -v`, if you have an approximate output of `12.0` or higher, you can continue scrolling. If this is not the case, we recommend that you visit [this Node.js](https://nodejs.org/en/download/package-manager/) site.

::: warning
If you already have Node installed, but you are using an older version that is below v12, you need to upgrade your Node to v12 or higher. That is important because `whatsapp-web.js v2` is requring that.
:::

Open the terminal, run the `node -v` command to make sure you've successfully installed Node.js. If it outputs `v12.0.0` or higher, then you ready!

## Installation on no-gui systems

::: warning WARNING: NOTE
If you want to install whatsapp-web.js on a system without GUI (for example `linux server images` that can just be accessed over a shell and dont have something like a desktop) there are a couple of things you need to do so puppeteer can emulate the chromium browser.

For puppeteer to work, you need to install the following dependencies with the `apt-get` command (remember to `apt-get update` before you install)
```bash
$ sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```
:::

---

## Create your project folder

After installing Node, you can now run commands in your console. We recommend using [npm](https://www.npmjs.com/), but you can use both [Yarn](https://yarnpkg.com/) and [pnpm](https://pnpm.io/) as package manager. However, we support all package managers in the guide.

Let's get started. Open your terminal in your folder, type this command in and execute it. This start a seqeuence, wich will ask you questions about your project. If you're not sure of something or want to skip it as a whole, leave it blank and press enter.

<code-group>
<code-block title="npm" active>
```bash
npm init
```
</code-block>

<code-block title="yarn">
```bash
yarn init
```
</code-block>

<code-block title="pnpm">
```bash
pnpm init
```
</code-block>
</code-group>

Now you should have created a file called `package.json` in your folder. This contains your most important information about your project.

Your `package.json` file should look like this:

```json
{
  "name": "whatsapp-bot",
  "version": "1.0.0",
  "description": "This is a simple WhatsApp bot for experaring this library.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

::: tip TIP: QUICK INIT
To get started quickly, you can run the following command to have it fill out everything for you.

<code-group>
<code-block title="npm" active>
```bash
npm init -y
```
</code-block>

<code-block title="yarn">
```bash
yarn init -y
```
</code-block>

<code-block title="pnpm">
```bash
pnpm init -y
```
</code-block>
</code-group>
:::

Once you're done with that, you're ready to install whatsapp-web.js!
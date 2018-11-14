# xin-desktop
xin markdown for desktop

### install
npm install

"electron-builder": "^20.28.4",
"electron-installer-dmg": "^2.0.0",
"electron-packager": "^12.1.2",
"electron-prebuilt": "^1.4.13"
    
### create app
cnpm install -g electron-packager
"app": "electron-packager ./xin-desktop xin --platform=mas --app-version=0.0.1 --out=./app --overwrite",

### create dmg
cnpm install -g electron-installer-dmg
"dmg": "electron-installer-dmg xin.app xin"

### create icon
https://editor.method.ac/
https://iconverticons.com/online/
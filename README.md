# MLAB Core Release
IBLIS Frontend Releases
## Prerequsites
- Node.js^18.x or greater
- PM2
# Installation
1. Clone the repository:
```bash
   git clone https://github.com/HISMalawi/MLAB-Core-Release.git
```
2. Install dependencies
```
   npm install pm2 serve -g
```
## Deployment
```
   cd MLAB-Core-Release
   git fetch --tags
   git checkout [tag]
   git describe --tags
   bash network.bash
   pm2 start ecosystem.config.js
   pm2 save
```


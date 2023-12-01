# MLAB-Core-Release
IBLIS Frontend Releases
## Prerequsites
- Node.js^16.x or greater
- PM2
# Installation
Clone the repository:
```bash
git clone https://github.com/HISMalawi/HIS-Core-release.git
```
## Deployment
```bash
   git fetch --tags
   git checkout [tag]
   pm2 start server/index.mjs --name="IBLIS"
   pm2 save
```


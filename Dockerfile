# Use Node.js 18 base image
FROM node:18

# Install global dependencies
RUN npm install -g pm2 serve

# Create app directory
WORKDIR /mlab

# Copy built files and ecosystem configuration
COPY . /mlab/

# Expose necessary ports
EXPOSE 8001 4173 8002

# Start the applications using PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]

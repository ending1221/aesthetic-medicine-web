# Download node.js
FROM node:15.14.0
MAINTAINER yauHsu yohsu@smarter.com.tw

# Set the working direcotry 
WORKDIR /max-beauty-web

# Copy all files to WORKDIR
ADD . /max-beauty-web

# Install
RUN npm install
# SASS loader 
RUN npm install --save-dev sass sass-loader fibers
RUN npm run build

# Expose port 5000 on container
EXPOSE 5000

# Set env for nuxt severes
ENV NUXT_HOST=0.0.0.0
# Set app port
ENV NUXT_PORT=5000

CMD ["npm", "start"] 
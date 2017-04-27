FROM node:boron

# Define some env variables
# ENV app /usr/src/babel

# Create app directory
RUN mkdir -p /usr/src/cover
WORKDIR /usr/src/cover

# Copy needed things
COPY . /usr/src/cover

# Expose port
EXPOSE 3001

# Install needed dependencies
RUN npm install -g gulp-cli --no-progress --silent
RUN npm install -g pm2 --no-progress --silent
RUN npm install --no-progress --silent

# Run it
CMD npm run prod



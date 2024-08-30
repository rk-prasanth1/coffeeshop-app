# Use the official Node.js 18 image as the base image
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript type definitions
RUN npm install --save-dev @types/express @types/node


# Copy the rest of the application code to the working directory
COPY . .

# Copy the Prisma schema file(s)
COPY prisma ./prisma

# If you're using Prisma, install Prisma client
RUN npx prisma generate

# Run the build process
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy only necessary files from the build stage
COPY --from=build /usr/src/app/prisma ./prisma
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/package*.json ./

# Expose the port your app runs on (default is 4000, change if needed)
EXPOSE 4000

# Command to run the application
CMD ["npm", "start"]
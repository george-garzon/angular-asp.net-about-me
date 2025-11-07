# ======================================
# Stage 1 - Build Angular app
# ======================================
FROM node:22-alpine AS build

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of your Angular app
COPY . .

# Build the Angular project for production
RUN npm run build -- --configuration production

# ======================================
# Stage 2 - Serve via Nginx
# ======================================
FROM nginx:alpine

# Clean default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy the Angular build from Stage 1
COPY --from=build /app/dist/about-me-app /usr/share/nginx/html

# Copy optional custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

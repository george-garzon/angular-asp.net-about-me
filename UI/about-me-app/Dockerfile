# ======================================
# Stage 1 - Build Angular app
# ======================================
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration production

# ======================================
# Stage 2 - Serve via Nginx
# ======================================
FROM nginx:alpine

# Clean default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular dist output
COPY --from=build /app/dist/about-me-app /usr/share/nginx/html

# Add routing-friendly Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

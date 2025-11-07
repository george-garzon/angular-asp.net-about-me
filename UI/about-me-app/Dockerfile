# ======================================
# Stage 1 - Build Angular app
# ======================================
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

# Build production version
RUN npm run build -- --configuration production

# ======================================
# Stage 2 - Serve via Nginx
# ======================================
FROM nginx:alpine

# Copy optional dynamic env file
COPY dynamic-env.json /usr/share/nginx/html/

# Custom routing config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled Angular app
COPY --from=build /app/dist/about-me-app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

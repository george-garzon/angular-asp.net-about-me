# ======================================
# Stage 1 - Build Angular app
# ======================================
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration production

# Debug check
RUN ls -R /app/dist

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY dynamic-env.json /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/about-me-app/browser /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

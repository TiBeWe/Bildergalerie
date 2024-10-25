# Verwende ein Node.js-Image der Version 18
FROM node:18-alpine AS build

# Arbeitsverzeichnis setzen
WORKDIR /app

# pnpm installieren
RUN npm install -g pnpm

# Kopiere package.json und installiere Abhängigkeiten
COPY package.json ./
RUN pnpm install

# Kopiere den Rest des App-Codes und baue die App
COPY . .
RUN pnpm run build

# NGINX verwenden, um die Anwendung zu hosten
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Port 80 freigeben
EXPOSE 80

# NGINX starten
CMD ["nginx", "-g", "daemon off;"]

FROM node:20-alpine
RUN npm install -g mcp-remote@0.14.3
ENV SSE_URL=https://sairen.omniapps.ca/sse
CMD ["mcp-remote", "https://sairen.omniapps.ca/sse"]

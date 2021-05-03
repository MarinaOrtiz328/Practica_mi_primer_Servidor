FROM node
MAINTAINER Marina Ortiz
ENV HOME /root
COPY ./holamundo.js ./holamundo.js
CMD node holamundo.js

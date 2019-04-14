FROM    centos:centos6

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
# Install Node.js and npm
RUN     yum install -y npm

# Bundle app source
COPY . /marqdown
# Install app dependencies
RUN cd /marqdown; npm install

EXPOSE  9001
CMD ["node", "/marqdown/server.js", "start", "9001"];
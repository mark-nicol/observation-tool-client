#! /usr/bin/env python

'''
Simple ALMA Test Proxy
Forward a request from a local domain to the ALMA Service
as a way to avoid x-domain (CORS) issues when calling from
javascript.

Example usage using cURL:

root@abcc5ecd05f9:/# curl -F "searchVariant=Name" \
-F "searchStrings=Mark" \
http://195.194.122.71:8080/ObsprepSubmissionService/UserLookup?action=MatchStrings

'''

import SocketServer
import BaseHTTPServer
import shutil
import urllib2

try:
    from cStringIO import StringIO
except ImportError:
    from StringIO import StringIO

PORT = 8080
ALMA_SERVER = 'https://cycle-5.asa.alma.cl/'

class Proxy(BaseHTTPServer.BaseHTTPRequestHandler):
    '''
    POST request forwarder based on code in the SimpleHTTPServer
    '''

    def do_POST(self):
        '''
        Forward an http request to te the ALMA service which is https
        hence needing to read and then construct a new response.
        '''
        url = ALMA_SERVER + self.path
        print "POST remote: ", url
        try:
            content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
            post_data = self.rfile.read(content_length) # <--- Gets the data

            #self.log_message(self.headers['Content-Type'])
            #self.log_message(post_data)

            req = urllib2.Request(url=url, data=post_data)
            req.add_header('Content-Type', self.headers['Content-Type'])
            response = urllib2.urlopen(req)
            the_page = response.read()
            #self.log_message(the_page)

            #copy the read version of the contents
            results = StringIO()
            results.write(the_page)
            results.seek(0)

            #setup the headers
            self.send_response(200)
            self.send_header("Content-type", response.headers['Content-Type'])
            self.send_header("Content-Length", response.headers['Content-Length'])
            self.end_headers()

            #append the results
            if results:
                try:
                    shutil.copyfileobj(results, self.wfile)
                finally:
                    results.close()

        except IOError, err:
            self.log_message("ERROR:   ", err)
            self.send_error(500)

SocketServer.ThreadingTCPServer.allow_reuse_address = True
TINY_SERVER = SocketServer.ThreadingTCPServer(('', PORT), Proxy)
print "serving at port", PORT
TINY_SERVER.serve_forever()
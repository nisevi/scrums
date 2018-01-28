[![Build Status](https://travis-ci.org/nisevi/scrums.svg?branch=master)](https://travis-ci.org/nisevi/scrums) [![Maintainability](https://api.codeclimate.com/v1/badges/342b58fd208458cdd071/maintainability)](https://codeclimate.com/github/nisevi/scrums/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/342b58fd208458cdd071/test_coverage)](https://codeclimate.com/github/nisevi/scrums/test_coverage)

# SCRUMS

The main purpose of this APP is to display all the meetings where I've been involved on the [Agile Ventures](https://www.agileventures.org) community.

## Architecture

![](https://github.com/nisevi/commits/blob/master/doc/architecture.png)

[Here is how the process works](https://aws.amazon.com/blogs/security/how-to-protect-your-web-application-against-ddos-attacks-by-using-amazon-route-53-and-a-content-delivery-network/):

1. A user’s browser makes a DNS request to Route 53.
2. Route 53 has a hosted zone for the scrums.nisevi.com domain.
3. The hosted zone serves the record:
     * a. If the request is for the apex zone, the alias resource record set for the CloudFront distribution is served.
     * b. If the request is for the www subdomain, the CNAME for the externally hosted CDN is served.
4. CloudFront forwards the request to Amazon S3.
5. S3 performs a secure redirect to scrums.nisevi.com using https protocol.
6. Amazon S3 objects are versioned and the lifecycle of previous versions is handled with a transition to Amazon Glacier 30 days after the object creation and finally removed after 60 days from becoming a previous version.

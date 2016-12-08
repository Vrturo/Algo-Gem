// So what all happens behind the scenes from the time a URL is typed in the browser,
// to the time when the page on the browser loads?

// In an simplified sketch, assuming the simplest possible HTTP request:

//   1. browser checks cache; if requested object is in cache and is fresh, skip to #9
//   2. browser asks OS(Operating System) for server's IP(Internet Protocol) address
//   3. OS makes a DNS(Domain Name Servers) lookup and replies the IP address to the browser
//   4. browser opens a TCP(Transmission Control Protocol) connection to server
//   5. browser sends the HTTP request through TCP connection
//   6. browser receives HTTP response (may close the TCP connection, or reuse it for another request)
//   7. browser checks if the response is a redirect or a conditional response (3xx result status codes),
//      authorization request (401), error (4xx and 5xx), etc.; these are handled differently from normal responses (2xx)
//   8. if cacheable, response is stored in cache
//   9. browser decodes response (e.g. if it's gzipped)
//   10. browser determines what to do with response (e.g. is it a HTML page, is it an image, is it a sound clip?)
//   11. browser renders response, or offers a download dialog for unrecognized types

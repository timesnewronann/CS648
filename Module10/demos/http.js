import http from 'http'

http.createServer((req, res) => {
    // Response
    res.write('Hello World!')
    res.end()
})
.listen(3000, () => {
    console.log('Server running...')
})

http.request()
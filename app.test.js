"use strict"

function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(searchTerm);
    });
  }
  
  describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];
  
      const output = [{ id: 3, url: "https://www.link3.dev" }];
  
      expect(filterByTerm(input, "link")).toEqual(output);
    });
  })
// const {commonBeforeAll,test1Token,test2Token} = require('./_testCommon')

// beforeAll(() => {
//     commonBeforeAll
// })
// /** POST a sale */
// describe('POST/ sales', function(){
//     let newSale = {
//         "listingId": 1,
//         "seller": "test1",
//         "buyer": "test2",
//         "returned": false
//     }
//     let badSale = {
//         "listingId":1,
//         "seller":"test1",
//     }

//     test('works with good data', async function(){
//         let users = await request(app).get('/users')
//         console.log(users)
//         let res = await request(app).post('/sales/new').send(newSale).set("Authorization", `Bearer ${test2Token}`)
//         console.log(test2Token)
        
//         expect(res.statusCode).toBe(201)
//         expect(typeof res.body.id).toBe('number')
//         expect(res.body.listing).toEqual(5)
//         expect(res.body.seller).toEqual('peakyblinder3')
//     })
//     test('returns error on selling already sold item', async function(){
//         let res = await request(app).post('/sales/new').send(newSale).set("Authorization", `Bearer ${test2Token}`)

//         expect(res.statusCode).toBe(400)
//         expect(res.body).toEqual({
//             "error": {
//               "message": "Item Already Sold: 5",
//               "status": 400
//             }
//         })

//     })
//     test('does not work with incomeplete data', async function(){
//         let res = await request(app).post('/sales/new').send(badSale).set("Authorization", `Bearer ${test2Token}`)

//         expect(res.statusCode).toBe(400)
//         expect(res.body).toEqual({
//             "error": {
//               "message": [
//                 "instance requires property \"buyer\"",
//                 "instance requires property \"returned\""
//               ],
//               "status": 400
//             }
//         })
//     })
//     test('does not work without token', async function(){
//         let res = await request(app).post('/sales/new').send(newSale)

//         expect(res.statusCode).toBe(400)
//         expect(res.body).toEqual({
//             "error": {
//               "message": "Please Log In",
//               "status": 400
//             }
//         })
//     })
// })
============================================
============================================
## EXAMPLE DOCUMENTATION
### Ask for the Home Page
#### Step 1
Predicted Request components:
- Method: GET
- URL: /
- Headers: none
- Body: none

Predicted Response components:
- Status Code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page with navigation links to other pages

#### Step 2
In your browser open the chrome dev tools, navigate to [http://localhost:5000] and make a GET request for the Home Page (type "/" into the URL after 5000 and hit "enter").
Explore the "network" tab and find where you can compare your predicted request/response components to the actual components.

#### Step 3
If your prediction was wrong, try to understand why it was incorrect and then update your documentation to the correct request/response components.

Congratulations! You have performed a GET request to / showing the home page of our e-commerce
website. Move on to the next request/response documentation.

* Note
    - Headers contain many keys, but for this exercise focus on **Content-Type** and **Location**.

=============================================
=============================================

### Ask for a page that doesn't exist

Request components:
- Method:GET
- URL:/
- Headers:none
- Body:none

Response components:
- Status code: 404
- Headers:
        Content-type: HTML/text
- Body: 404 page not found

### Ask for the products list page

Request components:
- Method:GET
- URL:product/
- Headers:none
- Body:none

Response components:
- Status code:200
- Headers:
      Content-Type: text/html
- Body: HTML/text page with

### Ask for the product detail page

Here's an example product on the server:

| detail      | value                                                      |
| ----------- | ---------------------------------------------------------- |
| productId   | 1                                                          |
| name        | "Facial Cleansing Brush"                                   |
| description | "Reaches deep pores to cleanse oil, dirt, and blackheads." |
| price       | 23.99                                                      |
| categories  | "beauty", "electronics"                                    |

Request components:
- Method: GET
- URL:products/1
- Headers:none
- Body:none

Response components:
- Status code:200
- Headers:
      Content-Type: text/html
- Body: cleaning brush product details

### Ask for the create new product page

Request components:
- Method: GET
- URL:products/new
- Headers:none
- Body:none

Response components:
- Status code:200
- Headers:
        Content-Type: text/html;
- Body: html form with with boxes for editing

### Submit a new product

Remember, for a traditional HTML web server, whenever a successful `POST`
request is sent to the server, the server should respond with a redirection to
a page.

After successful submission, user should be looking at the product detail page.

Here are the categories on the server:

| tag         | name           |
| ----------- | -------------- |
| grocery     | Grocery        |
| electronics | Electronics    |
| beauty      | Beauty         |
| toys-games  | Toys and Games |
| health      | Health         |
| furniture   | Furniture      |
| clothing    | Clothing       |

* Note: In Chome dev tools, if the "body" of a request exists, it will appear
in the network tab as "payload".

Request components:
- Method: POST
- URL:products/
- Headers:
      Content-Type: application/x-www-form-urlencoded
- Body:

Response components:
- Status code: 302
- Headers:
      Content-Type: text/html
- Body: h1 heading with with unordered product list

### Ask for the edit product page

Request components:
- Method: GET
- URL: products/2/edit
- Headers:none
- Body:none

Response components:
- Status code: 200
- Headers:
       Content-Type: text/html
- Body: HTML form for editing

### Submit an edit for an existing product

After successful submission, user should be looking at the product detail page.

Request components:
- Method: POST
- URL: products/2
- Headers:
      application/x-www-form-urlencoded
- Body: form data

Response components:
- Status code: 302(redirect)
- Headers:
      text/html; charset=utf-8
- Body:h1 heading with name of the prodcut and with unordered product list

### Submit a delete for an existing product

After successful submission, user should be looking at the products list page.

Request components:
- Method: POST
- URL: product/2/delete
- Headers:
      application/x-www-form-urlencoded
- Body: product name page

Response components:
- Status code: 302 (redirect)
- Headers:
      text/html
- Body: h1 heading with link to the product

### Submit a new review for a product

After successful submission, user should be looking at the product detail page.

Here's an example review on the server:

| detail     | value                  |
| ---------- | ---------------------- |
| reviewId   | 1                      |
| comment    | "I love this product!" |
| starRating | 5                      |
| productId  | 1                      |

Request components:
- Method: POST
- URL: reviews/1
- Headers:
      application/x-www-form-urlencoded
- Body:Product detail page

Response components:
- Status code: 302
- Headers:
      text/html
- Body: h1 heading with product details and unordered list

### Ask for the edit review page for a product

Request components:
- Method: GET
- URL: review/1/edit
- Headers:none
- Body:none

Response components:
- Status code: 200
- Headers:
        text/html
- Body:

### Submit an edit for an existing review

After successful submission, user should be looking at the product detail page.

Request components:
- Method: POST
- URL: reviews/1
- Headers:
        application/x-www-form-urlencoded
- Body:Product detail page

Response components:
- Status code: 302(redirect)
- Headers:
       text/html
- Body:h1 heading with product details and unordered list

### Submit a delete for an existing review

After successful submission, user should be looking at the product detail page.

Request components:
- Method:POST
- URL: reviews/1/delete
- Headers:
      application/x-www-form-urlencoded
- Body:

Response components:
- Status code:302(redirect)
- Headers:
        text/html
- Body:h1 heading with product details and unordered list

### Ask for all the products in a particular category by tag of the category

Request components:
- Method:GET
- URL:products
- Headers:none
- Body:none

Response components:
- Status code: 200
- Headers:
            text/html
- Body:h1 heading and product list links

### Ask for the best-selling product

Look for clues in the HTML pages from the prior responses for what the route should be.

Request components:
- Method: GET
- URL: products/best-selling
- Headers:none
- Body:none

Response components:
- Status code: 200
- Headers:
          text/html
- Body: h1 heading with product details and unordered list

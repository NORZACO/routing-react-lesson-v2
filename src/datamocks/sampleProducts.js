const PRODUCTS = [
    {
        "productId": "304436ac-16a5-4e28-8876-d70e0fff33a5",
        "productName": "Electronic Metal Sausages",
        "productDescription": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "productPrice": "85.00",
        "productImage": "https://loremflickr.com/640/480?lock=4301091455893504",
        "productCategory": "Tools",
        "productMaterial": "Granite",
        "productAdjective": "Licensed",
        "product": "Cheese",
        "productDepartment": "Outdoors"
    },
    {
        "productId": "72e525a7-6558-447e-9f25-1d5548eefc4b",
        "productName": "Recycled Granite Salad",
        "productDescription": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "productPrice": "621.00",
        "productImage": "https://picsum.photos/seed/hoNLn/640/480",
        "productCategory": "Home",
        "productMaterial": "Fresh",
        "productAdjective": "Sleek",
        "product": "Sausages",
        "productDepartment": "Games"
    },
    {
        "productId": "8a382eb4-95ce-4854-91ca-77cb73fc5e19",
        "productName": "Gorgeous Granite Cheese",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productPrice": "421.00",
        "productImage": "https://picsum.photos/seed/A3DDdf7PK/640/480",
        "productCategory": "Books",
        "productMaterial": "Metal",
        "productAdjective": "Luxurious",
        "product": "Cheese",
        "productDepartment": "Health"
    },
    {
        "productId": "a5d8a18d-497c-4b44-b4f1-5bb473349603",
        "productName": "Small Cotton Bacon",
        "productDescription": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "productPrice": "338.00",
        "productImage": "https://loremflickr.com/640/480?lock=1089121013465088",
        "productCategory": "Automotive",
        "productMaterial": "Fresh",
        "productAdjective": "Intelligent",
        "product": "Cheese",
        "productDepartment": "Clothing"
    },
    {
        "productId": "57cd26e6-b90f-49fc-9076-dbbb1bbf51db",
        "productName": "Ergonomic Soft Table",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productPrice": "125.00",
        "productImage": "https://loremflickr.com/640/480?lock=67812538187776",
        "productCategory": "Outdoors",
        "productMaterial": "Bronze",
        "productAdjective": "Handmade",
        "product": "Gloves",
        "productDepartment": "Automotive"
    },
    {
        "productId": "6c69f9ee-3884-4394-82b8-7adcafece6f6",
        "productName": "Incredible Soft Pants",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productPrice": "417.00",
        "productImage": "https://picsum.photos/seed/o2fe1/640/480",
        "productCategory": "Automotive",
        "productMaterial": "Frozen",
        "productAdjective": "Recycled",
        "product": "Fish",
        "productDepartment": "Health"
    },
    {
        "productId": "89ecd766-8978-4d9a-a39f-13068c8f18d1",
        "productName": "Practical Cotton Ball",
        "productDescription": "The Football Is Good For Training And Recreational Purposes",
        "productPrice": "925.00",
        "productImage": "https://picsum.photos/seed/WTH9u/640/480",
        "productCategory": "Jewelery",
        "productMaterial": "Fresh",
        "productAdjective": "Unbranded",
        "product": "Cheese",
        "productDepartment": "Health"
    },
    {
        "productId": "72c78808-8d88-4728-9b1e-806d8aef0041",
        "productName": "Recycled Steel Pants",
        "productDescription": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "productPrice": "522.00",
        "productImage": "https://picsum.photos/seed/Lj8VJtIO/640/480",
        "productCategory": "Jewelery",
        "productMaterial": "Soft",
        "productAdjective": "Elegant",
        "product": "Shirt",
        "productDepartment": "Beauty"
    },
    {
        "productId": "64385862-e44c-45ae-83c2-c2e9f5279609",
        "productName": "Luxurious Concrete Soap",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productPrice": "751.00",
        "productImage": "https://picsum.photos/seed/pYtTUWPRT/640/480",
        "productCategory": "Garden",
        "productMaterial": "Bronze",
        "productAdjective": "Sleek",
        "product": "Gloves",
        "productDepartment": "Movies"
    },
    {
        "productId": "2ef54c18-c5a1-44aa-a581-25b81da76044",
        "productName": "Handcrafted Rubber Cheese",
        "productDescription": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "productPrice": "875.00",
        "productImage": "https://loremflickr.com/640/480?lock=4247095160602624",
        "productCategory": "Garden",
        "productMaterial": "Concrete",
        "productAdjective": "Small",
        "product": "Bacon",
        "productDepartment": "Electronics"
    },
    {
        "productId": "a9715856-d4bb-4d06-be42-20de79cc2b1c",
        "productName": "Unbranded Steel Sausages",
        "productDescription": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "productPrice": "882.00",
        "productImage": "https://picsum.photos/seed/XJGj7AVZQ/640/480",
        "productCategory": "Shoes",
        "productMaterial": "Soft",
        "productAdjective": "Elegant",
        "product": "Fish",
        "productDepartment": "Health"
    },
    {
        "productId": "ec302457-66fb-4945-b622-cef317130551",
        "productName": "Luxurious Fresh Shoes",
        "productDescription": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "productPrice": "506.00",
        "productImage": "https://picsum.photos/seed/cEzsq5ueb/640/480",
        "productCategory": "Books",
        "productMaterial": "Granite",
        "productAdjective": "Unbranded",
        "product": "Shoes",
        "productDepartment": "Books"
    }
]


export default PRODUCTS;
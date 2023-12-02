    const products = [
        { name: 'Latte', category: 'Drinks', price: 3.5, image: 'images/Latte.jpg' },
        { name: 'Cappuccino', category: 'Drinks', price: 4.0, image: 'images/Cappuccino.jpg' },
        { name: 'Americano', category: 'Drinks', price: 3.0, image: 'images/Americano.jpg' },
        { name: 'Espresso', category: 'Drinks', price: 2.5, image: 'images/Espresso.jpg' },
        { name: 'Chocolate Cake', category: 'Cakes', price: 20.0, image: 'images/Chocolate-Cake.jpg' },
        { name: 'Red Velvet Cake', category: 'Cakes', price: 18.0, image: 'images/Red Velvet Cake.jpg' },
        { name: 'Cheesecake', category: 'Cakes', price: 22.0, image: 'images/Cheesecake.jpg' },
        { name: 'Carrot Cake', category: 'Cakes', price: 19.0, image: 'images/Carrot Cake.jpg' },
        { name: 'Strawberry Shake', category: 'Shakes', price: 5.0, image: 'images/Strawberry Shake.jpg' },
        { name: 'Chocolate Shake', category: 'Shakes', price: 5.50, image: 'images/Chocolate Shake.jpg' },
        { name: 'Vanilla Shake', category: 'Shakes', price: 4.50, image: 'images/Vanilla Shake.jpg' },
        { name: 'Mango Tango Shake', category: 'Shakes', price: 6.0, image: 'images/Mango Tango Shake.jpg' },
        // Add more products as needed
    ];
        // Function to show products based on the selected category
        function showProducts(category) {
            const productList = document.getElementById('productList');
            const categoryButtons = document.getElementById('categoryButtons').getElementsByTagName('button');
    
            // Remove active class from all buttons
            for (let i = 0; i < categoryButtons.length; i++) {
                categoryButtons[i].classList.remove('active');
            }
    
            // Add active class to the clicked button
            event.target.classList.add('active');
    
            // Clear existing content
            productList.innerHTML = '';
    
            // Filter products based on the selected category
            const categoryProducts = products.filter(product => product.category === category);
    
            // Iterate through the filtered products array and create product cards
            categoryProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
    
                // Product image
                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.name;
                productCard.appendChild(img);
    
                // Product name
                const productName = document.createElement('h3');
                productName.textContent = product.name;
                productCard.appendChild(productName);
    
                // Product price
                const productPrice = document.createElement('p');
                productPrice.textContent = `$${product.price.toFixed(2)}`;
                productCard.appendChild(productPrice);
    
                // Order button
                const orderButton = document.createElement('button');
                orderButton.textContent = 'Order';
                orderButton.classList.add('order-button');
                orderButton.addEventListener('click', () => orderProduct(product.name));
                productCard.appendChild(orderButton);
    
                // Append the product card to the product list
                productList.appendChild(productCard);
            });
        }
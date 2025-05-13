<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combined Dynamic Content Demo</title>
    <style>
        /* CSS styles */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            text-align: center;
            margin-bottom: 30px;
        }

        section {
            margin-bottom: 30px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        button {
            padding: 10px 15px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }

        button:hover {
            background-color: #2980b9;
        }

        .box {
            padding: 15px;
            background-color: #f1c40f;
            margin: 10px 0;
            transition: all 0.3s ease;
        }

        footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <!-- HTML structure -->
    <header>
        <h1 id="main-heading">JavaScript DOM Manipulation</h1>
    </header>
    
    <main>
        <section id="content-section">
            <p id="dynamic-text">This text will change when you click the button below.</p>
            <button id="text-change-btn">Change Text</button>
        </section>
        
        <section id="style-section">
            <div id="style-demo" class="box">This box will change style</div>
            <button id="style-change-btn">Change Style</button>
        </section>
        
        <section id="element-section">
            <button id="toggle-element-btn">Toggle Element</button>
            <div id="toggle-container">
                <p id="toggled-element">This element can be shown/hidden</p>
            </div>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2023 Dynamic Content Demo</p>
    </footer>
    
    <script>
        // JavaScript functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Task 1: Change text content dynamically
            const textChangeBtn = document.getElementById('text-change-btn');
            const dynamicText = document.getElementById('dynamic-text');
            
            textChangeBtn.addEventListener('click', function() {
                dynamicText.textContent = "Text successfully changed using JavaScript!";
                dynamicText.style.color = "#2ecc71";
            });
            
            // Task 2: Modify CSS styles via JavaScript
            const styleChangeBtn = document.getElementById('style-change-btn');
            const styleDemo = document.getElementById('style-demo');
            let isStyled = false;
            
            styleChangeBtn.addEventListener('click', function() {
                if (isStyled) {
                    styleDemo.style.backgroundColor = '#f1c40f';
                    styleDemo.style.color = '#000';
                    styleDemo.style.border = '2px solid #000';
                    styleDemo.style.transform = 'rotate(0deg)';
                } else {
                    styleDemo.style.backgroundColor = '#9b59b6';
                    styleDemo.style.color = '#fff';
                    styleDemo.style.border = '4px dashed #ecf0f1';
                    styleDemo.style.transform = 'rotate(5deg)';
                    styleDemo.style.padding = '20px';
                }
                isStyled = !isStyled;
            });
            
            // Task 3: Add or remove an element when button is clicked
            const toggleElementBtn = document.getElementById('toggle-element-btn');
            const toggledElement = document.getElementById('toggled-element');
            let isVisible = true;
            
            toggleElementBtn.addEventListener('click', function() {
                if (isVisible) {
                    toggledElement.style.display = 'none';
                    toggleElementBtn.textContent = 'Show Element';
                } else {
                    toggledElement.style.display = 'block';
                    toggleElementBtn.textContent = 'Hide Element';
                }
                isVisible = !isVisible;
            });
        });
    </script>
</body>
</html>
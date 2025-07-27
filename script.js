// Password validation and login functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    
    // The secret password - change this to your desired password
    const correctPassword = 'เค้ารักเธอนะ';
    
    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const enteredPassword = passwordInput.value.trim();
        
        if (enteredPassword === correctPassword) {
            // Correct password - add success animation and redirect
            showSuccess();
            setTimeout(() => {
                window.location.href = 'main.html';
            }, 1500);
        } else {
            // Wrong password - show error
            showError('Incorrect password. Try again! 💕');
            passwordInput.value = '';
            passwordInput.focus();
        }
    });
    
    // Show error message with animation
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
        
        // Add shake animation to login box
        const loginBox = document.querySelector('.login-box');
        loginBox.style.animation = 'shake 0.5s ease-in-out';
        
        setTimeout(() => {
            loginBox.style.animation = '';
        }, 500);
        
        // Hide error message after 3 seconds
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 3000);
    }
    
    // Show success message and animation
    function showSuccess() {
        errorMessage.textContent = 'Welcome to our memories! 💕';
        errorMessage.style.color = '#28a745';
        errorMessage.classList.add('show');
        
        // Add success animation to login box
        const loginBox = document.querySelector('.login-box');
        loginBox.style.animation = 'successPulse 1s ease-in-out';
        
        // Change button text
        const button = loginForm.querySelector('button');
        button.textContent = 'Opening our memories...';
        button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    }
    
    // Add shake animation keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
        
        @keyframes successPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(style);
    
    // Focus on password input when page loads
    passwordInput.focus();
    
    // Add enter key support
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginForm.dispatchEvent(new Event('submit'));
        }
    });
});

// Add some romantic floating hearts animation
function createFloatingHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
    `;
    document.body.appendChild(heartsContainer);
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 10}px;
            left: ${Math.random() * 100}%;
            animation: floatUp ${Math.random() * 3 + 4}s linear forwards;
            opacity: 0.7;
        `;
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 7000);
    }
    
    // Add floating hearts animation
    const floatUpStyle = document.createElement('style');
    floatUpStyle.textContent = `
        @keyframes floatUp {
            0% {
                bottom: -50px;
                transform: translateX(0px) rotate(0deg);
                opacity: 0.7;
            }
            50% {
                transform: translateX(${Math.random() * 100 - 50}px) rotate(180deg);
                opacity: 1;
            }
            100% {
                bottom: 100vh;
                transform: translateX(${Math.random() * 100 - 50}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(floatUpStyle);
    
    // Create hearts periodically
    setInterval(createHeart, 3000);
}

// Start floating hearts animation on login page
if (document.body.classList.contains('login-page')) {
    setTimeout(createFloatingHearts, 1000);
}
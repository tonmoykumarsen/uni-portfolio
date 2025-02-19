
        // Typewriter Effect
        const texts = ["Developer", "Designer", "Youtuber"];
        let textIndex = 0;
        let charIndex = 0;
        const textElement = document.querySelector(".typewriter-text");
        
        function type() {
            if (charIndex < texts[textIndex].length) {
                textElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }
        
        function erase() {
            if (charIndex > 0) {
                textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            }
        }
        
        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(type, 500);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

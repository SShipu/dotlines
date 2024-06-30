//Accordion 
document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(
        ".accordion-item-header"
    );

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const body = header.nextElementSibling;
            const accordionItem = header.parentElement;
            const icon = header.querySelector(".icon");

            if (accordionItem.classList.contains("active")) {
                closeAccordion(body, accordionItem, icon);
            } else {
                const openItem = document.querySelector(
                    ".accordion-item.active"
                );
                if (openItem) {
                    const openBody = openItem.querySelector(
                        ".accordion-item-body"
                    );
                    const openIcon =
                        openItem.querySelector(".icon");
                    closeAccordion(openBody, openItem, openIcon);
                }
                openAccordion(body, accordionItem, icon);
            }
        });
    });

    function closeAccordion(body, accordionItem, icon) {
        body.style.maxHeight = null;
        accordionItem.classList.remove("active");
        icon.textContent = "+";
    }

    function openAccordion(body, accordionItem, icon) {
        body.style.maxHeight = body.scrollHeight + "px";
        accordionItem.classList.add("active");
        icon.textContent = "-";
    }
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
    var organizationInput = document.getElementById('organization');
    var messageInput = document.getElementById('message');
    var budgetSelect = document.getElementById('budget');
    var timeFrame = document.querySelector('input[name="time_Frame"]:checked');
    var mobileCheckbox = document.getElementById('mobile');
    var webCheckbox = document.getElementById('web');
    var uxCheckbox = document.getElementById('ux');
    var uploadedFileInput = document.getElementById('upload');
    var nameError = document.getElementById('nameError');
    var phoneError = document.getElementById('phoneError');

    var isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.style.display = 'inline-block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (phoneInput.value.trim() === '') {
        phoneError.style.display = 'inline-block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    // submission validation
    if (!isValid) {
        event.preventDefault();
        return;
    }

    var selectedBudget = budgetSelect.options[budgetSelect.selectedIndex].text;
    var selectedTimeframe = timeFrame ? timeFrame.value : 'Not selected';
    var selectedServices = [];
    if (mobileCheckbox.checked) selectedServices.push('Mobile Development');
    if (webCheckbox.checked) selectedServices.push('Web Development');
    if (uxCheckbox.checked) selectedServices.push('UX/UI Design');

    var uploadedFileName = uploadedFileInput.files.length > 0 ? uploadedFileInput.files[0].name : 'No file uploaded';

    var popupContent = `
        Name:  ${nameInput.value}
        Phone Number:  ${phoneInput.value}
        Email:  ${emailInput.value.length > 0 ? emailInput.value : 'None selected'}
        Organization:  ${organizationInput.value.length > 0 ? organizationInput.value : 'None selected'}
        Estimated Budget:  ${selectedBudget.length > 0 ? selectedBudget : 'None selected'}
        Estimated Timeframe:  ${selectedTimeframe}
        Services:  ${selectedServices.length > 0 ? selectedServices.join(', ') : 'None selected'}
        Message:  ${messageInput.value.length > 0 ? messageInput.value : 'No Message'}
        Uploaded File:  ${uploadedFileName}
    `;
    alert("Please review the information you have entered:\n\n" + popupContent);
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');
    const body = document.querySelector("body");

    hamburger.addEventListener('click', function() {
        overlay.classList.toggle('open');

        if (overlay.classList.contains('open')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('open');
            body.style.overflow = 'auto';
        }
    });
});

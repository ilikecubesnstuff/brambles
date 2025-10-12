const codeBlockButtonPairs = [];

function addCopyButtons(clipboard) {
    document.querySelectorAll('.highlight > pre > code').forEach(function (codeBlock) {
        // console.log('Adding copy button to code block', codeBlock);
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy code';

        button.style.position = 'absolute';

        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.textContent).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                button.innerText = 'Copied!';

                setTimeout(function () {
                    button.innerText = 'Copy code';
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
            });
        });

        var pre = codeBlock.parentNode;
        var highlight = pre.parentNode;
        highlight.parentNode.insertBefore(button, highlight);

        codeBlockButtonPairs.push({codeBlock, button});
    });
}

if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
    script.crossOrigin = 'anonymous';
    script.onload = function() {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}

function positionButtons() {
  codeBlockButtonPairs.forEach(({ codeBlock, button }) => {
    const rect = codeBlock.getBoundingClientRect();
    const codeBlockStyle = window.getComputedStyle(codeBlock.parentNode);
    const buttonStyle = window.getComputedStyle(button);
    const articleStyle = window.getComputedStyle(document.querySelector('article'));

    const horizontalShift = parseFloat(codeBlockStyle.getPropertyValue('padding-left').slice(0, -2)) +
        parseFloat(buttonStyle.getPropertyValue('width').slice(0, -2)) +
        2 * parseFloat(articleStyle.getPropertyValue('padding-left').slice(0, -2)) +
        -0.8;  // Weird correction term, not sure what's up with this.
    console.log(`horizontalShift: ${horizontalShift}`);
    button.style.top  = `${window.scrollY + rect.top - 20.3}px`;
    button.style.left = `${window.scrollX + rect.left - horizontalShift}px`;
  });
}

// Initial placement
positionButtons();

// Re-position when scrolling or resizing
window.addEventListener("resize", positionButtons);
window.addEventListener("scroll", positionButtons);
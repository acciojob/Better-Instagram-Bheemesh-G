const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('dragstart', dragStart);
    image.addEventListener('dragover', dragOver);
    image.addEventListener('drop', drop);
    image.addEventListener('dragleave', dragLeave);
});

let draggedImage;

function dragStart(e) {
    draggedImage = this; // Store the reference to the dragged image
    setTimeout(() => {
        this.style.display = 'none'; // Hide the dragged image while dragging
    }, 0);
}

function dragOver(e) {
    e.preventDefault(); // Prevent default to allow drop
    this.classList.add('drag-over'); // Add a class to highlight the droppable area
}

function drop(e) {
    e.preventDefault(); // Prevent default behavior
    this.classList.remove('drag-over'); // Remove the highlight class

    // Swap content between dragged image and the target image
    const tempContent = this.innerHTML;
    this.innerHTML = draggedImage.innerHTML;
    draggedImage.innerHTML = tempContent;

    // Swap background images
    const tempBackground = this.style.backgroundImage;
    this.style.backgroundImage = draggedImage.style.backgroundImage;
    draggedImage.style.backgroundImage = tempBackground;

    // Show the dragged image again
    draggedImage.style.display = 'block';
}

function dragLeave() {
    this.classList.remove('drag-over'); // Remove highlight on drag leave
}

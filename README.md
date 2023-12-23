 # Album Virtual: Adolfo y Rosmery

This is a simple HTML, CSS, and JavaScript code that creates a virtual album of images with captions and an audio player. The album is a collection of memories and special moments of a couple named Adolfo and Rosmery.

## Step-by-Step Explanation

### HTML

The HTML code is structured as follows:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Album Virtual</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <h1><span> Album Virtual de <span>Adolfo y Rosmery ♥</span></span></h1>
  <main>
    <div id="gallery">
      <!-- Image figures with captions -->
    </div>
  </main>
  <footer id='info'>Rosmery y Adolfo <a target="_blank" href="https://youtu.be/vOzHbrYHpQ0?si=u1XTAV5MuixvXPC2">30-10-2022</a></footer>
  <script src="./script.js"></script>
</body>
</html>
```

- The `<!DOCTYPE html>` declaration specifies that the document is an HTML5 document.
- The `<html>` element is the root element of the document.
- The `<head>` element contains metadata about the document, such as the character encoding and the title.
- The `<body>` element contains the main content of the document.
- The `<h1>` element creates a heading with the text "Album Virtual de Adolfo y Rosmery ♥".
- The `<main>` element contains the main content of the album, which is a gallery of images.
- The `<div id="gallery">` element is a container for the image figures.
- Each image figure is created using the `<figure>` element.
- The `<img>` element within each figure specifies the source of the image.
- The `<figcaption>` element contains the caption for each image.
- The `<footer>` element contains information about the creators of the album and a link to a YouTube video.
- The `<script>` element references the JavaScript file that controls the album's functionality.

### CSS

The CSS code is used to style the album. It
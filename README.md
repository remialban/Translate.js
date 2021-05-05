# Translate.js
Simple library to translate your website with Javascript

## Import this library :
You can must download this library and import it :
```html
<script src="translate.js"></script>
```

You must call the ```Translate``` function. This function takes two arguements :

- A list of array list. Array list contains two keys : ```lang``` (who is a list of languages codes [(list of the languages codes)](http://www.lingoes.net/en/translator/langcode.htm)) and a ```trans``` key who contains a array list who contains the translations with the key and the value.
- Default code language.

```html
<script>
  Translate([
    {
      lang: ["en", "en-AU", "en-BZ", "en-CA", "en-CB", "en-GB", "en-IE", "en-JM", "en-NZ", "en-PH", "en-TT", "en-US", "en-ZA", "en-ZW"],
      trans: {
        title: "Welcome to my website !",
        subtile: "This website use Translate.js !"
      }
    },
    {
      lang: ["fr-FR", "fr-BE", "fr-CA", "fr-CH", "fr", "fr-LU", "fr-MC"],
      trans: {
        title: "Bienvenue sur mon site !",
        subtile: "Ce site utilise Translate.js !"
      }
    }
  ], "en")
</script>
```

To show the translations to your html elements you must use the ```data-translate``` atribute. The value of this attribute is the key that you gave when you called the ```Translate``` function :
```html
<h1 data-translate="title"></h1>
<p data-translate="subtile"></p>
```

It's finished ! This is the full code used in this example :
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Translate.js</title>
</head>
<body>
    <h1 data-translate="title"></h1>
    <p data-translate="subtile"></p>

    <script src="translate.js"></script>
    <script>
        Translate([
          {
            lang: ["en", "en-AU", "en-BZ", "en-CA", "en-CB", "en-GB", "en-IE", "en-JM", "en-NZ", "en-PH", "en-TT", "en-US", "en-ZA", "en-ZW"],
            trans: {
              title: "Welcome to my website !",
              subtile: "This website use Translate.js !"
            }
          },
          {
            lang: ["fr-FR", "fr-BE", "fr-CA", "fr-CH", "fr", "fr-LU", "fr-MC"],
            trans: {
              title: "Bienvenue sur mon site !",
              subtile: "Ce site utilise Translate.js !"
            }
          }
        ], "en")
      </script>
</body>
</html>
```

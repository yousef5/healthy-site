# Testing Static Build

## Option 1: Using npx serve (Recommended)
```bash
npx serve out -p 3000
```

This will serve the static site on http://localhost:3000

The `serve` package will automatically:
- Serve index.html for directories
- Handle clean URLs
- Work with the .htaccess redirects when deployed

## Option 2: Using the npm script
```bash
bun run serve
```

## Testing URLs:
- http://localhost:3000/ → redirects to /en/
- http://localhost:3000/en → serves /en/index.html
- http://localhost:3000/en/ → serves /en/index.html
- http://localhost:3000/ar → serves /ar/index.html
- http://localhost:3000/ar/ → serves /ar/index.html
- http://localhost:3000/en/prices/omepure10ml/ → works
- http://localhost:3000/en/prices/Omepure10ml/ → redirects to lowercase (in production with Apache)

## Note:
The `serve` package handles static file serving correctly. When you deploy to production with Apache, the `.htaccess` file will handle all the redirects.

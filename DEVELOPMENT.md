# Development Guide

## Blog Development

The blog is built with Jekyll and served as static files by the Angular app.

### Quick Start

1. **First time setup:**
   ```bash
   npm run blog:setup
   ```
   This installs Ruby dependencies and sets up the Jekyll environment.

2. **Build the blog:**
   ```bash
   npm run blog:build
   ```
   Builds the blog to `src/blog/_site` which your Angular app can serve.

3. **Clean blog build:**
   ```bash
   npm run blog:clean
   ```

### Requirements

- **Ruby 3.2.3** (managed automatically if you have rbenv)
- **Bundler** (installed automatically by the setup script)

### Ruby Version Management

The setup script will use `rbenv` if available to automatically manage the Ruby version. If you don't have rbenv:

```bash
# macOS
brew install rbenv

# Then restart your terminal and run:
npm run blog:setup
```

### Development Workflow

1. Make changes to blog content in `src/blog/`
2. Run `npm run blog:build` to build static files
3. Your Angular app will serve the updated blog content

### Manual Script Usage

You can also use the script directly:

```bash
./scripts/build-blog.sh setup   # Setup environment
./scripts/build-blog.sh build   # Build blog
./scripts/build-blog.sh clean   # Clean artifacts
./scripts/build-blog.sh help    # Show help
```

The same script is used in both local development and CI/CD, ensuring consistency. 
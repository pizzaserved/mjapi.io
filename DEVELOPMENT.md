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

**For Angular development:**
```bash
npm run start                   # Build blog + start Angular dev server
```
- Blog available at `/blog/gateway-to-a-midjourney-api/`
- Angular app for main development

**For testing like production (replicates GitHub Pages):**
```bash
npm run preview                 # Build everything + serve static files
```
- Blog available at `/blog/` AND `/gateway-to-a-midjourney-api/` (short URLs)
- Exact same behavior as mjapi.io

### Build Scripts

```bash
npm run blog:setup              # First-time setup
npm run blog:build              # Build blog only  
npm run blog:clean              # Clean blog artifacts
npm run build:full              # Complete build (same as CI)
npm run preview                 # Build + serve like GitHub Pages
```

### Manual Script Usage

You can also use the scripts directly:

```bash
./scripts/build-blog.sh setup   # Setup environment
./scripts/build-blog.sh build   # Build blog
./scripts/build-blog.sh clean   # Clean artifacts
./scripts/build-blog.sh help    # Show help
```

The same scripts are used in both local development and CI/CD, ensuring consistency. 
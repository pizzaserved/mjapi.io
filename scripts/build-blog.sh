#!/bin/bash

# Blog build script for both local development and CI
# Usage: ./scripts/build-blog.sh [setup|build|clean]

set -e  # Exit on error

# Configuration
BLOG_DIR="src/blog"
RUBY_VERSION="3.2.3"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Check if running in CI
is_ci() {
    [[ "${CI:-}" == "true" || -n "${GITHUB_ACTIONS:-}" ]]
}

# Setup Ruby environment for local development
setup_ruby_local() {
    if command -v rbenv &> /dev/null; then
        log_info "Using rbenv for Ruby version management"
        cd "$PROJECT_ROOT/$BLOG_DIR"
        
        if ! rbenv versions | grep -q "$RUBY_VERSION"; then
            log_info "Installing Ruby $RUBY_VERSION via rbenv..."
            rbenv install "$RUBY_VERSION"
        fi
        
        rbenv local "$RUBY_VERSION"
        cd "$PROJECT_ROOT"
    else
        log_warn "rbenv not found. Install rbenv for automatic Ruby version management"
        log_info "Manual Ruby setup required. Expected version: $RUBY_VERSION"
    fi
}

# Install Jekyll dependencies
setup_dependencies() {
    log_info "Installing Jekyll dependencies..."
    
    cd "$PROJECT_ROOT/$BLOG_DIR"
    
    if ! command -v bundle &> /dev/null; then
        log_info "Installing bundler..."
        gem install bundler
    fi
    
    if is_ci; then
        bundle install --jobs 4 --retry 3
    else
        bundle install
    fi
    
    cd "$PROJECT_ROOT"
}

# Build the blog
build_blog() {
    log_info "Building Jekyll blog..."
    
    cd "$PROJECT_ROOT/$BLOG_DIR"
    JEKYLL_ENV=production bundle exec jekyll build
    cd "$PROJECT_ROOT"
    
    log_info "Blog built successfully → $BLOG_DIR/_site"
}

# Clean build artifacts
clean_blog() {
    log_info "Cleaning Jekyll build artifacts..."
    
    cd "$PROJECT_ROOT/$BLOG_DIR"
    if command -v bundle &> /dev/null; then
        bundle exec jekyll clean
    else
        rm -rf _site
    fi
    cd "$PROJECT_ROOT"
    
    log_info "Blog cleaned"
}

# Setup everything
setup_all() {
    log_info "Setting up Jekyll blog environment..."
    
    if is_ci; then
        log_info "CI environment detected"
    else
        setup_ruby_local
    fi
    
    setup_dependencies
    log_info "Blog setup completed!"
}

# Main function
main() {
    local command="${1:-build}"
    
    case "$command" in
        setup)
            setup_all
            ;;
        build)
            build_blog
            ;;
        clean)
            clean_blog
            ;;
        help|--help|-h)
            echo "Jekyll blog build script"
            echo ""
            echo "Usage: $0 [command]"
            echo ""
            echo "Commands:"
            echo "  setup    Setup Ruby environment and install dependencies"
            echo "  build    Build the blog (default)"
            echo "  clean    Clean build artifacts"
            echo "  help     Show this help"
            echo ""
            echo "The built blog will be in $BLOG_DIR/_site for your Angular app to serve"
            ;;
        *)
            log_error "Unknown command: $command"
            echo "Run '$0 help' for usage"
            exit 1
            ;;
    esac
}

# Validate environment
if [[ ! -d "$PROJECT_ROOT/$BLOG_DIR" ]]; then
    log_error "Blog directory not found: $PROJECT_ROOT/$BLOG_DIR"
    exit 1
fi

main "$@" 
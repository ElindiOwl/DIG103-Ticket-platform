# RRF-SSR-Template Usage Guide

This repository contains a template for React Router with Server-Side Rendering. Follow the instructions below to use
these files in your project.

## Quick Start

To add these files to your current directory, run:

```bash
git clone --depth 1 https://github.com/ElindiOwl/RRF-SSR-Template.git . && rm -rf .git
```

This command:

- Clones the repository into your current directory (note the `.` at the end of the clone command)
- Creates a shallow clone with only the most recent commit (--depth 1)
- Removes the .git directory so you can initialize your own git repository

## Alternative: Clone to a Subdirectory

If you prefer to clone into a subdirectory, use:

```bash
mkdir -p <directory-name> && git clone --depth 1 https://github.com/ElindiOwl/RRF-SSR-Template.git <directory-name> && rm -rf <directory-name>/.git
```

Replace `<directory-name>` with your preferred directory name.

## Next Steps

After cloning:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. For production build:
   ```bash
   npm run build
   ```

## Development Commands

### Basic Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

### Dependency Management & Security Commands

#### Minor Updates (Safe Updates)
```bash
npm run update-minor
```
This command will:
1. Update all packages within their current major versions (safe updates)
2. Fix any security vulnerabilities automatically
3. Run type checking to ensure everything still works
   Use this regularly - it's safe and won't break your code

#### Major Updates (Breaking Changes Possible)
```bash
npm run update-major
```
This command will:
1. Update ALL packages to their latest versions (including major version bumps)
2. Install the updated packages
3. Fix any security vulnerabilities
4. Run type checking
   Use this carefully - test thoroughly after running

#### Check for Outdated Packages
```bash
npm outdated
```

This command shows which packages have newer versions available within their current major versions.

For a more comprehensive view including major version updates:

```bash
npx npm-check-updates
```

### Manual Update Process

If you want more control over updates:

1. Check what's outdated: `npm outdated`
2. Update specific packages: `npm install package-name@latest`
3. Update minor versions safely: `npm run update-minor`
4. Verify everything works: `npm run typecheck`

### Alternative: Manual Major Updates

If you want to see major updates before applying them:
```bash
# See what major updates are available
npx npm-check-updates

# Update to latest major versions (same as update-major script)
npx npm-check-updates -u && npm install
```

## Project Structure

This project follows Feature-Sliced Design (FSD) architecture with React Router 7 framework.

## Notes

- Always run `npm run typecheck` after major updates
- The `--force` flag in security updates helps resolve dependency conflicts
- React Router 7 specific packages are updated together to maintain compatibility


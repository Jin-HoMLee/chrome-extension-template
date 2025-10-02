# Chrome Extension Template

A comprehensive template for building modern Chrome browser extensions with TypeScript, modern build tools, and best practices.

![Extension Preview](https://img.shields.io/badge/Chrome%20Extension-Template-blue?style=for-the-badge&logo=googlechrome)
![Version](https://img.shields.io/badge/Version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

## 🚀 Features

### Core Extension Components
- **Manifest V3** - Latest Chrome extension manifest format
- **Background Service Worker** - Handles extension lifecycle and messaging
- **Content Scripts** - Interact with web pages and DOM
- **Popup Interface** - Beautiful, responsive popup with modern UI
- **Options Page** - Comprehensive settings and configuration
- **Context Menus** - Right-click functionality integration

### Development Experience
- **TypeScript** - Full TypeScript support with proper typing
- **Modern Build Tools** - Webpack configuration for development and production
- **Hot Reload** - Automatic reloading during development
- **Code Quality** - ESLint and Prettier for consistent code style
- **Testing** - Jest setup with Chrome API mocking
- **Source Maps** - Debug support with inline source maps

### Best Practices Implementation
- **Security** - Proper Content Security Policy and permissions
- **Performance** - Optimized builds and lazy loading
- **Accessibility** - ARIA labels and keyboard navigation
- **Error Handling** - Comprehensive error boundaries and logging
- **Storage Management** - Unified storage API with error handling
- **Message Passing** - Type-safe communication between components
- **Code Quality** - Magic number elimination and constant centralization
- **Modern Async Patterns** - Promise-based utilities with async/await
- **DOM Monitoring** - Efficient mutation observer for dynamic content
- **Modular Architecture** - Focused utility modules with single responsibilities

## 📦 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Chrome browser for testing

### Installation

1. **Clone or download this template**
   ```bash
   git clone https://github.com/Jin-HoMLee/chrome-extension-template.git
   cd chrome-extension-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

4. **Load extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select the `dist` folder
   - The extension icon should appear in the toolbar

### Development Workflow

```bash
# Development with hot reload
npm run dev

# Production build
npm run build

# Lint code
npm run lint
npm run lint:fix

# Format code
npm run format
npm run format:check

# Run tests
npm run test
npm run test:watch

# Create distribution zip
npm run zip
```

## 🏗️ Project Structure

```
chrome-extension-template/
├── src/
│   ├── background/          # Service worker scripts
│   │   └── background.ts    # Main background script
│   ├── content/             # Content scripts
│   │   └── content.ts       # Main content script
│   ├── popup/               # Popup interface
│   │   ├── popup.html       # Popup HTML
│   │   ├── popup.css        # Popup styles
│   │   └── popup.ts         # Popup logic
│   ├── options/             # Options page
│   │   ├── options.html     # Options HTML
│   │   ├── options.css      # Options styles
│   │   └── options.ts       # Options logic
│   ├── config/              # Configuration constants
│   │   └── constants.ts     # Centralized configuration
│   ├── utils/               # Utility functions
│   │   ├── storage.ts       # Storage management
│   │   ├── toast.ts         # Toast notification utilities
│   │   └── dom-observer.ts  # DOM mutation observer
│   ├── types/               # TypeScript definitions
│   │   └── messages.ts      # Message type definitions
│   │── __tests__/           # Test files
│   │   ├── setup.ts         # Test setup
│   │   └── *.test.ts        # Unit tests
│   └── manifest.json       # Extension manifest
│   ├── assets/              # Static assets
│   │   ├── icons/           # Extension icons
│   │   └── images/          # Other images
├── scripts/                 # Build scripts
│   └── zip.js               # Packaging script
├── dist/                    # Built extension (auto-generated)
│   └── manifest.json       # Extension manifest
├── package.json             # Node.js dependencies
├── webpack.config.js        # Build configuration
├── tsconfig.json            # TypeScript configuration
├── jest.config.js           # Test configuration
├── .eslintrc.json           # Linting rules
├── .prettierrc              # Code formatting rules
└── README.md                # This file
```

## 🎯 Key Components

### Background Service Worker
Located in `src/background/background.ts`, handles:
- Extension installation and updates
- Message passing between components
- Context menu creation
- Tab management
- Persistent state management

### Content Scripts
Located in `src/content/content.ts`, provides:
- DOM interaction and manipulation
- Text highlighting functionality
- Page information extraction
- Keyboard shortcuts
- Dynamic content handling with efficient mutation observer
- Performance-optimized DOM change detection

### Popup Interface
Modern, responsive popup (`src/popup/`) featuring:
- Quick action buttons
- Current page information
- Settings toggles
- Usage statistics
- Modern async/await toast notifications
- Clean error handling and user feedback

### Options Page
Comprehensive settings page (`src/options/`) with:
- Tabbed navigation
- Advanced configuration options
- Data import/export
- Custom CSS editor
- Theme selection
- Centralized configuration management
- Dynamic URL generation from constants

### Storage Service
Unified storage API (`src/utils/storage.ts`) providing:
- Type-safe storage operations
- Error handling
- Sync vs local storage
- JSON serialization
- Quota management

### Configuration Management
Centralized constants (`src/config/constants.ts`) featuring:
- URL configuration with single source of truth
- Toast timing constants for consistent UX
- DOM monitoring thresholds
- Time conversion constants
- Type-safe exports with TypeScript

### Toast Notifications
Modern notification system (`src/utils/toast.ts`) with:
- Promise-based async/await lifecycle management
- Configurable timing and animations
- Clean separation from business logic
- Defensive programming with graceful error handling

### DOM Observer
Intelligent content monitoring (`src/utils/dom-observer.ts`) providing:
- Efficient mutation observer for dynamic web apps
- Debounced processing to prevent performance issues
- Selective filtering for significant content changes
- Comprehensive documentation with real-world examples
- Support for React/Vue/Angular single-page applications

## 🏛️ Architecture & Design Patterns

### Modular Design
The template follows modern architectural principles:
- **Single Responsibility Principle**: Each module has one clear purpose
- **Separation of Concerns**: UI, business logic, and utilities are separated
- **DRY Principle**: Shared functionality extracted into reusable utilities
- **Defensive Programming**: Graceful error handling and input validation

### Code Quality Standards
- **Magic Number Elimination**: All hardcoded values moved to constants
- **Consistent APIs**: Standardized patterns across all modules
- **Type Safety**: Comprehensive TypeScript coverage
- **Documentation**: Extensive JSDoc comments with examples

### Performance Optimizations
- **Debounced Operations**: DOM mutation observer uses intelligent debouncing
- **Selective Filtering**: Only process significant content changes
- **Lazy Loading**: Features loaded only when needed
- **Memory Management**: Proper cleanup and resource management

### Modern JavaScript Patterns
- **Async/Await**: Promise-based patterns throughout
- **ES Modules**: Clean import/export structure
- **Const Assertions**: Type-safe configuration objects
- **Optional Chaining**: Safe property access patterns

## 🔧 Configuration

### Permissions
The extension requests these permissions in `src/manifest.json`:
- `storage` - For saving settings and data
- `activeTab` - For interacting with the current tab
- `scripting` - For injecting content scripts
- `host_permissions` - For accessing web pages

### Build Configuration
Webpack configuration (`webpack.config.js`) provides:
- TypeScript compilation
- CSS extraction
- Asset optimization
- Development vs production builds
- Source map generation

### TypeScript Configuration
TypeScript settings (`tsconfig.json`) include:
- Modern ES target (ES2020)
- Strict type checking
- Chrome extension types
- Path mapping for imports

## 🧪 Testing

The template includes a comprehensive testing setup:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test -- --coverage
```

### Test Structure
- **Setup**: Mock Chrome APIs and DOM environment
- **Unit Tests**: Test individual components and utilities
- **Integration Tests**: Test component interactions
- **Mocking**: Comprehensive Chrome API mocking

## 📱 Chrome Web Store Deployment

### Preparation
1. **Build for production**
   ```bash
   npm run build
   ```

2. **Create distribution package**
   ```bash
   npm run zip
   ```
   This creates `extension.zip` ready for upload.

### Store Listing Requirements
- **Icons**: Multiple sizes (16x16, 32x32, 48x48, 128x128)
- **Screenshots**: At least 1280x800 pixels
- **Description**: Clear, concise explanation of functionality
- **Privacy Policy**: Required if using permissions
- **Detailed Description**: Comprehensive feature explanation

### Upload Process
1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. Click "New Item" and upload `extension.zip`
3. Fill in store listing information
4. Submit for review

## 🎨 Customization

### Styling
- Modify CSS files in respective component directories
- Use CSS custom properties for consistent theming
- Dark mode support is included

### Functionality
- Add new message types in `src/types/messages.ts`
- Extend storage service for custom data needs
- Create new content script features
- Add popup actions and settings

### Icons and Assets
- Replace icons in `src/assets/icons/` directory
- Ensure multiple sizes (16, 32, 48, 128 pixels)
- Update `src/manifest.json` icon references

## 🔒 Security Best Practices

### Content Security Policy
The extension implements strict CSP:
- No inline scripts allowed
- Limited external resources
- Secure script sources only

### Permissions
- Minimal necessary permissions requested
- Host permissions only for required domains
- Regular permission auditing

### Data Handling
- Sensitive data encrypted before storage
- User data kept local when possible
- Clear data management options

## 🐛 Troubleshooting

### Common Issues

**Extension doesn't load:**
- Check console for errors in `chrome://extensions/`
- Verify `src/manifest.json` syntax
- Ensure all required files are present

**Build failures:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Verify TypeScript compilation: `npx tsc --noEmit`

**Content script not working:**
- Check if content script is injected: `chrome://extensions/`
- Verify host permissions in manifest
- Check for JavaScript errors in page console
- Monitor DOM observer activity in console logs

**Toast notifications not appearing:**
- Verify `toastContainer` element exists in HTML
- Check console for timing configuration errors
- Ensure proper import of toast utilities

**Configuration issues:**
- All constants are centralized in `src/config/constants.ts`
- Check TypeScript compilation for constant exports
- Verify import paths use correct module structure

### Development Tips
- Use Chrome DevTools for debugging
- Check background script console in `chrome://extensions/`
- Use `chrome.storage.local.get()` in console to inspect storage
- Enable extension debugging in Chrome settings
- Monitor DOM changes with observer console logs
- Use TypeScript compiler to catch configuration errors
- Leverage centralized constants for easy configuration changes
- Test async/await patterns with proper error handling

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Run tests**: `npm run test`
5. **Lint code**: `npm run lint:fix`
6. **Commit changes**: `git commit -m 'Add amazing feature'`
7. **Push to branch**: `git push origin feature/amazing-feature`
8. **Open a Pull Request**

### Code Style
- Follow existing TypeScript/JavaScript patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure all tests pass

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Chrome Extension documentation and best practices
- TypeScript and modern JavaScript ecosystem
- Open source community for tools and libraries

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Use GitHub Discussions for questions

---

**Happy Extension Building! 🚀**
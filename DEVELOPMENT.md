# Development Guide - Personal Portfolio

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Navbar.jsx     # Navigation component
│   ├── Hero.jsx       # Hero section
│   ├── About.jsx      # About section
│   ├── Skills.jsx     # Skills showcase
│   ├── Projects.jsx   # Projects gallery
│   ├── WorkExperience.jsx  # Work history
│   └── Contact.jsx    # Contact form
├── assets/            # Static assets
│   ├── images/        # Image files
│   ├── icons/         # Icon files
│   └── logos/         # Logo files
├── App.jsx            # Main App component
└── index.js          # Entry point
```

## 🛠️ Development Guidelines

### Component Development
1. **Component Structure**
   - Use functional components with hooks
   - Implement proper prop typing
   - Follow single responsibility principle
   - Keep components modular and reusable

2. **Styling**
   - Use Tailwind CSS utility classes
   - Follow mobile-first approach
   - Maintain consistent spacing and typography
   - Use Tailwind's dark mode when applicable

3. **State Management**
   - Use React hooks for local state
   - Implement context if needed for global state
   - Keep state as close as possible to where it's used

### Best Practices

1. **Code Quality**
   - Write clean, readable code
   - Use meaningful variable and function names
   - Add comments for complex logic
   - Follow ESLint rules

2. **Performance**
   - Implement lazy loading for images
   - Use React.memo() for expensive components
   - Optimize bundle size
   - Implement proper loading states

3. **Accessibility**
   - Use semantic HTML
   - Add proper ARIA labels
   - Ensure keyboard navigation
   - Maintain proper color contrast

## 🔧 Component-Specific Guidelines

### Navbar
- Implement smooth scrolling
- Add active state indicators
- Ensure mobile responsiveness
- Handle scroll events efficiently

### Hero Section
- Optimize hero image loading
- Implement responsive layout
- Add animation effects
- Ensure proper text contrast

### Skills Section
- Use SVG icons when possible
- Implement hover effects
- Ensure proper spacing
- Add loading animations

### Projects Section
- Implement efficient filtering
- Optimize image loading
- Add project preview functionality
- Implement proper error handling

### Work Experience
- Create responsive timeline
- Add hover effects
- Implement smooth animations
- Ensure proper date formatting

### Contact Form
- Implement form validation
- Add loading states
- Handle API errors gracefully
- Implement proper success/error feedback

## 📦 Dependencies

### Core Dependencies
- React
- React DOM
- React Router DOM
- Tailwind CSS


### Optional Dependencies
- EmailJS (for contact form)
- React Icons



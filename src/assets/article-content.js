const articles = [
  {
    name: "understanding-react-props-and-styling",
    title: "Understanding React Props and Styling",
    category: "React Basics",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Props, short for properties, allow you to pass data between components. They make React components reusable because the same component can display different content depending on the values it receives.",
      "Styling in React can be handled in several ways, including plain CSS, CSS modules, utility classes, and inline styles. The best choice depends on the size of the project and how consistent the design needs to be.",
      "When props and styling work together, a component can stay flexible while still following a clear visual system. That is the foundation of most polished React interfaces."
    ]
  },
  {
    name: "react-functional-components",
    title: "React Functional Components",
    category: "Components",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Functional components are simple JavaScript functions that return JSX. They are the most common way to build React interfaces because they are readable, lightweight, and easy to compose.",
      "A functional component can accept props, render UI, and use hooks to manage state or side effects. This makes it powerful enough for both small interface pieces and full application pages.",
      "Keeping functional components focused on one job makes a React project easier to test, reuse, and maintain."
    ]
  },
  {
    name: "react-component-lifecycle",
    title: "React Component Lifecycle",
    category: "State and Effects",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Class components have lifecycle methods for mounting, updating, and unmounting. These stages describe when a component appears, changes, and leaves the screen.",
      "In modern React, hooks like useEffect cover many lifecycle needs in functional components. They let you run code after rendering, respond to changing data, and clean up when a component is removed.",
      "Understanding the lifecycle helps prevent bugs such as repeated fetches, stale data, and memory leaks."
    ]
  },
  {
    name: "react-router-basics",
    title: "React Router Basics",
    category: "Routing",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
    content: [
      "React Router allows navigation between pages without a full page reload. It keeps a React app feeling fast while still giving each view its own URL.",
      "Routes connect paths to components. Links and navigation helpers let users move between pages while React Router handles which component should be shown.",
      "A good routing setup makes an app easier to organize because each page has a clear place in the application structure."
    ]
  },
  {
    name: "managing-state-in-react",
    title: "Managing State in React",
    category: "State",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    content: [
      "State allows components to keep track of dynamic data, such as form input, selected tabs, counters, or fetched results. When state changes, React updates the screen to match the new value.",
      "The useState hook is the simplest way to add state to a functional component. For larger flows, state can be lifted to a parent component or managed through a shared store.",
      "Choosing where state should live is one of the most important parts of building clean React applications."
    ]
  }
];

export default articles;

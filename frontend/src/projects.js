const projects=[
  { _id:'1',
    name:'Learning React',
    imageUrl:['/images/LearnReact_img1.jpg', '/images/LearnReact_img2.jpg','/images/LearnReact_img3.jpg'],
    imageCover:'/images/Cover1.png',
    tags: ['React','HTML', 'CSS', 'JavaScript',],
    description: 'React-based project designed to help beginners learn and apply fundamental concepts of React.',
    details:['Explore practical examples like a simple counter, toggle visibility, form handling, to-do lists, fetching API data, CRUD operations, and more to understand core React concepts like state management, conditional rendering, and dynamic updates.', 'Interactive multiple-choice quizzes are included to test and reinforce your understanding of the React concepts covered in the app.', 'Each example includes code snippets to highlight best practices and demonstrate how React concepts are applied in real-world scenarios.'],
    projectGoal:'To provide an interactive, beginner-friendly platform for learning core React concepts through practical examples and quizzes. This app is aimed at empowering learners with foundational skills needed to build dynamic web applications using React.',
    projectURL: 'https://learningreactproject.netlify.app'
  },
  { _id:'2',
  name: 'My Favorite Recipes - Cookbook App',
  imageUrl: ['/images/FavoriteFoods_img1.jpg', '/images/FavoriteFoods_img2.jpg', '/images/FavoriteFoods_img3.jpg'],
  imageCover: '/images/Cover2.png',
  tags: ['React', 'MongoDB', 'JavaScript', 'Node', 'Express', 'HTML', 'CSS'],
  description: 'The Cookbook app is a full-stack project designed for users to explore and save their favorite recipes, developed to strengthen my full-stack development skills.',
  details: [
    'User-friendly interface to browse, search, and filter recipes based on tags or ingredients.',
    'Authentication system implemented for secure user registration and login.',
    'Personalized favorite page where users can save and manage their preferred recipes.',
    'Backend powered by Node.js and Express for handling API requests and secure data storage in MongoDB.',
    'Interactive front-end built using React to manage components, state, and event handling.',
    'Responsive design using CSS and HTML to ensure usability across various devices.'
  ],
  projectGoal: 'The goal of the Cookbook app was to create a secure and user-friendly application, focusing on implementing authentication, user-specific features like a favorites page, and a responsive interface. This project allowed me to practice integrating front-end and back-end technologies, ensuring a seamless and interactive user experience.',
  projectURL: 'https://learningreactproject.netlify.app'
}

]
export default projects;
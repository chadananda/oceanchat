## Project Summary:

The goal of this project is to create a chat-based research assistant for the website chat.oceanlibrary.com. The website will host thousands of books in multiple languages, and users will be able to ask research questions about the books. The chatbot, powered by GPT-4 and Langchain, will answer the questions, provide source citations, and perform additional research and actions. The chatbot will also offer language translation capabilities, allowing users to chat in any language GPT-4 can understand.

The website will offer multiple knowledge repositories, including "Core Library," "Baha'i Library," "Baha'i History," and "Baha'i Translation." Users will be able to view titles and descriptions of the contents of each repository. The website will have three roles: Admin, Librarian, and User. Users will engage in conversations, Librarians will manage content, and Admins will manage users.

### Key Features:

- Google Authentication for user access
- Chat-GPT-like interface with a side panel for stored conversations
- Ability to ask research questions and receive answers with source citations
- Language translation for sources and user interactions (powered by GPT-4)
- Multiple knowledge repositories with titles and descriptions
- Document ingestion interface for adding new documents
- User roles: Admin, Librarian, and User, with different permissions
- Responsive UI supporting both desktop and mobile devices
- LTR/RTL support based on user language and browser locale

### Technical Stack:

- Frontend: SvelteKit (static) with the Skeleton UI framework (with TailwindCSS)
- Backend: Firebase (including Firebase Cloud Functions)
- Hosting: Frontend on GitHub Pages (static), Backend on Firebase
- Authentication: Google Authentication (One Tap sign-in experience)
- Language Model: GPT-4 for generating responses and translation
- Research and Actions: Langchain
- Semantic Search: Pinecone (for searching and retrieving information from documents)

### Work Done So Far:

- Discussed the high-level architecture and components of the system
- Explored options for mixing Python and JavaScript in the backend (Firebase Functions)
- Outlined the functional components and file stubs for both the backend and frontend
- Discussed the use of GPT-4, Langchain, Pinecone, and Google Authentication

### Next Steps:

1. Implement the frontend UI components, including the chat interface, document ingestion interface, and repository browsing. (Prompt: "How do I implement a chat interface in SvelteKit?")
2. Implement user authentication and role-based access control using Google Authentication and Firebase. (Prompt: "How do I implement role-based access control with Firebase and Google Authentication?")
3. Implement the backend logic for processing chat queries, searching documents, generating responses, and performing actions using GPT-4, Langchain, and Pinecone. (Prompt: "How do I integrate GPT-4 and Langchain into my Firebase Cloud Functions?")
4. Implement language translation and LTR/RTL support in the frontend based on user interactions and browser locale. (Prompt: "How do I implement language translation and LTR/RTL support in SvelteKit?")
5. Add JSDoc headers and descriptions to JavaScript functions for AI consumption. (Prompt: "What is the best practice for writing JSDoc headers for AI consumption?")
6. Implement local tests for Firebase Cloud Functions. (Prompt: "How do I write local tests for Firebase Cloud Functions?")
7. Test and deploy the application. (Prompt: "What are the steps to deploy a SvelteKit application to GitHub Pages and Firebase?")

Note: This summary serves as a high-level overview of the project and the work done so far. Additional details and implementation decisions may be discussed and refined as the project progresses.
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

### Code style guide

- We follow the new SvelteKit convention of named folders for every page, +layout.svelte files for layout logic (using Skeleton where possible), +page.svelte for code logic and components for most styling
- When styling, try to use TailwindCSS when possible. Only use custom classes when it makes sense because of multiple repeating elements.
- Document all CSS carefully and all Javacript with comments intended to be ready by the AI
- Use JSDoc headers for all functions with copious intent explanations



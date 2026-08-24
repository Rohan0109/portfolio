export const initialData = {
  aiProjects: [
  {
    id: 'comcast-rag',
    type: 'AI / PRODUCT',
    title: 'Comcast customer support chatbot',
    summary: 'A multilingual support layer that turns 350+ knowledge-base articles into useful, empathetic answers.',
    detail: 'I scraped and structured web and PDF sources, generated embeddings in Pinecone, and built a conversational RAG workflow with LangChain memory. The Streamlit UI keeps session history close at hand.',
    stack: ['Python', 'LangChain', 'Pinecone', 'RAG', 'Streamlit'],
    accent: 'lime',
    link: 'https://comcast-qwerty.streamlit.app/',
  },
  ],
  projects: [
    {
      id: 'enterprise-grids',
      type: 'ENTERPRISE UI',
      title: 'Large-scale data interfaces',
      summary: 'Production React dashboards designed for teams who live inside complex tables and changing datasets.',
      detail: 'At Applied Materials, I led a migration from Kendo Grid to AG Grid and owned dynamic columns, custom renderers, filtering, sorting, and row selection across data-intensive applications.',
      stack: ['React', 'TypeScript', 'AG Grid', 'Figma'],
      accent: 'coral',
    },
    {
      id: 'visual-systems',
      type: 'MOBILE / 3D',
      title: 'Interfaces beyond the browser',
      summary: 'Mobile products, 3D model viewers, and visual systems where interaction has to carry the story.',
      detail: 'Earlier work across Angular, Flutter, Android, and 3D illustration gave me a broader lens on product interfaces and a practical instinct for motion, spatial thinking, and production constraints.',
      stack: ['Flutter', 'Angular', 'Dart', '3D', 'Android'],
      accent: 'blue',
    },
  ],
  sideProjects: [
  ],
  skills: [
    ['Frontend', 'React, TypeScript, JavaScript, HTML, CSS, AG Grid'],
    ['Performance', 'Memoization, code splitting, lazy loading, efficient rendering'],
    ['AI systems', 'NLP, RAG, LangChain, Pinecone, model integration'],
    ['Foundations', 'Python, Dart, TensorFlow, PyTorch, Scikit-learn'],
  ],
  experience: [
    ['2025 — now', 'Applied Materials', 'Frontend Engineer (Contractor) · via Data ERP'],
    ['2024 — 2025', 'Data ERP', 'Junior Developer · AI & Frontend'],
    ['2022 — 2023', 'apiplatform.io', 'Software Engineer · Frontend & Mobile'],
    ['2022', 'Deep Vision', 'Software Engineer · Mobile & 3D Illustrator'],
    ['2021', 'Kaboodle Innovations', '3D Illustrator'],
  ],
}

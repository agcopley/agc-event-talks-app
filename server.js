const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const schedule = [
  {
    id: 1,
    type: 'talk',
    time: '10:00 - 11:00',
    title: 'Architecting for the Edge',
    speakers: ['Sarah Chen'],
    categories: ['Architecture', 'Cloud'],
    description: 'Explore the shifting landscape of edge computing and how to design resilient, low-latency applications for the modern web.'
  },
  {
    id: 2,
    type: 'break',
    time: '11:00 - 11:10',
    title: 'Transition',
    description: 'Short break to switch rooms or grab coffee.'
  },
  {
    id: 3,
    type: 'talk',
    time: '11:10 - 12:10',
    title: 'Modern CSS Magic',
    speakers: ['Alex Rivers'],
    categories: ['Frontend', 'UI/UX'],
    description: 'Deep dive into Container Queries, CSS Grid, and the latest web platform features that are changing how we build interfaces.'
  },
  {
    id: 4,
    type: 'break',
    time: '12:10 - 12:20',
    title: 'Transition',
    description: 'Short break to switch rooms or grab coffee.'
  },
  {
    id: 5,
    type: 'talk',
    time: '12:20 - 13:20',
    title: 'Rust for Node.js Devs',
    speakers: ['Marcus Volt'],
    categories: ['Backend', 'Rust'],
    description: 'Learn how to leverage Rust to speed up your Node.js applications using N-API and modern tooling.'
  },
  {
    id: 6,
    type: 'break',
    time: '13:20 - 14:20',
    title: 'Lunch Break',
    description: 'Enjoy a catered lunch and network with other attendees.'
  },
  {
    id: 7,
    type: 'talk',
    time: '14:20 - 15:20',
    title: 'Securing Your Supply Chain',
    speakers: ['Elena Kostic'],
    categories: ['Security', 'DevOps'],
    description: 'Practical strategies for protecting your software delivery pipeline against modern security threats.'
  },
  {
    id: 8,
    type: 'break',
    time: '15:20 - 15:30',
    title: 'Transition',
    description: 'Short break to switch rooms or grab coffee.'
  },
  {
    id: 9,
    type: 'talk',
    time: '15:30 - 16:30',
    title: 'The State of WebAssembly',
    speakers: ['Dr. Julian Thorne'],
    categories: ['WebAssembly', 'Performance'],
    description: 'Wasm is no longer just for the browser. Discover how it is being used in the serverless space and beyond.'
  },
  {
    id: 10,
    type: 'break',
    time: '16:30 - 16:40',
    title: 'Transition',
    description: 'Short break to switch rooms or grab coffee.'
  },
  {
    id: 11,
    type: 'talk',
    time: '16:40 - 17:40',
    title: 'AI-Driven Development',
    speakers: ['Amina Noor'],
    categories: ['AI', 'Future-Tech'],
    description: 'How LLMs and AI tools are reshaping the software engineering lifecycle and what it means for the future of coding.'
  }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/schedule', (req, res) => {
  res.json(schedule);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

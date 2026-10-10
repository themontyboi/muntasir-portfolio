export const deskAITutorCaseStudy = {
  motivation:
    "I wanted to explore a practical study companion whose conversations, learning material and inference stay on a Windows PC. Local models offered experimental control, but a useful application also needed clear session boundaries, reliable learner controls and honest handling of missing source material.",
  architecture: [
    { title: "Ollama / Qwen", detail: "Local language generation with Qwen3 4B" },
    { title: "faster-whisper", detail: "Local speech recognition" },
    { title: "Kokoro / eSpeak NG", detail: "Local speech synthesis and phonemization" },
    { title: "Document preparation / retrieval", detail: "Extraction, validation, local embeddings and bounded evidence" },
    { title: "Persistent study-session storage", detail: "Locally saved study state and history" },
  ],
  capabilities: [
    { title: "Typed and spoken tutoring", detail: "General Chat combines typed questions, microphone input and spoken replies using local models." },
    { title: "Learner-controlled conversation", detail: "Pause, hold, continue, stop and barge-in controls govern cancellable, sequential speech playback." },
    { title: "Durable study sessions", detail: "Saved sessions retain study state and immutable conversation history. General Chat history remains temporary." },
    { title: "Material preparation", detail: "Imports PDF, PowerPoint, EPUB, DOCX, TXT and Markdown with extraction checks and preparation warnings." },
    { title: "Bounded document retrieval", detail: "Prepared sources provide local retrieval context; unavailable or unprepared material is explicitly distinguished." },
    { title: "Operational visibility", detail: "The Alpha records transcription, generation, first-audio and cancellation timing to support investigation." },
  ],
  challenges: [
    { title: "Asynchronous ownership", detail: "Microphone capture, transcription, language generation, speech synthesis and storage finish at different times. Operation ownership and stale-request protection keep them from overwriting accepted history." },
    { title: "Canonical text and cancellable audio", detail: "Accepted tutor text stays the source of truth. Speech is a cancellable projection of it, so a stopped or interrupted operation cannot keep playing stale audio." },
    { title: "Source readiness", detail: "Importing a file does not guarantee usable tutoring evidence. Preparation checks and bounded retrieval keep missing or failed sources visible." },
    { title: "Local hardware trade-offs", detail: "CPU speech recognition and local model latency vary. Instrumentation makes those delays observable while physical microphone and speaker reliability remains an active concern." },
  ],
  validation: [
    "237 backend tests reported, with one environment-dependent test skipped.",
    "Python compilation and API checks.",
    "TypeScript validation and Next.js production builds.",
    "Local browser journeys covering chat, microphone capture, transcription, speech playback, imports, session controls and retrieval.",
    "Integrity checks confirming that existing owner-created study sessions were preserved during testing.",
  ],
  limitations: [
    "Experimental Alpha for controlled personal testing; not production-ready.",
    "Local speech recognition can be slow, with occasional transcription errors.",
    "Occasional text-to-speech gaps and model repetition remain.",
    "Physical microphone and speaker behaviour needs further validation.",
    "Real-world tutoring effectiveness and durable learner mastery are not yet validated.",
    "Not a production multi-user tutoring platform.",
  ],
  futureWork: [
    "Measure physical-audio reliability across microphone and speaker setups.",
    "Reduce local speech-recognition latency and improve response consistency.",
    "Refine study flows, source preparation and session interaction.",
    "Evaluate tutoring quality with real learners before making learning-outcome claims.",
  ],
};

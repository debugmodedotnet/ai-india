import { IAgenda } from "../models/agenda";

export const agenda: IAgenda[] = [
  {
    title: 'Registration | Breakfast | Goodies Collection',
    speakerName: '',
    speakerPosition: '',
    speakerImage: 'assets/images/agenda/registration.png',
    startTime: '9:00 AM',
    endTime: '10:00 AM',
    description: '',
  },
  {
    title: 'Speaker Felicitation',
    speakerName: '',
    speakerPosition: '',
    speakerImage: 'assets/images/agenda/award.png',
    startTime: '10:00 AM',
    endTime: '10:30 AM',
    description: '',
  },
  {
    title: 'Building Reliable LLM Evals That Actually Work in Production',
    speakerName: 'Priyanka Kore',
    speakerPosition: 'Lead @Adesso India',
    speakerImage: 'assets/images/speakers/priyanka.jpeg',
    startTime: '10:30 AM',
    endTime: '11:00 PM',
    description:
      'Benchmarks have become unreliable. Major AI labs are gaming evaluation metrics. Data contamination inflates scores. And there is a documented 25–30% accuracy drop between benchmark performance and production reality. Meanwhile, LLM-as-judge evaluators hallucinate scores, and most teams are flying blind without knowing if their system is actually improving. <br/><br/> This talk reveals why traditional benchmarks fail and introduces a production-aligned evaluation framework that actually works—Eval-Driven Development (EDD). You will learn how to: <br/><br/> Source golden datasets from production logs (not synthetic data), avoiding the eval-production gap that catches everyone off-guard. <br/><br/> Mix three grading <b>strategies—code-based (fast) </b>, <b>model-based (flexible) </b>, <b>human (calibration) </b>—to build reliable evaluations at scale <br/><br/> Close the feedback loop: Production failures → curated datasets → offline evals → CI/CD gates → monitored rollout → production insights → dataset refresh <br/><br/> Distinguish capability vs. regression evals, each serving different purposes (drive improvement vs. prevent backsliding) <br/><br/> Implement continuous evaluation infrastructure with automated scoring, real-time alerts, and regression detection that actually catches problems before users do',
  },
  {
    title: 'WebMCP: Making the Web AI-Agent Ready',
    speakerName: 'Markus Ingvarsson',
    speakerPosition: 'Founding Software Engineer @Strawberry Browser',
    speakerImage: 'assets/images/speakers/markus-ingvarsson.jpeg',
    startTime: '11:00 PM',
    endTime: '11.30 PM',
    description: 'The Model Context Protocol (MCP) has become the universal standard for connecting AI to external tools, backed by Anthropic, OpenAI, Google, and Microsoft. WebMCP, an emerging W3C standard, lets any web application expose AI-callable tools with just a few lines of JavaScript, all running client-side with the usere xisting session. <br/> <br/> In this talk, you will learn what MCP is, what WebMCP brings to the browser, and see live demos in action. <br/><br/> Whether you are building new AI-powered apps or retrofitting existing ones, this is foundational knowledge for 2026.',
  },
  {
    title: 'From Text to Vector: How High Dimensional Data gets Stored, Searched & Retrieved',
    speakerName: 'Jeevan D C',
    speakerPosition: 'Engineering Manager @Entain India',
    speakerImage: 'assets/images/speakers/jeevan.jpeg',
    startTime: '11:30 AM',
    endTime: '12:00 AM',
    description: 'Every AI application that "understands" language relies on embeddings — but what actually happens after you call an embedding API? This talk goes behind the scenes: how text becomes high-dimensional vectors, how those vectors are physically stored in databases, and how semantic search finds the closest match using distance functions like cosine and euclidean. We\'ll start with a brute-force scan across 50,000 vectors, see why it breaks at scale, then explore how approximate nearest neighbor indexes — IVFFlat (k-means clustering) and HNSW (hierarchical graph navigation) — deliver 50–150x speedups. No fancy vector databases — just plain SQL demos you can run on your laptop. You\'ll leave with a clear mental model of the full pipeline — from raw text to ranked results — and practical tips on when to use which index as you scale.',
  },
  {
    title: 'AI / ML Using Microsoft Ecosystem',
    speakerName: 'ShivPrasad Koirala',
    speakerPosition: 'Founder @Questpond',
    speakerImage: 'assets/images/speakers/shivprasad.jpeg',
    startTime: '12:00 AM',
    endTime: '12:30 AM',
    description:
      ' I have been a Microsoft developer for many years. With AI and Machine Learning growing in a big way, I would like to ensure most of my solutions are built using native C#, .NET, and the Microsoft ecosystem rather than moving completely to other stacks. <br/> <br/> In this session, I will walk through the different components of AI development and how they can be implemented using Microsoft technologies. <br/><br/> Topics we will cover: <br/><br/> <ul><li>Regression and NLP using ML NET</li><li>Using ONNX for connecting to external AI models</li><li>Semantic Kernel, Microsoft Extensions Hosting, and MCP NuGet packages</li><li>Using IEmbedding and IChatClient for loose coupling and extensible AI architecture</li><li>Azure AI Foundry (AutoML, AI Designer, and Notebooks)</li><li>Azure Content Safety for implementing AI Guardrails</li></ul> <br/> This session is mainly focused on how a traditional .NET developer can enter the AI/ML world using the Microsoft ecosystem.',
  },
  {
    title: 'Build a Scalable AI-Driven Chat Application Using Azure AI Services and React',
    speakerName: 'Shailendra Chauhan',
    speakerPosition: 'Founder @ScholarHat',
    speakerImage: 'assets/images/speakers/shailendra-chauhan.jpeg',
    startTime: '12:30 PM',
    endTime: '1:00 PM',
    description: 'Design and implement a production-ready, AI-powered chat application leveraging Azure OpenAI Service for advanced natural language understanding and a modern React frontend for seamless user experience. This intelligent chatbot will: <br/><br/> <ul><li>Deliver business-specific Q&A using Retrieval-Augmented Generation (RAG)</li><li>Handle public knowledge queries with GPT-powered reasoning</li> <li>Provide real-time customer support assistance</li><li>Integrate secure backend APIs for enterprise workflows</li></ul> <br/><br/>The session will walk through architecture, implementation patterns, guardrails, caching strategies, and deployment considerations to build a robust AI solution ready for real-world enterprise environments.',
  },
  {
    title: 'Lunch Break',
    speakerName: '',
    speakerPosition: '',
    speakerImage: 'assets/images/agenda/lunch-break.png',
    startTime: '1.00 PM',
    endTime: '2:00 PM',
    description: '',
  },
  {
    title: 'Demystifying the AI Jungle: Connecting the Dots',
    speakerName: 'Rainer Hahnekamp',
    speakerPosition: 'Consultant @Soverius AI',
    speakerImage: 'assets/images/speakers/rainer-hahnekamp.jpg',
    startTime: '2.00 PM',
    endTime: '2:30 PM',
    description:
      'Open-weight models, fine-tuning, skills... the list of AI buzzwords grows every day.\n\nWhen I first started digging in, I had the impression that a new technology popped up every month just to replace the old one, but these are not replacements. They are connected building blocks.\n\nIn this talk, I\'ll show you exactly how they fit together.\n\nWe\'ll start with the foundation: the LLM itself. We will look at what it actually means to create one and how it works. Going from predicting the next token to how Temperature, Inference, and Chain of Thought (CoT) change the results.\n\nOnce we have the basics, we\'ll tackle the limits of LLMs and the practical approaches used to solve them.\n\nThis means:\n\nManaging Context: How much can the model actually "remember"?\n\nData Actuality: How do we keep the information up to date?\n\nAgents & Tools: Giving the model "hands" to finally interact with the world.\n\nThe goal is to understand the mechanics of AI well enough to finally separate the facts from the hype.',
  },
  {
    title: 'From the AI Jungle to RAG in a Tab: Private AI Search',
    speakerName: 'Murat Sari',
    speakerPosition: 'Consultant @Soverius AI',
    speakerImage: 'assets/images/speakers/murat-Sari.jpeg',
    startTime: '2.30 PM',
    endTime: '3:00 PM',
    description:
      '“RAG”, “local AI”, “vector databases”… it’s easy to treat them as a checklist. I did too—until I tried to build a RAG app that runs <b>entirely inside the browser</b><br/><br>In this talk, I will show how a local-first RAG workflow fits together: ingest documents on-device, turn them into a searchable memory, retrieve the right context, and generate answers—without sending private data to a backend. The payoff is twofold: <b>privacy by default</b> and a new way to think about cost—shifting parts of the workload from centralized infrastructure to user devices.. <br/><br/> Then we tackle the practical question: <b>when is a local approach enough, when do you need a real vector index, and when does it cross the line where you need a server? </b> We’ll use a simple scaling intuition (how retrieval work grows with corpus size and embedding dimension) to make that decision predictable, not magical. <br/><br/> Finally, I’ll turn RAG into something you can see that shows where queries land and why the retriever picked what it picked—so you can debug retrieval instead of guessing.',
  },
  {
    title:
      'Moving legacy with AI',
    speakerName: 'Michael Hladky',
    speakerPosition: 'CEO @push-based.io',
    speakerImage: 'assets/images/speakers/michael-hladky.jpeg',
    startTime: '3:00 PM',
    endTime: '3:30 PM',
    description: 'Legacy migrations are slow, expensive, and error-prone — unless AI is used properly. In this talk, I’ll show how we reduced migration time by 75% using a structured AI workflow. Instead of experimenting with prompts, the focus is on reproducible processes: AI context and token strategies, MCP, orchestration files, and the systematic evaluation of runs. <br/><br/> The emphasis is on what others can practically adopt to modernize large legacy codebases faster, more safely, and in a measurable way. <br/><br/> <b>Learning Objectives </b> <br/><br/> <ul><li>Why context and token management determine the success or failure of AI-driven migrations</li><li>How MCP and orchestration turn AI into a reliable engineering tool</li><li>How to evaluate, compare, and improve AI runs</li><li>A field-tested AI workflow that drastically reduces migration effort</li><li>Concrete patterns that can be directly applied to your own legacy projects</li></ul>'
  },
  {
    title: 'Simplifying Agents Development with Vercel AI SDK ',
    speakerName: 'Dhananjay Kumar',
    speakerPosition: 'Founder nomadcoder | AI-India',
    speakerImage: 'assets/images/speakers/dj.jpeg',
    startTime: '3:30 PM',
    endTime: '4.00 PM',
    description: 'Building AI agents can quickly become complex, involving tool orchestration, state management, and streaming workflows. This talk explores how the Vercel AI SDK simplifies agent development by providing structured primitives for tool use, prompt handling, and streaming responses, enabling developers to build reliable and scalable AI agents with less boilerplate.',
  },

  {
    title: 'Tea Break',
    speakerName: '',
    speakerPosition: '',
    speakerImage: 'assets/images/agenda/tea-cup.png',
    startTime: '4:00 PM',
    endTime: '4:30 PM',
    description: '',
  },
  {
    title: 'Building Smarter Applications with On-device AI Agents & GraphRAG',
    speakerName: 'Ashita Prasad',
    speakerPosition: 'Dev Advocate @AWS',
    speakerImage: 'assets/images/speakers/ashita.png',
    startTime: '4:30 AM',
    endTime: '5:00 PM',
    description:
      'For more than a decade, we have been building applications that simply respond to our actions. But with the advent of agentic AI, a new segment of Agentic Apps are emerging that do not just respond, but actively reason, act, and adapt on behalf of the user. When used as the memory layer for agentic applications, Knowledge Graphs provide structured, provenance-aware factual retrieval and grounding. This significantly reduces hallucinations, supports explainable and controllable personalization, mitigates certain biases through curated schemas, and makes reasoning and personalization decisions transparent. <br/> <br/> In this talk, we will explore how developers can use open source on-device agentic AI frameworks to build real-world applications enhanced with GraphRAG, enabling grounded knowledge retrieval from graph databases.',
  },
  {
    title: 'RAG it Till You Make It: Building Smarter AI with Graphs & Gemini 3',
    speakerName: 'Bhavesh Bhatt',
    speakerPosition: 'Lead Data Scientist',
    speakerImage: 'assets/images/speakers/bhavesh.jpeg',
    startTime: '5:00 PM',
    endTime: '5:30 PM',
    description:
      'Enhance the accuracy of RAGs by leveraging the combined power of GraphRAGs, Neo4j & Google Gemini 3.  <br/><br/> In this session, I will start by exploring the fundamentals of RAG & why graph databases like Neo4j, paired with GraphRAGs are critical for providing context-rich, intelligent responses. Dive into the Cypher language to unlock the full potential of your connected data & see how Gemini advanced capabilities can synthesize responses with unparalleled accuracy.',
  },
  {
    title: 'Fine-Grained Authorization: The Missing Piece in Agentic AI Security',
    speakerName: 'Shivay Lamba',
    speakerPosition: 'Senior Developer Experience Engineer @ Couchbase',
    speakerImage: 'assets/images/speakers/shivaya.jpg',
    startTime: '5:30 PM',
    endTime: '6:00 PM',
    description:
      'This talk demonstrates how Fine-Grained Authorization (FGA) provides robust security for Retrieval-Augmented Generation (RAG) and agentic AI systems. Learn how to implement permission models that protect sensitive information while enabling AI to access only authorized data. <br/<br/> The talk explores implementations using OpenFGA and LangChain, showcasing how to build security directly into AI retrieval pipelines. <br/><br/> The presenters will provide real world case studies to discover how enterprises can prevent data leakage, implement multi-tenant isolation, and maintain audit trails while scaling to billions of access decisions. <br/><br/> Open source tools like OpenFGA and integration techniques with vector databases will be featured, along with best practices for real-world deployment. Thus join us to understand how one can maintain security without sacrificing performance or user experience in Agentic / Gen AI applications.',
  }
];
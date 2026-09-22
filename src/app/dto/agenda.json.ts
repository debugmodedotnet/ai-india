import { IAgenda } from "../models/agenda";

export const agenda: IAgenda[] = [
  {
    title: 'Registration and T-shirt collection',
    speakerName: '',
    speakerPosition: '',
    startTime: '9:00 AM',
    endTime: '10:00 AM',
    description: '',
  },
  {
    title: 'Keynote',
    speakerName: '',
    speakerPosition: '',
    startTime: '10:00 AM',
    endTime: '10:30 AM',
    description: '',
  },
  {
    title: 'Beyond ReAct: Building Reliable AI Agents with LangGraph',
    speakerName: 'Dhananjay Kumar',
    speakerPosition: 'Founder nomadcoder | AI-India',
    startTime: '10:30 AM',
    endTime: '11:00 AM',
    description: '',
  },
  {
    title: 'Self Improving Agent Architecture',
    speakerName: 'Priyanka Kore',
    speakerPosition: 'Lead @Adesso India',
    startTime: '11:00 AM',
    endTime: '11:30 AM',
    description: `A growing class of **agentic systems** don't just execute tasks — they rewrite their own prompts, regenerate their own tool definitions, and restructure their own workflows in response to failure. It's a compelling premise: an agent that debugs itself.

But in practice, these systems tend to improve fast and then flatten out, often well short of human-level reliability, and the reasons why are more structural than incidental.

This talk walks through real **self-improving agent architectures** — prompt-rewriting loops, tool-synthesis agents that generate their own function definitions, and reflection-based agents that critique and revise their own outputs — and traces where each one hits a ceiling.

We'll dig into the core **failure modes**: reward hacking against weak self-evaluation signals, drift where "improvement" optimizes for the agent's own proxy metric rather than the actual task, compounding errors when an agent edits a tool it doesn't fully understand, and the absence of a reliable external ground truth to rewrite against.

We'll also cover what actually pushes the plateau higher in practice — **human-in-the-loop checkpoints, external verifiers, sandboxed testing before a self-edit ships, and hard limits on how much an agent is allowed to change per iteration**.

This is a grounded, failure-mode-focused talk for anyone building **agentic systems past the demo stage**.`,
  },
  {
    title: "We Can't Improve What we Can't Measure: Evals, Harnesses, and Silent Failure in Production Agents",
    speakerName: 'Jeevan D C',
    speakerPosition: 'Engineering Manager @Entain',
    startTime: '11:30 AM',
    endTime: '12:00 PM',
    description: `Most agent projects clear the **demo bar** and then stall. A prompt is reworded, a model is swapped, or a tool is added — but there's no reliable signal showing whether the system improved or quietly regressed.

Classic testing assumes **deterministic output and known-correct answers**. Agents offer neither.

This talk explores how to evaluate **non-deterministic AI systems without a golden dataset**, catch silent degradation before users do, and treat **model choice, cost, and security as part of the evaluation harness**.

The patterns are drawn from running an agent fleet at organizational scale, including an **AI code-review agent and knowledge-graph tooling across 14,000 repositories**.

## What We'll Cover

* Evals without golden data — assertions, embedding similarity, LLM-as-judge with rubrics, pairwise evaluation, and bootstrapping eval sets from production traces and model disagreement.
* Calibrating the judge — rubric decomposition, position and verbosity bias mitigation, and measuring judge reliability against human spot-checks.
* Detecting silent degradation — pinned canary suites, scoring distributions, drift detection, judge-rationale logging, and span-level tracing.
* Testing AI-written tests — mutation testing using boundary flips, statement deletion, and condition negation to verify that tests actually catch failures.
* Orchestration and cost — verifier-gated cascades, cheap-first evaluation, and the trade-offs between tokens, latency, and accuracy.
* Security in the harness — planner/executor separation, tool allowlisting, untrusted tool outputs, external-content isolation, and scoped read-only credentials.

## Key Takeaways

* Agent evaluation is a distribution problem, not simply pass/fail.
* Useful eval sets can be built from production traces and model disagreement without hand-labeled data.
* An LLM judge is an instrument and should be calibrated against human evaluation.
* Mutation testing can expose AI-generated tests that don't actually verify behavior.
* Verifier-gated cascades can help optimize cost and latency while maintaining quality.
* Security controls belong in the harness — prompts alone are not a security boundary.`,
  },
  {
    title: 'Your evals are lying to you',
    speakerName: 'Varun Srinivas',
    speakerPosition: 'CTO @Coditas',
    startTime: '12:00 PM',
    endTime: '12:30 PM',
    description: `Your evals are lying to you. They say pass, and your agent still fails in production. Confidently wrong, drifting off-task over a long session, burning 10x the tokens it should. The eval passed. The agent still failed.

This talk is about closing that gap. I'll walk through building an eval pipeline that mirrors how your agent actually gets used: deterministic checks for what you can verify exactly, LLM judges for what you can't, and human review for the rest — wired into a loop that runs on every change, not just before a big release.

This is a practical talk built on real production experience, not a survey of eval frameworks. If your team has evals but still gets surprised in production, this talk is for you.

What you'll learn:

* Why an eval that passes doesn't mean an agent that works
* How to design evals around real failure modes, not easy-to-measure proxies
* How to build an eval pipeline that runs like CI
* What to do when your evals themselves start lying to you`,
  },
  {
    title: 'TBD',
    speakerName: 'ShivPrasad Koirala',
    speakerPosition: 'Founder @Questpond',
    startTime: '12:30 PM',
    endTime: '1:00 PM',
    description: '',
  },
  {
    title: 'Lunch',
    speakerName: '',
    speakerPosition: '',
    startTime: '1:00 PM',
    endTime: '2:00 PM',
    description: '',
  },
  {
    title: 'A brief intro to Inference Engineering for Software Engineers',
    speakerName: 'Chinmay Naik',
    speakerPosition: 'Founder @One2N',
    startTime: '2:00 PM',
    endTime: '2:30 PM',
    description: `While everybody is talking about agents, harnesses, Claude, and Codex, I want to talk about what it takes to run inference engineering on AI infrastructure.

I'll cover the basics of what inference engineering is, how one can self-host models, and the kind of optimisation and system design challenges that need solving for faster and more efficient inference.

I'll cover the talk in a story format where I'll walk through the journey I took to learn inference engineering and hosting private sovereign AI infra to serve production traffic.`,
  },
  {
    title: 'MCP at Scale: Going Serverless',
    speakerName: 'Sumit Parakh',
    speakerPosition: 'Principal Software Engineer @Perforce Software',
    startTime: '2:30 PM',
    endTime: '3:00 PM',
    description: `As MCP (Model Context Protocol) moves from experimentation to production, scaling MCP servers introduces challenges around infrastructure, availability, cost, and operational overhead.

With the evolution of MCP toward stateless and asynchronous architectures, serverless becomes a natural fit for building scalable MCP integrations.

This talk explores:

* Serverless MCP architecture
* Key design patterns for scalable MCP servers
* Stateless and asynchronous MCP architectures
* Scalability and cost benefits of serverless
* Practical considerations for moving MCP servers from prototype to production

A practical session for developers and AI engineers looking to build scalable, production-ready MCP integrations.`,
  },
  {
    title: 'Running Offline AI on Mobile Devices',
    speakerName: 'Infant Mystica',
    speakerPosition: 'Software Developer @TranslateLive',
    startTime: '3:00 PM',
    endTime: '3:30 PM',
    description: `This talk explores how to **run AI models directly on user devices**, reducing dependency on a network connection and cloud infrastructure.

We’ll look at:

* Unreliable network connectivity and how offline AI can address it
* Latency reduction by processing AI workloads on-device
* Cloud cost optimization by reducing dependency on cloud inference
* Hardware limitations when running AI models locally
* Offline-first UX architecture for AI-powered applications
* Building an offline AI pipeline for real-world applications

This session is especially relevant for **mobile developers, AI engineers, and developers interested in on-device AI**.`,
  },
  {
    title: 'Voice Agents: Ready for Production or Just a Great Demo?',
    speakerName: 'Manoranjan Rajguru',
    speakerPosition: '',
    startTime: '3:30 PM',
    endTime: '4:00 PM',
    description: `Voice Agents are getting remarkably good at conversations, but a great demo is very different from a **production-ready Voice Agent**.

This session explores how to evaluate Voice Agents beyond simple “it worked” testing, covering the challenges that arise in real-world conversations.

We’ll explore:

* Conversation quality and overall user experience
* Task completion and accuracy
* Latency and response time
* Handling interruptions, unexpected answers, and changes in user intent
* Speech recognition challenges, including different accents
* Robustness against real-world scenarios
* Jailbreaking and red teaming
* Direct and indirect attacks
* How to measure, trace, govern, and improve Voice Agents

Through practical **evaluation strategies, metrics, and real-world scenarios**, you’ll learn how to systematically test Voice Agents and determine whether they are truly **ready for production — or simply a great demo**.`,
  },
  {
    title: 'Tea break',
    speakerName: '',
    speakerPosition: '',
    startTime: '4:00 PM',
    endTime: '4:30 PM',
    description: '',
  },
  {
    title: 'A Guardrail Blueprint for Production AI Agents',
    speakerName: 'Laxminarayan Chandrashekar',
    speakerPosition: 'Technical Lead and Architect @Siemens',
    startTime: '4:30 PM',
    endTime: '5:00 PM',
    description: `Building production-ready AI agents requires more than securing the model itself. This talk presents a practical **security architecture for production agents**, designed to prevent a compromised or manipulated model from automatically becoming a compromised system.

We’ll explore how to separate:

* Agent loop and context
* Tools and tool permissions
* Runtime policies
* Isolation and controlled execution
* Human approval and oversight

Through a **live code demo**, we’ll build a practical blueprint for agents with:

* Least-privilege access
* Controlled execution
* Auditability
* Bounded blast radius
* Strong security guardrails

The session also covers key risks highlighted in **OWASP’s Agentic Applications security guidance**, including **goal hijacking, tool misuse, privilege abuse, supply-chain vulnerabilities, and unexpected code execution**.`,
  },
  {
    title: 'Engineering a Model Router for Cost, Latency & Quality',
    speakerName: 'Sunny Sharma',
    speakerPosition: 'Technical Architect @HROne',
    startTime: '5:00 PM',
    endTime: '5:30 PM',
    description: `Production AI applications often send every request to the strongest available model.

That is simple — but expensive, slower than necessary, and frequently wasteful.

Summarization, extraction, code generation, classification, and complex reasoning have very different requirements.

This session shows how to build a practical model-routing layer that selects models based on workload, complexity, privacy, latency, and cost — and escalates to stronger models only when necessary.`,
  },
  {
    title: 'From Commit to Production: Building AI-Ready CI/CD Pipelines with Harness',
    speakerName: 'Arumulla Yaswanth Reddy',
    speakerPosition: 'Software Engineer @Arealis Networks',
    startTime: '5:30 PM',
    endTime: '6:00 PM',
    description: `AI applications need more than traditional **CI/CD**. This talk explores how to build an **AI-ready delivery pipeline using Harness**, covering the complete journey from code to production.

We’ll explore:

* Automated builds and testing
* Security and AI evaluation
* Automated deployment
* Progressive delivery
* Building guardrails for safe AI deployments

Through practical **code and pipeline examples**, you’ll learn how to safely move **AI applications from commit to production** with automation, evaluation, and the right guardrails in place.`,
  },
  {
    title: 'MCP: One Setup for Multiple AI Agents',
    speakerName: 'Nidhi Singh',
    speakerPosition: '',
    startTime: '6:00 PM',
    endTime: '6:30 PM',
    description: `I feel most people don’t realize **how much MCP has evolved** or what the best way to use it is.

Today, many of us use **multiple AI agents**, and it can be a pain to connect our apps to each of them manually.

In this talk, I’ll explore how you can use a tool called **Executor** to set up your integrations **once** and use them across multiple AI agents.`,
  },
];

import { IAgenda } from "../models/agenda";

export const agenda: IAgenda[] = [
  {
    title: 'Registration',
    speakerName: '',
    speakerPosition: '',
    speakerImage: 'assets/images/agenda/registration.png',
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    description: '',
  },
  {
    title: 'Intelligent Frontends: Angular and Transformers.js',
    speakerName: 'Markus Ingvarsson',
    speakerPosition: 'Full-stack Developer @Consat Telematics',
    speakerImage: 'assets/images/speakers/markus-ingvarsson.jpeg',
    startTime: '9.00 AM',
    endTime: '9:30 AM',
    description:
      'Discover how <b>Transformers.js</b> enables Angular applications to deliver advanced AI capabilities directly in the browser, enhancing user experiences with powerful features. <br/><br/>Learn how to implement AI without relying on servers, ensuring privacy, speed, and scalability. <br/><br/> Through practical examples, we’ll explore how to seamlessly integrate these capabilities into your Angular apps. Achieve more with AI-powered features that take your projects to the next level.',
  },
  {
    title:
      'Hidden gems in Angular: hybrid rendering, new routing features, and beyond',
    speakerName: 'Vojtech Mašek',
    speakerPosition: 'CTO @flowup',
    speakerImage: 'assets/images/speakers/vojtech-masek.png',
    startTime: '9:30 AM',
    endTime: '10:00 AM',
    description:
      'Explore the lesser-known but highly impactful features of Angular, including <b>hybrid rendering</b>, powerful approach that combines <b>prerendering</b> and <b>server-side rendering</b> for optimal performance and SEO. <br/><br/> Dive into modern routing improvements like default-exported components and route-specific providers that simplify development while enhancing modularity. This talk will equip you with actionable insights and practical examples to take your Angular applications to the next level, whether you are re building static sites, dynamic dashboards, or complex enterprise solutions.',
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
  // {
  //   title: 'Break',
  //   speakerName: '',
  //   speakerPosition: '',
  //   speakerImage: 'assets/images/agenda/tea-cup.png',
  //   startTime: '10:20 AM',
  //   endTime: '10:30 AM',
  //   description: '',
  // },
  {
    title: 'Keynote',
    speakerName: 'Michael Hladky',
    speakerPosition: 'CEO @push-based.io',
    speakerImage: 'assets/images/speakers/michael-hladky.jpeg',
    startTime: '10:30 AM',
    endTime: '11:00 AM',
    description:
      'Learn about all key features of Angular 20 and futute of modern Angular development',
  },
  {
    title: 'Micro Frontends: Necessity, Implementation, and Challenges',
    speakerName: 'Rainer Hahnekamp',
    speakerPosition: 'Trainer and Consultant @AngularArchitects.io',
    speakerImage: 'assets/images/speakers/rainer-hahnekamp.jpg',
    startTime: '11:00 AM',
    endTime: '11:30 PM',
    description:
      '<b>Micro Frontends</b> are a hot topic, promising an architecture where multiple teams can work independently on a single application, making their own technical choices while remaining isolated from each other. Sounds ideal, right? <br/> <br/> But it’s worth considering the trade-offs. While Micro Frontends offer unique benefits, they also introduce overhead and can come with unexpected challenges. <br/> <br/> In this talk, I’ll provide an <b>honest overview of the technical possibilities </b>, along with the pros and cons of each approach. You’ll learn about iFrame integration, Web Components, Native & Module Federation, and see these techniques in action. <br/> <br/> For some, Micro Frontends are a <b>no-go</b>; for others, they’re an option or <b>even an absolute necessity</b>. By the end of my talk, you should know which group you belong to.',
  },
  {
    title: 'Angular Signals - Zero to One',
    speakerName: 'Dhananjay Kumar',
    speakerPosition: 'Founder @NomadCoder| ng-India',
    speakerImage: 'assets/images/speakers/dj.jpeg',
    startTime: '11:30 AM',
    endTime: '12:00 PM',
    description:
      'Signals have become the buzzword among Angular developers, redefining how <b>reactivity</b> is managed in modern applications. At its core, an Angular Signal is a wrapper around a value that notifies its consumers whenever the value changes. It introduces a new, intuitive way to propagate changes through templates and the component tree, providing a way for <b>Local Change Detection </b> or <b>Synchronisation </b>. <br/> <br/> This talk offers a concise introduction to Angular Signals and the core functions that power them: <br/><br/> <ul><li><b>signal()</b></li><li><b>computed()</b></li><li><b>effect()</b></li></ul> <br/><br/> We’ll explore how these functions form the foundation of modern Angular applications and demonstrate their use in real-world scenarios, such as: <br/><br/> <ul><li>* Passing data between parent and child components.</li><li>* Sharing data between unrelated components</li><li>* Integrating Signals with APIs for seamless data handling.</li> <li>* Leveraging newer functions  like resource and rxResource for enhanced reactivity.</li></ul> <br/><br/> Whether you are new to Signals or looking to deepen your understanding, this foundational session will prepare you for further deep-dive sessions on the signals. ',
  },
  {
    title: 'Build on top of Signals',
    speakerName: 'Enea Jahollari',
    speakerPosition: 'GDE, Trainer, Senior Software Engineer',
    speakerImage: 'assets/images/speakers/enea-jahollari.webp',
    startTime: '12:00 PM',
    endTime: '12:30 PM',
    description:
      'Angular <b> Signals </b> are a game-changer. But we can go even further.<br/><br/>This talk unveils how to build powerful utility functions, leveraging <b>inject </b> and <b>DestroyRef</b> to supercharge your Signals. Learn how to create reusable reactive patterns, simplify your code, and embrace a new <b> "synchronization" </b> mindset that optimizes performance. <br/><br/>Prepare to level up your Angular development with the building blocks of the future!',
  },
  {
    title: 'Event-Based State Management with NgRx SignalStore',
    speakerName: 'Marko Stanimirović',
    speakerPosition: 'Principal Frontend Engineer',
    speakerImage: 'assets/images/speakers/marko-stanimirovic.jpg',
    startTime: '12:30 PM',
    endTime: '1:00 PM',
    description:
      '<b>Event-driven architecture </b> adds a layer of indirection that enhances decoupling, improves data flow predictability, and supports the scaling of complex systems. <br/><br/> While SignalStore does not natively support an event-based model, its flexible and highly extensible design opens the door to integrating various functionalities and applying diverse state management patterns. <br/><br/> In this talk, we will explore how event-driven principles can be used with SignalStore to enhance and scale the <b>state management layer </b> in complex Angular applications.',
  },
  {
    title: 'Lunch Break',
    speakerName: '',
    speakerPosition: '',
    speakerImage: 'assets/images/agenda/lunch-break.png',
    startTime: '1:00 PM',
    endTime: '2:00 PM',
    description: '',
  },
  {
    title:
      'Long term success of your Angular projects with automated architecture validation',
    speakerName: 'Tomas Trajan',
    speakerPosition: 'Frontend Architect | Trainer @angularexperts.io',
    speakerImage: 'assets/images/speakers/tomas-trajan.jpeg',
    startTime: '2:00 PM',
    endTime: '2:30 PM',
    description:
      'Learn how to <b>architect</b> a brand new or improve an existing enterprise grade Angular application with a bulletproof <b>ESLINT</b> based automated architecture validation to guarantee that Your project stays maintainable, extendable and therefore allows you and your team to deliver consistently and with high velocity over the entire project lifetime!',
  },
  {
    title: 'Angular Best Practices',
    speakerName: 'Shailendra Chauhan',
    speakerPosition: 'Founder and CEO @ScholarHat',
    speakerImage: 'assets/images/speakers/shailendra-chauhan.jpeg',
    startTime: '2:30 PM',
    endTime: '2.45 PM',
    description: '',
  },
  {
    title: 'New httpResouce API: Don’t need httpClient anymore?',
    speakerName: 'Himanshu Saraswat',
    speakerPosition: 'SDE III @Ivy',
    speakerImage: 'assets/images/speakers/himanshu-saraswat.jpeg',
    startTime: '2:45 PM',
    endTime: '3.00 PM',
    description: '',
  },
  {
    title: 'Optimizing App Performance with @defer',
    speakerName: 'Shweta Mulik',
    speakerPosition: 'SDE-2 @AGCO',
    speakerImage: 'assets/images/speakers/shweta-mulik.jpeg',
    startTime: '3:00 PM',
    endTime: '3:15 pm',
    description:
      'In app development, you often have components that are not immediately needed—like content below the visible screen or complex features that users interact with later. Instead of loading everything at once, you can delay loading these parts using deferrable views, also known as @defer blocks. <br/><br/> This approach makes your app load faster by reducing the size of the initial bundle, improving performance metrics like Largest Contentful Paint (LCP) and Time to First Byte (TTFB). <br/><br/> Join this talk to explore Angular new <b>@defer</b> feature and learn how it can enhance your app’s speed and user experience!',
  },
  {
    title: 'From SSR to Client-Side: The Power of Incremental Hydration',
    speakerName: 'Kasia Biernat-Kluba',
    speakerPosition: 'Principal Software Engineer',
    speakerImage: 'assets/images/speakers/kasia.jpeg',
    startTime: '3:15 PM',
    endTime: '3:30 PM',
    description:
      'Angular <b>Server-Side Rendering (SSR) </b> significantly improves load times and SEO, but the transition to client-side rendering can still be slow. <br/><br/><b>Incremental Hydration </b> is a powerful technique that speeds up this process by hydrating only the necessary parts of the app as the user interacts with it, rather than all at once. In this lightning talk we’ll explore how incremental hydration impacts application performance and how you can leverage the latest features to your advantage.',
  },
  {
    title: 'signal based model input in Angular',
    speakerName: 'Shubhangi Shukla',
    speakerPosition: 'Software Engineer',
    speakerImage: 'assets/images/speakers/shubhangi.jpeg',
    startTime: '3:30 PM',
    endTime: '3:45 PM',
    description:
      'Angular signal based model input for component communication',
  },
  {
    title: 'Bridging the Gap: Enhancing Communication Between Engineers, Developers, and Customers',
    speakerName: 'Anusha Nara',
    speakerPosition: 'Customer Success Manager',
    speakerImage: 'assets/images/speakers/ausha.jpeg',
    startTime: '3:45 PM',
    endTime: '4:00 PM',
    description:
      '',
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
    title: 'Virtual Views- Rendering What Matters, When It Matters',
    speakerName: 'Julian Jandl',
    speakerPosition: 'Lead Performance Engineer',
    speakerImage: 'assets/images/speakers/julian-jandl.webp',
    startTime: '4:30 PM',
    endTime: '5:00 PM',
    description:
      'A large number of DOM elements can significantly impact performance, leading to slow performing applications.Mobile users especially operate on limited hardware with smaller viewports. Most of the app contents are hidden below the fold. So why render them at all?<br/><br/> Virtual scrolling has long been a cornerstone of optimizing large lists and data-heavy applications, but it is not without its limitations. <br/></br/> This talk will introduce you to a more versatile solution for rendering only what matters, when it matters - RxAngulars Virtual View Directive. <br/><br/> <u><b>Takeaways</b></u> <br/><br/> <ul><li> *How and why large amounts of DOM negatively impact INP<li> <li>*The main principles of virtual scrolling</li><li>*The key differences between virtual scrolling and virtual views, and why this new approach is better suited for certain scenarios </li><li>*Practical tips for integrating virtual views into your projects, with real-world examples that demonstrate its versatility and performance benefits</li></ul>',
  },
  {
    title: 'Instant Navigation in Angular Applications',
    speakerName: 'Christopher Holder',
    speakerPosition: 'Full Stack Engineer @ push-based.io',
    speakerImage: 'assets/images/speakers/chris-holder.png',
    startTime: '5:00 PM',
    endTime: '5:30 PM',
    description:
      'Users spend 90% of their time interacting with applications after they load, but most developers just focus on speeding up the initial load. <br/> <br/> In this talk we will go beyond initial loading strategies, and make future navigation feel instant by predicting what users might click on next and loading those parts ahead of time. <br/><br/> We will use real applications to see how to implement speculative loading techniques and how you can measure the improvement with soft navigation  largest contentful paint (LCP). <br/><br/> Finally we will demonstrate how you can convert a 2 second navigation into less than 100 milliseconds using the Intersection Observer API, the Angular router and HTML link tags. <br/><br/> <b><u>Takeaways</u></b><br/><br/>Attendees will learn about the soft navigations and how that is about to change the way we measure performance on SPAs. Then they will learn an optimization framework to optimize their own applications using techniques inspired by the Speculative Rules API. They will see through an example that this can improve user experience and future navigations making them feel instant.',
  },
  {
    title: 'Local and Zoneless Change Detection ',
    speakerName: 'Pankaj Parkar',
    speakerPosition: 'Principal Application Developer @AON',
    speakerImage: 'assets/images/speakers/pankaj-parkar.jpeg',
    startTime: '5:30 PM',
    endTime: '6:00 PM',
    description:
      'In modern web development, achieving efficient, scalable, and reactive applications is paramount. Traditional <b>change detection</b> strategies often rely on Angular <b>Zone.js </b>, while powerful, can introduce performance bottlenecks and complexity in large-scale applications. <br/><br/>This talk dives into the evolution of change detection, exploring how local and zoneless change detection strategies are transforming the way we synchronize state and update views.<br/> <br/> We will unravel the mechanics behind these approaches, demonstrate their impact on performance optimization, and showcase practical use cases.<br/><br/> Join us to discover the concept of synchronization and how you can architect applications to thrive in the new angular era',
  },
];
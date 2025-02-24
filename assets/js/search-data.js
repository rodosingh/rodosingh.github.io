// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "* denotes equal contribution and joint lead authorship.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-codes",
          title: "Codes",
          description: "Codes released for IIITH course assignments and projects  •  Open source projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/codes/";
          },
        },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-cv",
              title: "cv",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-using-cmake-to-build-and-install-opencv-for-python-and-c-in-ubuntu-20-04",
      
        title: 'Using CMake to build and install OpenCV for Python and C++ in Ubuntu... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://rodosingh.medium.com/using-cmake-to-build-and-install-opencv-for-python-and-c-in-ubuntu-20-04-6c5881eebd9a?source=rss-b06cc70c650d------2", "_blank");
        
      },
    },{id: "news-inspire-fellowship-awardee-2016-2021-awarded-to-inspire-and-attract-young-talent-towards-science-amp-amp-technology-for-a-career-in-r-amp-amp-d",
          title: '🏅 INSPIRE Fellowship awardee (2016 - 2021) 🎓. 🌟 Awarded to inspire and...',
          description: "",
          section: "News",},{id: "news-admitted-to-the-ms-by-research-program-in-computer-science-and-engineering-️-at-iiit-hyderabad",
          title: '🎉 Admitted to the MS by Research program in Computer Science and Engineering...',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-thesis-️-and-graduated-with-a-bs-ms-dual-degree-in-mathematics-and-statistics-from-iiser-kolkata",
          title: '🎉 Successfully defended my thesis 🛡️ and graduated with a BS-MS dual degree...',
          description: "",
          section: "News",},{id: "news-joined-cvit-lab-iiit-hyderabad-as-a-master-s-by-research-student-working-with-prof-makarand-tapaswi-in-the-katha-ai-lab-️-️",
          title: '🚀 Joined CVIT Lab, IIIT Hyderabad as a Master’s by Research student 🎓....',
          description: "",
          section: "News",},{id: "news-won-the-audio-visual-retrieval-challenge-hosted-by-icvgip-2021",
          title: '🥇 Won the Audio-Visual Retrieval Challenge 🏆 hosted by ICVGIP 2021 🎓.',
          description: "",
          section: "News",},{id: "news-finalist-qualcomm-innovation-fellowship-india-2022-read-more",
          title: '🏆 Finalist @ Qualcomm Innovation Fellowship India 2022! 🎉 🔗 Read more',
          description: "",
          section: "News",},{id: "news-paper-acceptance-to-cvpr-2023-topic-recognising-emotion-mental-states-in-movies-read-more",
          title: 'Paper acceptance! 🔥 to CVPR 2023. Topic: Recognising emotion/mental-states in movies. Read more...',
          description: "",
          section: "News",},{id: "news-given-a-series-of-lectures-on-ssm-state-space-models-derived-the-expression-for-matrix-a-will-attach-the-slides-here",
          title: '📢 Given a series of lectures on SSM (State-Space models), derived the expression...',
          description: "",
          section: "News",},{id: "news-given-a-lecture-on-basics-of-linear-algebra-and-statistics-at-cvit-summer-school-2023-held-at-iii-h-find-my-colab-notebook-here",
          title: '📢 Given a lecture on Basics of Linear Algebra, and Statistics at CVIT...',
          description: "",
          section: "News",},{id: "news-joined-m365-research-msr-india-team-as-a-research-intern-had-an-opportunity-to-collaborate-with-dr-supriyo-ghosh-dr-xuchao-zhang-dr-anjaly-parayil-and-drishti-goel",
          title: '🚀 Joined M365 Research (MSR India) team as a Research Intern 🧑‍💻. 🤝...',
          description: "",
          section: "News",},{id: "news-paper-acceptance-to-cvpr-2024-topic-generate-mutlimodal-story-summaries-given-an-episode-of-a-tv-show-read-more",
          title: 'Paper acceptance! 🔥 to CVPR 2024. Topic: Generate mutlimodal story-summaries given an episode...',
          description: "",
          section: "News",},{id: "news-best-paper-award-acceptance-to-foss-cil-2024-read-more",
          title: '🔥🔥Best Paper Award🔥🔥. Acceptance to FOSS-CIL 2024. Read More',
          description: "",
          section: "News",},{id: "news-paper-acceptance-to-fse-2024-topic-leverage-llms-to-automatically-recommend-oces-on-quickly-identifying-and-mitigating-critical-issues-rca-read-more",
          title: 'Paper acceptance! 🔥 to FSE 2024. Topic: Leverage LLMs to automatically recommend OCEs...',
          description: "",
          section: "News",},{id: "news-️-defended-my-master-s-thesis-required-for-the-completion-of-my-ms-degree-at-iiit-h",
          title: '🛡️ Defended my Master’s thesis 📜 required for the completion of my MS...',
          description: "",
          section: "News",},{id: "news-visited-seattle-us-for-my-poster-presentation-at-41st-cvpr-conference",
          title: '🌎 Visited Seattle, US 🇺🇸 for my 🏆 poster presentation at 41st CVPR...',
          description: "",
          section: "News",},{id: "news-graduated-with-a-ms-by-research-degree-in-cse-️-from-iiit-hyderabad",
          title: '🎉 Graduated with a MS by Research degree in CSE 🖥️ from IIIT...',
          description: "",
          section: "News",},{id: "news-joined-the-amd-genai-team-as-a-research-engineer-building-fully-open-source-lmms-from-scratch-on-amd-instinct-gpus-mi300-mi250",
          title: '🚀 Joined the AMD GenAI team as a Research Engineer 🧑‍💻. 🔥 Building...',
          description: "",
          section: "News",},{id: "projects-airplane-reservation-system",
          title: 'Airplane Reservation System',
          description: "System for managing airplane reservations solely through CLI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/airplane/";
            },},{id: "projects-vos",
          title: 'VOS',
          description: "Video Object Segmentation - Segmenting moving objects in videos.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cv/";
            },},{id: "projects-vehicle-detection-and-counter",
          title: 'Vehicle Detection and Counter',
          description: "A simple video-image processing technique involving object-edge detection, frame differentiation, and Kalman filtering to perform the required task.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dip/";
            },},{id: "projects-avengers-assemble",
          title: 'Avengers Assemble!',
          description: "Face Recognition with FaceNet and Triplet Loss",
          section: "Projects",handler: () => {
              window.location.href = "/projects/face_recog/";
            },},{id: "projects-hypernym-discovery",
          title: 'Hypernym Discovery',
          description: "Finding hypernyms for given word.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nlp/";
            },},{id: "projects-quora-question-pairs",
          title: 'Quora Question Pairs',
          description: "Can you identify question pairs that have the same intent?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smai/";
            },},{id: "projects-tesellate",
          title: 'Tesellate',
          description: "A cool collection mathematical and algorithmic art.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tesellate/";
            },},{id: "projects-table-tennis-umpire",
          title: 'Table Tennis Umpire',
          description: "Classifying table tennis shots and hand gestures using OpenPose.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tt/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rodosingh", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aditya-singh-9639a8175", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=n14DqPkAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/rodosingh23", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@rodosingh", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

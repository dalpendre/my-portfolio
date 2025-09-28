export const projects = [
  {
    id: 1,
    title: "Vechicle data on Maps",
    description: "Designed and implemented a Data Warehouse on PostgreSQL, with a custom ETL pipeline built in Python to automate data extraction, transformation, and loading.",
    fullDescription: `<p><u><b>Final CS degree project</b></u></p>
      <p>This project focused on designing and implementing a <b>Data Warehouse</b> in <b>PostgreSQL</b>, supported by a custom <b>ETL pipeline</b> developed in <b>Python</b> to automate <b>data extraction, transformation, and loading</b> of real-time vehicle location data.</p>
      <p>The data model was based on <b>Intelligent Transport Systems (ITS)</b> protocols, including <b>CAM</b>, <b>DENM</b>, and <b>IVI</b>. For each protocol, the warehouse schema was structured around a centralized <b>fact table</b> complemented by multiple <b>dimension tables</b> to capture relevant attributes.</p>
      <p>Additionally, a <b>data seeder</b> was developed to generate test data and validate the correctness and reliability of the <b>ETL pipeline</b>.</p>
    `,
    stack: "Python • PostgreSQL • ETL • Data Warehouse • Data Engineering • Real-time Data",
    stackImgs: "python-logo-final.png",
    repoUrl: "https://github.com/dalpendre/Projeto-Informatico-M1",
    imgSrc: "/img/poster_projeto_informatico.png",
    imgAlt: "Projeto Informático",
    year: "2023"
  },
  {
    id: 2,
    title: "matchplanner",
    description: "Developed a web and mobile application for managing e-sports events, allowing users to register events, create posts, and comment within event communities.",
    fullDescription: `Built a full-stack application for web and mobile platforms to facilitate the organization and participation in e-sports events. Users can register events, 
    post updates, and engage with other participants through comments, creating an interactive community around each event. Implemented responsive and user-friendly interfaces for 
    both web and mobile, ensuring seamless access across devices. The backend handles event management, user authentication, and real-time data updates, while the frontend delivers 
    an intuitive user experience. This project demonstrates skills in full-stack development, cross-platform app design, and interactive community-driven features.`,
    stack: "HTML • Yii2 • PHP • Android • Java",
    repoUrl: "https://github.com/TheDanielz3/MatchPlanner",
    imgSrc: "/img/matchplanner-index.png",
    imgAlt: "",
    year: "2019"
  },
  {
    id: 3,
    title: "CubixIO",
    description: "Smart cubic interface to lookup data in data warehouses",
    fullDescription: "Designed and implemented a PHP website to register E-Sports events.",
    stack: "React • C# • SQL",
    repoUrl: "https://github.com/dalpendre/CubixIO",
    imgSrc: "/img/work_in_progress.jpg",
    imgAlt: "CubixIO",
    year: "2025"
  },
  {
    id: 4,
    title: "Google scholar shell",
    description: "Bash shell script to extract publication and citation data from Google Scholar profiles, enabling automated retrieval and organization of academic information for research analysis",
    fullDescription: `Created a Bash-based tool that automates the extraction of scholar information from Google Scholar profiles.
    The script uses web scraping techniques and command-line utilities to parse and organize the data into a readable format. 
    Designed to handle multiple profiles efficiently, it provides researchers with quick access to structured academic metrics without manual searching. 
    Implemented error handling and data validation to ensure accuracy and reliability. This project demonstrates practical skills in shell scripting, web scraping, and data processing
    for academic research purposes.`,
    stack: "Linux • Bash",
    repoUrl: "https://github.com/dalpendre/SO.proj1_scholar_2019-2020.2191747",
    imgSrc: "/img/work_in_progress.jpg",
    imgAlt: "",
    year: "2020"
  },
  {
    id: 5,
    title: "File frequency validator",
    description: "Developed a C terminal program to count the number of bytes in files and the number of files in directories, providing a simple utility for analyzing file sizes and directory contents.",
    fullDescription: `Implemented a command-line program in C that recursively scans files and directories to calculate file sizes in bytes and count the number of files within 
    directories. The program supports traversal of nested directories, providing accurate summaries for complex folder structures. It uses system calls and standard C library 
    functions for file I/O and directory handling. Designed with efficiency and error handling in mind to manage large directories and potential access issues. This project 
    demonstrates proficiency in C programming, file system manipulation, and terminal-based utility development.`,
    stack: "Linux • C • GCC",
    repoUrl: "https://github.com/dalpendre/SO.proj2_freqCounter_2019-2020.2191747",
    imgSrc: "/img/work_in_progress.jpg",
    imgAlt: "",
    year: "2020"
  },
]
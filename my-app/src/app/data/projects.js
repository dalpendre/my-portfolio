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
    title: "CubixIO",
    description: "Smart cubic interface to lookup data in data warehouses",
    fullDescription: `<p><u><b>In progress</b></u></p>
      <p>This project is focused on designing and implementing an interactive 3D visualization of data existing on data warehouses or other databases, supported by <b>Three.js</b> and developed in <b>React</b> and <b>C#</b>.
    `,
    stack: "React • C# • SQL",
    repoUrl: "https://github.com/dalpendre/CubixIO",
    imgSrc: "/img/work_in_progress.jpg",
    imgAlt: "CubixIO",
    year: "2025"
  },
  {
    id: 3,
    title: "matchplanner",
    description: "Developed a web and mobile application for managing e-sports events, allowing users to register events, create posts, and comment within event communities.",
    fullDescription: `<p><u><b>E-sports Event Management Platform</b></u></p> <p>This project focused on developing a <b>web and mobile 
    application</b> for managing <b>e-sports events</b>, enabling users to <b>create events</b>, share <b>updates and posts</b>, and 
    interact through <b>comments</b> within event-specific communities.</p> <p>The system architecture was designed as a <b>full-stack 
    solution</b>, featuring a <b>responsive frontend</b> for both <b>web and mobile platforms</b> and a robust <b>backend</b> responsible 
    for <b>event management</b>, <b>user authentication</b>, and <b>real-time data synchronization</b>.</p> <p>Additionally, emphasis was 
    placed on creating an <b>interactive</b> and <b>user-friendly interface</b> to ensure a seamless experience across devices, fostering 
    <b>community engagement</b> and <b>active participation</b> among users.</p>`,
    stack: "HTML • Yii2 • PHP • Android • Java",
    repoUrl: "https://github.com/TheDanielz3/MatchPlanner",
    imgSrc: "/img/matchplanner-index.png",
    imgAlt: "",
    year: "2019"
  },
  {
    id: 4,
    title: "cone-detector-tf",
    description: "Tensorflow AI system to detect colored cones.",
    fullDescription: ``,
    stack: "Python • Tensorflow",
    repoUrl: "https://github.com/dalpendre/cone-detector-tf",
    imgSrc: "/img/cones.gif",
    imgAlt: "",
    year: "2021"
  },
  
  {
    id: 5,
    title: "Google scholar shell",
    description: "Bash shell script to extract citation statistics from Google Scholar profiles",
    fullDescription: `<p><u><b>Automated Scholar Data Extraction Tool</b></u></p> <p>This project involved developing a <b>Bash-based 
    automation tool</b> designed to extract <b>academic profile information</b> from <b>Google Scholar</b> using <b>web scraping</b> 
    techniques and <b>command-line utilities</b>.</p> <p>The tool efficiently processes <b>multiple profiles</b> simultaneously, parsing 
    and organizing the retrieved data into a <b>structured and readable format</b> to provide quick access to key <b>academic metrics</b> 
    without manual searching.</p> <p>Comprehensive <b>error handling</b> and <b>data validation</b> mechanisms were implemented to ensure 
    <b>accuracy</b> and <b>reliability</b>, demonstrating practical skills in <b>shell scripting</b>, <b>web scraping</b>, and <b>data processing</b> 
    for <b>academic research automation</b>.</p>`,
    stack: "Linux • Bash",
    repoUrl: "https://github.com/dalpendre/SO.proj1_scholar_2019-2020.2191747",
    imgSrc: "/img/so-project-one.gif",
    imgAlt: "",
    year: "2020"
  },
  {
    id: 6,
    title: "File frequency validator",
    description: "Developed a C terminal program to count the number of bytes in files and the number of files in directories, providing a simple utility for analyzing file sizes and directory contents.",
    fullDescription: `<p><u><b>Recursive File and Directory Scanner</b></u></p> <p>This project involved developing a <b>command-line 
    program in C</b> to <b>recursively scan files and directories</b>, calculating <b>file sizes</b> in bytes and <b>counting the number 
    of files</b> within each directory.</p> <p>The program supports <b>nested directory traversal</b>, providing accurate summaries for 
    <b>complex folder structures</b> and leveraging <b>system calls</b> along with <b>standard C library functions</b> for file I/O and 
    directory handling.</p> <p>Designed with <b>efficiency</b> and robust <b>error handling</b> in mind, it effectively manages <b>large 
    directories</b> and potential access issues. This project demonstrates proficiency in <b>C programming</b>, <b>file system 
    manipulation</b>, and <b>terminal-based utility development</b>.</p>`,
    stack: "Linux • C • GCC",
    repoUrl: "https://github.com/dalpendre/SO.proj2_freqCounter_2019-2020.2191747",
    imgSrc: "/img/work_in_progress.jpg",
    imgAlt: "",
    year: "2020"
  },
]
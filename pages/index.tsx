import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Avatar, Chip, Divider } from '@mui/material';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mobileCheck = () => {
        setIsMobile(window.innerWidth < 700);
      };
      window.addEventListener('resize', mobileCheck )
      return () => {
        window.removeEventListener('resize', mobileCheck);
      }
    }
   }, []);

  const CLIENTS = {
    OESCA: 'OESCA',
    NETJETS: 'NetJets',
    SIGNET: 'Signet',
    VS: 'Victoria\'s Secret',
    GAP: 'GAP',
    CAS: 'CAS',
  };

  const USER_INSTRUCTION_SKILLS_SECTION = `Select a skill ${isMobile? 'below' : 'above'} for a synopsis of my experience and relevant client list.`;

  const [SKILLS, setSKILLS] = useState([
    'JavaScript',
    'Java',
    'Angular',
    'ReactJS',
    'React-Native',
    'CSS3',
    'HTML5',
    'Kafka',
    'Prometheus',
    'JUnit',
    'Jest',
    'Jasmine',
    'JWT',
    'Git',
    'Ruby',
    'Spark',
    'MongoDB',
    'Jenkins',
    'Adobe Analytics',
    'Google Analytics (GA4)',
    //AWS, MapR, ElasticSearch, Docker, SonarQube, Protractor, etc... TODO: look at adding more skills or honorable mentions in the future?
  ].map((skill) => {
    return {
      label: skill,
      active: false,
    };
  }));

  const MetaData = [
    {
      description: 'JavaScript is the language I am most intimate with.  I have been working with it for over 10 years now and consider myself an expert.  Not a week goes by that I am not working with JavaScript for an extensive period of time.  I have directly mentored many others in this language, as well as leading teams and architecting JavaScript based projects.',
      clients: [CLIENTS.OESCA, CLIENTS.NETJETS, CLIENTS.SIGNET, CLIENTS.GAP, CLIENTS.CAS],
    },
    {
      description: 'Java is the backend language I am most familiar with.  I have on and off developed with Java over the last 10 years.  I have worked with many monolithic Java projects as well as building out individual microservices.',
      clients: [CLIENTS.SIGNET, CLIENTS.VS, CLIENTS.GAP],
    },
    {
      description: 'Angular, being on of the most popular front-end frameworks, has been a staple in my career as well.  I have worked on numerous projects with large angular front-ends. I have worked on Angular projects since AngularJS and as recently as Angular 11.',
      clients: [CLIENTS.SIGNET, CLIENTS.CAS],
    },
    {
      description: 'ReactJS is by far and large my favorite front-end framework to work with.  I have been working with it for the last 5-6 years and use it for both professional and personal projects.  I have led teams on and architected many react projects from inception to production.',
      clients: [CLIENTS.OESCA, CLIENTS.NETJETS, CLIENTS.GAP],
    },
    {
      description: 'React-Native is one of the more prominent frameworks for mobile development.  I have used it for both personal and professional projects.  In fact, I am currently building one of my own apps with it.  I have about 3 years of experience directly with it, but my ReactJS experience adds to that quite a bit because of how similar they are.',
      clients: [CLIENTS.NETJETS],
    },
    {
      description: 'CSS3 is a necessity for web development.  I have been using it to style web UIs since 2009 and have used it pretty consistently for the last 15 years.',
      clients: [CLIENTS.OESCA, CLIENTS.NETJETS, CLIENTS.SIGNET, CLIENTS.GAP, CLIENTS.CAS],
    },
    {
      description: 'HTML5 is a necessity for any web developer. I started using HTML5 as far back as 2009 and have used it pretty consistently for the last 15 years.',
      clients: [CLIENTS.OESCA, CLIENTS.NETJETS, CLIENTS.SIGNET, CLIENTS.GAP, CLIENTS.CAS],
    },
    {
      description: 'Kafka has been a big ask across my projects.  I have worked with and implemented it in a few different professional projects over the years.',
      clients: [CLIENTS.VS, CLIENTS.GAP, CLIENTS.CAS],
    },
    {
      description: 'Prometheus is a great monitoring tool.  I implemented it across a project and was even able to find and diagnose a memory leak using it.',
      clients: [CLIENTS.VS],
    },
    {
      description: 'JUnit has been a testing staple whenever I have been using Java.  I have used it as needed over the last 10 years.',
      clients: [CLIENTS.VS, CLIENTS.GAP],
    },
    {
      description: 'Jest has been my preferred testing language with all of my React development. I have been using Jest for around 5-6 years  My Jest skills are bolstered by my Jasmine experience as well.',
      clients: [CLIENTS.NETJETS, CLIENTS.GAP],
    },
    {
      description: 'Jasmine has been my go-to unit testing for most of my JavaScript development.  I have been using Jasmine for around 10 years.',
      clients: [CLIENTS.NETJETS, CLIENTS.SIGNET, CLIENTS.CAS],
    },
    {
      description: 'JWT is a proposed standard for representing claims that are to be transferred between parties.  I fully support JWT and have used it for both personal and professional projects. ',
      clients: [CLIENTS.SIGNET],
    },
    {
      description: 'GIT has been THE go-to technology for version control for as long as I have been developing.  I have used it consistently for over 10 years.  I have led presentations and small courses for my peers to get them familiar with and improve their skills with it.',
      clients: [CLIENTS.OESCA, CLIENTS.NETJETS, CLIENTS.SIGNET, CLIENTS.VS, CLIENTS.GAP, CLIENTS.CAS],
    },
    {
      description: 'Ruby was the first language I worked with professionally.  I used it for ~3 years and developed 5 test-automation suites for multiple Clients.',
      clients: [CLIENTS.CAS, CLIENTS.GAP],
    },
    {
      description: 'Spark is an engine used for large data processing.  I developed Spark jobs while working on a big-data project and worked with it for ~2 years.',
      clients: [CLIENTS.VS],
    },
    {
      description: 'MongoDB is a NoSQL database that uses document-oriented storage.  MongoDB was used heavily on a couple of Projects I worked on over a couple of years.',
      clients: [CLIENTS.GAP],
    },
    {
      description: 'Jenkins has been the go-to CI/CD software for the majority of my projects.  I have used Jenkins on and off for over 10 years.',
      clients: [CLIENTS.NETJETS, CLIENTS.VS, CLIENTS.CAS],
    },
    {
      description: 'Adobe Analytics is a part of Adobe\'s Experience Cloud.  It\'s useful for collecting and (as the name suggests) analyzing data.  I have planned, integrated, executed and administered Adobe Analytics across a large technological solution.  I have also lead others in the implementation of this technology.',
      clients: [CLIENTS.NETJETS],
    },
    {
      description: 'Google Analytics (GA4) is Google\'s offering for Data Analysis.  I have planned, integrated, executed and administered GA4 across a large technological solution.  I have also provided insights and leadership to others on this technology.',
      clients: [CLIENTS.OESCA],
    },
    // {
    //   description: '',
    //   clients: [],
    // },
    //TODO: add quick instruction when no skill selected.
    //TODO: update tag line to look nicer.
  ];
  const [activeSkill, setActiveSkill] = useState('');
  const [activeSkillIndex, setActiveSkillIndex] = useState(-1);


  const toggleActiveSkill = (skill: any, index: number) => {
    if (activeSkill.length > 0) {
      SKILLS[activeSkillIndex].active = false;
    }
    if (activeSkillIndex !== index) {
      SKILLS[index].active = true;
      setActiveSkill(skill.label);
      setActiveSkillIndex(index);
    } else {
      setActiveSkill('');
      setActiveSkillIndex(-1);
    }
    setSKILLS([...SKILLS]);
  }

  const isActiveClient = (client: string) => {
    if (activeSkillIndex > -1) {
      return MetaData[activeSkillIndex].clients.includes(client);
    }
    return false;
  }

  return (
    <>
      <Head>
        <title>Bradley Maynard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.head}>
          <div className={styles.headTop}>
            <Avatar className={styles.avatar} alt="Brad Maynard" src="profile.jpg" />
            <div className={styles.info}>
              <p>Bradley Maynard</p>
              <p>Senior Software Engineer</p>
            </div>
          </div>
          <p className={styles.statement}><b>A</b>lleviate ambiguity ~ <b>C</b>ode competently ~ <b>T</b>est thoroughly</p>
        </div>
        <div className={styles.body}>
          <div className={styles.mainContent}>
            <p className={styles.summary}>
              I have worked in a plethora of software engineering roles throughout my career (tech lead, senior full stack engineer, test-automation engineer).
              As a consultant, I always find myself assimilating into a new project, team, industry, or tech stack.
              I always enjoy seeing what bits of knowledge, methodologies, and practices I can swap with my fellow experts.
            </p>

            <Divider className={styles.divider}>
              <Chip className={styles.dividerChip} label="SKILLS"/>
            </Divider>
            <div className={styles.skillsSection}>
              <div className={styles.skills}>
                {SKILLS.map((skill, index) => {
                  return (<Chip onClick={() => toggleActiveSkill(skill, index)} className={`${styles.skill} ` + (skill.active? styles.active : styles.inactive)} key={index} label={skill.label}/>);
                })}
              </div>
              {/* Add a more button with a brief description of why all skills aren't listed */}
              <p className={styles.summary}>
                {activeSkillIndex >= 0 && MetaData[activeSkillIndex].description}
                {activeSkillIndex < 0 && <span className={styles.instruction}>{USER_INSTRUCTION_SKILLS_SECTION}</span>}
              </p>
            </div>
            <Divider className={styles.divider}>
              <Chip className={styles.dividerChip} label="EDUCATION"/>
            </Divider>
            <p className={styles.summary}>
              I graduated <b>Summa Cum Laude</b> from DeVry University in Columbus, OH and received my <b>Bachelor of Science in Computer Information Systems</b>. Before that, I studied and lived overseas for a period and received my High school diploma from the International School of Hyderabad.
            </p>
          </div>
          <div className={styles.sideContent}>
            <h1 className={styles.clientHeader}>Code in Production For</h1>
            <div className={styles.clientList}>
              <p className={isActiveClient(CLIENTS.OESCA) ? styles.activeClientName : styles.clientName}>OESCA</p>
              <p className={isActiveClient(CLIENTS.NETJETS) ? styles.activeClientName : styles.clientName}>NetJets</p>
              <p className={isActiveClient(CLIENTS.SIGNET) ? styles.activeClientName : styles.clientName}>Signet</p>
              <p className={isActiveClient(CLIENTS.VS) ? styles.activeClientName : styles.clientName}>{'Victoria\'s Secret'}</p>
              <p className={isActiveClient(CLIENTS.GAP) ? styles.activeClientName : styles.clientName}>GAP</p>
              <p className={isActiveClient(CLIENTS.CAS) ? styles.activeClientName : styles.clientName}>CAS</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

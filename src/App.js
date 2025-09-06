import React from 'react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faScroll,
  faBookOpen,
  faUserDoctor,
  faChalkboardTeacher,
  faMicroscope,
  faVials,
  faMosque,
  faBrain,
  faQuestion,
  faBolt,
  faMap,
  faBolt,
  faProjectDiagram,
  faUserInjured,
  faLayerGroup,
  faNetworkWired,
  faBalanceScale,
  faWaveSquare,
  faHandshakeAngle,
  faFlask,
  faCalculator,
  faSignal,
  faUniversity,
  faEye,
  faRobot,
  faBrainCircuit,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

// function to generate icon objects
const generateIcon = (icon) => ({
  icon: <FontAwesomeIcon icon={icon} />,
  iconStyle: {
    background: 'var(--cream)',
    color: 'var(--brown)',
    border: '3px solid var(--brown)',
  },
});

function App() {
  const timeline = [
    {
      date: '~3000 BCE – Ancient Egypt',
      title: 'Ancient Egypt',
      desc: 'Imagine standing in ancient Egypt. Priests prepare a royal body for the afterlife. They slide a hooked rod up through the nose, pull out the brain, and toss it aside. To them, it is useless — the heart is the true center of thought, life, and the soul.',
      icon: generateIcon(faScroll),
      img: '/images/Egypt.png',
    },
    {
      date: '~2500 BCE – Edwin Smith Papyrus (copied ~1700 BCE)',
      title: 'Edwin Smith Papyrus',
      desc: 'Amid this dismissal of the brain, Egyptian scribes record remarkable observations. The Edwin Smith Papyrus describes skull fractures, brain injuries, and paralysis on the side opposite a head wound. Though mystical beliefs overshadowed anatomy, these early doctors glimpsed the connection between brain and behavior.',
      icon: generateIcon(faBookOpen),
      img: '/images/Papyrus.png',
    },
    {
      date: '460–370 BCE',
      title: 'Hippocrates (Greece)',
      desc: 'Hippocrates, the “Father of Medicine,” breaks tradition. He claims the brain is the seat of intelligence and sensation, while the heart is just a pump.',
      icon: generateIcon(faUserDoctor),
      img: '/images/Hippocrates.jpg',
    },
    {
      date: '384–322 BCE',
      title: 'Aristotle (Greece)',
      desc: 'Aristotle disagrees. To him, the heart rules the mind, and the brain’s job is simply to cool the blood.',
      icon: generateIcon(faChalkboardTeacher),
      img: '/images/placeholder.png',
    },
    {
      date: '~335–280 BCE',
      title: 'Herophilus (Alexandria)',
      desc: 'Herophilus begins human dissections, identifying sensory vs motor nerves. The first secrets of the nervous system are revealed under his careful scalpel.',
      icon: generateIcon(faMicroscope),
      img: '/images/placeholder.png',
    },
    {
      date: '129–200 CE',
      title: 'Galen (Rome)',
      desc: 'Galen tends wounded gladiators and observes how injuries affect movement and sensation. He develops the ventricular theory, imagining invisible “animal spirits” flowing through the brain’s hollow spaces to power thought and action. His ideas dominate medicine for over a millennium.',
      icon: generateIcon(faVials),
      img: '/images/placeholder.png',
    },
    {
      date: '500–1400 CE',
      title: 'Middle Ages',
      desc: 'With the fall of the Roman Empire, Europe enters centuries of silence. Libraries shrink, human dissection is forbidden, and the brain is studied mainly through philosophy and religion. Yet, knowledge travels east. During the Islamic Golden Age, scholars translate works of Hippocrates and Galen into Arabic, preserving and expanding their knowledge. The torch of neuroscience flickers, waiting for the Renaissance.',
      icon: generateIcon(faMosque),
      img: '/images/placeholder.png',
    },
    {
      date: '1543',
      title: 'Andreas Vesalius',
      desc: 'Step into a candlelit anatomy theater. Crowds gather as Vesalius dissects a human body. He exposes the brain, daring to correct Galen’s errors. His masterpiece *De Humani Corporis Fabrica* redraws the human body, revealing the corpus callosum and other hidden structures with breathtaking accuracy.',
      icon: generateIcon(faBrain),
      img: '/images/placeholder.png',
    },
    {
      date: '1596–1650',
      title: 'René Descartes',
      desc: 'At his desk, Descartes sketches nerves like tiny pipes carrying fluid. He proposes dualism, suggesting the pineal gland connects mind and body. His vision is bold, flawed, and transformative.',
      icon: generateIcon(faQuestion),
      img: '/images/placeholder.png',
    },
    {
      date: '1637–1680',
      title: 'Jan Swammerdam',
      desc: 'Swammerdam proves that nerves move muscles through signals, not air or fluid, demolishing the old “balloonist” theory.',
      icon: generateIcon(faBolt),
      img: '/images/placeholder.png',
    },
    {
      date: '1621–1675',
      title: 'Thomas Willis',
      desc: 'Willis maps the cerebral hemispheres, brainstem, cerebellum, and names the Circle of Willis. He treats neurological disorders scientifically. Neuroscience, at last, begins to emerge as a medical discipline.',
      icon: generateIcon(faMap),
      img: '/images/placeholder.png',
    },
    // Modern Period (1700s – 1899)
    {
      date: '1780s',
      title: 'Luigi Galvani (Italy)',
      desc: 'A spark touches a frog’s leg — it twitches. Galvani declares nerves carry “animal electricity.” Bioelectricity is born.',
      icon: generateIcon(faBolt),
      img: '/images/placeholder.png',
    },
    {
      date: '1811',
      title: 'Julien Jean César Legallois (France)',
      desc: 'Destroying the medulla oblongata halts breathing instantly. A vital function is tied to a specific brain region for the first time.',
      icon: generateIcon(faBrain),
      img: '/images/placeholder.png',
    },
    {
      date: '1820s–1830s',
      title: 'Charles Bell & François Magendie',
      desc: 'The Bell–Magendie Law emerges: ventral roots = motor, dorsal roots = sensory.',
      icon: generateIcon(faWaveSquare),
      img: '/images/placeholder.png',
    },
    {
      date: '1821–1894',
      title: 'Hermann von Helmholtz (Germany)',
      desc: 'Helmholtz measures nerve impulse speed: 24–38 m/s, proving thoughts have measurable velocity.',
      icon: generateIcon(faSignal),
      img: '/images/placeholder.png',
    },
    {
      date: '1848',
      title: 'Phineas Gage (USA)',
      desc: 'A railroad accident leaves Gage’s frontal lobe damaged, altering his personality. The link between brain and behavior becomes undeniable.',
      icon: generateIcon(faUserInjured),
      img: '/images/placeholder.png',
    },
    {
      date: '1824–1880',
      title: 'Paul Broca (France)',
      desc: 'Broca studies a man who understands language but cannot speak. Post-mortem, he finds a lesion in the left frontal lobe: Broca’s area.',
      icon: generateIcon(faChalkboardTeacher),
      img: '/images/placeholder.png',
    },
    {
      date: '1848–1905',
      title: 'Carl Wernicke (Germany)',
      desc: 'Wernicke identifies the brain region responsible for language comprehension, complementing Broca’s discovery.',
      icon: generateIcon(faBookOpen),
      img: '/images/placeholder.png',
    },
    {
      date: '1868–1918',
      title: 'Korbinian Brodmann (Germany)',
      desc: 'Brodmann divides the cortex into 52 areas, mapping the brain’s architecture in a system still used today.',
      icon: generateIcon(faLayerGroup),
      img: '/images/placeholder.png',
    },

    // Turn of the Century (1900–1915)
    {
      date: '1843–1926',
      title: 'Camillo Golgi (Italy)',
      desc: 'Golgi invents the silver stain, illuminating neurons like lightning bolts. He believes the brain is a continuous web.',
      icon: generateIcon(faBolt),
      img: '/images/placeholder.png',
    },
    {
      date: '1852–1934',
      title: 'Santiago Ramón y Cajal (Spain)',
      desc: 'Using Golgi’s stain, Cajal proves the Neuron Doctrine: the brain is made of discrete neurons. Modern neuroscience is born.',
      icon: generateIcon(faBrainCircuit),
      img: '/images/placeholder.png',
    },
    {
      date: '1852–1925',
      title: 'John Newport Langley (UK)',
      desc: 'Langley explores the autonomic nervous system, laying the groundwork for understanding neurotransmitters.',
      icon: generateIcon(faNetworkWired),
      img: '/images/placeholder.png',
    },
    {
      date: '1876–1936',
      title: 'Robert Bárány (Austria-Hungary)',
      desc: 'Bárány studies the vestibular system, winning the 1914 Nobel Prize for elucidating balance and motion perception.',
      icon: generateIcon(faBalanceScale),
      img: '/images/placeholder.png',
    },

    // Early 20th Century (1900–1939)
    {
      date: '1902',
      title: 'Julius Bernstein (Germany)',
      desc: 'Bernstein proposes a daring idea: nerve impulses are driven by ions moving across membranes. A radical step toward understanding brain electrical activity.',
      icon: generateIcon(faBolt),
      img: '/images/placeholder.png',
    },
    {
      date: '1912–1939',
      title: 'Kenneth Cole & Howard Curtis (USA)',
      desc: 'Using the giant squid axon, Cole and Curtis confirm Bernstein’s hypothesis. The first glimpses of action potentials are captured in the lab.',
      icon: generateIcon(faSignal),
      img: '/images/placeholder.png',
    },
    {
      date: '1932',
      title: 'Charles Scott Sherrington (UK)',
      desc: 'Sherrington wins the Nobel Prize for defining the synapse and motor units, showing how muscles and nerves communicate.',
      icon: generateIcon(faHandshakeAngle),
      img: '/images/placeholder.png',
    },
    {
      date: '1936',
      title: 'Henry Hallett Dale & Otto Loewi',
      desc: 'They identify acetylcholine as a chemical messenger, proving the brain sends signals not just electrically, but chemically.',
      icon: generateIcon(faFlask),
      img: '/images/placeholder.png',
    },
    {
      date: '1939',
      title: 'Kenneth Cole (USA)',
      desc: 'Cole develops the voltage clamp technique, allowing scientists to measure action potentials with unprecedented precision.',
      icon: generateIcon(faCalculator),
      img: '/images/placeholder.png',
    },

    // Mid-20th Century (1940–1966)
    {
      date: '1943',
      title: 'David E. Goldman (USA)',
      desc: 'Goldman develops the Goldman equation, calculating how ions create the membrane potential, a fundamental principle of neurophysiology.',
      icon: generateIcon(faWaveSquare),
      img: '/images/placeholder.png',
    },
    {
      date: '1952–1962',
      title: 'Bernard Katz (UK)',
      desc: 'Katz studies synaptic transmission, explaining how neurons communicate across the tiny gaps that separate them.',
      icon: generateIcon(faNetworkWired),
      img: '/images/placeholder.png',
    },
    {
      date: '1962',
      title: 'Francis O. Schmitt (MIT, USA)',
      desc: 'Schmitt coins the term “neuroscience” and establishes a formal program to study the brain in an interdisciplinary way.',
      icon: generateIcon(faUniversity),
      img: '/images/placeholder.png',
    },
    {
      date: '1964',
      title: 'James L. McGaugh (UC Irvine, USA)',
      desc: 'McGaugh founds the first program in psychobiology, linking memory and brain function.',
      icon: generateIcon(faBrain),
      img: '/images/placeholder.png',
    },
    {
      date: '1966',
      title: 'Stephen Kuffler (Harvard, USA)',
      desc: 'Kuffler establishes the Department of Neurobiology, training a new generation of neuroscientists.',
      icon: generateIcon(faChalkboardTeacher),
      img: '/images/placeholder.png',
    },

    // Late 20th Century (1966–1999)
    {
      date: '1960s–1970s',
      title: 'Brain Imaging Revolution',
      desc: 'With EEG, CT, and MRI, scientists can now observe the living brain in action. The mind can be visualized.',
      icon: generateIcon(faEye),
      img: '/images/placeholder.png',
    },
    {
      date: '1970s',
      title: 'David Hubel & Torsten Wiesel (USA)',
      desc: 'They map the visual cortex, discovering how neurons respond to edges, motion, and orientation.',
      icon: generateIcon(faEye),
      img: '/images/placeholder.png',
    },
    {
      date: '1980s',
      title: 'Eric Kandel (USA)',
      desc: 'Kandel studies memory in sea slugs, demonstrating that learning alters synaptic strength.',
      icon: generateIcon(faBrainCircuit),
      img: '/images/placeholder.png',
    },
    {
      date: '1990s',
      title: 'Human Genome & Neuroinformatics',
      desc: 'Decoding the human genome links genes to brain function. Neuroinformatics emerges, mapping brain connectivity.',
      icon: generateIcon(faProjectDiagram),
      img: '/images/placeholder.png',
    },

    // 21st Century (2000 – Present)
    {
      date: '2000s',
      title: 'Brain Mapping & Connectomics',
      desc: 'Techniques like fMRI, DTI, and optogenetics allow scientists to map neural circuits with incredible precision.',
      icon: generateIcon(faMap),
      img: '/images/placeholder.png',
    },
    {
      date: '2010s',
      title: 'Artificial Intelligence & Neuroscience',
      desc: 'AI models simulate aspects of brain function, aiding in understanding memory, vision, and learning.',
      icon: generateIcon(faRobot),
      img: '/images/placeholder.png',
    },
    {
      date: '2020s',
      title: 'Multi-modal Neuroscience',
      desc: 'Integration of genetics, imaging, behavior, and AI enables personalized brain science and predictive interventions.',
      icon: generateIcon(faBrain),
      img: '/images/placeholder.png',
    },
  ];

  const endMarker = {
    ...generateIcon(faStar),
    isLast: true,
    date: '',
  };

  return (
    <div className="App">
      <VerticalTimeline className="custom-timeline">
        {timeline.map((t, i) => (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'var(--cream)',
              color: 'var(--brown)',
              overflow: 'visible',
            }}
            contentArrowStyle={{ borderRight: '10px solid var(--cream)' }}
            date={t.date}
            {...t.icon}
          >
            <h3>{t.title}</h3>
            {t.desc && <p>{t.desc}</p>}
            {t.img && (
              <img
                src={t.img}
                alt={t.title}
                style={{
                  width: '100%',
                  marginTop: '10px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  maxHeight: '250px',
                }}
              />
            )}
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement {...endMarker} />
      </VerticalTimeline>
    </div>
  );
}

export default App;

import ackbar from '../imgs/Ackbar.webp';
import bobbaFett from '../imgs/Bobba Fett.jpg';
import C3PO from '../imgs/C3PO.jpg';
import chewbacca from '../imgs/Chewbacca.jpg';
import vader from '../imgs/Darth Vader.jpeg';
import han from '../imgs/Han Solo.jpg';
import lando from '../imgs/Lando Calrissian.webp';
import leia from '../imgs/Leia Organa.jpg';
import luke from '../imgs/lukeSkywalker.jpg';
import kenobi from '../imgs/Obi-Wan Kenobi.webp';
import palpatine from '../imgs/Palpatine.jpg';
import R2D2 from '../imgs/R2-D2.jpg';
import { v4 as uuidv4 } from 'uuid';

const cardData = [
  {
    name: 'Admiral Ackbar',
    src: ackbar,
    id: uuidv4(),
    clicked: false,
  },
  {
    name: 'Bobba Fett',
    src: bobbaFett,
    id: uuidv4(),
    clicked: false,
  },
  {
    name: 'C3PO',
    src: C3PO,
    id: uuidv4(),
    clicked: false,
  },
  {
    name: 'Chewbacca',
    src: chewbacca,
    id: uuidv4(),
    clicked: false,
  },
  {
    name: 'Darth Vader',
    src: vader,
    id: uuidv4(),
    clicked: false,
  },
  {
    name: 'Han Solo',
    src: han,
    id: uuidv4(),
    clicked: false,
  },
  {
    name: 'Lando Calrissian',
    src: lando,
    id: uuidv4(),
    clicked: false,
  },
  {
    name: 'Leia Organa',
    src: leia,
    id: uuidv4(),
    clicked: false,
  },
  {
    name: 'Luke Skywalker',
    src: luke,
    id: uuidv4(),
    clicked: false,
  },
  {
    name: 'Obi-Wan Kenobi',
    src: kenobi,
    id: uuidv4(),
    clicked: false,
  },
  {
    name: 'Emperor Palpatine',
    src: palpatine,
    id: uuidv4(),
    clicked: false,
  },
  {
    name: 'R2-D2',
    src: R2D2,
    id: uuidv4(),
    clicked: false,
  },
];

export default cardData;

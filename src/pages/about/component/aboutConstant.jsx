import cadio from '../../../assets/images/cardiology.jpg';
import dental from '../../../assets/images/dental.jpg';
import ophth from '../../../assets/images/eye.jpg';
import emerg from '../../../assets/images/emeg.jpg';
import diag from '../../../assets/images/diag1.jpg';
import neuro from '../../../assets/images/neuro.jpg';

export const departments = [
  { name: 'Cardiology', icon: '❤️' },
  { name: 'Neurology', icon: '🧠' },
  { name: 'Diagnostics', icon: '🔬' },
  { name: 'Dental', icon: '🦷' },
  { name: 'Ophthalmology', icon: '👁️' },
  { name: 'Emergency', icon: '🚑' },
];

export const departmentDetails = {
  Cardiology: {
    image: cadio,
    description:
      'Learn about cardiology, heart health, and treatments for cardiovascular conditions.',
    features: [
      'Advanced Cardiac Care',
      'Comprehensive Heart Screening',
      'Expert Cardiologists',
      'Emergency Heart Services',
    ],
  },
  Neurology: {
    image: neuro,
    description:
      'Explore our neurology department, offering care for neurological disorders and treatments.',
    features: [
      'Expert Neurologists',
      'Comprehensive Diagnostics',
      'Specialized Treatment Plans',
      'Patient-Centered Care',
    ],
  },
  Diagnostics: {
    image: diag,
    description:
      'State-of-the-art diagnostic facilities for accurate and timely diagnoses.',
    features: [
      'Advanced Imaging Technology',
      'Accurate Lab Testing',
      'Expert Radiologists',
      'Comprehensive Diagnostics',
    ],
  },
  Dental: {
    image: dental,
    description:
      'Providing comprehensive dental care, from routine check-ups to advanced procedures.',
    features: [
      'Preventive Dental Care',
      'Cosmetic Dentistry',
      'Oral Surgery',
      'Orthodontics and Braces',
    ],
  },
  Ophthalmology: {
    image: ophth,
    description:
      'Eye care services including exams, treatments, and surgeries for various eye conditions.',
    features: [
      'Comprehensive Eye Exams',
      'Cataract Surgery',
      'Laser Eye Surgery',
      'Treatment for Eye Diseases',
    ],
  },
  Emergency: {
    image: emerg,
    description: '24/7 emergency care for all urgent medical conditions.',
    features: [
      'Immediate Response',
      'Critical Care Specialists',
      'Advanced Emergency Equipment',
      'Rapid Diagnosis and Treatment',
    ],
  },
};

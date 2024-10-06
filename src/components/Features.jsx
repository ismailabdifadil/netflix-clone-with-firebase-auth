import featuresData from '../content/features.json';
import Feature from './Feature';
const Features = () => {
  return (
    <div className='container'>
      {featuresData.map((feature) => (
        <Feature key={feature.id} {...feature} />
      ))}
    </div>
  );
};

export default Features;

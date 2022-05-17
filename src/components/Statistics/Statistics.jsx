import PropTypes from 'prop-types';


import './statistics.css';

const Statistics = ( {stats, title} ) => {
    console.log(title);
    const elements = stats.map(item => (
    <li key={item.id} className="item">
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </li>
    ));
    return (
        
    <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
        {elements}
    </ul>
    </section>
    )
}


export default Statistics

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })).isRequired,
  title: PropTypes.string,
};

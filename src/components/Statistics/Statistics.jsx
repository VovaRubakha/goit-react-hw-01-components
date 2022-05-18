import PropTypes from 'prop-types';


import style from './statistics.module.css';

const Statistics = ( {stats, title} ) => {
    const elements = stats.map(({id,label,percentage}) => (
    <li key={id} className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
    ));
    return (
        
      <section className={style.statistics}>
    {title && <h2 className={style.title}>{title}</h2>}

    <ul className={style.statList}>
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

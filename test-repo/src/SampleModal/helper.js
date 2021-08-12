
/**
 * @function rand
 *
 * @description Gives random number between 0 to 20 
 * @returns {Number}
 */
export const rand = (max) => {
  return Math.round(Math.random() * max);
}

/**
 * @function getModalStyle
 *
 * @description Gives random top, left positions 
 * @returns {Object}
 */
export const getModalStyle = () => {
  const max = 20
  const top = 50 + rand(max);
  const left = 50 + rand(max);

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}